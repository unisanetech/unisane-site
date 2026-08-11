---
title: "Task: Certify the standalone Site preserved-history public-safety checkpoint"
status: active
owner: "bhaskarbarma"
id: T-32542a3f
scope: "workspace"
role: task
lifecycle: active
authority: canonical
provenance: accepted
view: current
risk: high-impact
proofSubject: task-closure
proofBaseline: baseline-b1abcfb92d39f431
lastUpdated: 2026-08-11
---

# Task: Certify the standalone Site preserved-history public-safety checkpoint

## Changelog

- `2026-08-11`: Synchronized Task state `active` from Skopos.

## Goal

Certify the standalone Site preserved-history public-safety checkpoint

## Acceptance

- Bind a deterministic privacy-safe checkpoint receipt to exact approved Site tip 0c208a072a3d28b820f566f3ad6841aeb1c0b9ca, its tree, preserved provenance inputs, and every reachable commit/blob in that checkpoint.
- Scan reachable blob content and paths for high-confidence secret, private/customer-like, raw-provider/network, sensitive-path, generated-output, binary, oversized, and large-object categories while emitting only counts, categories, object/path digests, and aggregate hashes.
- Fail closed on high-confidence secret or sensitive/generated/unscanned oversized risks and prove the same classifiers with deterministic fixtures that contain no complete credential literal, raw sensitive locator, network access, or repository mutation.
- Keep the committed certificate explicitly checkpoint-scoped and make the live complete-history command scan all current approved local refs without claiming a self-referential final-history receipt.
- Update the existing repository.history-safety Action/Guard and Site readiness truth so the receipt, checker, provenance inputs, and owning docs are source-bound and selected proportionally.
- Run every dynamically required Action/Guard, create a fresh immutable high-impact snapshot, close without blockers, and preserve all application/assets and external authority unchanged.

## Non-Goals

- Do not decide legal rights, license, provider approval, deployment, publication, public release, remote governance, or source authority; do not rewrite or filter history.

## Constraints

- Remain local/non-authoritative; no remote scan/contact, network use, push, publish, deploy, DNS, credentials, CI enablement, history rewrite, or target cutover.

## Admission And Workflow

- Workflow: `strict`
- Selected risk/detail: `high-impact` / `detailed`
- Recommended risk/detail: `standard` / `standard`
- Selection source: `explicit-override`
- Reason: The work changes multiple paths, durable guidance, configuration, or a normal coordinated surface.
- Reason: The caller explicitly selected high-impact; Skopos recommended standard and kept both values visible.

## Owned Paths

- `docs/00-start-here.md`
- `docs/reference/generated/repository-public-history-safety-checkpoint-receipt.json`
- `docs/standards/00-repository-readiness-contract.md`
- `docs/work/archive/tasks/T-d08a84ea-certify-the-standalone-site-preserved-history-public-saf.md`
- `scripts/check-history-safety.mjs`
- `tools/skopos/actions/repository-history-safety.yaml`
- `tools/skopos/guards/repository-history-safety.yaml`

## Ownership Expansions

- `2026-08-11T12:08:27.059Z` by `bhaskarbarma`: `docs/work/archive/tasks/T-d08a84ea-certify-the-standalone-site-preserved-history-public-saf.md` — This generated cancelled admission record belongs to the same coordinated assignment and documents the audited correction from automatic standard risk to the explicitly required high-impact Task; retaining it prevents unowned proof contamination.

## Steps

- [x] **Record Task risk and detail before editing** (implementation, complete) — Confirm whether Task risk is light, standard, or high-impact. Keep the active Task current, use a Plan only for multi-Task direction, add a Decision for durable choices, and add or update a Finding for structural gaps.
- [x] **Review the current pattern in unisane-site** (implementation, complete) — Use the compact references to confirm the current scope, command surface, and docs entrypoints before editing code.
- [x] **Implement the smallest scoped change** (implementation, complete) — Carry out "Certify the standalone Site preserved-history public-safety checkpoint" inside the resolved scope before widening impact to adjacent areas.
- [x] **Sync docs and instruction surfaces if touched** (docs, complete) — Keep docs, instruction mirrors, and generated project knowledge aligned with the implementation.
- [ ] **Verify standalone repository boundary and Git integrity** (action, pending) — Required by Guard repository.boundary.
- [ ] **Scan complete reachable history safety** (action, pending) — Required by Guard repository.history-safety.
- [ ] **Verify Site asset, font, and network inventory** (action, pending) — Required by Guard site.asset-inventory.

