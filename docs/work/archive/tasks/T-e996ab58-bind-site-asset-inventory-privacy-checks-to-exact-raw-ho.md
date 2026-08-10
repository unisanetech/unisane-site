---
title: "Task: Bind Site asset-inventory privacy checks to exact raw hostname and basename values"
status: complete
owner: "bhaskarbarma"
id: T-e996ab58
scope: "workspace"
role: task
lifecycle: historical
authority: canonical
provenance: accepted
view: exception
risk: high-impact
proofSubject: task-closure
proofBaseline: baseline-0498b766e9696030
lastUpdated: 2026-08-10
---

# Task: Bind Site asset-inventory privacy checks to exact raw hostname and basename values

## Changelog

- `2026-08-10`: Synchronized Task state `complete` from Skopos.

## Goal

Bind Site asset-inventory privacy checks to exact raw hostname and basename values

## Acceptance

- Derive normalized non-empty hostnames directly from every in-memory raw network target and prove one-to-one coverage.
- Retain exact customer-like basenames with full paths and scan complete candidate serialization for every withheld full path, basename, raw target, and normalized hostname.
- Use innocuous-field negative fixtures containing real withheld asset path, basename, raw URL, and raw hostname values so value-based rejection is proven while forbidden-key and URL-shape defenses remain.
- Run the registered site.asset-inventory Action, representative impact and Guard selection, cold checkout, all dynamically required closure Evidence, and create a fresh immutable high-impact snapshot.
- Preserve application and asset bytes and keep rights, provider, publication, release, remote, deploy, and authority decisions fail-closed.

## Non-Goals

- Do not change application behavior, assets, rights/license/provider conclusions, publication, release, remotes, deployment, DNS, analytics, or source authority.

## Constraints

- Do not rewrite existing commits through 573b216; implement only an immutable successor and do not push.

## Admission And Workflow

- Workflow: `strict`
- Selected risk/detail: `high-impact` / `detailed`
- Recommended risk/detail: `high-impact` / `detailed`
- Selection source: `automatic`
- Reason: The goal contains high-impact signal: privacy.

## Owned Paths

- `docs/reference/generated/site-asset-font-network-inventory.json`
- `docs/reference/generated/site-local-readiness-baseline.json`
- `scripts/check-site-asset-inventory.mjs`

## Ownership Expansions

- None recorded.

## Steps

- [x] **Record Task risk and detail before editing** (implementation, complete) — Confirm whether Task risk is light, standard, or high-impact. Keep the active Task current, use a Plan only for multi-Task direction, add a Decision for durable choices, and add or update a Finding for structural gaps.
- [x] **Review the current pattern in unisane-site** (implementation, complete) — Use the compact references to confirm the current scope, command surface, and docs entrypoints before editing code.
- [x] **Implement the smallest scoped change** (implementation, complete) — Carry out "Bind Site asset-inventory privacy checks to exact raw hostname and basename values" inside the resolved scope before widening impact to adjacent areas.
- [x] **Sync docs and instruction surfaces if touched** (docs, complete) — Keep docs, instruction mirrors, and generated project knowledge aligned with the implementation.
- [x] **Verify Site asset, font, and network inventory** (action, complete) — Required by Guard site.asset-inventory.
- [x] **Verify local Site routes, semantics, SEO, and baselines** (action, complete) — Required by Guard site.local-readiness.

## Actions And Guards

- Action `site.asset-inventory`: Required by Guard site.asset-inventory.
- Action `site.local-readiness`: Required by Guard site.local-readiness.
- Guard `site.asset-inventory`
- Guard `site.local-readiness`

## Evidence And Readiness

- Derive normalized non-empty hostnames directly from every in-memory raw network target and prove one-to-one coverage. (closure, agent-observation)
- Retain exact customer-like basenames with full paths and scan complete candidate serialization for every withheld full path, basename, raw target, and normalized hostname. (closure, agent-observation)
- Use innocuous-field negative fixtures containing real withheld asset path, basename, raw URL, and raw hostname values so value-based rejection is proven while forbidden-key and URL-shape defenses remain. (closure, agent-observation)
- Run the registered site.asset-inventory Action, representative impact and Guard selection, cold checkout, all dynamically required closure Evidence, and create a fresh immutable high-impact snapshot. (closure, agent-observation)
- Preserve application and asset bytes and keep rights, provider, publication, release, remote, deploy, and authority decisions fail-closed. (closure, agent-observation)
- Guard site.asset-inventory: Site asset and reference changes require inventory Evidence (closure, source-bound-action)
- Guard site.local-readiness: Site route and readiness changes require local readiness Evidence (closure, source-bound-action)

## Memory Obligations

- [complete] architecture: High-impact work must review and synchronize durable Memory for Scope workspace.; resolution: reviewed-no-change

## Portable Task State

This machine-readable block is the durable source used to rebuild local Skopos state.

