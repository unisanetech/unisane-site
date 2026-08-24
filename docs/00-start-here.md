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

This is the repository-local documentation router for the non-authoritative standalone
Site candidate. The umbrella `dev` branch remains writable authority until a separately
approved cutover.

## Start here

- [Site overview](overview.md)
- [Repository readiness contract](standards/00-repository-readiness-contract.md)
- [Source and history inventory](reference/current-source-and-history-inventory.md)
- [Source-safety disposition](reference/source-safety-disposition.md)
- [Repository provenance](repository-provenance.json)
- [Generated foundation receipt](reference/generated/repository-foundation-receipt.json)
- [Filtered-history checkpoint receipt](reference/generated/repository-filtered-history-checkpoint-receipt.json)
- [Extraction object-hygiene checkpoint](reference/generated/repository-extraction-integrity-receipt.json)
- [Public-history safety checkpoint](reference/generated/repository-public-history-safety-checkpoint-receipt.json)
- [Site asset, font, and network inventory](reference/generated/site-asset-font-network-inventory.json)
- [Phase 2 foundation and source reconciliation](reference/phase-2-foundation-and-source-reconciliation.json)

The approved bootstrap owns `AGENTS.md`, `skopos.config.yaml`, and the local Scope.
Reviewed existing-project adoption is activated for target-local Skopos Tasks, Evidence,
Readiness, and closure only. It does not transfer source authority: the umbrella `dev`
branch remains writable Site authority until a separately approved cutover.

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
