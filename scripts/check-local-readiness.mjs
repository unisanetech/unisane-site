import { spawn } from 'node:child_process'
import { createHash } from 'node:crypto'
import { once } from 'node:events'
import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { createServer } from 'node:net'
import { dirname, extname, join, relative, resolve } from 'node:path'
import { performance } from 'node:perf_hooks'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { gzipSync } from 'node:zlib'
import { format as formatWithPrettier } from 'prettier'

const siteRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const webRoot = join(siteRoot, 'apps', 'web')
const appRoot = join(webRoot, 'app')
const publicRoot = join(webRoot, 'public')
const buildRoot = join(webRoot, '.next')
const baselinePath = join(
  siteRoot,
  'docs',
  'reference',
  'generated',
  'site-local-readiness-baseline.json',
)
const writeBaseline = process.argv.includes('--write-baseline')
const excludedDirectories = new Set([
  '.next',
  '.turbo',
  'coverage',
  'node_modules',
])
const failures = []

const fail = (message) => failures.push(message)
const delay = (milliseconds) =>
  new Promise((resolveDelay) => setTimeout(resolveDelay, milliseconds))

const walk = (directory) => {
  if (!existsSync(directory)) return []
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (excludedDirectories.has(entry.name)) return []
    const path = join(directory, entry.name)
    return entry.isDirectory() ? walk(path) : [path]
  })
}

const sha256 = (value) => createHash('sha256').update(value).digest('hex')

const normaliseRoute = (route) => {
  if (route === '/') return route
  return route.replace(/\/+$/, '') || '/'
}

const percentile = (values, percentage) => {
  const sorted = [...values].sort((left, right) => left - right)
  const index = Math.min(
    sorted.length - 1,
    Math.max(0, Math.ceil((percentage / 100) * sorted.length) - 1),
  )
  return Number((sorted[index] ?? 0).toFixed(3))
}

const decodeEntities = (value) =>
  value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#x27;', "'")
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))

