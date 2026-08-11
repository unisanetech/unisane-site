import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { extname, join } from 'node:path'
import process from 'node:process'

const repositoryRoot = process.cwd()
const scriptPath = 'scripts/check-history-safety.mjs'
const receiptPath =
  'docs/reference/generated/repository-public-history-safety-checkpoint-receipt.json'
const certificateInputSpecs = [
  { inputId: 'checker', path: scriptPath },
  { inputId: 'filter-spec', path: 'docs/repository-filter-spec.json' },
  { inputId: 'provenance', path: 'docs/repository-provenance.json' },
  {
    inputId: 'source-history-inventory',
    path: 'docs/reference/current-source-and-history-inventory.md',
  },
  {
    inputId: 'extraction-integrity-receipt',
    path: 'docs/reference/generated/repository-extraction-integrity-receipt.json',
  },
  {
    inputId: 'filtered-history-checkpoint',
    path: 'docs/reference/generated/repository-filtered-history-checkpoint-receipt.json',
  },
]
const largeObjectThresholdBytes = 1024 * 1024
const contentScanLimitBytes = 16 * 1024 * 1024

const argumentsList = process.argv.slice(2)
const writeCheckpointIndex = argumentsList.indexOf('--write-checkpoint')
const writeCheckpoint =
  writeCheckpointIndex === -1
    ? null
    : (argumentsList[writeCheckpointIndex + 1] ?? null)
const consumedArguments =
  writeCheckpointIndex === -1
    ? []
    : ['--write-checkpoint', writeCheckpoint].filter(Boolean)
const unknownArguments = argumentsList.filter(
  (argument, index) =>
    !consumedArguments.includes(argument) ||
    (argument === writeCheckpoint && index !== writeCheckpointIndex + 1),
)
if (
  unknownArguments.length > 0 ||
  (writeCheckpointIndex !== -1 && !writeCheckpoint)
) {
  throw new Error('Unsupported or incomplete history-safety arguments')
}

const sha256 = (value) => createHash('sha256').update(value).digest('hex')
const read = (path) => readFileSync(join(repositoryRoot, path))
const gitAt = (cwd, ...args) =>
  execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim()
const gitBufferAt = (cwd, ...args) =>
  execFileSync('git', args, {
    cwd,
    encoding: 'buffer',
    maxBuffer: contentScanLimitBytes + 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe'],
  })
const git = (...args) => gitAt(repositoryRoot, ...args)

const topLevel = git('rev-parse', '--show-toplevel')
if (topLevel !== repositoryRoot) {
  throw new Error('history-safety checker must run from the repository root')
}

