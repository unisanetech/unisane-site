---
id: 'DOC-2ff5327a5c01'
owner: 'site-maintainers'
scope: workspace
role: overview
lifecycle: durable
authority: supporting
provenance: accepted
view: current
status: accepted
---

# Unisane Site Overview

`unisane-site` is the public Unisane brand, marketing, discovery,
documentation-routing, support-link, and website deployment repository. It is a
publication gateway, not writable product, package, pricing, or technical-contract
truth.

## Current state

The standalone repository exists at `github.com/unisanetech/unisane-site`, uses `main`,
and owns its complete source, workspace, lockfile, CI declarations, documentation,
generated evidence, and local Skopos memory. It no longer depends on the umbrella
checkout, a sibling repository, or the checkout parent.

The repository has one deployable application under `apps/web/**`. UI that is genuinely
Site-specific is app-owned; shared UI is consumed only through immutable released
packages. Generic package shells, copied unused components, simulated onboarding,
empty scaffolds, and `@workspace/*` identities were removed during source convergence.

Repository and remote existence does not approve public content, assets, licensing,
deployment, DNS, analytics, or production operation. Those gates remain fail-closed
until their accountable owners approve them. Final removal of umbrella writable
authority is also an explicit fleet-governance cutover, not something inferred here.

## Ownership

Site owns the public application and Site-local user experience, Site content and
presentation of immutable product projections, Site-specific quality requirements,
deployment implementation after environment approval, and repository-local Project
Memory.

Site does not own Framework, UI, Ops, Pro, or Platforms truth; mutable copies of product
documentation; organization GitHub, DNS, cloud, secret, or provider control planes; or
legal, brand, privacy, security, and production approval by implication.

## Dependency direction

```text
released Unisane UI packages ------> Site application
versioned product projections -----> Site publication content
Site requirements -----------------> Site deployment
Infrastructure desired state ------> GitHub/domain/vendor controls
```

Cross-repository source links, workspace links, symlinks, submodules, branch
dependencies, and parent-checkout discovery are forbidden. The normal install, build,
test, and contribution path works from a clean checkout without Skopos.

## Remaining release gates

Before public release or production deployment, accountable owners must resolve source
and content licensing, NOTICE and attribution, contributor and asset rights, approved
brand claims and support routes, security and recovery ownership, domains and hosting,
analytics and privacy, and measurable accessibility, SEO, performance, availability,
and support budgets.

Historical extraction inventories and dispositions remain under `docs/reference/**` as
evidence. They are not current source authority.