const parseAttributes = (source) => {
  const attributes = {}
  const pattern = /\s([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g
  for (const match of source.matchAll(pattern)) {
    attributes[match[1].toLowerCase()] = decodeEntities(
      match[2] ?? match[3] ?? match[4] ?? '',
    )
  }
  return attributes
}

const stripMarkup = (source) =>
  decodeEntities(
    source
      .replace(/<!--.*?-->/gs, ' ')
      .replace(/<(?:script|style)\b[^>]*>.*?<\/(?:script|style)>/gis, ' ')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim()

const findTags = (html, tagName) =>
  [...html.matchAll(new RegExp(`<${tagName}\\b([^>]*)>`, 'gi'))].map((match) =>
    parseAttributes(match[1]),
  )

const findContainerTags = (html, tagName) =>
  [
    ...html.matchAll(
      new RegExp(`<${tagName}\\b([^>]*)>([\\s\\S]*?)<\\/${tagName}>`, 'gi'),
    ),
  ].map((match) => ({
    attributes: parseAttributes(match[1]),
    text: stripMarkup(match[2]),
  }))

const attributeValue = (attributes, name) => attributes[name.toLowerCase()]

const sourceFiles = walk(webRoot).filter((path) =>
  new Set(['.js', '.mjs', '.ts', '.tsx']).has(extname(path)),
)
const pageFiles = walk(appRoot).filter((path) => path.endsWith('page.tsx'))
const routes = pageFiles
  .map((path) => {
    const directory = relative(appRoot, dirname(path)).replaceAll('\\', '/')
    return directory ? `/${directory}` : '/'
  })
  .map(normaliseRoute)
  .sort()
const routeSet = new Set(routes)

const inputFiles = [
  ...walk(webRoot),
  join(siteRoot, 'package.json'),
  join(siteRoot, 'pnpm-workspace.yaml'),
  join(siteRoot, 'turbo.json'),
  join(siteRoot, 'scripts', 'check-local-readiness.mjs'),
]
  .filter(
    (path) =>
      existsSync(path) &&
      !path.endsWith('.tsbuildinfo') &&
      !path.includes(`${join(webRoot, '.next')}/`) &&
      !path.includes(`${join(webRoot, '.turbo')}/`),
  )
  .sort((left, right) =>
    relative(siteRoot, left).localeCompare(relative(siteRoot, right)),
  )
const sourceInputHash = createHash('sha256')
for (const path of inputFiles) {
  sourceInputHash.update(relative(siteRoot, path))
  sourceInputHash.update('\0')
  sourceInputHash.update(readFileSync(path))
  sourceInputHash.update('\0')
}
const sourceInputDigest = sourceInputHash.digest('hex')

const seoConfigSource = readFileSync(
  join(webRoot, 'lib', 'seo', 'config.ts'),
  'utf8',
)
const defaultCanonicalMatch = seoConfigSource.match(/\?\?\s*['"]([^'"]+)['"]/s)
const defaultCanonicalInput = defaultCanonicalMatch?.[1]
if (!defaultCanonicalInput) {
  fail(
    'SEO canonical fallback cannot be resolved from apps/web/lib/seo/config.ts',
  )
}
const canonicalInputValue = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  defaultCanonicalInput ??
  'http://invalid.local'
).replace(/\/+$/, '')
let canonicalOrigin
try {
  canonicalOrigin = new URL(canonicalInputValue).origin
} catch {
  fail(`SEO canonical input is not an absolute URL: ${canonicalInputValue}`)
  canonicalOrigin = 'http://invalid.local'
}

const routeHtml = new Map()
for (const route of routes) {
  const file =
    route === '/'
      ? join(buildRoot, 'server', 'app', 'index.html')
      : join(buildRoot, 'server', 'app', `${route.slice(1)}.html`)
  if (!existsSync(file)) {
    fail(
      `built route HTML is missing for ${route}: ${relative(siteRoot, file)}`,
    )
    continue
  }
  routeHtml.set(route, readFileSync(file, 'utf8'))
}

const frameworkErrorSurfaces = {
  customNotFoundSource: existsSync(join(appRoot, 'not-found.tsx')),
  customErrorSource: existsSync(join(appRoot, 'error.tsx')),
  customGlobalErrorSource: existsSync(join(appRoot, 'global-error.tsx')),
  builtFrameworkNotFound: existsSync(
    join(buildRoot, 'server', 'app', '_not-found.html'),
  ),
  builtFrameworkGlobalError: existsSync(
    join(buildRoot, 'server', 'app', '_global-error.html'),
  ),
}
if (!frameworkErrorSurfaces.builtFrameworkNotFound) {
  fail('Next.js framework not-found artifact is missing')
}
if (!frameworkErrorSurfaces.builtFrameworkGlobalError) {
  fail('Next.js framework global-error artifact is missing')
}

const routeAnalyses = []
const routeIds = new Map()
const routeLinks = new Map()

for (const route of routes) {
  const html = routeHtml.get(route)
  if (!html) continue
  const htmlTags = findTags(html, 'html')
  const mainTags = findContainerTags(html, 'main')
  const navTags = findContainerTags(html, 'nav')
  const imageTags = findTags(html, 'img')
  const buttonTags = findContainerTags(html, 'button')
  const anchorTags = findContainerTags(html, 'a')
  const headingMatches = [
    ...html.matchAll(/<h([1-6])\b([^>]*)>([\s\S]*?)<\/h\1>/gi),
  ]
  const headingLevels = headingMatches.map((match) => Number(match[1]))
  const ids = findTags(html, '[a-z][a-z0-9:-]*')
    .map((attributes) => attributeValue(attributes, 'id'))
    .filter(Boolean)
  const idSet = new Set(ids)
  routeIds.set(route, idSet)

  if (htmlTags.length !== 1 || attributeValue(htmlTags[0], 'lang') !== 'en') {
    fail(`${route}: expected one html element with lang="en"`)
  }
  if (mainTags.length !== 1)
    fail(`${route}: expected exactly one main landmark`)
  if (headingLevels.filter((level) => level === 1).length !== 1) {
    fail(`${route}: expected exactly one h1`)
  }
  for (let index = 1; index < headingLevels.length; index += 1) {
    if (headingLevels[index] > headingLevels[index - 1] + 1) {
      fail(
        `${route}: heading level skips from h${headingLevels[index - 1]} to h${headingLevels[index]}`,
      )
    }
  }
  if (ids.length !== idSet.size) fail(`${route}: duplicate HTML id exists`)

  for (const navigation of navTags) {
    const label =
      attributeValue(navigation.attributes, 'aria-label') ||
      attributeValue(navigation.attributes, 'aria-labelledby')
    if (!label) fail(`${route}: nav landmark has no accessible name`)
  }
  for (const image of imageTags) {
    if (!Object.hasOwn(image, 'alt'))
      fail(`${route}: image has no alt attribute`)
  }
  for (const button of buttonTags) {
    const name = attributeValue(button.attributes, 'aria-label') || button.text
    if (!name) fail(`${route}: button has no accessible name`)
  }
  for (const anchor of anchorTags) {
    const href = attributeValue(anchor.attributes, 'href')
    const name = attributeValue(anchor.attributes, 'aria-label') || anchor.text
    if (href && !name) fail(`${route}: link ${href} has no accessible name`)
    if (attributeValue(anchor.attributes, 'target') === '_blank') {
      const rel = attributeValue(anchor.attributes, 'rel') ?? ''
      if (!/(?:^|\s)(?:noopener|noreferrer)(?:\s|$)/.test(rel)) {
        fail(`${route}: external target ${href} lacks noopener/noreferrer`)
      }
    }
  }

  for (const attributes of findTags(html, '[a-z][a-z0-9:-]*')) {
    for (const relationship of ['aria-controls', 'aria-labelledby']) {
      const references = (attributeValue(attributes, relationship) ?? '')
        .split(/\s+/)
        .filter(Boolean)
      for (const reference of references) {
        if (
          relationship === 'aria-controls' &&
          attributeValue(attributes, 'role') === 'tab' &&
          attributeValue(attributes, 'aria-selected') !== 'true'
        ) {
          continue
        }
        if (!idSet.has(reference)) {
          fail(`${route}: ${relationship} references missing id ${reference}`)
        }
      }
    }
  }

  const title = stripMarkup(
    html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '',
  )
  const metaTags = findTags(html, 'meta')
  const linkTags = findTags(html, 'link')
  const findMeta = (attributeName, value) =>
    metaTags.find(
      (attributes) =>
        attributeValue(attributes, attributeName)?.toLowerCase() ===
        value.toLowerCase(),
    )
  const description = attributeValue(
    findMeta('name', 'description') ?? {},
    'content',
  )
  const robots = attributeValue(findMeta('name', 'robots') ?? {}, 'content')
  const openGraphTitle = attributeValue(
    findMeta('property', 'og:title') ?? {},
    'content',
  )
  const openGraphDescription = attributeValue(
    findMeta('property', 'og:description') ?? {},
    'content',
  )
  const openGraphUrl = attributeValue(
    findMeta('property', 'og:url') ?? {},
    'content',
  )
  const twitterCard = attributeValue(
    findMeta('name', 'twitter:card') ?? {},
    'content',
  )
  const canonical = attributeValue(
    linkTags.find((attributes) =>
      (attributeValue(attributes, 'rel') ?? '')
        .split(/\s+/)
        .includes('canonical'),
    ) ?? {},
    'href',
  )
  const expectedCanonical =
    route === '/' ? canonicalOrigin : new URL(route, canonicalOrigin).toString()
  if (!title) fail(`${route}: title metadata is missing`)
  if (!description) fail(`${route}: description metadata is missing`)
  if (!robots || !robots.includes('index') || !robots.includes('follow')) {
    fail(`${route}: robots metadata does not declare index and follow`)
  }
  if (!openGraphTitle || !openGraphDescription || !openGraphUrl) {
    fail(`${route}: required Open Graph metadata is incomplete`)
  }
  if (!twitterCard) fail(`${route}: Twitter card metadata is missing`)
  if (canonical !== expectedCanonical) {
    fail(
      `${route}: canonical ${canonical ?? '<missing>'} does not match ${expectedCanonical}`,
    )
  }
  if (openGraphUrl !== expectedCanonical) {
    fail(
      `${route}: og:url ${openGraphUrl ?? '<missing>'} does not match ${expectedCanonical}`,
    )
  }

  for (const [attributeName, attributeValueName] of [
    ['property', 'og:image'],
    ['name', 'twitter:image'],
  ]) {
    for (const metadata of metaTags.filter(
      (attributes) =>
        attributeValue(attributes, attributeName) === attributeValueName,
    )) {
      const rawTarget = attributeValue(metadata, 'content')
      if (!rawTarget) continue
      const target = new URL(rawTarget, canonicalOrigin)
      if (target.pathname.startsWith('/images/')) {
        const publicTarget = join(publicRoot, target.pathname.slice(1))
        if (!existsSync(publicTarget)) {
          fail(`${route}: SEO image target does not exist: ${target.pathname}`)
        }
      }
    }
  }

  const links = anchorTags
    .map((anchor) => attributeValue(anchor.attributes, 'href'))
    .filter(Boolean)
  routeLinks.set(route, links)
  routeAnalyses.push({
    route,
    title,
    descriptionBytes: Buffer.byteLength(description ?? ''),
    canonical,
    robots,
    headingLevels,
    mainCount: mainTags.length,
    navLabels: navTags.map(
      (navigation) =>
        attributeValue(navigation.attributes, 'aria-label') ??
        attributeValue(navigation.attributes, 'aria-labelledby'),
    ),
    imageCount: imageTags.length,
    buttonCount: buttonTags.length,
    linkCount: anchorTags.length,
  })
}

const adjacency = new Map(routes.map((route) => [route, new Set()]))
const fragmentTargets = []
for (const [sourceRoute, links] of routeLinks) {
  for (const rawLink of links) {
    let target
    try {
      target = new URL(rawLink, `http://site.local${sourceRoute}`)
    } catch {
      fail(`${sourceRoute}: invalid link target ${rawLink}`)
      continue
    }
    if (target.origin !== 'http://site.local') continue
    const targetRoute = normaliseRoute(target.pathname)
    if (!routeSet.has(targetRoute)) {
      fail(`${sourceRoute}: internal route target does not exist: ${rawLink}`)
      continue
    }
    adjacency.get(sourceRoute)?.add(targetRoute)
    if (target.hash) {
      const fragment = decodeURIComponent(target.hash.slice(1))
      if (!routeIds.get(targetRoute)?.has(fragment)) {
        fail(
          `${sourceRoute}: internal fragment target does not exist: ${rawLink}`,
        )
      }
      fragmentTargets.push({ sourceRoute, targetRoute, fragment })
    }
  }
}

const findJourney = (start, goal) => {
  const queue = [[start]]
  const visited = new Set([start])
  while (queue.length > 0) {
    const path = queue.shift()
    const current = path.at(-1)
    if (current === goal) return path
    for (const next of adjacency.get(current) ?? []) {
      if (visited.has(next)) continue
      visited.add(next)
      queue.push([...path, next])
    }
  }
  return undefined
}

const visitorJourneys = []
for (const route of routes) {
  const fromHome = findJourney('/', route)
  const toHome = findJourney(route, '/')
  if (!fromHome) fail(`no retained navigation journey reaches ${route} from /`)
  if (!toHome) fail(`no retained navigation journey returns from ${route} to /`)
  visitorJourneys.push({ route, fromHome, toHome })
}

const imageDimensions = (buffer, extension) => {
  if (
    extension === '.png' &&
    buffer.length >= 24 &&
    buffer.subarray(0, 8).toString('hex') === '89504e470d0a1a0a'
  ) {
    return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) }
  }
  if (
    extension === '.ico' &&
    buffer.length >= 22 &&
    buffer.readUInt16LE(0) === 0 &&
    buffer.readUInt16LE(2) === 1
  ) {
    return {
      width: buffer[6] === 0 ? 256 : buffer[6],
      height: buffer[7] === 0 ? 256 : buffer[7],
    }
  }
  return { width: null, height: null }
}

