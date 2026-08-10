---
title: "Task: Certify the activated local Site adoption bundle"
status: complete
owner: "bhaskarbarma"
id: T-88c6a705
scope: "workspace"
role: task
lifecycle: historical
authority: canonical
provenance: accepted
view: exception
risk: high-impact
proofSubject: project-integration
proofBaseline: baseline-c3db525d46d87ac3
lastUpdated: 2026-08-10
---

# Task: Certify the activated local Site adoption bundle

## Changelog

- `2026-08-10`: Synchronized Task state `complete` from Skopos.

## Goal

Certify the activated local Site adoption bundle

## Acceptance

- Adoption proposal 926698b80dd1c44fbc89024743f43f80e0c5e12aac5eee4cd603a30666c5704c is agent-ready with exactly the four reviewed document operations and no information loss or authority change.
- The 14 registered Action and Guard declarations remain equivalent to applied capability-set receipt ce0b1eb91547906d2950803215374fe5a87e5e8eabc70c535415f0879be77bc6, with dev and start absent.
- All seven registered local verification Actions pass against the activated candidate, including approved build and test execution.
- The committed diff contains only the exact adoption documents, registered declarations, and generated Task closure artifacts; no source-authority or external-system cutover occurs.

## Non-Goals

- Do not change application source, dependencies, deployment, remotes, DNS, analytics, providers, legal or rights state, public release, or production authority.

## Constraints

- Keep the candidate local and non-authoritative outside target-local Skopos workflow readiness.

## Admission And Workflow

- Workflow: `strict`
- Selected risk/detail: `high-impact` / `detailed`
- Recommended risk/detail: `high-impact` / `detailed`
- Selection source: `proof-subject`
- Reason: Project-integration proof always requires strict high-impact work.

## Owned Paths

- `docs/00-start-here.md`
- `docs/architecture/00-repository-readiness-contract.md`
- `docs/overview.md`
- `docs/standards/00-repository-readiness-contract.md`
- `tools/skopos/actions`
- `tools/skopos/guards`

## Ownership Expansions

- None recorded.

## Steps

- [x] **Record Task risk and detail before editing** (implementation, complete) — Confirm whether Task risk is light, standard, or high-impact. Keep the active Task current, use a Plan only for multi-Task direction, add a Decision for durable choices, and add or update a Finding for structural gaps.
- [x] **Review the current pattern in unisane-site** (implementation, complete) — Use the compact references to confirm the current scope, command surface, and docs entrypoints before editing code.
- [x] **Implement the smallest scoped change** (implementation, complete) — Carry out "Certify the activated local Site adoption bundle" inside the resolved scope before widening impact to adjacent areas.
- [x] **Sync docs and instruction surfaces if touched** (docs, complete) — Keep docs, instruction mirrors, and generated project knowledge aligned with the implementation.
- [x] **Verify standalone repository boundary and Git integrity** (action, complete) — Required by Guard repository.boundary.

## Actions And Guards

- Action `repository.boundary`: Required by Guard repository.boundary.
- Guard `repository.boundary`

## Evidence And Readiness

- Adoption proposal 926698b80dd1c44fbc89024743f43f80e0c5e12aac5eee4cd603a30666c5704c is agent-ready with exactly the four reviewed document operations and no information loss or authority change. (closure, agent-observation)
- The 14 registered Action and Guard declarations remain equivalent to applied capability-set receipt ce0b1eb91547906d2950803215374fe5a87e5e8eabc70c535415f0879be77bc6, with dev and start absent. (closure, agent-observation)
- All seven registered local verification Actions pass against the activated candidate, including approved build and test execution. (closure, agent-observation)
- The committed diff contains only the exact adoption documents, registered declarations, and generated Task closure artifacts; no source-authority or external-system cutover occurs. (closure, agent-observation)
- Guard repository.boundary: Repository-shape changes require boundary and integrity Evidence (closure, source-bound-action)

## Memory Obligations

- [complete] architecture: High-impact work must review and synchronize durable Memory for Scope workspace.; resolution: reviewed-no-change

## Portable Task State

This machine-readable block is the durable source used to rebuild local Skopos state.

