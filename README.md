# unisane-site

Repository-local foundation for company-site.

This materialized foundation is target-owned and has no runtime/build dependency on Unisane Infrastructure or sibling repositories. It does not itself establish remote, release, deployment, legal, or agent-ready authority.

This local repository is a non-authoritative review candidate derived from umbrella
commit `e3cb9c768c1b3b96c059269b2a68d0db1624b9bc`. It has no remote. The umbrella
`dev` branch remains the writable Site authority until a separately approved cutover.

## Local verification

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm check:repository-boundary
corepack pnpm check:history-safety
corepack pnpm test
corepack pnpm typecheck
corepack pnpm lint
corepack pnpm build
```

## Declared blockers

- remoteAuthority: authority.target (unresolved)
- remoteAuthority: governance.codeowners (unresolved)
- remoteAuthority: governance.security (unresolved)
- remoteAuthority: ownership.recovery (unresolved)
- publicRelease: legal.assetRights (unapproved)
- publicRelease: legal.contributors (unapproved)
- publicRelease: legal.license (unapproved)
- publicRelease: legal.notice (unapproved)
- publicRelease: legal.publicDistribution (unapproved)
- productionDeployment: distribution.deployment (unresolved)
- productionDeployment: governance.security (unresolved)