const imageFiles = walk(publicRoot)
  .filter((path) =>
    new Set(['.ico', '.jpeg', '.jpg', '.png', '.webp']).has(extname(path)),
  )
  .sort((left, right) =>
    relative(publicRoot, left).localeCompare(relative(publicRoot, right)),
  )
const imageAssets = imageFiles.map((path) => {
  const buffer = readFileSync(path)
  return {
    path: `/${relative(publicRoot, path).replaceAll('\\', '/')}`,
    bytes: buffer.length,
    sha256: sha256(buffer),
    ...imageDimensions(buffer, extname(path)),
  }
})

const staticChunksRoot = join(buildRoot, 'static', 'chunks')
const bundleAssets = walk(staticChunksRoot)
  .filter((path) => new Set(['.css', '.js']).has(extname(path)))
  .sort((left, right) =>
    relative(staticChunksRoot, left).localeCompare(
      relative(staticChunksRoot, right),
    ),
  )
  .map((path) => {
    const buffer = readFileSync(path)
    return {
      path: relative(buildRoot, path).replaceAll('\\', '/'),
      type: extname(path).slice(1),
      bytes: buffer.length,
      gzipBytes: gzipSync(buffer, { level: 9 }).length,
    }
  })
if (bundleAssets.length === 0)
  fail('built JavaScript/CSS chunk inventory is empty')

