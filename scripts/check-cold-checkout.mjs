import { execFileSync, spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { JSON_SCHEMA, load as parseYaml } from 'js-yaml'

const sourceRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const parityCommands = [
  'pnpm check:source-safety',
  'pnpm typecheck',
  'pnpm lint',
  'pnpm build',
  'pnpm test',
  'pnpm verify:local-readiness',
  'pnpm check:repository-boundary',
]
const registeredActions = [
  {
    path: 'tools/skopos/actions/site-source-safety.yaml',
    id: 'site.source-safety',
    command: parityCommands[0],
  },
  {
    path: 'tools/skopos/actions/quality-typecheck.yaml',
    id: 'quality.typecheck',
    command: parityCommands[1],
  },
  {
    path: 'tools/skopos/actions/quality-lint.yaml',
    id: 'quality.lint',
    command: parityCommands[2],
  },
  {
    path: 'tools/skopos/actions/quality-build.yaml',
    id: 'quality.build',
    command: parityCommands[3],
  },
  {
    path: 'tools/skopos/actions/quality-test.yaml',
    id: 'quality.test',
    command: parityCommands[4],
  },
  {
    path: 'tools/skopos/actions/site-local-readiness.yaml',
    id: 'site.local-readiness',
    command: parityCommands[5],
  },
  {
    path: 'tools/skopos/actions/repository-boundary.yaml',
    id: 'repository.boundary',
    command: parityCommands[6],
  },
]

const assert = (condition, message) => {
  if (!condition) throw new Error(message)
}

const parseActionDeclaration = (source, label) => {
  let declaration
  try {
    declaration = parseYaml(source, {
      filename: label,
      json: false,
      schema: JSON_SCHEMA,
    })
  } catch (error) {
    throw new Error(
      `${label} is not a structurally valid Action declaration: ${error instanceof Error ? error.message : String(error)}`,
    )
  }
  assert(
    declaration !== null &&
      typeof declaration === 'object' &&
      !Array.isArray(declaration),
    `${label} must contain one Action object`,
  )
  return declaration
}

const validateActionBindings = (bindings, readSource) => {
  const declarations = bindings.map((binding) => ({
    binding,
    declaration: parseActionDeclaration(readSource(binding.path), binding.path),
  }))
  const seenIds = new Set()
  for (const { binding, declaration } of declarations) {
    assert(
      typeof declaration.id === 'string' && declaration.id.length > 0,
      `${binding.path} must declare a non-empty Action id`,
    )
    assert(
      !seenIds.has(declaration.id),
      `${binding.path} duplicates Action id ${declaration.id}`,
    )
    seenIds.add(declaration.id)
  }
  for (const { binding, declaration } of declarations) {
    assert(
      declaration.id === binding.id,
      `${binding.path} declares id ${String(declaration.id)} instead of ${binding.id}`,
    )
    assert(
      declaration.command === binding.command,
      `${binding.path} declares command ${String(declaration.command)} instead of ${binding.command}`,
    )
    assert(
      declaration.cwd === '.',
      `${binding.path} declares cwd ${String(declaration.cwd)} instead of .`,
    )
  }
  return declarations.map(({ binding }) => ({
    path: binding.path,
    id: binding.id,
    command: binding.command,
    cwd: '.',
  }))
}

const runActionBindingRegression = () => {
  const actualBindings = validateActionBindings(registeredActions, (path) =>
    readFileSync(join(sourceRoot, path), 'utf8'),
  )
  const expected = {
    path: '<fixture>',
    id: 'quality.build',
    command: 'pnpm build',
  }
  const negativeCases = [
    {
      name: 'comment-command-decoy',
      source: `# "command": "pnpm build"\nid: quality.build\ncommand: pnpm unsafe-build\ncwd: .\n`,
      expectedMessage:
        'declares command pnpm unsafe-build instead of pnpm build',
    },
    {
      name: 'wrong-cwd',
      source: `id: quality.build\ncommand: pnpm build\ncwd: apps/web\n`,
      expectedMessage: 'declares cwd apps/web instead of .',
    },
    {
      name: 'malformed-declaration',
      source: `id: quality.build\ncommand: [pnpm build\ncwd: .\n`,
      expectedMessage: 'is not a structurally valid Action declaration',
    },
    {
      name: 'duplicate-id',
      bindings: [
        expected,
        {
          path: '<fixture-duplicate>',
          id: 'quality.test',
          command: 'pnpm test',
        },
      ],
      sources: {
        '<fixture>': `id: quality.build\ncommand: pnpm build\ncwd: .\n`,
        '<fixture-duplicate>': `id: quality.build\ncommand: pnpm test\ncwd: .\n`,
      },
      expectedMessage: 'duplicates Action id quality.build',
    },
  ]
  const results = negativeCases.map((fixture) => {
    let rejection = ''
    try {
      const bindings = fixture.bindings ?? [expected]
      validateActionBindings(bindings, (path) =>
        fixture.sources ? fixture.sources[path] : fixture.source,
      )
    } catch (error) {
      rejection = error instanceof Error ? error.message : String(error)
    }
    assert(
      rejection.includes(fixture.expectedMessage),
      `${fixture.name} did not fail closed as expected: ${rejection || '<accepted>'}`,
    )
    return { name: fixture.name, result: 'rejected-as-expected' }
  })
  console.log(
    JSON.stringify(
      {
        schemaVersion: 1,
        check: 'cold-checkout-action-binding-regression',
        result: 'pass',
        actualBindings,
        negativeCases: results,
        networkUsed: false,
      },
      null,
      2,
    ),
  )
}

if (process.argv.includes('--test-action-bindings')) {
  runActionBindingRegression()
  process.exit(0)
}

const temporaryRoot = mkdtempSync(join(tmpdir(), 'unisane-site-cold-'))
const checkoutRoot = join(temporaryRoot, 'unisane-site')
const storeRoot = join(temporaryRoot, 'pnpm-store')
const homeRoot = join(temporaryRoot, 'home')
const npmCacheRoot = join(temporaryRoot, 'npm-cache')
const xdgCacheRoot = join(temporaryRoot, 'xdg-cache')
const emptyNpmrc = join(temporaryRoot, 'empty-npmrc')
const emptyGitConfig = join(temporaryRoot, 'empty-gitconfig')
const expectedNode = readFileSync(
  join(sourceRoot, '.node-version'),
  'utf8',
).trim()
const expectedPnpm = '10.26.0'
const commandResults = []
const report = {
  schemaVersion: 1,
  check: 'site-cold-checkout-and-ci-parity',
  result: 'fail',
  source: {},
  isolation: {
    method: 'git-archive-to-no-remote-git-checkout',
    inheritedNodeModules: false,
    taskLocalStoreInitiallyEmpty: false,
    ambientCredentialsForwarded: false,
    packageRegistryAccess: 'read-only-public-package-retrieval',
    cleanup: 'pending',
  },
  environment: {},
  install: {
    command: 'pnpm install --frozen-lockfile --store-dir <task-local-store>',
    frozenLockfile: true,
    lockfileUnchanged: false,
  },
  ciParity: {
    declaration: 'package.json#scripts.ci:verify',
    providerWorkflow: '.github/workflows/ci.yml',
    commands: parityCommands,
    registeredActionCommandsMatched: false,
    registeredActionBindingsMatched: false,
    registeredActionBindings: [],
  },
  commands: commandResults,
  thresholds: {
    accessibility: null,
    seo: null,
    performance: null,
    interpretation: 'absent-fail-closed',
  },
  failures: [],
}

const cleanEnvironment = {
  PATH: process.env.PATH ?? '',
  HOME: homeRoot,
  TMPDIR: temporaryRoot,
  CI: 'true',
  NEXT_TELEMETRY_DISABLED: '1',
  COREPACK_ENABLE_DOWNLOAD_PROMPT: '0',
  FORCE_COLOR: '0',
  NO_UPDATE_NOTIFIER: '1',
  XDG_CACHE_HOME: xdgCacheRoot,
  npm_config_cache: npmCacheRoot,
  npm_config_userconfig: emptyNpmrc,
  GIT_CONFIG_GLOBAL: emptyGitConfig,
  GIT_CONFIG_NOSYSTEM: '1',
}

const sha256File = (path) =>
  createHash('sha256').update(readFileSync(path)).digest('hex')

const text = (command, args, cwd, options = {}) =>
  execFileSync(command, args, {
    cwd,
    env: cleanEnvironment,
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
    ...options,
  }).trim()

const run = (command, args, cwd, label) => {
  const startedAt = Date.now()
  const result = spawnSync(command, args, {
    cwd,
    env: cleanEnvironment,
    stdio: 'inherit',
  })
  commandResults.push({
    label,
    command: [command, ...args].join(' '),
    exitCode: result.status,
    elapsedMilliseconds: Date.now() - startedAt,
  })
  if (result.error) throw result.error
  if (result.status !== 0) {
    throw new Error(`${label} exited ${result.status ?? 'without a status'}`)
  }
}

try {
  mkdirSync(checkoutRoot)
  mkdirSync(storeRoot)
  mkdirSync(homeRoot)
  mkdirSync(npmCacheRoot)
  mkdirSync(xdgCacheRoot)
  writeFileSync(emptyNpmrc, '')
  writeFileSync(emptyGitConfig, '')

  const sourceCommit = text('git', ['rev-parse', 'HEAD'], sourceRoot)
  const sourceTree = text('git', ['rev-parse', 'HEAD^{tree}'], sourceRoot)
  const trackedStatus = text(
    'git',
    ['status', '--porcelain', '--untracked-files=no'],
    sourceRoot,
  )
  assert(trackedStatus === '', 'source checkout has tracked modifications')

  const archive = execFileSync(
    'git',
    ['archive', '--format=tar', sourceCommit],
    {
      cwd: sourceRoot,
      env: cleanEnvironment,
      encoding: null,
      maxBuffer: 128 * 1024 * 1024,
    },
  )
  const extract = spawnSync('tar', ['-xf', '-', '-C', checkoutRoot], {
    env: cleanEnvironment,
    input: archive,
    stdio: ['pipe', 'inherit', 'inherit'],
  })
  assert(extract.status === 0, 'Git archive extraction failed')

  run(
    'git',
    ['init', '--quiet', '--initial-branch=main'],
    checkoutRoot,
    'git-init',
  )
  run('git', ['add', '--all'], checkoutRoot, 'git-add')
  const checkoutTree = text('git', ['write-tree'], checkoutRoot)
  assert(
    checkoutTree === sourceTree,
    `archive checkout tree ${checkoutTree} differs from source tree ${sourceTree}`,
  )
  const snapshotCommit = text(
    'git',
    ['commit-tree', checkoutTree],
    checkoutRoot,
    {
      input: 'Cold-checkout source snapshot\n',
      env: {
        ...cleanEnvironment,
        GIT_AUTHOR_NAME: 'Unisane Site Cold Check',
        GIT_AUTHOR_EMAIL: 'cold-check@invalid.local',
        GIT_COMMITTER_NAME: 'Unisane Site Cold Check',
        GIT_COMMITTER_EMAIL: 'cold-check@invalid.local',
      },
    },
  )
  run(
    'git',
    ['update-ref', 'refs/heads/main', snapshotCommit],
    checkoutRoot,
    'git-update-ref',
  )
  run('git', ['reset', '--hard', '--quiet'], checkoutRoot, 'git-reset')
  assert(text('git', ['remote'], checkoutRoot) === '', 'checkout has a remote')
  assert(
    !existsSync(join(checkoutRoot, 'node_modules')),
    'node_modules was inherited',
  )
  assert(
    readdirSync(storeRoot).length === 0,
    'task-local pnpm store was not empty',
  )
  report.isolation.taskLocalStoreInitiallyEmpty = true

  const nodeVersion = text('node', ['--version'], checkoutRoot).replace(
    /^v/,
    '',
  )
  const pnpmVersion = text('pnpm', ['--version'], checkoutRoot)
  assert(
    nodeVersion === expectedNode,
    `Node ${nodeVersion} is not ${expectedNode}`,
  )
  assert(
    pnpmVersion === expectedPnpm,
    `pnpm ${pnpmVersion} is not ${expectedPnpm}`,
  )

  const packageJson = JSON.parse(
    readFileSync(join(checkoutRoot, 'package.json'), 'utf8'),
  )
  const declaredParity = parityCommands.join(' && ')
  assert(
    packageJson.scripts?.['ci:verify'] === declaredParity,
    'package.json ci:verify does not exactly match the proven command sequence',
  )
  report.ciParity.registeredActionBindings = validateActionBindings(
    registeredActions,
    (path) => readFileSync(join(checkoutRoot, path), 'utf8'),
  )
  report.ciParity.registeredActionCommandsMatched = true
  report.ciParity.registeredActionBindingsMatched = true

  const lockfilePath = join(checkoutRoot, 'pnpm-lock.yaml')
  const lockfileBefore = sha256File(lockfilePath)
  run(
    'pnpm',
    [
      'install',
      '--frozen-lockfile',
      '--store-dir',
      storeRoot,
      '--reporter',
      'append-only',
    ],
    checkoutRoot,
    'frozen-install',
  )
  const lockfileAfter = sha256File(lockfilePath)
  assert(
    lockfileAfter === lockfileBefore,
    'frozen install changed pnpm-lock.yaml',
  )
  report.install.lockfileSha256 = lockfileAfter
  report.install.lockfileUnchanged = true

  for (const command of parityCommands) {
    const [program, ...args] = command.split(' ')
    run(program, args, checkoutRoot, command)
  }

  const finalStatus = text('git', ['status', '--porcelain'], checkoutRoot)
  assert(
    finalStatus === '',
    `cold checkout is dirty after proof: ${finalStatus}`,
  )
  assert(
    text('git', ['remote'], checkoutRoot) === '',
    'checkout gained a remote',
  )

  report.source = {
    commit: sourceCommit,
    tree: sourceTree,
    reconstructedTree: checkoutTree,
    trackedState: 'clean',
  }
  report.environment = {
    node: nodeVersion,
    pnpm: pnpmVersion,
    platform: process.platform,
    architecture: process.arch,
    interpretation: 'same-host-observation-not-cross-platform-proof',
  }
  report.result = 'pass'
} catch (error) {
  report.failures.push(error instanceof Error ? error.message : String(error))
  process.exitCode = 1
} finally {
  rmSync(temporaryRoot, { recursive: true, force: true })
  report.isolation.cleanup = 'complete'
  console.log(JSON.stringify(report, null, 2))
}
