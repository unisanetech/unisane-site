---
title: "Task: Generate privacy-safe Site asset, font, and network inventory"
status: active
owner: "bhaskarbarma"
id: T-606d11af
scope: "workspace"
role: task
lifecycle: active
authority: canonical
provenance: accepted
view: current
risk: standard
proofSubject: task-closure
proofBaseline: baseline-d3a00ff218d2062a
lastUpdated: 2026-08-10
---

# Task: Generate privacy-safe Site asset, font, and network inventory

## Changelog

- `2026-08-10`: Synchronized Task state `active` from Skopos.

## Goal

Generate privacy-safe Site asset, font, and network inventory

## Acceptance

- Inventory every tracked Site image/font asset with deterministic locator, sha256, media type, byte size, and dimensions where applicable.
- Represent customer-like or potentially sensitive asset filenames only by stable receipt-local opaque IDs; never reproduce those filenames or sensitive content in the new public receipt.
- Inventory mechanical source/CSS asset, font, and HTTP(S) network-reference locations; external targets are digest-bound and not interpreted as approved providers, domains, claims, or publication destinations.
- Provide deterministic write and stale-receipt verification modes that fail on unsupported tracked asset types, unresolved local asset references, duplicate opaque IDs, or receipt drift.
- Update the docs router and SITE-B09 only to record the mechanical evidence now present while rights, provenance, necessity, optimization, privacy, brand, legal, thresholds, and publication remain open.
- Change no application behavior, asset bytes, package/lock/capability declarations, external systems, or source authority.

## Non-Goals

- Do not delete, optimize, rename, or alter assets; do not decide rights, license, brand, privacy, provider, performance thresholds, release, or publication.

## Constraints

- No remote, push, deploy, DNS, analytics, provider mutation, legal conclusion, or authority cutover.

## Admission And Workflow

- Workflow: `tracked`
- Selected risk/detail: `standard` / `standard`
- Recommended risk/detail: `high-impact` / `detailed`
- Selection source: `explicit-override`
- Reason: The goal contains high-impact signal: privacy.
- Reason: The caller explicitly selected standard; Skopos recommended high-impact and kept both values visible.

## Owned Paths

- `docs/00-start-here.md`
- `docs/reference/generated/site-asset-font-network-inventory.json`
- `docs/standards/00-repository-readiness-contract.md`
- `scripts/check-site-asset-inventory.mjs`

## Ownership Expansions

- None recorded.

## Steps

- [x] **Record Task risk and detail before editing** (implementation, complete) — Confirm whether Task risk is light, standard, or high-impact. Keep the active Task current, use a Plan only for multi-Task direction, add a Decision for durable choices, and add or update a Finding for structural gaps.
- [x] **Review the current pattern in unisane-site** (implementation, complete) — Use the compact references to confirm the current scope, command surface, and docs entrypoints before editing code.
- [x] **Implement the smallest scoped change** (implementation, complete) — Carry out "Generate privacy-safe Site asset, font, and network inventory" inside the resolved scope before widening impact to adjacent areas.
- [x] **Sync docs and instruction surfaces if touched** (docs, complete) — Keep docs, instruction mirrors, and generated project knowledge aligned with the implementation.

## Actions And Guards

- No Action or Guard is selected.

## Evidence And Readiness

- Inventory every tracked Site image/font asset with deterministic locator, sha256, media type, byte size, and dimensions where applicable. (closure, agent-observation)
- Represent customer-like or potentially sensitive asset filenames only by stable receipt-local opaque IDs; never reproduce those filenames or sensitive content in the new public receipt. (closure, agent-observation)
- Inventory mechanical source/CSS asset, font, and HTTP(S) network-reference locations; external targets are digest-bound and not interpreted as approved providers, domains, claims, or publication destinations. (closure, agent-observation)
- Provide deterministic write and stale-receipt verification modes that fail on unsupported tracked asset types, unresolved local asset references, duplicate opaque IDs, or receipt drift. (closure, agent-observation)
- Update the docs router and SITE-B09 only to record the mechanical evidence now present while rights, provenance, necessity, optimization, privacy, brand, legal, thresholds, and publication remain open. (closure, agent-observation)
- Change no application behavior, asset bytes, package/lock/capability declarations, external systems, or source authority. (closure, agent-observation)

## Memory Obligations

- No durable Memory obligation is inferred.

## Portable Task State

This machine-readable block is the durable source used to rebuild local Skopos state.