const secretClassifiers = [
  {
    category: 'private-key-material',
    pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/gu,
  },
  { category: 'aws-access-key', pattern: /\bAKIA[0-9A-Z]{16}\b/gu },
  {
    category: 'github-access-token',
    pattern: /\bgh[opsu]_[A-Za-z0-9]{36,255}\b/gu,
  },
  {
    category: 'slack-access-token',
    pattern: /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/gu,
  },
  {
    category: 'google-api-key',
    pattern: /\bAIza[0-9A-Za-z_-]{35}\b/gu,
  },
  {
    category: 'stripe-live-key',
    pattern: /\b(?:sk|rk)_live_[0-9A-Za-z]{16,}\b/gu,
  },
  {
    category: 'jwt-like-bearer',
    pattern: /\beyJ[0-9A-Za-z_-]{8,}\.[0-9A-Za-z_-]{8,}\.[0-9A-Za-z_-]{8,}\b/gu,
  },
]
const reviewClassifiers = [
  {
    category: 'email-like-value',
    pattern: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/giu,
  },
  {
    category: 'phone-like-value',
    pattern: /(?<![0-9])(?:\+?[1-9][0-9 .()-]{7,}[0-9])(?![0-9])/gu,
  },
  {
    category: 'raw-network-or-provider-target',
    pattern: /https?:\/\/[^\s"'`)<>{}\[\]]+/giu,
  },
  {
    category: 'customer-or-testimonial-language',
    pattern: /\b(?:customer|testimonial|case[ -]?stud(?:y|ies)|portfolio)\b/giu,
  },
]
const sensitivePathPattern =
  /(?:^|\/)(?:\.env(?:\..*)?|id_(?:rsa|dsa|ecdsa|ed25519)|credentials(?:\.[^/]*)?|[^/]+\.(?:key|pem|p12|pfx))$/iu
const customerLikePathPattern =
  /(?:^|\/)(?:customer|customers|portfolio|testimonial|testimonials|case-stud(?:y|ies))(?:\/|$)/iu
const providerLikePathPattern =
  /(?:^|\/)(?:provider|providers|analytics|tracking|credentials|secrets?)(?:\/|$)/iu
const generatedOutputPathPattern =
  /(?:^|\/)(?:\.next|\.turbo|\.cache|coverage|dist|build|node_modules)(?:\/|$)|\.(?:log|map|tgz|zip)$/iu
const binaryExtensions = new Set([
  '.avif',
  '.eot',
  '.gif',
  '.ico',
  '.jpeg',
  '.jpg',
  '.mp3',
  '.mp4',
  '.otf',
  '.pdf',
  '.png',
  '.ttf',
  '.wav',
  '.webm',
  '.webp',
  '.woff',
  '.woff2',
])

const pathCategory = (path) => {
  const extension = extname(path).toLowerCase()
  if (generatedOutputPathPattern.test(path)) return 'generated-output'
  if (
    [
      '.avif',
      '.gif',
      '.ico',
      '.jpeg',
      '.jpg',
      '.png',
      '.svg',
      '.webp',
    ].includes(extension)
  ) {
    return 'image'
  }
  if (['.eot', '.otf', '.ttf', '.woff', '.woff2'].includes(extension))
    return 'font'
  if (['.mp3', '.mp4', '.wav', '.webm'].includes(extension)) return 'media'
  if (['.pdf', '.doc', '.docx', '.xls', '.xlsx'].includes(extension))
    return 'document'
  if (['.tgz', '.zip', '.gz', '.tar'].includes(extension)) return 'archive'
  if (
    ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.css', '.scss'].includes(extension)
  ) {
    return 'source'
  }
  if (['.json', '.yaml', '.yml', '.toml', '.xml'].includes(extension))
    return 'data-or-config'
  if (['.md', '.txt'].includes(extension)) return 'text'
  return 'other'
}

const collectPatternSignals = (content, classifiers, object, pathDigest) => {
  const signals = []
  for (const classifier of classifiers) {
    const pattern = new RegExp(
      classifier.pattern.source,
      classifier.pattern.flags,
    )
    for (const match of content.matchAll(pattern)) {
      signals.push({
        category: classifier.category,
        object,
        pathDigest,
        valueDigest: sha256(match[0].toLowerCase()),
        rawValue: match[0],
      })
    }
  }
  return signals
}

const summariseSignals = (signals) => {
  const categories = [...new Set(signals.map((signal) => signal.category))]
    .sort((left, right) => left.localeCompare(right))
    .map((category) => {
      const matches = signals.filter((signal) => signal.category === category)
      return {
        category,
        occurrenceCount: matches.length,
        blobCount: new Set(matches.map((match) => match.object)).size,
        signalSetDigest: sha256(
          matches
            .map(
              (match) =>
                `${match.object}\0${match.pathDigest}\0${match.valueDigest ?? ''}`,
            )
            .sort()
            .join('\n'),
        ),
      }
    })
  return {
    occurrenceCount: signals.length,
    blobCount: new Set(signals.map((signal) => signal.object)).size,
    categoryCount: categories.length,
    categories,
  }
}

const inspectBlobContent = ({ object, size, buffer }) => {
  const binary = Boolean(buffer?.includes(0))
  const unscannedOversizedRisk = size > contentScanLimitBytes
  const secretSignals = []
  const reviewSignals = []
  if (buffer && !binary && !unscannedOversizedRisk) {
    const content = buffer.toString('utf8')
    secretSignals.push(
      ...collectPatternSignals(content, secretClassifiers, object, ''),
    )
    reviewSignals.push(
      ...collectPatternSignals(content, reviewClassifiers, object, ''),
    )
  }
  return {
    object,
    size,
    contentBinary: binary,
    large: size >= largeObjectThresholdBytes,
    unscannedOversizedRisk,
    secretSignals,
    reviewSignals,
  }
}

const inspectPathAssociation = ({ object, path, content }) => {
  const pathDigest = sha256(path)
  const category = pathCategory(path)
  const binary =
    content.contentBinary || binaryExtensions.has(extname(path).toLowerCase())
  const generatedOutputRisk = generatedOutputPathPattern.test(path)
  const sensitivePathRisk = sensitivePathPattern.test(path) && content.size > 0
  const reviewSignals = []
  if (path && customerLikePathPattern.test(path)) {
    reviewSignals.push({
      category: 'customer-like-path',
      object,
      pathDigest,
      valueDigest: pathDigest,
    })
  }
  if (path && providerLikePathPattern.test(path)) {
    reviewSignals.push({
      category: 'provider-like-path',
      object,
      pathDigest,
      valueDigest: pathDigest,
    })
  }
  return {
    object,
    pathDigest,
    size: content.size,
    category,
    binary,
    generatedOutputRisk,
    sensitivePathRisk,
    reviewSignals,
  }
}

const parseObjectIds = (revisionArguments, scanRoot = repositoryRoot) => {
  const output = gitAt(scanRoot, 'rev-list', '--objects', ...revisionArguments)
  if (!output) return []
  const seen = new Set()
  for (const line of output.split('\n')) {
    const separator = line.indexOf(' ')
    const object = separator === -1 ? line : line.slice(0, separator)
    seen.add(object)
  }
  return [...seen]
}

const enumerateBlobPathAssociations = (
  revisionArguments,
  scanRoot = repositoryRoot,
) => {
  const commitOutput = gitAt(scanRoot, 'rev-list', ...revisionArguments)
  const commits = commitOutput ? commitOutput.split('\n').filter(Boolean) : []
  const treeIds = [
    ...new Set(
      commits.map((commit) => gitAt(scanRoot, 'rev-parse', `${commit}^{tree}`)),
    ),
  ].sort()
  const associations = new Map()
  for (const tree of treeIds) {
    const output = gitBufferAt(scanRoot, 'ls-tree', '-r', '-z', tree)
    for (const entry of output.toString('utf8').split('\0').filter(Boolean)) {
      const tab = entry.indexOf('\t')
      if (tab === -1) throw new Error('unexpected git ls-tree entry')
      const metadata = entry.slice(0, tab).split(' ')
      const [mode, type, object] = metadata
      if (!mode || !type || !object) {
        throw new Error('incomplete git ls-tree entry')
      }
      if (type !== 'blob') continue
      const path = entry.slice(tab + 1)
      const key = `${object}\0${path}`
      associations.set(key, { object, path })
    }
  }
  return {
    uniqueCommitTreeCount: treeIds.length,
    associations: [...associations.values()].sort(
      (left, right) =>
        left.object.localeCompare(right.object) ||
        left.path.localeCompare(right.path),
    ),
  }
}

const scanHistory = (revisionArguments, scanRoot = repositoryRoot) => {
  const objectIds = parseObjectIds(revisionArguments, scanRoot)
  const inspectedBlobs = []
  const contentByObject = new Map()
  let treeCount = 0
  let commitObjectCount = 0
  let tagObjectCount = 0
  for (const object of objectIds) {
    const type = gitAt(scanRoot, 'cat-file', '-t', object)
    if (type === 'tree') {
      treeCount += 1
      continue
    }
    if (type === 'commit') {
      commitObjectCount += 1
      continue
    }
    if (type === 'tag') {
      tagObjectCount += 1
      continue
    }
    if (type !== 'blob') continue
    const size = Number(gitAt(scanRoot, 'cat-file', '-s', object))
    const buffer =
      size <= contentScanLimitBytes
        ? gitBufferAt(scanRoot, 'cat-file', '-p', object)
        : null
    const inspected = inspectBlobContent({ object, size, buffer })
    inspectedBlobs.push(inspected)
    contentByObject.set(object, inspected)
  }

  const associationEnumeration = enumerateBlobPathAssociations(
    revisionArguments,
    scanRoot,
  )
  const inspectedAssociations = associationEnumeration.associations.map(
    (association) => {
      const content = contentByObject.get(association.object)
      if (!content) {
        throw new Error('reachable tree references an unscanned blob object')
      }
      return inspectPathAssociation({ ...association, content })
    },
  )
  const secretSignals = inspectedBlobs.flatMap((blob) => blob.secretSignals)
  const reviewSignals = [
    ...inspectedBlobs.flatMap((blob) => blob.reviewSignals),
    ...inspectedAssociations.flatMap(
      (association) => association.reviewSignals,
    ),
  ]
  const contentSignalAssociations = inspectedAssociations.flatMap(
    (association) => {
      const content = contentByObject.get(association.object)
      return [...content.secretSignals, ...content.reviewSignals].map(
        (signal) => ({
          category: signal.category,
          object: association.object,
          pathDigest: association.pathDigest,
          valueDigest: signal.valueDigest,
        }),
      )
    },
  )
  const largeObjects = inspectedBlobs
    .filter((blob) => blob.large)
    .map((blob) => {
      const associations = inspectedAssociations.filter(
        (association) => association.object === blob.object,
      )
      return {
        objectDigest: blob.object,
        bytes: blob.size,
        pathAssociationCount: associations.length,
        pathAssociationSetDigest: sha256(
          associations
            .map((association) => association.pathDigest)
            .sort()
            .join('\n'),
        ),
        categories: [
          ...new Set(associations.map(({ category }) => category)),
        ].sort(),
        binary:
          blob.contentBinary ||
          associations.some((association) => association.binary),
      }
    })
    .sort(
      (left, right) =>
        right.bytes - left.bytes ||
        left.objectDigest.localeCompare(right.objectDigest),
    )
  const binaryCategories = [
    ...new Set(
      inspectedAssociations
        .filter((association) => association.binary)
        .map((association) => association.category),
    ),
  ]
    .sort((left, right) => left.localeCompare(right))
    .map((category) => ({
      category,
      count: new Set(
        inspectedAssociations
          .filter(
            (association) =>
              association.binary && association.category === category,
          )
          .map((association) => association.object),
      ).size,
    }))
  const sensitiveAssociations = inspectedAssociations.filter(
    (association) => association.sensitivePathRisk,
  )
  const generatedAssociations = inspectedAssociations.filter(
    (association) => association.generatedOutputRisk,
  )
  const blockers = {
    highConfidenceSecretOccurrenceCount: secretSignals.length,
    sensitivePathAssociationCount: sensitiveAssociations.length,
    sensitivePathBlobCount: new Set(
      sensitiveAssociations.map((association) => association.object),
    ).size,
    generatedOutputPathAssociationCount: generatedAssociations.length,
    generatedOutputBlobCount: new Set(
      generatedAssociations.map((association) => association.object),
    ).size,
    unscannedOversizedBlobCount: inspectedBlobs.filter(
      (blob) => blob.unscannedOversizedRisk,
    ).length,
  }
  const blockerCount = Object.values(blockers).reduce(
    (total, value) => total + value,
    0,
  )
  const authorIdentities = gitAt(
    scanRoot,
    'log',
    ...revisionArguments,
    '--format=%aN <%aE>',
  )
    .split('\n')
    .filter(Boolean)
  const commitCount = Number(
    gitAt(scanRoot, 'rev-list', '--count', ...revisionArguments),
  )
  const mergeCommitCount = Number(
    gitAt(scanRoot, 'rev-list', '--count', '--merges', ...revisionArguments),
  )
  const report = {
    commitCount,
    mergeCommitCount,
    authorIdentityCount: new Set(authorIdentities).size,
    authorIdentitySetDigest: sha256(
      [...new Set(authorIdentities)].sort().join('\n'),
    ),
    objectCount: objectIds.length,
    commitObjectCount,
    treeCount,
    tagObjectCount,
    blobCount: inspectedBlobs.length,
    totalBlobBytes: inspectedBlobs.reduce(
      (total, blob) => total + blob.size,
      0,
    ),
    objectSetDigest: sha256(objectIds.sort().join('\n')),
    pathAssociations: {
      count: inspectedAssociations.length,
      blobCount: new Set(
        inspectedAssociations.map((association) => association.object),
      ).size,
      uniqueCommitTreeCount: associationEnumeration.uniqueCommitTreeCount,
      setDigest: sha256(
        inspectedAssociations
          .map(
            (association) => `${association.object}\0${association.pathDigest}`,
          )
          .sort()
          .join('\n'),
      ),
    },
    pathStateDigest: sha256(
      inspectedAssociations
        .map(
          (association) =>
            `${association.object}\0${association.pathDigest}\0${association.size}\0${association.category}`,
        )
        .sort()
        .join('\n'),
    ),
    binary: {
      count: new Set(
        inspectedAssociations
          .filter((association) => association.binary)
          .map((association) => association.object),
      ).size,
      categories: binaryCategories,
    },
    largeObjects: {
      thresholdBytes: largeObjectThresholdBytes,
      count: largeObjects.length,
      totalBytes: largeObjects.reduce(
        (total, object) => total + object.bytes,
        0,
      ),
      entries: largeObjects,
    },
    reviewSignals: summariseSignals(reviewSignals),
    secretSignals: summariseSignals(secretSignals),
    contentSignalPathAssociations: {
      count: contentSignalAssociations.length,
      setDigest: sha256(
        contentSignalAssociations
          .map(
            (signal) =>
              `${signal.object}\0${signal.pathDigest}\0${signal.category}\0${signal.valueDigest}`,
          )
          .sort()
          .join('\n'),
      ),
    },
    blockers,
    result: blockerCount === 0 ? 'pass' : 'fail',
  }
  return {
    report,
    privacyInputs: {
      paths: associationEnumeration.associations.map(({ path }) => path),
      authorIdentities,
      rawValues: [...secretSignals, ...reviewSignals]
        .filter(
          (signal) => signal.category !== 'customer-or-testimonial-language',
        )
        .map((signal) => signal.rawValue)
        .filter(Boolean),
    },
  }
}

const localRefs = git(
  'for-each-ref',
  '--format=%(refname)%09%(objectname)',
  'refs',
)
  .split('\n')
  .filter(Boolean)
  .map((line) => {
    const [name, object] = line.split('\t')
    const category = name.startsWith('refs/heads/')
      ? 'head'
      : name.startsWith('refs/tags/')
        ? 'tag'
        : name.startsWith('refs/remotes/')
          ? 'remote-tracking'
          : 'other'
    return { name, object, category }
  })
if (localRefs.length === 0)
  throw new Error('history-safety requires at least one local ref')
const configuredRemoteCount = git('remote').split('\n').filter(Boolean).length
const disallowedRefCount = localRefs.filter(
  (reference) => !['head', 'tag'].includes(reference.category),
).length
const refCategories = [
  ...new Set(localRefs.map((reference) => reference.category)),
]
  .sort((left, right) => left.localeCompare(right))
  .map((category) => ({
    category,
    count: localRefs.filter((reference) => reference.category === category)
      .length,
  }))
const refSummary = {
  count: localRefs.length,
  categories: refCategories,
  nameSetDigest: sha256(
    localRefs
      .map((reference) => reference.name)
      .sort()
      .join('\n'),
  ),
  tipSetDigest: sha256(
    localRefs
      .map((reference) => reference.object)
      .sort()
      .join('\n'),
  ),
  configuredRemoteCount,
  disallowedRefCount,
}

const inspectObjectDatabase = () => {
  let connectivityResult = 'pass'
  try {
    git('fsck', '--full', '--strict', '--no-reflogs')
  } catch {
    connectivityResult = 'fail'
  }
  let unreachableLines = []
  try {
    const output = git(
      'fsck',
      '--full',
      '--strict',
      '--no-reflogs',
      '--unreachable',
    )
    unreachableLines = output ? output.split('\n').filter(Boolean) : []
  } catch {
    connectivityResult = 'fail'
  }
  return {
    connectivityResult,
    unreachableObjectCount: unreachableLines.length,
    unreachableSetDigest: sha256(unreachableLines.sort().join('\n')),
  }
}

const assertPrivacySafeEvidence = (candidate, privacyInputs) => {
  const forbiddenKeys = new Set([
    'author',
    'committer',
    'email',
    'hostname',
    'locator',
    'name',
    'path',
    'phone',
    'refname',
    'target',
    'url',
    'value',
  ])
  const emittedNonDigestStrings = []
  const inspect = (value, parentKey = '') => {
    const digestLikeField =
      parentKey.toLowerCase().includes('digest') ||
      ['commit', 'tree'].includes(parentKey.toLowerCase())
    if (typeof value === 'string' && /(?:https?:)?\/\/[a-z0-9]/iu.test(value)) {
      throw new Error('history-safety evidence contains a raw URL-shaped value')
    }
    if (typeof value === 'string' && !digestLikeField) {
      emittedNonDigestStrings.push(value)
    }
    if (Array.isArray(value)) {
      for (const child of value) inspect(child, parentKey)
      return
    }
    if (value === null || typeof value !== 'object') return
    for (const [key, child] of Object.entries(value)) {
      if (forbiddenKeys.has(key.toLowerCase())) {
        throw new Error(
          'history-safety evidence contains a forbidden raw-value field',
        )
      }
      inspect(child, key)
    }
  }
  inspect(candidate)
  const withheldValues = [
    ...privacyInputs.paths,
    ...privacyInputs.authorIdentities,
    ...privacyInputs.rawValues,
  ].filter((value) => typeof value === 'string' && value.trim().length >= 8)
  if (
    withheldValues.some((value) =>
      emittedNonDigestStrings.some((emitted) => emitted.includes(value)),
    )
  ) {
    throw new Error('history-safety evidence contains a withheld raw value')
  }
  return {
    rawSensitiveValuesEmitted: false,
    rawLocatorsEmitted: false,
    rawUrlShapedValuesEmitted: false,
  }
}

const runPrivacyFixtures = () => {
  const fixtureObject = sha256('history-safety-fixture-object').slice(0, 40)
  const inspectTextContent = (fragments) =>
    inspectBlobContent({
      object: fixtureObject,
      size: Buffer.byteLength(fragments.join('')),
      buffer: Buffer.from(fragments.join('')),
    })
  const inspectTextPath = (path, fragments) => {
    const content = inspectTextContent(fragments)
    return inspectPathAssociation({ object: fixtureObject, path, content })
  }
  const fixtures = [
    {
      name: 'constructed-secret-value',
      inspected: inspectTextContent(['AK', 'IA', 'A'.repeat(16)]),
      expected: (result) => result.secretSignals.length === 1,
      outcome: 'rejected',
    },
    {
      name: 'constructed-sensitive-path',
      inspected: inspectTextPath(
        ['fixture/', 'cred', 'entials.json'].join(''),
        ['x'],
      ),
      expected: (result) => result.sensitivePathRisk,
      outcome: 'rejected',
    },
    {
      name: 'constructed-generated-output-path',
      inspected: inspectTextPath(['.', 'next', '/cache/output.js'].join(''), [
        'x',
      ]),
      expected: (result) => result.generatedOutputRisk,
      outcome: 'rejected',
    },
    {
      name: 'constructed-oversized-object',
      inspected: inspectBlobContent({
        object: fixtureObject,
        size: contentScanLimitBytes + 1,
        buffer: null,
      }),
      expected: (result) => result.unscannedOversizedRisk,
      outcome: 'rejected',
    },
    {
      name: 'constructed-customer-contact-value',
      inspected: inspectTextContent(['person', '@', 'customer.invalid']),
      expected: (result) =>
        result.reviewSignals.some(
          (signal) => signal.category === 'email-like-value',
        ),
      outcome: 'detected',
    },
    {
      name: 'constructed-provider-target-value',
      inspected: inspectTextContent([
        'https',
        '://',
        'provider.invalid/account',
      ]),
      expected: (result) =>
        result.reviewSignals.some(
          (signal) => signal.category === 'raw-network-or-provider-target',
        ),
      outcome: 'detected',
    },
  ]
  const classifierResults = fixtures.map((fixture) => {
    if (!fixture.expected(fixture.inspected)) {
      throw new Error(`${fixture.name} fixture was not classified as required`)
    }
    return { name: fixture.name, result: fixture.outcome }
  })
  const valueFixtures = [
    {
      name: 'constructed-raw-locator-output',
      rawValue: ['private', '/customer.file'].join(''),
    },
    {
      name: 'constructed-raw-provider-output',
      rawValue: ['https', '://', 'provider.invalid/raw'].join(''),
    },
  ].map((fixture) => {
    let rejected = false
    try {
      assertPrivacySafeEvidence(
        { category: 'fixture', label: fixture.rawValue },
        { paths: [fixture.rawValue], authorIdentities: [], rawValues: [] },
      )
    } catch {
      rejected = true
    }
    if (!rejected) throw new Error(`${fixture.name} fixture was emitted`)
    return { name: fixture.name, result: 'rejected' }
  })
  const fixtureRoot = mkdtempSync(
    join(tmpdir(), 'unisane-site-history-associations-'),
  )
  let associationFixture
  try {
    gitAt(fixtureRoot, 'init', '--quiet')
    gitAt(fixtureRoot, 'config', 'user.name', 'History Safety Fixture')
    gitAt(fixtureRoot, 'config', 'user.email', 'fixture@invalid.example')
    const sharedContent = 'fixture-shared-blob\n'
    writeFileSync(join(fixtureRoot, 'a-benign.json'), sharedContent)
    writeFileSync(
      join(fixtureRoot, ['cred', 'entials.json'].join('')),
      sharedContent,
    )
    mkdirSync(join(fixtureRoot, 'z', 'build'), { recursive: true })
    writeFileSync(join(fixtureRoot, 'z', 'build', 'output.json'), sharedContent)
    gitAt(fixtureRoot, 'add', '.')
    gitAt(fixtureRoot, 'commit', '--quiet', '-m', 'fixture')
    const fixtureScan = scanHistory(['HEAD'], fixtureRoot).report
    const fixturePassed =
      fixtureScan.blobCount === 1 &&
      fixtureScan.pathAssociations.count === 3 &&
      fixtureScan.pathAssociations.blobCount === 1 &&
      fixtureScan.blockers.sensitivePathAssociationCount === 1 &&
      fixtureScan.blockers.sensitivePathBlobCount === 1 &&
      fixtureScan.blockers.generatedOutputPathAssociationCount === 1 &&
      fixtureScan.blockers.generatedOutputBlobCount === 1 &&
      fixtureScan.result === 'fail'
    if (!fixturePassed) {
      throw new Error(
        'shared-blob path-association fixture was not rejected as required',
      )
    }
    associationFixture = {
      name: 'shared-blob-multiple-path-associations',
      result: 'rejected',
    }
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true })
  }
  return [...classifierResults, ...valueFixtures, associationFixture]
}

