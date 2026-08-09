import { execFileSync } from 'node:child_process'
import process from 'node:process'

const git = (...args) =>
  execFileSync('git', args, {
    cwd: process.cwd(),
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim()

const objectRows = git('rev-list', '--objects', '--all')
  .split('\n')
  .filter(Boolean)
  .map((row) => {
    const separator = row.indexOf(' ')
    return separator === -1
      ? { object: row, path: '' }
      : { object: row.slice(0, separator), path: row.slice(separator + 1) }
  })

const blobRows = []
const seen = new Set()
for (const row of objectRows) {
  if (seen.has(row.object)) continue
  seen.add(row.object)
  if (git('cat-file', '-t', row.object) !== 'blob') continue
  const size = Number(git('cat-file', '-s', row.object))
  blobRows.push({ ...row, size })
}

const secretPatterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\bgh[opsu]_[A-Za-z0-9]{36,255}\b/,
  /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/,
  /\bAIza[0-9A-Za-z_-]{35}\b/,
]
const sensitivePathPattern =
  /(?:^|\/)(?:\.env(?:\..*)?|id_(?:rsa|dsa|ecdsa|ed25519)|credentials(?:\.[^/]*)?|[^/]+\.(?:key|pem|p12|pfx))$/i
const secretCandidates = []
const sensitivePathCandidates = []
const largeBlobs = []
let binaryBlobCount = 0
let totalBlobBytes = 0

for (const row of blobRows) {
  totalBlobBytes += row.size
  if (row.size >= 1024 * 1024) {
    largeBlobs.push({ object: row.object, path: row.path, bytes: row.size })
  }
  if (row.size > 8 * 1024 * 1024) continue
  const buffer = execFileSync('git', ['cat-file', '-p', row.object], {
    cwd: process.cwd(),
    encoding: 'buffer',
    maxBuffer: 9 * 1024 * 1024,
  })
  const binary = buffer.includes(0)
  if (binary) {
    binaryBlobCount += 1
    continue
  }
  const content = buffer.toString('utf8')
  if (secretPatterns.some((pattern) => pattern.test(content))) {
    secretCandidates.push({ object: row.object, path: row.path })
  }
  if (sensitivePathPattern.test(row.path) && content.trim() !== '') {
    sensitivePathCandidates.push({ object: row.object, path: row.path })
  }
}

const report = {
  schemaVersion: 1,
  commitCount: Number(git('rev-list', '--count', '--all')),
  mergeCommitCount: Number(git('rev-list', '--count', '--merges', '--all')),
  authorCount: new Set(git('log', '--all', '--format=%aN <%aE>').split('\n').filter(Boolean)).size,
  blobCount: blobRows.length,
  totalBlobBytes,
  binaryBlobCount,
  largeBlobs: largeBlobs.sort((a, b) => a.path.localeCompare(b.path)),
  highConfidenceSecretCandidateCount: secretCandidates.length,
  sensitivePathCandidateCount: sensitivePathCandidates.length,
  result:
    secretCandidates.length === 0 && sensitivePathCandidates.length === 0 ? 'pass' : 'fail',
}

console.log(JSON.stringify(report, null, 2))
if (report.result !== 'pass') process.exitCode = 1