const builtRouteAssets = routes.map((route) => {
  const html = routeHtml.get(route) ?? ''
  const buffer = Buffer.from(html)
  return {
    route,
    htmlBytes: buffer.length,
    htmlGzipBytes: gzipSync(buffer, { level: 9 }).length,
  }
})

const reservePort = async () => {
  const server = createServer()
  server.unref()
  server.listen(0, '127.0.0.1')
  await once(server, 'listening')
  const address = server.address()
  const port = typeof address === 'object' && address ? address.port : undefined
  await new Promise((resolveClose) => server.close(resolveClose))
  if (!port) throw new Error('could not reserve a loopback port')
  return port
}

const runLoopbackChecks = async () => {
  const port = await reservePort()
  const origin = `http://127.0.0.1:${port}`
  const child = spawn(
    process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm',
    [
      '--filter',
      '@unisane-site/web',
      'exec',
      'next',
      'start',
      '--hostname',
      '127.0.0.1',
      '--port',
      String(port),
    ],
    {
      cwd: siteRoot,
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
      stdio: ['ignore', 'pipe', 'pipe'],
    },
  )
  let logs = ''
  const capture = (chunk) => {
    logs = `${logs}${chunk.toString('utf8')}`.slice(-16_384)
  }
  child.stdout.on('data', capture)
  child.stderr.on('data', capture)

  const stop = async () => {
    if (child.exitCode !== null) return
    child.kill('SIGTERM')
    await Promise.race([once(child, 'exit'), delay(3_000)])
    if (child.exitCode === null) child.kill('SIGKILL')
  }

  try {
    const deadline = Date.now() + 30_000
    let ready = false
    while (Date.now() < deadline && child.exitCode === null) {
      try {
        const response = await fetch(`${origin}/`)
        await response.arrayBuffer()
        if (response.status === 200) {
          ready = true
          break
        }
      } catch {
        await delay(100)
      }
    }
    if (!ready) throw new Error(`Next server did not become ready.\n${logs}`)

    const runtimePages = new Map()
    const performanceRows = []
    for (const route of routes) {
      for (let warmup = 0; warmup < 2; warmup += 1) {
        const response = await fetch(`${origin}${route}`)
        await response.arrayBuffer()
      }
      const durations = []
      let responseBytes = 0
      let html = ''
      for (let sample = 0; sample < 5; sample += 1) {
        const startedAt = performance.now()
        const response = await fetch(`${origin}${route}`)
        const buffer = Buffer.from(await response.arrayBuffer())
        durations.push(performance.now() - startedAt)
        responseBytes = buffer.length
        html = buffer.toString('utf8')
        if (response.status !== 200) {
          fail(`${route}: loopback status was ${response.status}, expected 200`)
        }
        if (!response.headers.get('content-type')?.includes('text/html')) {
          fail(`${route}: loopback response is not HTML`)
        }
      }
      runtimePages.set(route, html)
      performanceRows.push({
        route,
        sampleCount: durations.length,
        responseBytes,
        medianMilliseconds: percentile(durations, 50),
        p95Milliseconds: percentile(durations, 95),
      })
    }

    const missingPath = '/__site_readiness_missing__'
    const missingResponse = await fetch(`${origin}${missingPath}`, {
      redirect: 'manual',
    })
    const missingBody = Buffer.from(await missingResponse.arrayBuffer())
    if (missingResponse.status !== 404) {
      fail(
        `missing-route loopback status was ${missingResponse.status}, expected 404`,
      )
    }
    if (!missingResponse.headers.get('content-type')?.includes('text/html')) {
      fail('missing-route loopback response is not HTML')
    }

    const staticTargets = new Set()
    for (const html of runtimePages.values()) {
      for (const tagName of ['img', 'link', 'script']) {
        for (const attributes of findTags(html, tagName)) {
          for (const name of ['href', 'src']) {
            const value = attributeValue(attributes, name)
            if (!value) continue
            const target = new URL(value, origin)
            if (
              target.origin === origin &&
              (target.pathname.startsWith('/_next/') ||
                target.pathname.startsWith('/images/') ||
                target.pathname.endsWith('favicon.ico'))
            ) {
              staticTargets.add(target.toString())
            }
          }
          const srcset = attributeValue(attributes, 'srcset')
          if (srcset) {
            for (const candidate of srcset.split(',')) {
              const value = candidate.trim().split(/\s+/)[0]
              if (!value) continue
              const target = new URL(value, origin)
              if (target.origin === origin) staticTargets.add(target.toString())
            }
          }
        }
      }
    }
    for (const target of [...staticTargets].sort()) {
      const response = await fetch(target)
      await response.arrayBuffer()
      if (response.status !== 200) {
        fail(
          `static runtime target returned ${response.status}: ${new URL(target).pathname}`,
        )
      }
    }

    return {
      origin: 'loopback-ephemeral-port',
      routePerformance: performanceRows,
      missingRoute: {
        path: missingPath,
        status: missingResponse.status,
        responseBytes: missingBody.length,
      },
      verifiedStaticTargetCount: staticTargets.size,
    }
  } finally {
    await stop()
  }
}

