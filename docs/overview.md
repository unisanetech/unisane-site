---
id: 'DOC-2ff5327a5c01'
owner: 'site-maintainers'
scope: workspace
role: architecture
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

At umbrella commit `8dcbadbc556476dfb8866f819400fbb884dc9827`, all candidate Site
source remains under `unisane-landing/**`. No final `unisane-site/**` staging root,
standalone repository, remote, authority cutover, or approved public distribution
exists. The repository-system manifest reports the foundation gate ready and every
later Site gate blocked.

The current tree contains a genuine Next.js marketing-site implementation mixed with a
generic shadcn monorepo template, site-local copied UI source, stale workspace identity,
unverified public claims and assets, a simulated onboarding flow, and incomplete
standalone tooling. It is therefore candidate input for source convergence, not an
extractable repository boundary.

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
