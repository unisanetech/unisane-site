---
title: "Task: Make Site history path-association safety fail closed"
status: complete
owner: "bhaskarbarma"
id: T-521499bb
scope: "workspace"
role: task
lifecycle: historical
authority: canonical
provenance: accepted
view: exception
risk: high-impact
proofSubject: task-closure
proofBaseline: baseline-c2e9ad4133dd62c4
lastUpdated: 2026-08-11
---

# Task: Make Site history path-association safety fail closed

## Changelog

- `2026-08-11`: Synchronized Task state `complete` from Skopos.

## Goal

Make Site history path-association safety fail closed

## Acceptance

- Enumerate every reachable blob-path association across the exact checkpoint commit set and current approved local heads/tags using unique reachable commit trees, while keeping blob content scanning deduplicated.
- Apply sensitive, generated-output, customer-like, provider-like, and path-state classification to the complete association set and expose deterministic association count/set digest coverage.
- Add a real temporary Git fixture that commits one non-empty blob at a benign path and at sensitive and generated-output paths, then proves enumeration-level blockers fire without network or repository mutation.
- Regenerate the privacy-safe checkpoint receipt for exact checkpoint 0c208a072a3d28b820f566f3ad6841aeb1c0b9ca and preserve zero raw sensitive values or locators in durable output.
- Rerun repository.history-safety, repository.boundary, and site.asset-inventory Evidence plus strict and unreachable fsck proof with no history rewrite, remote, application, asset, or authority change.
- Close with a fresh immutable high-impact snapshot and report raw receipt SHA-256 separately from Skopos snapshot/source digests.

## Non-Goals

- Do not alter application content/assets, legal or rights conclusions, provider/deployment/publication authority, remotes, or preserved Git history.

## Constraints

- Preserve the ordered four-commit prefix through 74ac2f93059a7877de7f9664025c5a5ef5228edb unchanged and add only immutable successors.

## Admission And Workflow

- Workflow: `strict`
- Selected risk/detail: `high-impact` / `detailed`
- Recommended risk/detail: `standard` / `standard`
- Selection source: `explicit-override`
- Reason: The work changes multiple paths, durable guidance, configuration, or a normal coordinated surface.
- Reason: The caller explicitly selected high-impact; Skopos recommended standard and kept both values visible.

## Owned Paths

- `docs/reference/generated/repository-public-history-safety-checkpoint-receipt.json`
- `docs/standards/00-repository-readiness-contract.md`
- `scripts/check-history-safety.mjs`

## Ownership Expansions

- None recorded.

## Steps

- [x] **Record Task risk and detail before editing** (implementation, complete) — Confirm whether Task risk is light, standard, or high-impact. Keep the active Task current, use a Plan only for multi-Task direction, add a Decision for durable choices, and add or update a Finding for structural gaps.
- [x] **Review the current pattern in unisane-site** (implementation, complete) — Use the compact references to confirm the current scope, command surface, and docs entrypoints before editing code.
- [x] **Implement the smallest scoped change** (implementation, complete) — Carry out "Make Site history path-association safety fail closed" inside the resolved scope before widening impact to adjacent areas.
- [x] **Sync docs and instruction surfaces if touched** (docs, complete) — Keep docs, instruction mirrors, and generated project knowledge aligned with the implementation.
- [x] **Verify standalone repository boundary and Git integrity** (action, complete) — Required by Guard repository.boundary.
- [x] **Scan complete reachable history safety** (action, complete) — Required by Guard repository.history-safety.
- [x] **Verify Site asset, font, and network inventory** (action, complete) — Required by Guard site.asset-inventory.

## Actions And Guards

- Action `repository.boundary`: Required by Guard repository.boundary.
- Action `repository.history-safety`: Required by Guard repository.history-safety.
- Action `site.asset-inventory`: Required by Guard site.asset-inventory.
- Guard `repository.boundary`
- Guard `repository.history-safety`
- Guard `site.asset-inventory`

## Evidence And Readiness