let loopback
try {
  loopback = await runLoopbackChecks()
} catch (error) {
  fail(
    `loopback verification failed: ${error instanceof Error ? error.message : String(error)}`,
  )
  loopback = {
    origin: 'loopback-ephemeral-port',
    routePerformance: [],
    missingRoute: null,
    verifiedStaticTargetCount: 0,
  }
}

const rootPackage = JSON.parse(
  readFileSync(join(siteRoot, 'package.json'), 'utf8'),
)
const webPackage = JSON.parse(
  readFileSync(join(webRoot, 'package.json'), 'utf8'),
)
const bundleTotals = bundleAssets.reduce(
  (totals, asset) => ({
    bytes: totals.bytes + asset.bytes,
    gzipBytes: totals.gzipBytes + asset.gzipBytes,
    javascriptBytes:
      totals.javascriptBytes + (asset.type === 'js' ? asset.bytes : 0),
    cssBytes: totals.cssBytes + (asset.type === 'css' ? asset.bytes : 0),
  }),
  { bytes: 0, gzipBytes: 0, javascriptBytes: 0, cssBytes: 0 },
)
const imageTotals = imageAssets.reduce(
  (totals, asset) => ({
    bytes: totals.bytes + asset.bytes,
    largestBytes: Math.max(totals.largestBytes, asset.bytes),
  }),
  { bytes: 0, largestBytes: 0 },
)

