---
title: "Task: Complete Site local-readiness source input identity"
status: complete
owner: "bhaskarbarma"
id: T-48d463bb
scope: "workspace"
role: task
lifecycle: historical
authority: canonical
provenance: accepted
view: exception
risk: standard
proofSubject: task-closure
proofBaseline: baseline-3ede15211dfe9244
lastUpdated: 2026-08-10
---

# Task: Complete Site local-readiness source input identity

## Changelog

- `2026-08-10`: Synchronized Task state `complete` from Skopos.

## Goal

Complete Site local-readiness source input identity

## Acceptance

- The deterministic sourceInputDigest includes root pnpm-lock.yaml, .node-version, and every mechanically proven directly consumed root build config without widening to unrelated configuration.
- The generated local-readiness baseline is regenerated from a clean production build and remains host-observed, non-evaluated, and explicitly non-portable to CI/cold-clone proof.
- A focused no-network in-memory mutation regression proves a lockfile or required input byte change alters sourceInputDigest and makes the committed baseline stale.
- Performance timings remain excluded from stable equality and no component behavior, claims, assets, thresholds, dependencies, capability scope, immutable prior proof, or external authority changes.
- Selected local-readiness, test, repository-boundary, formatting, diff, and strict fsck proof passes before closure.

## Non-Goals

- None declared.

## Constraints

- None declared.

## Admission And Workflow

- Workflow: `tracked`
- Selected risk/detail: `standard` / `standard`
- Recommended risk/detail: `standard` / `standard`
- Selection source: `automatic`
- Reason: The work changes multiple paths, durable guidance, configuration, or a normal coordinated surface.

## Owned Paths

- `docs/reference/generated/site-local-readiness-baseline.json`
- `docs/standards/00-repository-readiness-contract.md`
- `scripts/check-local-readiness.mjs`
- `tools/skopos/actions/site-local-readiness.yaml`

## Ownership Expansions

- None recorded.

## Steps

- [x] **Record Task risk and detail before editing** (implementation, complete) — Confirm whether Task risk is light, standard, or high-impact. Keep the active Task current, use a Plan only for multi-Task direction, add a Decision for durable choices, and add or update a Finding for structural gaps.
- [x] **Review the current pattern in unisane-site** (implementation, complete) — Use the compact references to confirm the current scope, command surface, and docs entrypoints before editing code.
- [x] **Implement the smallest scoped change** (implementation, complete) — Carry out "Complete Site local-readiness source input identity" inside the resolved scope before widening impact to adjacent areas.
- [x] **Sync docs and instruction surfaces if touched** (docs, complete) — Keep docs, instruction mirrors, and generated project knowledge aligned with the implementation.
- [x] **Verify standalone repository boundary and Git integrity** (action, complete) — Required by Guard repository.boundary.
- [x] **Verify local Site routes, semantics, SEO, and baselines** (action, complete) — Required by Guard site.local-readiness.

## Actions And Guards

- Action `repository.boundary`: Required by Guard repository.boundary.
- Action `site.local-readiness`: Required by Guard site.local-readiness.
- Guard `repository.boundary`
- Guard `site.local-readiness`

## Evidence And Readiness

- The deterministic sourceInputDigest includes root pnpm-lock.yaml, .node-version, and every mechanically proven directly consumed root build config without widening to unrelated configuration. (closure, agent-observation)
- The generated local-readiness baseline is regenerated from a clean production build and remains host-observed, non-evaluated, and explicitly non-portable to CI/cold-clone proof. (closure, agent-observation)
- A focused no-network in-memory mutation regression proves a lockfile or required input byte change alters sourceInputDigest and makes the committed baseline stale. (closure, agent-observation)
- Performance timings remain excluded from stable equality and no component behavior, claims, assets, thresholds, dependencies, capability scope, immutable prior proof, or external authority changes. (closure, agent-observation)
- Selected local-readiness, test, repository-boundary, formatting, diff, and strict fsck proof passes before closure. (closure, agent-observation)
- Guard repository.boundary: Repository-shape changes require boundary and integrity Evidence (closure, source-bound-action)
- Guard site.local-readiness: Site route and readiness changes require local readiness Evidence (closure, source-bound-action)

## Memory Obligations

- No durable Memory obligation is inferred.

## Portable Task State

This machine-readable block is the durable source used to rebuild local Skopos state.

