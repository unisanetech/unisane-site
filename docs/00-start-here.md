---
id: 'G-ea6d33f5d156'
owner: 'site-maintainers'
scope: workspace
role: guide
lifecycle: active
authority: canonical
provenance: generated
view: current
---

# Unisane Site Documentation

This is the repository-local documentation router for the non-authoritative standalone
Site candidate. The umbrella `dev` branch remains writable authority until a separately
approved cutover.

## Start here

- [Site overview](overview.md)
- [Repository readiness contract](architecture/00-repository-readiness-contract.md)
- [Source and history inventory](reference/current-source-and-history-inventory.md)
- [Source-safety disposition](reference/source-safety-disposition.md)
- [Repository provenance](repository-provenance.json)
- [Generated foundation receipt](reference/generated/repository-foundation-receipt.json)
- [Filtered-history checkpoint receipt](reference/generated/repository-filtered-history-checkpoint-receipt.json)
- [Extraction object-hygiene checkpoint](reference/generated/repository-extraction-integrity-receipt.json)

The approved bootstrap owns `AGENTS.md`, `skopos.config.yaml`, and the local Scope.
Existing-project adoption remains review-only until source-authority cutover.

`pnpm check:repository-boundary` is the live repository boundary and Git integrity
authority. `pnpm check:history-safety` is the live complete reachable-history safety
authority; the committed filtered-history receipt covers only the pre-materialization
filtered checkpoint and avoids a self-referential final-history claim.