<!-- skopos:task-state:start -->
```json
{
  "schemaVersion": 1,
  "id": "T-e996ab58",
  "type": "task",
  "status": "durable",
  "generatedAt": "2026-08-10T22:06:04.476Z",
  "updatedAt": "2026-08-10T22:14:35.181Z",
  "planIds": [],
  "childTasks": [],
  "state": "complete",
  "detail": "detailed",
  "title": "Bind Site asset-inventory privacy checks to exact raw hostname and basename values",
  "goal": "Bind Site asset-inventory privacy checks to exact raw hostname and basename values",
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
      "Derive normalized non-empty hostnames directly from every in-memory raw network target and prove one-to-one coverage.",
      "Retain exact customer-like basenames with full paths and scan complete candidate serialization for every withheld full path, basename, raw target, and normalized hostname.",
      "Use innocuous-field negative fixtures containing real withheld asset path, basename, raw URL, and raw hostname values so value-based rejection is proven while forbidden-key and URL-shape defenses remain.",
      "Run the registered site.asset-inventory Action, representative impact and Guard selection, cold checkout, all dynamically required closure Evidence, and create a fresh immutable high-impact snapshot.",
      "Preserve application and asset bytes and keep rights, provider, publication, release, remote, deploy, and authority decisions fail-closed."
    ],
    "nonGoals": [
      "Do not change application behavior, assets, rights/license/provider conclusions, publication, release, remotes, deployment, DNS, analytics, or source authority."
    ],
    "constraints": [
      "Do not rewrite existing commits through 573b216; implement only an immutable successor and do not push."
    ]
  },
  "risk": "high-impact",
  "admission": {
    "recommendedRisk": "high-impact",
    "recommendedDetail": "detailed",
    "selectedRisk": "high-impact",
    "selectedDetail": "detailed",
    "selectionSource": "automatic",
    "workflow": "strict",
    "reasons": [
      "The goal contains high-impact signal: privacy."
    ],
    "signals": {
      "goalSignals": [
        "privacy"
      ],
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
    "baselineId": "baseline-0498b766e9696030"
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
      "detail": "Carry out \"Bind Site asset-inventory privacy checks to exact raw hostname and basename values\" inside the resolved scope before widening impact to adjacent areas.",
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
      "id": "action-site.asset-inventory",
      "kind": "action",
      "title": "Verify Site asset, font, and network inventory",
      "detail": "Required by Guard site.asset-inventory.",
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
      "id": "site.asset-inventory",
      "title": "Verify Site asset, font, and network inventory",
      "category": "quality-check",
      "safety": "read-only",
      "sourcePath": "tools/skopos/actions/site-asset-inventory.yaml",
      "reason": "Required by Guard site.asset-inventory.",
      "matchedPaths": [
        "scripts/check-site-asset-inventory.mjs",
        "docs/reference/generated/site-asset-font-network-inventory.json"
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
        "docs/reference/generated/site-local-readiness-baseline.json"
      ],
      "outputPaths": [
        "apps/web/.next"
      ],
      "requiresApproval": true
    }
  ],
  "selectedGuardIds": [
    "site.asset-inventory",
    "site.local-readiness"
  ],
  "evidenceRequirements": [
    {
      "id": "acceptance-1",
      "acceptanceCriterion": "Derive normalized non-empty hostnames directly from every in-memory raw network target and prove one-to-one coverage.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-2",
      "acceptanceCriterion": "Retain exact customer-like basenames with full paths and scan complete candidate serialization for every withheld full path, basename, raw target, and normalized hostname.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-3",
      "acceptanceCriterion": "Use innocuous-field negative fixtures containing real withheld asset path, basename, raw URL, and raw hostname values so value-based rejection is proven while forbidden-key and URL-shape defenses remain.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-4",
      "acceptanceCriterion": "Run the registered site.asset-inventory Action, representative impact and Guard selection, cold checkout, all dynamically required closure Evidence, and create a fresh immutable high-impact snapshot.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-5",
      "acceptanceCriterion": "Preserve application and asset bytes and keep rights, provider, publication, release, remote, deploy, and authority decisions fail-closed.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
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
  "memoryObligations": [
    {
      "id": "memory-architecture-21a3230e03",
      "role": "architecture",
      "reason": "High-impact work must review and synchronize durable Memory for Scope workspace.",
      "status": "complete",
      "resolution": "reviewed-no-change",
      "resolutionReason": "Reviewed the current asset-inventory Action/Guard and readiness contract: this successor hardens the existing local privacy verifier only and changes no application, repository, or external authority architecture.",
      "resolvedAt": "2026-08-10T22:07:08.899Z",
      "resolvedByActorId": "bhaskarbarma"
    }
  ],
  "questions": [],
  "recommendations": [
    {
      "id": "run-site.asset-inventory",
      "title": "Verify Site asset, font, and network inventory",
      "summary": "Required by Guard site.asset-inventory.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "site.asset-inventory",
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
    "docs/reference/generated/site-asset-font-network-inventory.json",
    "docs/reference/generated/site-local-readiness-baseline.json",
    "scripts/check-site-asset-inventory.mjs"
  ]
}
```
<!-- skopos:task-state:end -->