<!-- skopos:task-state:start -->
```json
{
  "schemaVersion": 1,
  "id": "T-48d463bb",
  "type": "task",
  "status": "durable",
  "generatedAt": "2026-08-10T12:44:52.571Z",
  "updatedAt": "2026-08-10T12:54:42.956Z",
  "planIds": [],
  "childTasks": [],
  "state": "complete",
  "detail": "standard",
  "title": "Complete Site local-readiness source input identity",
  "goal": "Complete Site local-readiness source input identity",
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
      "The deterministic sourceInputDigest includes root pnpm-lock.yaml, .node-version, and every mechanically proven directly consumed root build config without widening to unrelated configuration.",
      "The generated local-readiness baseline is regenerated from a clean production build and remains host-observed, non-evaluated, and explicitly non-portable to CI/cold-clone proof.",
      "A focused no-network in-memory mutation regression proves a lockfile or required input byte change alters sourceInputDigest and makes the committed baseline stale.",
      "Performance timings remain excluded from stable equality and no component behavior, claims, assets, thresholds, dependencies, capability scope, immutable prior proof, or external authority changes.",
      "Selected local-readiness, test, repository-boundary, formatting, diff, and strict fsck proof passes before closure."
    ],
    "nonGoals": [],
    "constraints": []
  },
  "risk": "standard",
  "admission": {
    "recommendedRisk": "standard",
    "recommendedDetail": "standard",
    "selectedRisk": "standard",
    "selectedDetail": "standard",
    "selectionSource": "automatic",
    "workflow": "tracked",
    "reasons": [
      "The work changes multiple paths, durable guidance, configuration, or a normal coordinated surface."
    ],
    "signals": {
      "goalSignals": [],
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
    "baselineId": "baseline-3ede15211dfe9244"
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
      "detail": "Carry out \"Complete Site local-readiness source input identity\" inside the resolved scope before widening impact to adjacent areas.",
      "status": "complete"
    },
    {
      "id": "step-sync-knowledge",
      "kind": "docs",
      "title": "Sync docs and instruction surfaces if touched",
      "detail": "Keep docs, instruction mirrors, and generated project knowledge aligned with the implementation.",
      "status": "complete"
    },
    {
      "id": "action-repository.boundary",
      "kind": "action",
      "title": "Verify standalone repository boundary and Git integrity",
      "detail": "Required by Guard repository.boundary.",
      "status": "complete"
    },
    {
      "id": "action-site.local-readiness",
      "kind": "action",
      "title": "Verify local Site routes, semantics, SEO, and baselines",
      "detail": "Required by Guard site.local-readiness.",
      "status": "complete"
    }
  ],
  "selectedActions": [
    {
      "id": "repository.boundary",
      "title": "Verify standalone repository boundary and Git integrity",
      "category": "quality-check",
      "safety": "read-only",
      "sourcePath": "tools/skopos/actions/repository-boundary.yaml",
      "reason": "Required by Guard repository.boundary.",
      "matchedPaths": [
        "tools/skopos/actions/site-local-readiness.yaml"
      ],
      "outputPaths": [],
      "requiresApproval": false
    },
    {
      "id": "site.local-readiness",
      "title": "Verify local Site routes, semantics, SEO, and baselines",
      "category": "quality-check",
      "safety": "mutating",
      "sourcePath": "tools/skopos/actions/site-local-readiness.yaml",
      "reason": "Required by Guard site.local-readiness.",
      "matchedPaths": [
        "scripts/check-local-readiness.mjs",
        "docs/reference/generated/site-local-readiness-baseline.json"
      ],
      "outputPaths": [
        "apps/web/.next"
      ],
      "requiresApproval": true
    }
  ],
  "selectedGuardIds": [
    "repository.boundary",
    "site.local-readiness"
  ],
  "evidenceRequirements": [
    {
      "id": "acceptance-1",
      "acceptanceCriterion": "The deterministic sourceInputDigest includes root pnpm-lock.yaml, .node-version, and every mechanically proven directly consumed root build config without widening to unrelated configuration.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-2",
      "acceptanceCriterion": "The generated local-readiness baseline is regenerated from a clean production build and remains host-observed, non-evaluated, and explicitly non-portable to CI/cold-clone proof.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-3",
      "acceptanceCriterion": "A focused no-network in-memory mutation regression proves a lockfile or required input byte change alters sourceInputDigest and makes the committed baseline stale.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-4",
      "acceptanceCriterion": "Performance timings remain excluded from stable equality and no component behavior, claims, assets, thresholds, dependencies, capability scope, immutable prior proof, or external authority changes.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-5",
      "acceptanceCriterion": "Selected local-readiness, test, repository-boundary, formatting, diff, and strict fsck proof passes before closure.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "guard-repository.boundary",
      "acceptanceCriterion": "Guard repository.boundary: Repository-shape changes require boundary and integrity Evidence",
      "phase": "closure",
      "actionIds": [
        "repository.boundary"
      ],
      "guardIds": [
        "repository.boundary"
      ],
      "evidence": "source-bound-action"
    },
    {
      "id": "guard-site.local-readiness",
      "acceptanceCriterion": "Guard site.local-readiness: Site route and readiness changes require local readiness Evidence",
      "phase": "closure",
      "actionIds": [
        "site.local-readiness"
      ],
      "guardIds": [
        "site.local-readiness"
      ],
      "evidence": "source-bound-action"
    }
  ],
  "memoryObligations": [],
  "questions": [],
  "recommendations": [
    {
      "id": "run-repository.boundary",
      "title": "Verify standalone repository boundary and Git integrity",
      "summary": "Required by Guard repository.boundary.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "repository.boundary",
      "blocking": false,
      "status": "complete"
    },
    {
      "id": "run-site.local-readiness",
      "title": "Verify local Site routes, semantics, SEO, and baselines",
      "summary": "Required by Guard site.local-readiness.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "site.local-readiness",
      "blocking": false,
      "status": "complete"
    }
  ],
  "declaredOwnedPaths": [
    "docs/reference/generated/site-local-readiness-baseline.json",
    "docs/standards/00-repository-readiness-contract.md",
    "scripts/check-local-readiness.mjs",
    "tools/skopos/actions/site-local-readiness.yaml"
  ]
}
```
<!-- skopos:task-state:end -->
