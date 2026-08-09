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

The authoritative tree now removes the generic template README identity, the simulated
onboarding route/form/success path, every CTA to that route, unapproved contact/social/
legal destinations, empty scaffolds, and copied UI components that have no import path
from the retained routes. A dependency-free Site-local check prevents those behaviors
and broken static internal targets from returning.

This source-safety floor does not make the tree extractable. The remaining Site content,
brand surfaces and assets are retained behind owner/rights blockers, while the local
`@workspace/ui` source alias, package/workspace/tooling/lockfile state, and every legal,
security, operations, deployment, domain and public-release gate remain unresolved.

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