const receipt = {
  schemaVersion: 1,
  generatedBy: 'scripts/check-local-readiness.mjs',
  sourceInputDigest,
  methodology: {
    generationCommand: 'pnpm refresh:local-readiness-baseline',
    verificationCommand: 'pnpm verify:local-readiness',
    buildCommand: 'pnpm build',
    network: 'loopback-only; no external requests',
    runtimeWarmupRequestsPerRoute: 2,
    runtimeMeasuredRequestsPerRoute: 5,
    timingInterpretation:
      'Observed local response timing is environment-specific and is not pass/fail without an owner threshold.',
    bundleInterpretation:
      'Built JavaScript, CSS, and route HTML byte counts are deterministic comparison baselines, not approved budgets.',
    imageInterpretation:
      'Tracked public image byte counts, dimensions, and digests are inventory baselines, not rights or performance approval.',
  },
  environment: {
    node: process.version,
    packageManager: rootPackage.packageManager,
    next: webPackage.dependencies.next,
    platform: process.platform,
    architecture: process.arch,
  },
  scope: {
    retainedRoutes: routes,
    visitorJourneys,
    fragmentTargets: fragmentTargets.sort((left, right) =>
      JSON.stringify(left).localeCompare(JSON.stringify(right)),
    ),
    frameworkErrorSurfaces,
    canonicalInput: {
      environmentVariable: 'NEXT_PUBLIC_SITE_URL',
      source: process.env.NEXT_PUBLIC_SITE_URL
        ? 'environment-override-unapproved'
        : 'source-fallback-unapproved',
      observedValue: canonicalInputValue,
      ownerApproval: 'required',
    },
  },
  assertions: {
    result: failures.length === 0 ? 'pass' : 'fail',
    routeCount: routes.length,
    routeAnalyses,
    loopbackMissingRouteStatus: loopback.missingRoute?.status ?? null,
    verifiedStaticTargetCount: loopback.verifiedStaticTargetCount,
  },
  baselines: {
    performance: {
      evaluation: 'observed-not-evaluated',
      ownerThresholds: {
        medianMilliseconds: null,
        p95Milliseconds: null,
      },
      method: 'Next production server on an ephemeral loopback port',
      routes: loopback.routePerformance,
    },
    bundle: {
      evaluation: 'baseline-only',
      ownerThresholds: {
        totalBytes: null,
        totalGzipBytes: null,
        routeHtmlBytes: null,
      },
      totals: bundleTotals,
      routeHtml: builtRouteAssets,
      assets: bundleAssets,
    },
    images: {
      evaluation: 'baseline-only-rights-unresolved',
      ownerThresholds: {
        totalBytes: null,
        largestAssetBytes: null,
        perAssetBytes: null,
      },
      count: imageAssets.length,
      totals: imageTotals,
      assets: imageAssets,
    },
  },
}

