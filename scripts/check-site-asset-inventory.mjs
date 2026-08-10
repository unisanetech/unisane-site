import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, extname, join } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const repositoryRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const scriptPath = 'scripts/check-site-asset-inventory.mjs'
const receiptPath =
  'docs/reference/generated/site-asset-font-network-inventory.json'
const writeMode = process.argv.includes('--write')
const unknownArguments = process.argv
  .slice(2)
  .filter((value) => value !== '--write')

if (unknownArguments.length > 0) {
  throw new Error(`Unsupported arguments: ${unknownArguments.join(', ')}`)
}

const sha256 = (value) => createHash('sha256').update(value).digest('hex')
const read = (path) => readFileSync(join(repositoryRoot, path))
const toText = (path) => read(path).toString('utf8')

const trackedPaths = execFileSync('git', ['ls-files', '-z', '--', 'apps/web'], {
  cwd: repositoryRoot,
  encoding: 'buffer',
})
  .toString('utf8')
  .split('\0')
  .filter(Boolean)
  .sort((left, right) => left.localeCompare(right))

const mediaTypes = new Map([
  ['.avif', ['image', 'image/avif']],
  ['.css', ['static', 'text/css']],
  ['.eot', ['font', 'application/vnd.ms-fontobject']],
  ['.gif', ['image', 'image/gif']],
  ['.ico', ['image', 'image/x-icon']],
  ['.jpeg', ['image', 'image/jpeg']],
  ['.jpg', ['image', 'image/jpeg']],
  ['.js', ['static', 'text/javascript']],
  ['.json', ['static', 'application/json']],
  ['.mp3', ['static', 'audio/mpeg']],
  ['.mp4', ['static', 'video/mp4']],
  ['.otf', ['font', 'font/otf']],
  ['.pdf', ['static', 'application/pdf']],
  ['.png', ['image', 'image/png']],
  ['.svg', ['image', 'image/svg+xml']],
  ['.ttf', ['font', 'font/ttf']],
  ['.txt', ['static', 'text/plain']],
  ['.wav', ['static', 'audio/wav']],
  ['.webm', ['static', 'video/webm']],
  ['.webmanifest', ['static', 'application/manifest+json']],
  ['.webp', ['image', 'image/webp']],
  ['.woff', ['font', 'font/woff']],
  ['.woff2', ['font', 'font/woff2']],
  ['.xml', ['static', 'application/xml']],
])
const imageOrFontExtensions = new Set(
  [...mediaTypes.entries()]
    .filter(([, [category]]) => category === 'image' || category === 'font')
    .map(([extension]) => extension),
)
const sourceExtensions = new Set([
  '.cjs',
  '.css',
  '.js',
  '.jsx',
  '.less',
  '.mjs',
  '.sass',
  '.scss',
  '.ts',
  '.tsx',
])
const cssExtensions = new Set(['.css', '.less', '.sass', '.scss'])
const customerLikeAssetBoundary = 'apps/web/public/images/portfolio/'

const assetPaths = trackedPaths.filter(
  (path) =>
    path.startsWith('apps/web/public/') ||
    imageOrFontExtensions.has(extname(path).toLowerCase()),
)
const sourcePaths = trackedPaths.filter((path) =>
  sourceExtensions.has(extname(path).toLowerCase()),
)

const uniqueDimensions = (dimensions) =>
  [
    ...new Map(
      dimensions.map((value) => [`${value.width}x${value.height}`, value]),
    ).values(),
  ].sort(
    (left, right) => left.width - right.width || left.height - right.height,
  )

