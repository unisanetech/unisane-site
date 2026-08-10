---
id: 'DOC-2ff5327a5c01'
owner: 'site-maintainers'
scope: workspace
role: overview
lifecycle: durable
authority: supporting
provenance: accepted
view: transition
status: accepted
---

# Unisane Site Overview

The intended `unisane-site` repository is the public Unisane brand, marketing,
discovery, documentation-routing, support-link, and website deployment owner. It is a
publication gateway, not writable product or package truth.

## Current State

This local standalone candidate is filtered from umbrella commit
`e3cb9c768c1b3b96c059269b2a68d0db1624b9bc`. The historical
`unisane-landing/**` path is renamed to repository root, the approved public-site
foundation is materialized, and the candidate has no remote. The umbrella `dev` branch
remains the only writable Site authority.

The authoritative tree now removes the generic template README identity, the simulated
onboarding route/form/success path, every CTA to that route, unapproved contact/social/
legal destinations, empty scaffolds, and copied UI components that have no import path
from the retained routes. A dependency-free Site-local check prevents those behaviors
and broken static internal targets from returning.

The standalone target collapses the three used local UI files into app-owned source,
removes the generic package/config shells, removes every `@workspace/*` identity and
source alias, and owns one Node 24.13.0 / pnpm 10.26.0 workspace and lockfile. Clean
install, source-safety, typecheck, lint, test, and production build proof is local only.

The extraction object database was reduced from 110,009 stored objects to the 341
objects reachable at the reviewed cleanup checkpoint, and the dangling
`refs/remotes/origin/HEAD` residue was removed. The repo-local boundary check now fails
on configured remotes, remote-tracking refs, invalid or dangling refs, and Git
connectivity/integrity errors. The committed filtered-history checkpoint receipt covers
the 12 imported commits; `pnpm check:history-safety` remains the live authority for all
history reachable from the current local refs.

The remaining Site content, brand surfaces, and assets stay behind owner/rights blockers.
Accessibility, SEO, performance, preview/deployment, full public-history review,
target-local Skopos adoption activation, legal, security, operations, domain, remote,
public-release, and production-authority gates remain unresolved.

## Target Relationship

The final dependency direction is downstream only:

```text
released Unisane UI packages ------> Site application
versioned product projections -----> Site publication content
Site requirements -----------------> Site deployment
Infrastructure desired state ------> GitHub/domain/vendor controls
```

The Site never imports sibling source, unpublished packages, writable product docs,
private platform source, or Infrastructure implementation. Its normal contributor and
build path must work without Skopos; repo-local Skopos selects and records the same
conventional commands for maintainers and agents.