- Enumerate every reachable blob-path association across the exact checkpoint commit set and current approved local heads/tags using unique reachable commit trees, while keeping blob content scanning deduplicated. (closure, agent-observation)
- Apply sensitive, generated-output, customer-like, provider-like, and path-state classification to the complete association set and expose deterministic association count/set digest coverage. (closure, agent-observation)
- Add a real temporary Git fixture that commits one non-empty blob at a benign path and at sensitive and generated-output paths, then proves enumeration-level blockers fire without network or repository mutation. (closure, agent-observation)
- Regenerate the privacy-safe checkpoint receipt for exact checkpoint 0c208a072a3d28b820f566f3ad6841aeb1c0b9ca and preserve zero raw sensitive values or locators in durable output. (closure, agent-observation)
- Rerun repository.history-safety, repository.boundary, and site.asset-inventory Evidence plus strict and unreachable fsck proof with no history rewrite, remote, application, asset, or authority change. (closure, agent-observation)
- Close with a fresh immutable high-impact snapshot and report raw receipt SHA-256 separately from Skopos snapshot/source digests. (closure, agent-observation)
- Guard repository.boundary: Repository-shape changes require boundary and integrity Evidence (closure, source-bound-action)
- Guard repository.history-safety: Provenance and extraction changes require complete-history Evidence (closure, source-bound-action)
- Guard site.asset-inventory: Site asset and reference changes require inventory Evidence (closure, source-bound-action)

## Memory Obligations

- [complete] architecture: High-impact work must review and synchronize durable Memory for Scope workspace.; resolution: reviewed-no-change

## Portable Task State

This machine-readable block is the durable source used to rebuild local Skopos state.