const stableProjection = (value) => ({
  schemaVersion: value.schemaVersion,
  generatedBy: value.generatedBy,
  sourceInputDigest: value.sourceInputDigest,
  methodology: value.methodology,
  environment: value.environment,
  scope: value.scope,
  assertions: value.assertions,
  baselines: {
    performance: {
      evaluation: value.baselines.performance.evaluation,
      ownerThresholds: value.baselines.performance.ownerThresholds,
      method: value.baselines.performance.method,
    },
    bundle: value.baselines.bundle,
    images: value.baselines.images,
  },
})

if (writeBaseline && failures.length === 0) {
  writeFileSync(
    baselinePath,
    await formatWithPrettier(JSON.stringify(receipt), { parser: 'json' }),
  )
} else if (!writeBaseline) {
  if (!existsSync(baselinePath)) {
    fail(
      'local readiness baseline is missing; run pnpm refresh:local-readiness-baseline after review',
    )
  } else {
    const expected = JSON.parse(readFileSync(baselinePath, 'utf8'))
    if (
      JSON.stringify(stableProjection(expected)) !==
      JSON.stringify(stableProjection(receipt))
    ) {
      fail(
        'local readiness baseline is stale; inspect the change and run pnpm refresh:local-readiness-baseline when authorized',
      )
    }
  }
}

const summary = {
  result: failures.length === 0 ? 'pass' : 'fail',
  mode: writeBaseline ? 'write-baseline' : 'verify-baseline',
  sourceInputDigest,
  routeCount: routes.length,
  fragmentTargetCount: fragmentTargets.length,
  visitorJourneyCount: visitorJourneys.length,
  frameworkErrorSurfaces,
  verifiedStaticTargetCount: loopback.verifiedStaticTargetCount,
  canonicalInput: receipt.scope.canonicalInput,
  performance: receipt.baselines.performance,
  bundleTotals,
  imageCount: imageAssets.length,
  imageTotals,
  ownerThresholdStatus: 'absent-fail-closed',
  failures,
}
console.log(JSON.stringify(summary, null, 2))
if (failures.length > 0) process.exitCode = 1