const rasterDimensions = (buffer, extension, path) => {
  if (
    extension === '.png' &&
    buffer.length >= 24 &&
    buffer.subarray(0, 8).toString('hex') === '89504e470d0a1a0a'
  ) {
    return [{ width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) }]
  }
  if (
    extension === '.ico' &&
    buffer.length >= 6 &&
    buffer.readUInt16LE(0) === 0 &&
    buffer.readUInt16LE(2) === 1
  ) {
    const count = buffer.readUInt16LE(4)
    if (buffer.length < 6 + count * 16)
      throw new Error(`${path}: truncated ICO`)
    return uniqueDimensions(
      Array.from({ length: count }, (_, index) => {
        const offset = 6 + index * 16
        return {
          width: buffer[offset] === 0 ? 256 : buffer[offset],
          height: buffer[offset + 1] === 0 ? 256 : buffer[offset + 1],
        }
      }),
    )
  }
  if (
    extension === '.gif' &&
    buffer.length >= 10 &&
    ['GIF87a', 'GIF89a'].includes(buffer.subarray(0, 6).toString('ascii'))
  ) {
    return [{ width: buffer.readUInt16LE(6), height: buffer.readUInt16LE(8) }]
  }
  if (
    ['.jpg', '.jpeg'].includes(extension) &&
    buffer.length >= 4 &&
    buffer[0] === 0xff &&
    buffer[1] === 0xd8
  ) {
    const startOfFrameMarkers = new Set([
      0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce,
      0xcf,
    ])
    let offset = 2
    while (offset + 8 < buffer.length) {
      if (buffer[offset] !== 0xff) {
        offset += 1
        continue
      }
      const marker = buffer[offset + 1]
      if (startOfFrameMarkers.has(marker)) {
        return [
          {
            width: buffer.readUInt16BE(offset + 7),
            height: buffer.readUInt16BE(offset + 5),
          },
        ]
      }
      if (marker === 0xd8 || marker === 0xd9) {
        offset += 2
        continue
      }
      const length = buffer.readUInt16BE(offset + 2)
      if (length < 2) break
      offset += 2 + length
    }
  }
  if (
    extension === '.webp' &&
    buffer.length >= 30 &&
    buffer.subarray(0, 4).toString('ascii') === 'RIFF' &&
    buffer.subarray(8, 12).toString('ascii') === 'WEBP'
  ) {
    const kind = buffer.subarray(12, 16).toString('ascii')
    if (kind === 'VP8X') {
      return [
        {
          width: buffer.readUIntLE(24, 3) + 1,
          height: buffer.readUIntLE(27, 3) + 1,
        },
      ]
    }
    if (kind === 'VP8 ' && buffer.length >= 30) {
      return [
        {
          width: buffer.readUInt16LE(26) & 0x3fff,
          height: buffer.readUInt16LE(28) & 0x3fff,
        },
      ]
    }
    if (kind === 'VP8L' && buffer.length >= 25 && buffer[20] === 0x2f) {
      const bits = buffer.readUInt32LE(21)
      return [
        { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 },
      ]
    }
  }
  if (extension === '.svg') {
    const source = buffer.toString('utf8')
    const width = source.match(/\bwidth=["']([0-9.]+)(?:px)?["']/i)?.[1]
    const height = source.match(/\bheight=["']([0-9.]+)(?:px)?["']/i)?.[1]
    if (width && height)
      return [{ width: Number(width), height: Number(height) }]
    const viewBox = source.match(
      /\bviewBox=["']\s*[-0-9.]+\s+[-0-9.]+\s+([0-9.]+)\s+([0-9.]+)\s*["']/i,
    )
    if (viewBox)
      return [{ width: Number(viewBox[1]), height: Number(viewBox[2]) }]
  }
  throw new Error(
    `${path}: unsupported or invalid ${extension} image dimensions`,
  )
}

const rawAssets = assetPaths.map((path) => {
  const extension = extname(path).toLowerCase()
  const media = mediaTypes.get(extension)
  if (!media) throw new Error(`${path}: unsupported tracked public asset type`)
  const buffer = read(path)
  const [category, mediaType] = media
  return {
    path,
    category,
    mediaType,
    bytes: buffer.length,
    sha256: sha256(buffer),
    dimensions:
      category === 'image' ? rasterDimensions(buffer, extension, path) : null,
    customerLike: path.startsWith(customerLikeAssetBoundary),
  }
})

const opaqueAssets = rawAssets.filter((asset) => asset.customerLike)
const assetIdCounts = new Map()
const assets = rawAssets.map((asset) => {
  const baseId = `asset-${asset.sha256.slice(0, 16)}`
  const occurrence = (assetIdCounts.get(baseId) ?? 0) + 1
  assetIdCounts.set(baseId, occurrence)
  const assetId = occurrence === 1 ? baseId : `${baseId}-${occurrence}`
  const opaqueIndex = opaqueAssets.findIndex(
    (value) => value.path === asset.path,
  )
  return {
    assetId,
    locator: asset.customerLike
      ? {
          kind: 'opaque-id',
          value: `customer-like-asset-${String(opaqueIndex + 1).padStart(3, '0')}`,
        }
      : { kind: 'repository-path', value: asset.path },
    pathDisclosure: asset.customerLike
      ? 'withheld-customer-like-filename'
      : 'repository-path',
    category: asset.category,
    mediaType: asset.mediaType,
    bytes: asset.bytes,
    sha256: asset.sha256,
    dimensions: asset.dimensions,
  }
})

if (new Set(assets.map((asset) => asset.assetId)).size !== assets.length) {
  throw new Error('generated duplicate asset IDs')
}
const opaqueLocators = assets
  .filter((asset) => asset.locator.kind === 'opaque-id')
  .map((asset) => asset.locator.value)
if (new Set(opaqueLocators).size !== opaqueLocators.length) {
  throw new Error('generated duplicate opaque asset locators')
}

const assetByPath = new Map(
  rawAssets.map((asset, index) => [asset.path, assets[index]]),
)
const assetByPublicUrl = new Map()
for (const asset of rawAssets) {
  if (asset.path.startsWith('apps/web/public/')) {
    assetByPublicUrl.set(
      `/${asset.path.slice('apps/web/public/'.length)}`,
      assetByPath.get(asset.path),
    )
  } else if (/^apps\/web\/app\/(?:[^/]+\/)*favicon\.ico$/u.test(asset.path)) {
    assetByPublicUrl.set('/favicon.ico', assetByPath.get(asset.path))
  }
}

const lineAndColumn = (source, offset) => {
  const before = source.slice(0, offset)
  const lines = before.split('\n')
  return { line: lines.length, column: lines.at(-1).length + 1 }
}

const assetReferences = []
const networkOccurrences = []
const cssFontFaceDeclarations = []
const cssFontFamilyDeclarations = []
const sourceFontLoaderReferences = []
const genericFontFamilyUtilities = []
const referenceKeys = new Set()

const addAssetReference = (sourcePath, source, offset, rawTarget, syntax) => {
  const target = rawTarget.split(/[?#]/u, 1)[0]
  const asset = assetByPublicUrl.get(target)
  if (!asset) {
    if (imageOrFontExtensions.has(extname(target).toLowerCase())) {
      throw new Error(
        `${sourcePath}: unresolved local asset reference at offset ${offset}`,
      )
    }
    return
  }
  const key = `${sourcePath}:${offset}:${asset.assetId}`
  if (referenceKeys.has(key)) return
  referenceKeys.add(key)
  assetReferences.push({
    assetId: asset.assetId,
    sourcePath,
    ...lineAndColumn(source, offset),
    syntax,
  })
}

for (const sourcePath of sourcePaths) {
  const source = toText(sourcePath)
  const extension = extname(sourcePath).toLowerCase()
  for (const match of source.matchAll(/https?:\/\/[^\s"'`)<>{}\[\]]+/giu)) {
    let target = match[0].replace(/[.,;:!?]+$/u, '')
    let parsed
    try {
      parsed = new URL(target)
    } catch {
      throw new Error(
        `${sourcePath}: malformed HTTP(S) reference at offset ${match.index}`,
      )
    }
    networkOccurrences.push({
      target,
      hostname: parsed.hostname.toLowerCase(),
      sourcePath,
      ...lineAndColumn(source, match.index),
      syntax: cssExtensions.has(extension)
        ? 'css-url-or-import'
        : 'source-literal',
      scheme: parsed.protocol.slice(0, -1),
      hostSha256: sha256(parsed.hostname.toLowerCase()),
    })
  }
  for (const match of source.matchAll(
    /(["'`])(\/(?:[^"'`?#]+\.(?:avif|eot|gif|ico|jpe?g|otf|png|svg|ttf|webp|woff2?))(?:[?#][^"'`]*)?)\1/giu,
  )) {
    addAssetReference(
      sourcePath,
      source,
      match.index,
      match[2],
      'source-literal',
    )
  }
  if (cssExtensions.has(extension)) {
    for (const match of source.matchAll(/url\(\s*(["']?)([^)"']+)\1\s*\)/giu)) {
      if (match[2].trim().startsWith('/')) {
        addAssetReference(
          sourcePath,
          source,
          match.index,
          match[2].trim(),
          'css-url',
        )
      }
    }
    for (const match of source.matchAll(/@font-face\b/giu)) {
      cssFontFaceDeclarations.push({
        sourcePath,
        ...lineAndColumn(source, match.index),
      })
    }
    for (const match of source.matchAll(/font-family\s*:\s*([^;}]+)/giu)) {
      cssFontFamilyDeclarations.push({
        sourcePath,
        ...lineAndColumn(source, match.index),
        value: match[1].trim().replace(/\s+/gu, ' '),
      })
    }
  }
  for (const match of source.matchAll(
    /(?:from\s+|import\s*\(\s*)["']((?:next\/font|@fontsource\/)[^"']*)["']/gu,
  )) {
    sourceFontLoaderReferences.push({
      sourcePath,
      ...lineAndColumn(source, match.index),
      module: match[1],
    })
  }
  for (const match of source.matchAll(/\bfont-(?:sans|serif|mono)\b/gu)) {
    genericFontFamilyUtilities.push({
      sourcePath,
      ...lineAndColumn(source, match.index),
      utility: match[0],
    })
  }
}

for (const [path, asset] of assetByPath) {
  if (/^apps\/web\/app\/(?:[^/]+\/)*favicon\.ico$/u.test(path)) {
    assetReferences.push({
      assetId: asset.assetId,
      sourcePath: path,
      line: null,
      column: null,
      syntax: 'next-app-metadata-convention',
    })
  }
}

assetReferences.sort(
  (left, right) =>
    left.assetId.localeCompare(right.assetId) ||
    left.sourcePath.localeCompare(right.sourcePath) ||
    (left.line ?? 0) - (right.line ?? 0) ||
    (left.column ?? 0) - (right.column ?? 0),
)

const networkTargetIds = new Map()
const networkReferences = networkOccurrences
  .sort(
    (left, right) =>
      left.sourcePath.localeCompare(right.sourcePath) ||
      left.line - right.line ||
      left.column - right.column,
  )
  .map(({ target, hostname, ...reference }) => {
    const targetSha256 = sha256(target)
    if (!networkTargetIds.has(targetSha256)) {
      networkTargetIds.set(
        targetSha256,
        `network-target-${String(networkTargetIds.size + 1).padStart(3, '0')}`,
      )
    }
    return {
      targetId: networkTargetIds.get(targetSha256),
      targetDisclosure: 'digest-only',
      targetSha256,
      ...reference,
    }
  })

const byMediaType = Object.fromEntries(
  [...new Set(assets.map((asset) => asset.mediaType))]
    .sort((left, right) => left.localeCompare(right))
    .map((mediaType) => [
      mediaType,
      assets.filter((asset) => asset.mediaType === mediaType).length,
    ]),
)
const receiptInputs = [
  scriptPath,
  ...new Set([...assetPaths, ...sourcePaths]),
].sort((left, right) => left.localeCompare(right))
const sourceInputDigest = sha256(
  Buffer.concat(
    receiptInputs.flatMap((path) => [
      Buffer.from(`${path}\0`, 'utf8'),
      read(path),
      Buffer.from('\0', 'utf8'),
    ]),
  ),
)

const receipt = {
  schemaVersion: 1,
  generatedBy: scriptPath,
  sourceInputDigest,
  methodology: {
    generationCommand: `node ${scriptPath} --write`,
    verificationCommand: 'pnpm check:asset-inventory',
    trackedInputCommand: 'git ls-files -z -- apps/web',
    scope: 'tracked Site assets plus source/CSS references only',
    sourceExtensions: [...sourceExtensions].sort(),
    customerLikeFilenames:
      'withheld as receipt-local opaque IDs under the existing portfolio/case-study asset boundary',
    externalTargets:
      'raw targets omitted; exact target and hostname SHA-256 digests retained',
    conclusions:
      'none: inventory does not decide rights, license, brand, privacy, provider, thresholds, publication, or optimization',
  },
  assets: {
    count: assets.length,
    imageCount: assets.filter((asset) => asset.category === 'image').length,
    fontCount: assets.filter((asset) => asset.category === 'font').length,
    otherStaticCount: assets.filter((asset) => asset.category === 'static')
      .length,
    customerLikeOpaqueCount: assets.filter(
      (asset) => asset.pathDisclosure === 'withheld-customer-like-filename',
    ).length,
    totalBytes: assets.reduce((total, asset) => total + asset.bytes, 0),
    byMediaType,
    entries: assets,
    references: assetReferences,
  },
  fonts: {
    assetIds: assets
      .filter((asset) => asset.category === 'font')
      .map((asset) => asset.assetId),
    cssFontFaceDeclarations,
    cssFontFamilyDeclarations,
    sourceLoaderReferences: sourceFontLoaderReferences,
    genericFamilyUtilities: genericFontFamilyUtilities,
    interpretation:
      'mechanical-source-inventory-only; rights and selection remain unresolved',
  },
  network: {
    referenceCount: networkReferences.length,
    uniqueTargetCount: networkTargetIds.size,
    references: networkReferences,
    interpretation:
      'source/CSS literals only; no runtime traffic, provider approval, domain ownership, or publication conclusion',
  },
  unresolvedOwnerDecisions: [
    'asset necessity, provenance, rights, license, and disposition',
    'font selection, provenance, rights, license, and delivery policy',
    'network target necessity, ownership, privacy, security, and provider approval',
    'performance, image, and bundle thresholds',
    'public release and publication authority',
  ],
}

const assertPrivacySafeReceipt = ({
  candidate,
  withheldAssetPaths,
  withheldNetworkTargets,
  withheldNetworkHostnames,
}) => {
  const customerLikeEntries = candidate.assets.entries.filter(
    (asset) =>
      asset.pathDisclosure === 'withheld-customer-like-filename' ||
      asset.locator?.kind === 'opaque-id',
  )
  if (customerLikeEntries.length !== withheldAssetPaths.length) {
    throw new Error('customer-like asset privacy coverage is incomplete')
  }
  const forbiddenAssetKeys = new Set([
    'filename',
    'path',
    'publicPath',
    'publicUrl',
    'rawPath',
    'repositoryPath',
  ])
  for (const asset of customerLikeEntries) {
    const locatorKeys = Object.keys(asset.locator ?? {}).sort()
    if (
      asset.locator?.kind !== 'opaque-id' ||
      locatorKeys.join(',') !== 'kind,value' ||
      typeof asset.locator.value !== 'string' ||
      !/^customer-like-asset-[0-9]{3}$/u.test(asset.locator.value)
    ) {
      throw new Error('customer-like asset locator is not opaque-only')
    }
    if (Object.keys(asset).some((key) => forbiddenAssetKeys.has(key))) {
      throw new Error('customer-like asset contains a raw path field')
    }
  }

  const forbiddenNetworkKeys = new Set([
    'host',
    'hostname',
    'href',
    'origin',
    'rawHostname',
    'rawTarget',
    'target',
    'url',
  ])
  const inspectNetworkValue = (value) => {
    if (typeof value === 'string' && /(?:https?:)?\/\/[a-z0-9]/iu.test(value)) {
      throw new Error('network reference contains a URL-shaped value')
    }
    if (Array.isArray(value)) {
      for (const child of value) inspectNetworkValue(child)
      return
    }
    if (value === null || typeof value !== 'object') return
    for (const [key, child] of Object.entries(value)) {
      if (forbiddenNetworkKeys.has(key)) {
        throw new Error(
          'network reference contains a raw target or hostname field',
        )
      }
      inspectNetworkValue(child)
    }
  }
  for (const reference of candidate.network.references) {
    inspectNetworkValue(reference)
  }

  const candidateText = JSON.stringify(candidate)
  const rawSensitiveFilenamesEmitted = withheldAssetPaths.some((path) =>
    candidateText.includes(path),
  )
  const rawNetworkTargetsEmitted = withheldNetworkTargets.some((target) =>
    candidateText.includes(target),
  )
  const rawNetworkHostnamesEmitted = withheldNetworkHostnames.some((hostname) =>
    candidateText.includes(hostname),
  )
  if (rawSensitiveFilenamesEmitted) {
    throw new Error(
      'receipt contains an exact withheld customer-like asset path',
    )
  }
  if (rawNetworkTargetsEmitted || rawNetworkHostnamesEmitted) {
    throw new Error(
      'receipt contains an exact withheld network target or hostname',
    )
  }
  return {
    rawSensitiveFilenamesEmitted,
    rawNetworkTargetsEmitted,
    rawNetworkHostnamesEmitted,
  }
}

const expectPrivacyRejection = (name, candidate, rawValues) => {
  let rejected = false
  try {
    assertPrivacySafeReceipt({ candidate, ...rawValues })
  } catch {
    rejected = true
  }
  if (!rejected) throw new Error(`${name} privacy fixture was accepted`)
  return { name, result: 'rejected-as-expected' }
}

const rawPrivacyValues = {
  withheldAssetPaths: rawAssets
    .filter((asset) => asset.customerLike)
    .map((asset) => asset.path),
  withheldNetworkTargets: networkOccurrences.map(
    (reference) => reference.target,
  ),
  withheldNetworkHostnames: networkOccurrences.map(
    (reference) => reference.hostname,
  ),
}
const privacyAudit = assertPrivacySafeReceipt({
  candidate: receipt,
  ...rawPrivacyValues,
})
const customerFixturePath =
  rawPrivacyValues.withheldAssetPaths[0] ??
  'apps/web/public/images/customer-like/privacy-fixture.png'
const customerLocatorFixture = structuredClone(receipt)
const customerFixtureEntry = customerLocatorFixture.assets.entries.find(
  (asset) => asset.pathDisclosure === 'withheld-customer-like-filename',
)
if (customerFixtureEntry) {
  customerFixtureEntry.locator = {
    kind: 'repository-path',
    value: customerFixturePath,
  }
} else {
  customerLocatorFixture.assets.entries.push({
    assetId: 'asset-privacy-fixture',
    locator: { kind: 'repository-path', value: customerFixturePath },
    pathDisclosure: 'withheld-customer-like-filename',
  })
}
const rawNetworkTarget =
  rawPrivacyValues.withheldNetworkTargets[0] ??
  'https://privacy-fixture.invalid/resource'
const rawNetworkHostname = new URL(rawNetworkTarget).hostname
const rawUrlFixture = structuredClone(receipt)
const rawUrlReference = rawUrlFixture.network.references[0] ?? {}
rawUrlReference.target = rawNetworkTarget
if (rawUrlFixture.network.references.length === 0) {
  rawUrlFixture.network.references.push(rawUrlReference)
}
const rawHostnameFixture = structuredClone(receipt)
const rawHostnameReference = rawHostnameFixture.network.references[0] ?? {}
rawHostnameReference.hostname = rawNetworkHostname
if (rawHostnameFixture.network.references.length === 0) {
  rawHostnameFixture.network.references.push(rawHostnameReference)
}
const fixtureRawValues = {
  withheldAssetPaths: [
    ...new Set([...rawPrivacyValues.withheldAssetPaths, customerFixturePath]),
  ],
  withheldNetworkTargets: [
    ...new Set([...rawPrivacyValues.withheldNetworkTargets, rawNetworkTarget]),
  ],
  withheldNetworkHostnames: [
    ...new Set([
      ...rawPrivacyValues.withheldNetworkHostnames,
      rawNetworkHostname,
    ]),
  ],
}
const privacyNegativeFixtures = [
  expectPrivacyRejection(
    'raw-customer-locator',
    customerLocatorFixture,
    fixtureRawValues,
  ),
  expectPrivacyRejection('raw-network-url', rawUrlFixture, fixtureRawValues),
  expectPrivacyRejection(
    'raw-network-hostname',
    rawHostnameFixture,
    fixtureRawValues,
  ),
]

const serialized = `${JSON.stringify(receipt, null, 2)}\n`
if (writeMode) {
  writeFileSync(join(repositoryRoot, receiptPath), serialized)
} else {
  if (!existsSync(join(repositoryRoot, receiptPath))) {
    throw new Error(`${receiptPath} is missing; run the generation command`)
  }
  const current = readFileSync(join(repositoryRoot, receiptPath), 'utf8')
  if (current !== serialized) {
    throw new Error(`${receiptPath} is stale; run the generation command`)
  }
}

console.log(
  JSON.stringify(
    {
      result: 'pass',
      mode: writeMode ? 'write' : 'verify',
      receiptPath,
      sourceInputDigest,
      assetCount: assets.length,
      customerLikeOpaqueCount: receipt.assets.customerLikeOpaqueCount,
      fontAssetCount: receipt.assets.fontCount,
      networkReferenceCount: networkReferences.length,
      uniqueNetworkTargetCount: networkTargetIds.size,
      ...privacyAudit,
      privacyNegativeFixtures,
      networkUsed: false,
    },
    null,
    2,
  ),
)
