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

const sourceRoot = dirname(dirname(fileURLToPath(import.meta.url)))
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
const parityCommands = [
  'pnpm check:source-safety',
  'pnpm typecheck',
  'pnpm lint',
  'pnpm build',
  'pnpm test',
  'pnpm verify:local-readiness',
  'pnpm check:repository-boundary',
]
const registeredCommands = [
  ['tools/skopos/actions/site-source-safety.yaml', parityCommands[0]],
  ['tools/skopos/actions/quality-typecheck.yaml', parityCommands[1]],
  ['tools/skopos/actions/quality-lint.yaml', parityCommands[2]],
  ['tools/skopos/actions/quality-build.yaml', parityCommands[3]],
  ['tools/skopos/actions/quality-test.yaml', parityCommands[4]],
  ['tools/skopos/actions/site-local-readiness.yaml', parityCommands[5]],
  ['tools/skopos/actions/repository-boundary.yaml', parityCommands[6]],
]
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
    providerWorkflow: 'absent-by-design-pending-remote-and-security-authority',
    commands: parityCommands,
    registeredActionCommandsMatched: false,
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

const assert = (condition, message) => {
  if (!condition) throw new Error(message)
}

const actionCommand = (path) => {
  const source = readFileSync(join(checkoutRoot, path), 'utf8')
  return source.match(/['"]command['"]\s*:\s*['"]([^'"]+)['"]/)?.[1]
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
  for (const [path, expectedCommand] of registeredCommands) {
    assert(
      actionCommand(path) === expectedCommand,
      `${path} does not register ${expectedCommand}`,
    )
  }
  report.ciParity.registeredActionCommandsMatched = true

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
