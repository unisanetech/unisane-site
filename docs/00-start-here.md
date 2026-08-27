---
id: 'G-ea6d33f5d156'
owner: 'site-maintainers'
scope: workspace
role: router
lifecycle: active
authority: canonical
provenance: accepted
view: current
---

# Unisane Site Documentation

This is the documentation router for the standalone `unisane-site` repository. The
repository and its `main` remote exist; the final one-authority cutover from the umbrella
remains a separate explicit governance action.

## Start here

- [Site overview](overview.md)
- [Standalone repository boundary](standards/01-standalone-repository-boundary.md)
- [Repository provenance](repository-provenance.json)
- [Generated foundation receipt](reference/generated/repository-foundation-receipt.json)
- [Filtered-history checkpoint receipt](reference/generated/repository-filtered-history-checkpoint-receipt.json)
- [Extraction object-hygiene checkpoint](reference/generated/repository-extraction-integrity-receipt.json)
- [Public-history safety checkpoint](reference/generated/repository-public-history-safety-checkpoint-receipt.json)
- [Site asset, font, and network inventory](reference/generated/site-asset-font-network-inventory.json)
- [Site environment-variable contract](reference/site-environment-variable-contract.json)

## Current product memory

- [SEO and public URL management gap](findings/F-20260420-web-seo-and-public-url-management-gap.md)

## Historical migration evidence

- [Repository readiness contract](standards/00-repository-readiness-contract.md)
- [Source and history inventory](reference/current-source-and-history-inventory.md)
- [Source-safety disposition](reference/source-safety-disposition.md)

`AGENTS.md`, `skopos.config.yaml`, and the local Scope own repository-local agent and
Project Memory behavior. Skopos Tasks, Evidence, Readiness, and closure are local to this
repository and do not depend on the umbrella.

`pnpm check:repository-boundary` is the live repository boundary and Git integrity
authority. `pnpm check:history-safety` is the live complete reachable-history safety
authority. The committed public-history safety receipt binds the exact approved local
checkpoint and preserved-provenance inputs; it records only hashes, counts, and
categories. It is not a self-referential final-history receipt, so the live command
continues to scan every object reachable from current approved local refs. The earlier
filtered-history receipt remains limited to its pre-materialization checkpoint.
`pnpm check:asset-inventory` verifies the privacy-safe mechanical
asset, font, and source/CSS network-reference receipt. That receipt records no rights,
provider, privacy, performance-threshold, publication, or release conclusion.
`scripts/check-local-readiness.mjs` also validates the one public Site environment input
against the target-owned contract. Its reserved placeholder is local documentation only;
the canonical domain and provider value remain unapproved.