<!-- skopos:task-state:start -->
```json
{
  "schemaVersion": 1,
  "id": "T-521499bb",
  "type": "task",
  "status": "durable",
  "generatedAt": "2026-08-11T12:43:41.835Z",
  "updatedAt": "2026-08-11T12:55:03.023Z",
  "planIds": [],
  "childTasks": [],
  "state": "complete",
  "detail": "detailed",
  "title": "Make Site history path-association safety fail closed",
  "goal": "Make Site history path-association safety fail closed",
  "scope": {
    "query": "workspace",
    "matchedBy": "id",
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
      "Enumerate every reachable blob-path association across the exact checkpoint commit set and current approved local heads/tags using unique reachable commit trees, while keeping blob content scanning deduplicated.",
      "Apply sensitive, generated-output, customer-like, provider-like, and path-state classification to the complete association set and expose deterministic association count/set digest coverage.",
      "Add a real temporary Git fixture that commits one non-empty blob at a benign path and at sensitive and generated-output paths, then proves enumeration-level blockers fire without network or repository mutation.",
      "Regenerate the privacy-safe checkpoint receipt for exact checkpoint 0c208a072a3d28b820f566f3ad6841aeb1c0b9ca and preserve zero raw sensitive values or locators in durable output.",
      "Rerun repository.history-safety, repository.boundary, and site.asset-inventory Evidence plus strict and unreachable fsck proof with no history rewrite, remote, application, asset, or authority change.",
      "Close with a fresh immutable high-impact snapshot and report raw receipt SHA-256 separately from Skopos snapshot/source digests."
    ],
    "nonGoals": [
      "Do not alter application content/assets, legal or rights conclusions, provider/deployment/publication authority, remotes, or preserved Git history."
    ],
    "constraints": [
      "Preserve the ordered four-commit prefix through 74ac2f93059a7877de7f9664025c5a5ef5228edb unchanged and add only immutable successors."
    ]
  },
  "risk": "high-impact",
  "admission": {
    "recommendedRisk": "standard",
    "recommendedDetail": "standard",
    "selectedRisk": "high-impact",
    "selectedDetail": "detailed",
    "selectionSource": "explicit-override",
    "workflow": "strict",
    "reasons": [
      "The work changes multiple paths, durable guidance, configuration, or a normal coordinated surface.",
      "The caller explicitly selected high-impact; Skopos recommended standard and kept both values visible."
    ],
    "signals": {
      "goalSignals": [],
      "ownedPathCount": 3,
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
    "baselineId": "baseline-c2e9ad4133dd62c4"
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
      "detail": "Carry out \"Make Site history path-association safety fail closed\" inside the resolved scope before widening impact to adjacent areas.",
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
      "id": "action-repository.history-safety",
      "kind": "action",
      "title": "Scan complete reachable history safety",
      "detail": "Required by Guard repository.history-safety.",
      "status": "complete"
    },
    {
      "id": "action-site.asset-inventory",
      "kind": "action",
      "title": "Verify Site asset, font, and network inventory",
      "detail": "Required by Guard site.asset-inventory.",
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
        "docs/reference/generated/repository-public-history-safety-checkpoint-receipt.json"
      ],
      "outputPaths": [],
      "requiresApproval": false
    },
    {
      "id": "repository.history-safety",
      "title": "Scan complete reachable history safety",
      "category": "quality-check",
      "safety": "read-only",
      "sourcePath": "tools/skopos/actions/repository-history-safety.yaml",
      "reason": "Required by Guard repository.history-safety.",
      "matchedPaths": [
        "scripts/check-history-safety.mjs",
        "docs/reference/generated/repository-public-history-safety-checkpoint-receipt.json",
        "docs/standards/00-repository-readiness-contract.md"
      ],
      "outputPaths": [],
      "requiresApproval": false
    },
    {
      "id": "site.asset-inventory",
      "title": "Verify Site asset, font, and network inventory",
      "category": "quality-check",
      "safety": "read-only",
      "sourcePath": "tools/skopos/actions/site-asset-inventory.yaml",
      "reason": "Required by Guard site.asset-inventory.",
      "matchedPaths": [
        "docs/standards/00-repository-readiness-contract.md"
      ],
      "outputPaths": [],
      "requiresApproval": false
    }
  ],
  "selectedGuardIds": [
    "repository.boundary",
    "repository.history-safety",
    "site.asset-inventory"
  ],
  "evidenceRequirements": [
    {
      "id": "acceptance-1",
      "acceptanceCriterion": "Enumerate every reachable blob-path association across the exact checkpoint commit set and current approved local heads/tags using unique reachable commit trees, while keeping blob content scanning deduplicated.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-2",
      "acceptanceCriterion": "Apply sensitive, generated-output, customer-like, provider-like, and path-state classification to the complete association set and expose deterministic association count/set digest coverage.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-3",
      "acceptanceCriterion": "Add a real temporary Git fixture that commits one non-empty blob at a benign path and at sensitive and generated-output paths, then proves enumeration-level blockers fire without network or repository mutation.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-4",
      "acceptanceCriterion": "Regenerate the privacy-safe checkpoint receipt for exact checkpoint 0c208a072a3d28b820f566f3ad6841aeb1c0b9ca and preserve zero raw sensitive values or locators in durable output.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-5",
      "acceptanceCriterion": "Rerun repository.history-safety, repository.boundary, and site.asset-inventory Evidence plus strict and unreachable fsck proof with no history rewrite, remote, application, asset, or authority change.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-6",
      "acceptanceCriterion": "Close with a fresh immutable high-impact snapshot and report raw receipt SHA-256 separately from Skopos snapshot/source digests.",
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
      "id": "guard-repository.history-safety",
      "acceptanceCriterion": "Guard repository.history-safety: Provenance and extraction changes require complete-history Evidence",
      "phase": "closure",
      "actionIds": [
        "repository.history-safety"
      ],
      "guardIds": [
        "repository.history-safety"
      ],
      "evidence": "source-bound-action"
    },
    {
      "id": "guard-site.asset-inventory",
      "acceptanceCriterion": "Guard site.asset-inventory: Site asset and reference changes require inventory Evidence",
      "phase": "closure",
      "actionIds": [
        "site.asset-inventory"
      ],
      "guardIds": [
        "site.asset-inventory"
      ],
      "evidence": "source-bound-action"
    }
  ],
  "memoryObligations": [
    {
      "id": "memory-architecture-21a3230e03",
      "role": "architecture",
      "reason": "High-impact work must review and synchronize durable Memory for Scope workspace.",
      "status": "complete",
      "resolution": "reviewed-no-change",
      "resolutionReason": "The correction changes only target-local verification mechanics and checkpoint evidence; the Site readiness standard was synchronized, while application/runtime architecture and external authority remain unchanged.",
      "resolvedAt": "2026-08-11T12:50:23.863Z",
      "resolvedByActorId": "bhaskarbarma"
    }
  ],
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
      "id": "run-repository.history-safety",
      "title": "Scan complete reachable history safety",
      "summary": "Required by Guard repository.history-safety.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "repository.history-safety",
      "blocking": false,
      "status": "complete"
    },
    {
      "id": "run-site.asset-inventory",
      "title": "Verify Site asset, font, and network inventory",
      "summary": "Required by Guard site.asset-inventory.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "site.asset-inventory",
      "blocking": false,
      "status": "complete"
    }
  ],
  "declaredOwnedPaths": [
    "docs/reference/generated/repository-public-history-safety-checkpoint-receipt.json",
    "docs/standards/00-repository-readiness-contract.md",
    "scripts/check-history-safety.mjs"
  ]
}
```
<!-- skopos:task-state:end -->