const certificateInputs = certificateInputSpecs.map(({ inputId, path }) => {
  if (!existsSync(join(repositoryRoot, path))) {
    throw new Error(`required certificate input is missing: ${path}`)
  }
  return { inputId, path, digest: sha256(read(path)) }
})
const certificateInputDigest = sha256(
  certificateInputs
    .map((input) => `${input.inputId}\0${input.path}\0${input.digest}`)
    .join('\n'),
)
const privacyFixtures = runPrivacyFixtures()

const createCheckpointReceipt = (checkpoint) => {
  const commit = git('rev-parse', `${checkpoint}^{commit}`)
  const tree = git('rev-parse', `${commit}^{tree}`)
  const checkpointScan = scanHistory([commit])
  const checkpointHistory = checkpointScan.report
  if (checkpointHistory.result !== 'pass') {
    throw new Error(
      'checkpoint history contains blocking public-safety findings',
    )
  }
  const privacyAudit = assertPrivacySafeEvidence(
    checkpointHistory,
    checkpointScan.privacyInputs,
  )
  return {
    schemaVersion: 1,
    receiptKind: 'public-history-safety-checkpoint',
    scope:
      'all objects reachable from the exact approved local Site checkpoint',
    checkpoint: { commit, tree },
    sourceBinding: {
      certificateInputDigest,
      inputs: certificateInputs.map(({ inputId, digest }) => ({
        inputId,
        digest,
      })),
    },
    thresholds: {
      largeObjectBytes: largeObjectThresholdBytes,
      failClosedUnscannedObjectBytes: contentScanLimitBytes,
    },
    history: checkpointHistory,
    privacyAudit,
    privacyFixtures,
    liveCompleteHistoryAuthority: {
      command: 'pnpm check:history-safety',
      scope: 'all objects reachable from current approved local heads and tags',
      note: 'The committed receipt is checkpoint-scoped; the live command is the non-self-referential current-history authority.',
    },
    conclusions: {
      technicalCheckpoint: 'pass',
      publicRelease: 'not-authorized',
      rightsLicenseProviderDeploymentAuthority: 'unresolved',
    },
  }
}