<!-- skopos:task-state:start -->
```json
{
  "schemaVersion": 1,
  "id": "T-606d11af",
  "type": "task",
  "status": "active",
  "generatedAt": "2026-08-10T21:33:28.474Z",
  "updatedAt": "2026-08-10T21:38:33.199Z",
  "planIds": [],
  "childTasks": [],
  "state": "active",
  "detail": "standard",
  "title": "Generate privacy-safe Site asset, font, and network inventory",
  "goal": "Generate privacy-safe Site asset, font, and network inventory",
  "scope": {
    "query": "workspace",
    "matchedBy": "default-root",
    "scope": {
      "id": "workspace",
      "kind": "workspace",
      "title": "unisane-site",
      "path": ".",
      "aliases": [
        "root"
      ],
      "summary": "unisane-site (public-site).",
      "confidence": "high",
      "ancestorIds": [],
      "profile": "public-site",
      "memoryRoot": "docs",
      "codeRoots": [
        "."
      ],
      "dependsOn": [],
      "owners": [
        "site-maintainers"
      ]
    }
  },
  "contract": {
    "acceptanceCriteria": [
      "Inventory every tracked Site image/font asset with deterministic locator, sha256, media type, byte size, and dimensions where applicable.",
      "Represent customer-like or potentially sensitive asset filenames only by stable receipt-local opaque IDs; never reproduce those filenames or sensitive content in the new public receipt.",
      "Inventory mechanical source/CSS asset, font, and HTTP(S) network-reference locations; external targets are digest-bound and not interpreted as approved providers, domains, claims, or publication destinations.",
      "Provide deterministic write and stale-receipt verification modes that fail on unsupported tracked asset types, unresolved local asset references, duplicate opaque IDs, or receipt drift.",
      "Update the docs router and SITE-B09 only to record the mechanical evidence now present while rights, provenance, necessity, optimization, privacy, brand, legal, thresholds, and publication remain open.",
      "Change no application behavior, asset bytes, package/lock/capability declarations, external systems, or source authority."
    ],
    "nonGoals": [
      "Do not delete, optimize, rename, or alter assets; do not decide rights, license, brand, privacy, provider, performance thresholds, release, or publication."
    ],
    "constraints": [
      "No remote, push, deploy, DNS, analytics, provider mutation, legal conclusion, or authority cutover."
    ]
  },
  "risk": "standard",
  "admission": {
    "recommendedRisk": "high-impact",
    "recommendedDetail": "detailed",
    "selectedRisk": "standard",
    "selectedDetail": "standard",
    "selectionSource": "explicit-override",
    "workflow": "tracked",
    "reasons": [
      "The goal contains high-impact signal: privacy.",
      "The caller explicitly selected standard; Skopos recommended high-impact and kept both values visible."
    ],
    "signals": {
      "goalSignals": [
        "privacy"
      ],
      "ownedPathCount": 4,
      "affectedScopeIds": [
        "workspace"
      ],
      "impactCategories": [
        "docs",
        "workspace-file"
      ],
      "proofSubjectKind": "task-closure"
    }
  },
  "proofSubject": {
    "kind": "task-closure",
    "baselineId": "baseline-d3a00ff218d2062a"
  },
  "priority": 0,
  "dependencyTaskIds": [],
  "steps": [
    {
      "id": "step-record-task-risk",
      "kind": "implementation",
      "title": "Record Task risk and detail before editing",
      "detail": "Confirm whether Task risk is light, standard, or high-impact. Keep the active Task current, use a Plan only for multi-Task direction, add a Decision for durable choices, and add or update a Finding for structural gaps.",
      "status": "complete"
    },
    {
      "id": "step-review-current-pattern",
      "kind": "implementation",
      "title": "Review the current pattern in unisane-site",
      "detail": "Use the compact references to confirm the current scope, command surface, and docs entrypoints before editing code.",
      "status": "complete"
    },
    {
      "id": "step-implement-scoped-change",
      "kind": "implementation",
      "title": "Implement the smallest scoped change",
      "detail": "Carry out \"Generate privacy-safe Site asset, font, and network inventory\" inside the resolved scope before widening impact to adjacent areas.",
      "status": "complete"
    },
    {
      "id": "step-sync-knowledge",
      "kind": "docs",
      "title": "Sync docs and instruction surfaces if touched",
      "detail": "Keep docs, instruction mirrors, and generated project knowledge aligned with the implementation.",
      "status": "complete"
    }
  ],
  "selectedActions": [],
  "selectedGuardIds": [],
  "evidenceRequirements": [
    {
      "id": "acceptance-1",
      "acceptanceCriterion": "Inventory every tracked Site image/font asset with deterministic locator, sha256, media type, byte size, and dimensions where applicable.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-2",
      "acceptanceCriterion": "Represent customer-like or potentially sensitive asset filenames only by stable receipt-local opaque IDs; never reproduce those filenames or sensitive content in the new public receipt.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-3",
      "acceptanceCriterion": "Inventory mechanical source/CSS asset, font, and HTTP(S) network-reference locations; external targets are digest-bound and not interpreted as approved providers, domains, claims, or publication destinations.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-4",
      "acceptanceCriterion": "Provide deterministic write and stale-receipt verification modes that fail on unsupported tracked asset types, unresolved local asset references, duplicate opaque IDs, or receipt drift.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-5",
      "acceptanceCriterion": "Update the docs router and SITE-B09 only to record the mechanical evidence now present while rights, provenance, necessity, optimization, privacy, brand, legal, thresholds, and publication remain open.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-6",
      "acceptanceCriterion": "Change no application behavior, asset bytes, package/lock/capability declarations, external systems, or source authority.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    }
  ],
  "memoryObligations": [],
  "questions": [],
  "recommendations": [],
  "declaredOwnedPaths": [
    "docs/00-start-here.md",
    "docs/reference/generated/site-asset-font-network-inventory.json",
    "docs/standards/00-repository-readiness-contract.md",
    "scripts/check-site-asset-inventory.mjs"
  ]
}
```
<!-- skopos:task-state:end -->
