---
title: "Task: Certify the standalone Site preserved-history public-safety checkpoint"
status: cancelled
owner: "project"
id: T-d08a84ea
scope: "workspace"
role: task
lifecycle: historical
authority: canonical
provenance: accepted
view: exception
risk: standard
proofSubject: task-closure
proofBaseline: baseline-ed31b1938de1eed9
lastUpdated: 2026-08-11
---

# Task: Certify the standalone Site preserved-history public-safety checkpoint

## Changelog

- `2026-08-11`: Synchronized Task state `cancelled` from Skopos.

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

- Workflow: `tracked`
- Selected risk/detail: `standard` / `standard`
- Recommended risk/detail: `standard` / `standard`
- Selection source: `automatic`
- Reason: The work changes multiple paths, durable guidance, configuration, or a normal coordinated surface.

## Owned Paths

- `docs/00-start-here.md`
- `docs/reference/generated/repository-public-history-safety-checkpoint-receipt.json`
- `docs/standards/00-repository-readiness-contract.md`
- `scripts/check-history-safety.mjs`
- `tools/skopos/actions/repository-history-safety.yaml`
- `tools/skopos/guards/repository-history-safety.yaml`

## Ownership Expansions

- None recorded.

## Steps

- [ ] **Record Task risk and detail before editing** (implementation, pending) — Confirm whether Task risk is light, standard, or high-impact. Keep the active Task current, use a Plan only for multi-Task direction, add a Decision for durable choices, and add or update a Finding for structural gaps.
- [ ] **Review the current pattern in unisane-site** (implementation, pending) — Use the compact references to confirm the current scope, command surface, and docs entrypoints before editing code.
- [ ] **Implement the smallest scoped change** (implementation, pending) — Carry out "Certify the standalone Site preserved-history public-safety checkpoint" inside the resolved scope before widening impact to adjacent areas.
- [ ] **Sync docs and instruction surfaces if touched** (docs, pending) — Keep docs, instruction mirrors, and generated project knowledge aligned with the implementation.
- [ ] **Verify standalone repository boundary and Git integrity** (action, pending) — Required by Guard repository.boundary.
- [ ] **Verify Site asset, font, and network inventory** (action, pending) — Required by Guard site.asset-inventory.

## Actions And Guards

- Action `repository.boundary`: Required by Guard repository.boundary.
- Action `site.asset-inventory`: Required by Guard site.asset-inventory.
- Guard `repository.boundary`
- Guard `site.asset-inventory`

## Evidence And Readiness

- Bind a deterministic privacy-safe checkpoint receipt to exact approved Site tip 0c208a072a3d28b820f566f3ad6841aeb1c0b9ca, its tree, preserved provenance inputs, and every reachable commit/blob in that checkpoint. (closure, agent-observation)
- Scan reachable blob content and paths for high-confidence secret, private/customer-like, raw-provider/network, sensitive-path, generated-output, binary, oversized, and large-object categories while emitting only counts, categories, object/path digests, and aggregate hashes. (closure, agent-observation)
- Fail closed on high-confidence secret or sensitive/generated/unscanned oversized risks and prove the same classifiers with deterministic fixtures that contain no complete credential literal, raw sensitive locator, network access, or repository mutation. (closure, agent-observation)
- Keep the committed certificate explicitly checkpoint-scoped and make the live complete-history command scan all current approved local refs without claiming a self-referential final-history receipt. (closure, agent-observation)
- Update the existing repository.history-safety Action/Guard and Site readiness truth so the receipt, checker, provenance inputs, and owning docs are source-bound and selected proportionally. (closure, agent-observation)
- Run every dynamically required Action/Guard, create a fresh immutable high-impact snapshot, close without blockers, and preserve all application/assets and external authority unchanged. (closure, agent-observation)
- Guard repository.boundary: Repository-shape changes require boundary and integrity Evidence (closure, source-bound-action)
- Guard site.asset-inventory: Site asset and reference changes require inventory Evidence (closure, source-bound-action)

## Memory Obligations

- No durable Memory obligation is inferred.

## Portable Task State

This machine-readable block is the durable source used to rebuild local Skopos state.

<!-- skopos:task-state:start -->
```json
{
  "schemaVersion": 1,
  "id": "T-d08a84ea",
  "type": "task",
  "status": "active",
  "generatedAt": "2026-08-11T12:07:26.662Z",
  "updatedAt": "2026-08-11T12:07:52.514Z",
  "planIds": [],
  "childTasks": [],
  "state": "cancelled",
  "detail": "standard",
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
    "baselineId": "baseline-ed31b1938de1eed9"
  },
  "priority": 0,
  "dependencyTaskIds": [],
  "steps": [
    {
      "id": "step-record-task-risk",
      "kind": "implementation",
      "title": "Record Task risk and detail before editing",
      "detail": "Confirm whether Task risk is light, standard, or high-impact. Keep the active Task current, use a Plan only for multi-Task direction, add a Decision for durable choices, and add or update a Finding for structural gaps.",
      "status": "pending"
    },
    {
      "id": "step-review-current-pattern",
      "kind": "implementation",
      "title": "Review the current pattern in unisane-site",
      "detail": "Use the compact references to confirm the current scope, command surface, and docs entrypoints before editing code.",
      "status": "pending"
    },
    {
      "id": "step-implement-scoped-change",
      "kind": "implementation",
      "title": "Implement the smallest scoped change",
      "detail": "Carry out \"Certify the standalone Site preserved-history public-safety checkpoint\" inside the resolved scope before widening impact to adjacent areas.",
      "status": "pending"
    },
    {
      "id": "step-sync-knowledge",
      "kind": "docs",
      "title": "Sync docs and instruction surfaces if touched",
      "detail": "Keep docs, instruction mirrors, and generated project knowledge aligned with the implementation.",
      "status": "pending"
    },
    {
      "id": "action-repository.boundary",
      "kind": "action",
      "title": "Verify standalone repository boundary and Git integrity",
      "detail": "Required by Guard repository.boundary.",
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
  "disposition": {
    "kind": "cancel",
    "reason": "The coordinated assignment explicitly requires high-impact closure; automatic standard admission is insufficient, and no implementation or Evidence has begun.",
    "actorId": "bhaskarbarma",
    "recordedAt": "2026-08-11T12:07:52.514Z",
    "priorState": "active",
    "nextState": "cancelled"
  },
  "declaredOwnedPaths": [
    "docs/00-start-here.md",
    "docs/reference/generated/repository-public-history-safety-checkpoint-receipt.json",
    "docs/standards/00-repository-readiness-contract.md",
    "scripts/check-history-safety.mjs",
    "tools/skopos/actions/repository-history-safety.yaml",
    "tools/skopos/guards/repository-history-safety.yaml"
  ]
}
```
<!-- skopos:task-state:end -->