## Actions And Guards

- Action `repository.boundary`: Required by Guard repository.boundary.
- Action `repository.history-safety`: Required by Guard repository.history-safety.
- Action `site.asset-inventory`: Required by Guard site.asset-inventory.
- Guard `repository.boundary`
- Guard `repository.history-safety`
- Guard `site.asset-inventory`

## Evidence And Readiness

- Bind a deterministic privacy-safe checkpoint receipt to exact approved Site tip 0c208a072a3d28b820f566f3ad6841aeb1c0b9ca, its tree, preserved provenance inputs, and every reachable commit/blob in that checkpoint. (closure, agent-observation)
- Scan reachable blob content and paths for high-confidence secret, private/customer-like, raw-provider/network, sensitive-path, generated-output, binary, oversized, and large-object categories while emitting only counts, categories, object/path digests, and aggregate hashes. (closure, agent-observation)
- Fail closed on high-confidence secret or sensitive/generated/unscanned oversized risks and prove the same classifiers with deterministic fixtures that contain no complete credential literal, raw sensitive locator, network access, or repository mutation. (closure, agent-observation)
- Keep the committed certificate explicitly checkpoint-scoped and make the live complete-history command scan all current approved local refs without claiming a self-referential final-history receipt. (closure, agent-observation)
- Update the existing repository.history-safety Action/Guard and Site readiness truth so the receipt, checker, provenance inputs, and owning docs are source-bound and selected proportionally. (closure, agent-observation)
- Run every dynamically required Action/Guard, create a fresh immutable high-impact snapshot, close without blockers, and preserve all application/assets and external authority unchanged. (closure, agent-observation)
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
  "id": "T-32542a3f",
  "type": "task",
  "status": "active",
  "generatedAt": "2026-08-11T12:08:11.689Z",
  "updatedAt": "2026-08-11T12:24:17.082Z",
  "planIds": [],
  "childTasks": [],
  "state": "active",
  "detail": "detailed",
  "title": "Certify the standalone Site preserved-history public-safety checkpoint",
  "goal": "Certify the standalone Site preserved-history public-safety checkpoint",
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
      "Bind a deterministic privacy-safe checkpoint receipt to exact approved Site tip 0c208a072a3d28b820f566f3ad6841aeb1c0b9ca, its tree, preserved provenance inputs, and every reachable commit/blob in that checkpoint.",
      "Scan reachable blob content and paths for high-confidence secret, private/customer-like, raw-provider/network, sensitive-path, generated-output, binary, oversized, and large-object categories while emitting only counts, categories, object/path digests, and aggregate hashes.",
      "Fail closed on high-confidence secret or sensitive/generated/unscanned oversized risks and prove the same classifiers with deterministic fixtures that contain no complete credential literal, raw sensitive locator, network access, or repository mutation.",
      "Keep the committed certificate explicitly checkpoint-scoped and make the live complete-history command scan all current approved local refs without claiming a self-referential final-history receipt.",
      "Update the existing repository.history-safety Action/Guard and Site readiness truth so the receipt, checker, provenance inputs, and owning docs are source-bound and selected proportionally.",
      "Run every dynamically required Action/Guard, create a fresh immutable high-impact snapshot, close without blockers, and preserve all application/assets and external authority unchanged."
    ],
    "nonGoals": [
      "Do not decide legal rights, license, provider approval, deployment, publication, public release, remote governance, or source authority; do not rewrite or filter history."
    ],
    "constraints": [
      "Remain local/non-authoritative; no remote scan/contact, network use, push, publish, deploy, DNS, credentials, CI enablement, history rewrite, or target cutover."
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
      "ownedPathCount": 6,
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
    "baselineId": "baseline-b1abcfb92d39f431"
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
      "detail": "Carry out \"Certify the standalone Site preserved-history public-safety checkpoint\" inside the resolved scope before widening impact to adjacent areas.",
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
      "status": "pending"
    },
    {
      "id": "action-repository.history-safety",
      "kind": "action",
      "title": "Scan complete reachable history safety",
      "detail": "Required by Guard repository.history-safety.",
      "status": "pending"
    },
    {
      "id": "action-site.asset-inventory",
      "kind": "action",
      "title": "Verify Site asset, font, and network inventory",
      "detail": "Required by Guard site.asset-inventory.",
      "status": "pending"
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
        "docs/reference/generated/repository-public-history-safety-checkpoint-receipt.json",
        "tools/skopos/actions/repository-history-safety.yaml",
        "tools/skopos/guards/repository-history-safety.yaml"
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
        "scripts/check-history-safety.mjs"
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
        "docs/00-start-here.md",
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
      "acceptanceCriterion": "Bind a deterministic privacy-safe checkpoint receipt to exact approved Site tip 0c208a072a3d28b820f566f3ad6841aeb1c0b9ca, its tree, preserved provenance inputs, and every reachable commit/blob in that checkpoint.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-2",
      "acceptanceCriterion": "Scan reachable blob content and paths for high-confidence secret, private/customer-like, raw-provider/network, sensitive-path, generated-output, binary, oversized, and large-object categories while emitting only counts, categories, object/path digests, and aggregate hashes.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-3",
      "acceptanceCriterion": "Fail closed on high-confidence secret or sensitive/generated/unscanned oversized risks and prove the same classifiers with deterministic fixtures that contain no complete credential literal, raw sensitive locator, network access, or repository mutation.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-4",
      "acceptanceCriterion": "Keep the committed certificate explicitly checkpoint-scoped and make the live complete-history command scan all current approved local refs without claiming a self-referential final-history receipt.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-5",
      "acceptanceCriterion": "Update the existing repository.history-safety Action/Guard and Site readiness truth so the receipt, checker, provenance inputs, and owning docs are source-bound and selected proportionally.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-6",
      "acceptanceCriterion": "Run every dynamically required Action/Guard, create a fresh immutable high-impact snapshot, close without blockers, and preserve all application/assets and external authority unchanged.",
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
      "resolutionReason": "Reviewed canonical workspace architecture Memory: this Task changes only repository-local public-history verification and no application, package, runtime, or external authority architecture. The Site readiness standard was updated separately as the owning durable readiness truth.",
      "resolvedAt": "2026-08-11T12:24:17.082Z",
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
      "status": "open"
    },
    {
      "id": "run-repository.history-safety",
      "title": "Scan complete reachable history safety",
      "summary": "Required by Guard repository.history-safety.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "repository.history-safety",
      "blocking": false,
      "status": "open"
    },
    {
      "id": "run-site.asset-inventory",
      "title": "Verify Site asset, font, and network inventory",
      "summary": "Required by Guard site.asset-inventory.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "site.asset-inventory",
      "blocking": false,
      "status": "open"
    }
  ],
  "ownershipExpansions": [
    {
      "paths": [
        "docs/work/archive/tasks/T-d08a84ea-certify-the-standalone-site-preserved-history-public-saf.md"
      ],
      "reason": "This generated cancelled admission record belongs to the same coordinated assignment and documents the audited correction from automatic standard risk to the explicitly required high-impact Task; retaining it prevents unowned proof contamination.",
      "actorId": "bhaskarbarma",
      "recordedAt": "2026-08-11T12:08:27.059Z",
      "baselinePaths": [
        {
          "path": "docs/work/archive/tasks/T-d08a84ea-certify-the-standalone-site-preserved-history-public-saf.md",
          "digest": "e4a3204e2d3d4819517d10bb16263ddea5f6464c4d255d2f53c110044499b43d"
        }
      ],
      "classification": "within-scope",
      "priorScopeId": "workspace",
      "nextScopeId": "workspace",
      "affectedScopeIds": [
        "workspace"
      ]
    }
  ],
  "declaredOwnedPaths": [
    "docs/00-start-here.md",
    "docs/reference/generated/repository-public-history-safety-checkpoint-receipt.json",
    "docs/standards/00-repository-readiness-contract.md",
    "docs/work/archive/tasks/T-d08a84ea-certify-the-standalone-site-preserved-history-public-saf.md",
    "scripts/check-history-safety.mjs",
    "tools/skopos/actions/repository-history-safety.yaml",
    "tools/skopos/guards/repository-history-safety.yaml"
  ]
}
```
<!-- skopos:task-state:end -->
