---
id: 'STD-8ac789a2e657'
owner: 'site-maintainers'
scope: workspace
role: standard
lifecycle: durable
authority: canonical
provenance: accepted
view: current
status: accepted
---

# Unisane Site Standalone Repository Boundary

## Purpose

This Standard defines the maintained boundary of the standalone `unisane-site`
repository. Historical extraction and candidate-readiness records remain evidence only
and do not drive current implementation.

## Repository shape

The repository owns one pnpm workspace and one deployable application:

```text
unisane-site/
├── apps/web/
├── docs/
├── scripts/
├── tests/
├── .github/workflows/
├── AGENTS.md
├── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
```

New top-level packages or deployables require a demonstrated independent owner and
consumer boundary. Empty placeholder directories and generic copied templates are not
retained for anticipated use.

## Dependency boundary

1. Site may consume published, immutable UI packages and versioned product projections.
2. It must not import sibling source, the umbrella, Infrastructure implementation, or
   the checkout parent.
3. Cross-repository `workspace:`, `file:`, `link:`, Git branch, symlink, and submodule
   dependencies are forbidden.
4. Site-local UI remains inside `apps/web/**`; reusable shared UI belongs to
   `unisane-ui` and is consumed as a released package.
5. A clean checkout must install and run conventional checks without Skopos or another
   repository being present.

The live repository may have only the canonical `origin` for
`github.com/unisanetech/unisane-site`; portable archive checkouts may have no remote.
Additional remotes, non-canonical origin URLs, and remote-tracking refs outside
`origin/main` and its optional symbolic `origin/HEAD` are forbidden.

## Truth and publishing boundary

Site owns presentation and Site-local content. Product facts, package contracts,
pricing, and technical documentation remain authoritative in their producer
repositories and arrive only as immutable projections.

Public repository visibility is not legal, brand, privacy, security, deployment, or
production approval. License, NOTICE, contributor rights, assets, public claims,
support routes, analytics, domains, hosting, and operational ownership remain
fail-closed until their accountable owners record approval.

## Operational boundary

Site owns application deployment declarations and runtime checks after environments
are approved. Infrastructure owns organization, repository-policy, DNS/provider desired
state, and reviewed external mutations. Neither repository imports the other's source.

Skopos owns repository-local development Tasks, Evidence, and Readiness only. Product
runtime and normal contributor commands do not depend on it.

## Focused proof

Changes select the narrowest relevant repository-local checks. Documentation-only
changes do not require a full application build. Source, dependency, or deployment
changes use the affected typecheck, lint, test, build, boundary, asset, and readiness
checks selected by the owning Task.
