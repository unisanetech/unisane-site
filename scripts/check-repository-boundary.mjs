import { execFileSync, spawnSync } from 'node:child_process'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { basename, dirname, join, relative, resolve } from 'node:path'
import process from 'node:process'

const git = (...args) =>
  execFileSync('git', args, {
    cwd: process.cwd(),
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim()

const root = git('rev-parse', '--show-toplevel')
const parent = dirname(root)
const tracked = git('ls-files', '-z').split('\0').filter(Boolean)
const remotes = git('remote').split('\n').filter(Boolean)
const remoteUrls = Object.fromEntries(
  remotes.map((name) => [name, git('remote', 'get-url', name)]),
)
const indexEntries = git('ls-files', '--stage').split('\n').filter(Boolean)
const failures = []

const approvedOriginUrls = new Set([
  'git@github.com:unisanetech/unisane-site.git',
  'https://github.com/unisanetech/unisane-site.git',
])
const approvedRemoteTrackingRefs = new Set([
  'refs/remotes/origin/HEAD',
  'refs/remotes/origin/main',
])

const listFiles = (directory) => {
  if (!existsSync(directory)) return []
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? listFiles(path) : [path]
  })
}

const remoteTrackingDirectory = resolve(
  root,
  git('rev-parse', '--git-path', 'refs/remotes'),
)
const looseRemoteTrackingRefs = listFiles(remoteTrackingDirectory).map((path) =>
  join('refs/remotes', relative(remoteTrackingDirectory, path)),
)
const packedRemoteTrackingRefs = git(
  'for-each-ref',
  '--format=%(refname)',
  'refs/remotes/',
)
  .split('\n')
  .filter(Boolean)
const remoteTrackingRefs = [
  ...new Set([...looseRemoteTrackingRefs, ...packedRemoteTrackingRefs]),
]
const fsck = spawnSync(
  'git',
  ['fsck', '--full', '--strict', '--no-reflogs', '--no-progress'],
  { cwd: root, encoding: 'utf8' },
)
const fsckDiagnostics = `${fsck.stdout ?? ''}${fsck.stderr ?? ''}`
  .trim()
  .split('\n')
  .filter(Boolean)

const parentAuthorityNames = [
  '.git',
  '.npmrc',
  'AGENTS.md',
  'package.json',
  'pnpm-workspace.yaml',
  'skopos.config.yaml',
  'turbo.json',
]
const parentAuthority = parentAuthorityNames.filter((name) =>
  existsSync(join(parent, name)),
)

if (basename(root) !== 'unisane-site')
  failures.push('repository directory is not unisane-site')
if (
  tracked.some(
    (path) => path === 'unisane-landing' || path.startsWith('unisane-landing/'),
  )
) {
  failures.push('nested unisane-landing residue is tracked')
}
if (
  remotes.some(
    (name) => name !== 'origin' || !approvedOriginUrls.has(remoteUrls[name]),
  )
) {
  failures.push('repository has an unapproved remote authority')
}
if (remoteTrackingRefs.some((ref) => !approvedRemoteTrackingRefs.has(ref))) {
  failures.push('repository has unapproved remote-tracking refs')
}
if (fsck.status !== 0) failures.push('Git object/ref integrity check failed')
if (parentAuthority.length > 0)
  failures.push('parent container exposes repository authority')
if (indexEntries.some((entry) => entry.startsWith('120000 ')))
  failures.push('tracked symlink exists')
if (indexEntries.some((entry) => entry.startsWith('160000 ')))
  failures.push('tracked submodule exists')
if (existsSync(join(root, '.gitmodules'))) failures.push('.gitmodules exists')

const packageJson = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
if (packageJson.name !== 'unisane-site')
  failures.push('root package identity is not unisane-site')
if (packageJson.packageManager !== 'pnpm@10.26.0') {
  failures.push('package manager is not pnpm@10.26.0')
}
if (packageJson.engines?.node !== '>=24.13.0')
  failures.push('Node engine floor is not 24.13.0')

const dependencyFiles = tracked.filter(
  (path) =>
    path.endsWith('package.json') ||
    path.endsWith('pnpm-lock.yaml') ||
    path.endsWith('pnpm-workspace.yaml') ||
    path.endsWith('.eslintrc.js') ||
    path.endsWith('eslint.config.mjs') ||
    /(?:^|\/)tsconfig(?:\.[^/]+)?\.json$/.test(path) ||
    path.endsWith('next.config.mjs'),
)
const authoredSource = tracked.filter(
  (path) =>
    path.startsWith('apps/web/') &&
    /\.(?:css|js|mjs|ts|tsx)$/.test(path) &&
    !path.includes('/.next/'),
)
const forbiddenPattern =
  /(?:@workspace\/|workspace:|["'](?:file|link|github):|git\+|\.\.\/(?:\.\.\/)*unisane-(?:infrastructure|ops|platforms|pro|ui)(?:\/|$)|\/Users\/[^/]+\/Desktop\/TOP\/)/
const forbiddenMatches = [
  ...new Set([...dependencyFiles, ...authoredSource]),
].filter((path) =>
  forbiddenPattern.test(readFileSync(join(root, path), 'utf8')),
)
if (forbiddenMatches.length > 0)
  failures.push('forbidden dependency or checkout reference exists')

const report = {
  schemaVersion: 1,
  repository: basename(root),
  trackedFileCount: tracked.length,
  remoteCount: remotes.length,
  remoteNames: remotes,
  remoteUrls,
  remoteTrackingRefs,
  gitIntegrity: {
    command: 'git fsck --full --strict --no-reflogs --no-progress',
    exitCode: fsck.status,
    diagnosticCount: fsckDiagnostics.length,
    diagnostics: fsckDiagnostics,
  },
  nestedSourceResidue: tracked.filter(
    (path) => path === 'unisane-landing' || path.startsWith('unisane-landing/'),
  ),
  parentAuthority,
  symlinkCount: indexEntries.filter((entry) => entry.startsWith('120000 '))
    .length,
  submoduleCount: indexEntries.filter((entry) => entry.startsWith('160000 '))
    .length,
  forbiddenDependencyMatches: forbiddenMatches,
  result: failures.length === 0 ? 'pass' : 'fail',
  failures,
}

console.log(JSON.stringify(report, null, 2))
if (failures.length > 0) process.exitCode = 1