let checkpointReceipt
if (writeCheckpoint) {
  checkpointReceipt = createCheckpointReceipt(writeCheckpoint)
  writeFileSync(
    join(repositoryRoot, receiptPath),
    `${JSON.stringify(checkpointReceipt, null, 2)}\n`,
  )
} else {
  if (!existsSync(join(repositoryRoot, receiptPath))) {
    throw new Error('history-safety checkpoint receipt is missing')
  }
  const currentReceiptText = readFileSync(
    join(repositoryRoot, receiptPath),
    'utf8',
  )
  checkpointReceipt = JSON.parse(currentReceiptText)
  const expectedReceipt = createCheckpointReceipt(
    checkpointReceipt.checkpoint?.commit ?? '',
  )
  const expectedText = `${JSON.stringify(expectedReceipt, null, 2)}\n`
  if (currentReceiptText !== expectedText) {
    throw new Error('history-safety checkpoint receipt is stale')
  }
}

const liveScan = scanHistory(localRefs.map((reference) => reference.name))
const liveHistory = liveScan.report
const objectDatabase = inspectObjectDatabase()
const livePrivacyAudit = assertPrivacySafeEvidence(
  { refs: refSummary, objectDatabase, history: liveHistory },
  {
    ...liveScan.privacyInputs,
    paths: [
      ...liveScan.privacyInputs.paths,
      ...localRefs.map((reference) => reference.name),
    ],
  },
)
const liveBlockerCount =
  Object.values(liveHistory.blockers).reduce(
    (total, value) => total + value,
    0,
  ) +
  configuredRemoteCount +
  disallowedRefCount +
  (objectDatabase.connectivityResult === 'pass' ? 0 : 1) +
  objectDatabase.unreachableObjectCount
const report = {
  schemaVersion: 1,
  result: liveBlockerCount === 0 ? 'pass' : 'fail',
  mode: writeCheckpoint ? 'write-checkpoint-and-live-verify' : 'live-verify',
  receiptPath,
  checkpoint: checkpointReceipt.checkpoint,
  certificateInputDigest,
  refs: refSummary,
  objectDatabase,
  liveHistory,
  privacyFixtures,
  networkUsed: false,
  ...livePrivacyAudit,
  authorityChanges: 0,
}

console.log(JSON.stringify(report, null, 2))
if (report.result !== 'pass') process.exitCode = 1
