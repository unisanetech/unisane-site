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

The target-owned environment contract documents the sole public input,
`NEXT_PUBLIC_SITE_URL`, with the reserved `https://example.invalid` local placeholder.
It does not approve a canonical domain or authorize a provider value.

## Declared blockers

- content, rights, privacy, and legal owner approval, including the five unapproved
  `legal.*` manifest fields
- canonical domain, tracked network-target, DNS/registrar, privacy/security, and provider
  approval
- owner accessibility/SEO/performance/bundle/image budgets plus cross-platform CI and
  protected preview evidence
- authenticated authority, recovery, CODEOWNERS, security, branch, hosting, analytics,
  deployment, rollback, monitoring, incident, SLO, and cost ownership

The exact manifest fields and evidence requirements are preserved in the generated
foundation receipt and the Phase 2 reconciliation receipt.
