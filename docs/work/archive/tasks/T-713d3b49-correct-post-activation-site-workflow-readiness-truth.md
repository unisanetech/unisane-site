---
title: "Task: Correct post-activation Site workflow readiness truth"
status: complete
owner: "bhaskarbarma"
id: T-713d3b49
scope: "workspace"
role: task
lifecycle: historical
authority: canonical
provenance: accepted
view: exception
risk: standard
proofSubject: task-closure
proofBaseline: baseline-ef3a9c7ddcec6fb2
lastUpdated: 2026-08-10
---

# Task: Correct post-activation Site workflow readiness truth

## Changelog

- `2026-08-10`: Synchronized Task state `complete` from Skopos.

## Goal

Correct post-activation Site workflow readiness truth

## Acceptance

- The router and overview state that target-local Skopos is activated for local Tasks and Evidence while umbrella source authority remains unchanged.
- SITE-B14 is closed only for reviewed local adoption and the seven Action and Guard pairs; no other blocker is closed.
- SITE-B14 is removed from the local-shadow blocker list and the safest next Task is owner-independent local readiness proof with claims, assets, legal, privacy, remote, and deployment work fail-closed.
- Only the three approved documentation files plus generated Task closure artifacts change, with docs, link, and repository-boundary proof passing.

## Non-Goals

- Do not change application source, packages, lockfile, capability declarations, umbrella source authority, remotes, release, deployment, DNS, analytics, legal or rights state, or production authority.

## Constraints

- Do not rewrite immutable Task T-88c6a705 or its snapshot and do not amend d6e80fd9.

## Admission And Workflow

- Workflow: `tracked`
- Selected risk/detail: `standard` / `standard`
- Recommended risk/detail: `standard` / `standard`
- Selection source: `explicit-override`
- Reason: The work changes multiple paths, durable guidance, configuration, or a normal coordinated surface.

## Owned Paths

- `docs/00-start-here.md`
- `docs/overview.md`
- `docs/standards/00-repository-readiness-contract.md`

## Ownership Expansions

- None recorded.

## Steps

- [x] **Record Task risk and detail before editing** (implementation, complete) — Confirm whether Task risk is light, standard, or high-impact. Keep the active Task current, use a Plan only for multi-Task direction, add a Decision for durable choices, and add or update a Finding for structural gaps.
- [x] **Review the current pattern in unisane-site** (implementation, complete) — Use the compact references to confirm the current scope, command surface, and docs entrypoints before editing code.
- [x] **Implement the smallest scoped change** (implementation, complete) — Carry out "Correct post-activation Site workflow readiness truth" inside the resolved scope before widening impact to adjacent areas.
- [x] **Sync docs and instruction surfaces if touched** (docs, complete) — Keep docs, instruction mirrors, and generated project knowledge aligned with the implementation.

## Actions And Guards

- No Action or Guard is selected.

## Evidence And Readiness

- The router and overview state that target-local Skopos is activated for local Tasks and Evidence while umbrella source authority remains unchanged. (closure, agent-observation)
- SITE-B14 is closed only for reviewed local adoption and the seven Action and Guard pairs; no other blocker is closed. (closure, agent-observation)
- SITE-B14 is removed from the local-shadow blocker list and the safest next Task is owner-independent local readiness proof with claims, assets, legal, privacy, remote, and deployment work fail-closed. (closure, agent-observation)
- Only the three approved documentation files plus generated Task closure artifacts change, with docs, link, and repository-boundary proof passing. (closure, agent-observation)

## Memory Obligations

- No durable Memory obligation is inferred.

## Portable Task State

This machine-readable block is the durable source used to rebuild local Skopos state.

<!-- skopos:task-state:start -->
```json
{
  "schemaVersion": 1,
  "id": "T-713d3b49",
  "type": "task",
  "status": "durable",
  "generatedAt": "2026-08-10T11:22:34.796Z",
  "updatedAt": "2026-08-10T11:37:51.479Z",
  "planIds": [],
  "childTasks": [],
  "state": "complete",
  "detail": "standard",
  "title": "Correct post-activation Site workflow readiness truth",
  "goal": "Correct post-activation Site workflow readiness truth",
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
      "The router and overview state that target-local Skopos is activated for local Tasks and Evidence while umbrella source authority remains unchanged.",
      "SITE-B14 is closed only for reviewed local adoption and the seven Action and Guard pairs; no other blocker is closed.",
      "SITE-B14 is removed from the local-shadow blocker list and the safest next Task is owner-independent local readiness proof with claims, assets, legal, privacy, remote, and deployment work fail-closed.",
      "Only the three approved documentation files plus generated Task closure artifacts change, with docs, link, and repository-boundary proof passing."
    ],
    "nonGoals": [
      "Do not change application source, packages, lockfile, capability declarations, umbrella source authority, remotes, release, deployment, DNS, analytics, legal or rights state, or production authority."
    ],
    "constraints": [
      "Do not rewrite immutable Task T-88c6a705 or its snapshot and do not amend d6e80fd9."
    ]
  },
  "risk": "standard",
  "admission": {
    "recommendedRisk": "standard",
    "recommendedDetail": "standard",
    "selectedRisk": "standard",
    "selectedDetail": "standard",
    "selectionSource": "explicit-override",
    "workflow": "tracked",
    "reasons": [
      "The work changes multiple paths, durable guidance, configuration, or a normal coordinated surface."
    ],
    "signals": {
      "goalSignals": [],
      "ownedPathCount": 3,
      "affectedScopeIds": [
        "workspace"
      ],
      "impactCategories": [
        "docs"
      ],
      "proofSubjectKind": "task-closure"
    }
  },
  "proofSubject": {
    "kind": "task-closure",
    "baselineId": "baseline-ef3a9c7ddcec6fb2"
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
      "detail": "Carry out \"Correct post-activation Site workflow readiness truth\" inside the resolved scope before widening impact to adjacent areas.",
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
      "acceptanceCriterion": "The router and overview state that target-local Skopos is activated for local Tasks and Evidence while umbrella source authority remains unchanged.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-2",
      "acceptanceCriterion": "SITE-B14 is closed only for reviewed local adoption and the seven Action and Guard pairs; no other blocker is closed.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-3",
      "acceptanceCriterion": "SITE-B14 is removed from the local-shadow blocker list and the safest next Task is owner-independent local readiness proof with claims, assets, legal, privacy, remote, and deployment work fail-closed.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-4",
      "acceptanceCriterion": "Only the three approved documentation files plus generated Task closure artifacts change, with docs, link, and repository-boundary proof passing.",
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
    "docs/overview.md",
    "docs/standards/00-repository-readiness-contract.md"
  ]
}
```
<!-- skopos:task-state:end -->