<!-- skopos:task-state:start -->
```json
{
  "schemaVersion": 1,
  "id": "T-88c6a705",
  "type": "task",
  "status": "durable",
  "generatedAt": "2026-08-10T11:10:11.453Z",
  "updatedAt": "2026-08-10T11:16:19.197Z",
  "planIds": [],
  "childTasks": [],
  "state": "complete",
  "detail": "detailed",
  "title": "Certify the activated local Site adoption bundle",
  "goal": "Certify the activated local Site adoption bundle",
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
      "Adoption proposal 926698b80dd1c44fbc89024743f43f80e0c5e12aac5eee4cd603a30666c5704c is agent-ready with exactly the four reviewed document operations and no information loss or authority change.",
      "The 14 registered Action and Guard declarations remain equivalent to applied capability-set receipt ce0b1eb91547906d2950803215374fe5a87e5e8eabc70c535415f0879be77bc6, with dev and start absent.",
      "All seven registered local verification Actions pass against the activated candidate, including approved build and test execution.",
      "The committed diff contains only the exact adoption documents, registered declarations, and generated Task closure artifacts; no source-authority or external-system cutover occurs."
    ],
    "nonGoals": [
      "Do not change application source, dependencies, deployment, remotes, DNS, analytics, providers, legal or rights state, public release, or production authority."
    ],
    "constraints": [
      "Keep the candidate local and non-authoritative outside target-local Skopos workflow readiness."
    ]
  },
  "risk": "high-impact",
  "admission": {
    "recommendedRisk": "high-impact",
    "recommendedDetail": "detailed",
    "selectedRisk": "high-impact",
    "selectedDetail": "detailed",
    "selectionSource": "proof-subject",
    "workflow": "strict",
    "reasons": [
      "Project-integration proof always requires strict high-impact work."
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
      "proofSubjectKind": "project-integration"
    }
  },
  "proofSubject": {
    "kind": "project-integration",
    "baselineId": "baseline-c3db525d46d87ac3"
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
      "detail": "Carry out \"Certify the activated local Site adoption bundle\" inside the resolved scope before widening impact to adjacent areas.",
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
        "tools/skopos/actions",
        "tools/skopos/guards"
      ],
      "outputPaths": [],
      "requiresApproval": false
    }
  ],
  "selectedGuardIds": [
    "repository.boundary"
  ],
  "evidenceRequirements": [
    {
      "id": "acceptance-1",
      "acceptanceCriterion": "Adoption proposal 926698b80dd1c44fbc89024743f43f80e0c5e12aac5eee4cd603a30666c5704c is agent-ready with exactly the four reviewed document operations and no information loss or authority change.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-2",
      "acceptanceCriterion": "The 14 registered Action and Guard declarations remain equivalent to applied capability-set receipt ce0b1eb91547906d2950803215374fe5a87e5e8eabc70c535415f0879be77bc6, with dev and start absent.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-3",
      "acceptanceCriterion": "All seven registered local verification Actions pass against the activated candidate, including approved build and test execution.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-4",
      "acceptanceCriterion": "The committed diff contains only the exact adoption documents, registered declarations, and generated Task closure artifacts; no source-authority or external-system cutover occurs.",
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
    }
  ],
  "memoryObligations": [
    {
      "id": "memory-architecture-21a3230e03",
      "role": "architecture",
      "reason": "High-impact work must review and synchronize durable Memory for Scope workspace.",
      "status": "complete",
      "resolution": "reviewed-no-change",
      "resolutionReason": "Reviewed the Scope's durable architecture truth: target-local Skopos workflow activation does not change Site product architecture or external authority, so no canonical architecture update is required; the approved supporting standard/router/overview corrections already preserve existing truth.",
      "resolvedAt": "2026-08-10T11:13:24.263Z",
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
    }
  ],
  "declaredOwnedPaths": [
    "docs/00-start-here.md",
    "docs/architecture/00-repository-readiness-contract.md",
    "docs/overview.md",
    "docs/standards/00-repository-readiness-contract.md",
    "tools/skopos/actions",
    "tools/skopos/guards"
  ]
}
```
<!-- skopos:task-state:end -->
