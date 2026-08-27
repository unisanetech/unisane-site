---
title: "Task: Replace Site migration-state documentation with standalone current truth"
status: complete
owner: "codex"
id: T-b7d0eb26
scope: "workspace"
role: task
lifecycle: historical
authority: canonical
provenance: accepted
view: exception
risk: standard
proofSubject: task-closure
proofBaseline: baseline-321ac3de59550180
lastUpdated: 2026-08-27
---

# Task: Replace Site migration-state documentation with standalone current truth

## Changelog

- `2026-08-27`: Synchronized Task state `complete` from Skopos.

## Goal

Replace Site migration-state documentation with standalone current truth

## Acceptance

- Current Site overview and readiness documents describe the active standalone repository rather than an intended shadow
- Historical source/provenance remains available without acting as current authority
- Root package declares the actual repository without changing licensing or deployment authority

## Non-Goals

- None declared.

## Constraints

- Do not add a license, deploy, push, or change remote authority

## Admission And Workflow

- Workflow: `tracked`
- Selected risk/detail: `standard` / `standard`
- Recommended risk/detail: `standard` / `standard`
- Selection source: `explicit-override`
- Reason: The work changes multiple paths, durable guidance, configuration, or a normal coordinated surface.

## Owned Paths

- `docs`
- `package.json`
- `scripts/check-repository-boundary.mjs`

## Ownership Expansions

- `2026-08-27T16:55:01.604Z` by `codex`: `scripts/check-repository-boundary.mjs` — Cut over the boundary verifier from no-remote candidate semantics to the approved standalone-origin model exposed by the selected boundary action.

## Steps

- [x] **Record Task risk and detail before editing** (implementation, complete) — Confirm whether Task risk is light, standard, or high-impact. Keep the active Task current, use a Plan only for multi-Task direction, add a Decision for durable choices, and add or update a Finding for structural gaps.
- [x] **Review the current pattern in unisane-site** (implementation, complete) — Use the compact references to confirm the current scope, command surface, and docs entrypoints before editing code.
- [x] **Implement the smallest scoped change** (implementation, complete) — Carry out "Replace Site migration-state documentation with standalone current truth" inside the resolved scope before widening impact to adjacent areas.
- [x] **Sync docs and instruction surfaces if touched** (docs, complete) — Keep docs, instruction mirrors, and generated project knowledge aligned with the implementation.
- [x] **Build the Site application** (action, complete) — Required by Guard quality.build.
- [x] **Lint Site source** (action, complete) — Required by Guard quality.lint.
- [x] **Test Site behavior** (action, complete) — Required by Guard quality.test.
- [x] **Typecheck Site source** (action, complete) — Required by Guard quality.typecheck.
- [x] **Verify standalone repository boundary and Git integrity** (action, complete) — Required by Guard repository.boundary.
- [x] **Verify cold checkout, frozen install, and CI command parity** (action, complete) — Required by Guard repository.cold-checkout.
- [x] **Verify Site asset, font, and network inventory** (action, complete) — Required by Guard site.asset-inventory.
- [x] **Verify local Site routes, semantics, SEO, and baselines** (action, complete) — Required by Guard site.local-readiness.
- [x] **Verify Site source-safety behavior** (action, complete) — Required by Guard site.source-safety.

## Actions And Guards

- Action `quality.build`: Required by Guard quality.build.
- Action `quality.lint`: Required by Guard quality.lint.
- Action `quality.test`: Required by Guard quality.test.
- Action `quality.typecheck`: Required by Guard quality.typecheck.
- Action `repository.boundary`: Required by Guard repository.boundary.
- Action `repository.cold-checkout`: Required by Guard repository.cold-checkout.
- Action `site.asset-inventory`: Required by Guard site.asset-inventory.
- Action `site.local-readiness`: Required by Guard site.local-readiness.
- Action `site.source-safety`: Required by Guard site.source-safety.
- Guard `quality.build`
- Guard `quality.lint`
- Guard `quality.test`
- Guard `quality.typecheck`
- Guard `repository.boundary`
- Guard `repository.cold-checkout`
- Guard `site.asset-inventory`
- Guard `site.local-readiness`
- Guard `site.source-safety`

## Evidence And Readiness

- Current Site overview and readiness documents describe the active standalone repository rather than an intended shadow (closure, agent-observation)
- Historical source/provenance remains available without acting as current authority (closure, agent-observation)
- Root package declares the actual repository without changing licensing or deployment authority (closure, agent-observation)
- Guard quality.build: Site source and package changes require build Evidence (closure, source-bound-action)
- Guard quality.lint: Site source and package changes require lint Evidence (closure, source-bound-action)
- Guard quality.test: Site source and package changes require test Evidence (closure, source-bound-action)
- Guard quality.typecheck: Site source and package changes require typecheck Evidence (closure, source-bound-action)
- Guard repository.boundary: Repository-shape changes require boundary and integrity Evidence (closure, source-bound-action)
- Guard repository.cold-checkout: Repository and CI foundation changes require cold-checkout Evidence (closure, source-bound-action)
- Guard site.asset-inventory: Site asset and reference changes require inventory Evidence (closure, source-bound-action)
- Guard site.local-readiness: Site route and readiness changes require local readiness Evidence (closure, source-bound-action)
- Guard site.source-safety: Behavioral Site changes require source-safety Evidence (closure, source-bound-action)

## Memory Obligations

- [complete] standard: The declared Task scope owns canonical standard Memory at docs/standards/01-standalone-repository-boundary.md; review and synchronize it if project truth changes. (target: `docs/standards/01-standalone-repository-boundary.md`); resolution: memory-updated

## Portable Task State

This machine-readable block is the durable source used to rebuild local Skopos state.

<!-- skopos:task-state:start -->
```json
{
  "schemaVersion": 1,
  "id": "T-b7d0eb26",
  "type": "task",
  "status": "durable",
  "generatedAt": "2026-08-27T12:44:10.481Z",
  "updatedAt": "2026-08-27T17:11:57.398Z",
  "planIds": [],
  "childTasks": [],
  "state": "complete",
  "detail": "standard",
  "title": "Replace Site migration-state documentation with standalone current truth",
  "goal": "Replace Site migration-state documentation with standalone current truth",
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
      "Current Site overview and readiness documents describe the active standalone repository rather than an intended shadow",
      "Historical source/provenance remains available without acting as current authority",
      "Root package declares the actual repository without changing licensing or deployment authority"
    ],
    "nonGoals": [],
    "constraints": [
      "Do not add a license, deploy, push, or change remote authority"
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
      "ownedPathCount": 2,
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
    "baselineId": "baseline-321ac3de59550180"
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
      "detail": "Carry out \"Replace Site migration-state documentation with standalone current truth\" inside the resolved scope before widening impact to adjacent areas.",
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
      "id": "action-quality.build",
      "kind": "action",
      "title": "Build the Site application",
      "detail": "Required by Guard quality.build.",
      "status": "complete"
    },
    {
      "id": "action-quality.lint",
      "kind": "action",
      "title": "Lint Site source",
      "detail": "Required by Guard quality.lint.",
      "status": "complete"
    },
    {
      "id": "action-quality.test",
      "kind": "action",
      "title": "Test Site behavior",
      "detail": "Required by Guard quality.test.",
      "status": "complete"
    },
    {
      "id": "action-quality.typecheck",
      "kind": "action",
      "title": "Typecheck Site source",
      "detail": "Required by Guard quality.typecheck.",
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
      "id": "action-repository.cold-checkout",
      "kind": "action",
      "title": "Verify cold checkout, frozen install, and CI command parity",
      "detail": "Required by Guard repository.cold-checkout.",
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
    },
    {
      "id": "action-site.source-safety",
      "kind": "action",
      "title": "Verify Site source-safety behavior",
      "detail": "Required by Guard site.source-safety.",
      "status": "complete"
    }
  ],
  "selectedActions": [
    {
      "id": "quality.build",
      "title": "Build the Site application",
      "category": "quality-check",
      "safety": "mutating",
      "sourcePath": "tools/skopos/actions/quality-build.yaml",
      "reason": "Required by Guard quality.build.",
      "matchedPaths": [
        "package.json"
      ],
      "outputPaths": [
        "apps/web/.next"
      ],
      "requiresApproval": true
    },
    {
      "id": "quality.lint",
      "title": "Lint Site source",
      "category": "quality-check",
      "safety": "read-only",
      "sourcePath": "tools/skopos/actions/quality-lint.yaml",
      "reason": "Required by Guard quality.lint.",
      "matchedPaths": [
        "package.json"
      ],
      "outputPaths": [],
      "requiresApproval": false
    },
    {
      "id": "quality.test",
      "title": "Test Site behavior",
      "category": "quality-check",
      "safety": "mutating",
      "sourcePath": "tools/skopos/actions/quality-test.yaml",
      "reason": "Required by Guard quality.test.",
      "matchedPaths": [
        "package.json"
      ],
      "outputPaths": [
        "apps/web/.next"
      ],
      "requiresApproval": true
    },
    {
      "id": "quality.typecheck",
      "title": "Typecheck Site source",
      "category": "quality-check",
      "safety": "read-only",
      "sourcePath": "tools/skopos/actions/quality-typecheck.yaml",
      "reason": "Required by Guard quality.typecheck.",
      "matchedPaths": [
        "package.json"
      ],
      "outputPaths": [],
      "requiresApproval": false
    },
    {
      "id": "repository.boundary",
      "title": "Verify standalone repository boundary and Git integrity",
      "category": "quality-check",
      "safety": "read-only",
      "sourcePath": "tools/skopos/actions/repository-boundary.yaml",
      "reason": "Required by Guard repository.boundary.",
      "matchedPaths": [
        "docs",
        "package.json",
        "scripts/check-repository-boundary.mjs"
      ],
      "outputPaths": [],
      "requiresApproval": false
    },
    {
      "id": "repository.cold-checkout",
      "title": "Verify cold checkout, frozen install, and CI command parity",
      "category": "quality-check",
      "safety": "read-only",
      "sourcePath": "tools/skopos/actions/repository-cold-checkout.yaml",
      "reason": "Required by Guard repository.cold-checkout.",
      "matchedPaths": [
        "package.json"
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
        "docs",
        "package.json"
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
        "docs",
        "package.json"
      ],
      "outputPaths": [
        "apps/web/.next"
      ],
      "requiresApproval": true
    },
    {
      "id": "site.source-safety",
      "title": "Verify Site source-safety behavior",
      "category": "quality-check",
      "safety": "read-only",
      "sourcePath": "tools/skopos/actions/site-source-safety.yaml",
      "reason": "Required by Guard site.source-safety.",
      "matchedPaths": [
        "package.json"
      ],
      "outputPaths": [],
      "requiresApproval": false
    }
  ],
  "selectedGuardIds": [
    "quality.build",
    "quality.lint",
    "quality.test",
    "quality.typecheck",
    "repository.boundary",
    "repository.cold-checkout",
    "site.asset-inventory",
    "site.local-readiness",
    "site.source-safety"
  ],
  "evidenceRequirements": [
    {
      "id": "acceptance-1",
      "acceptanceCriterion": "Current Site overview and readiness documents describe the active standalone repository rather than an intended shadow",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-2",
      "acceptanceCriterion": "Historical source/provenance remains available without acting as current authority",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-3",
      "acceptanceCriterion": "Root package declares the actual repository without changing licensing or deployment authority",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "guard-quality.build",
      "acceptanceCriterion": "Guard quality.build: Site source and package changes require build Evidence",
      "phase": "closure",
      "actionIds": [
        "quality.build"
      ],
      "guardIds": [
        "quality.build"
      ],
      "evidence": "source-bound-action"
    },
    {
      "id": "guard-quality.lint",
      "acceptanceCriterion": "Guard quality.lint: Site source and package changes require lint Evidence",
      "phase": "closure",
      "actionIds": [
        "quality.lint"
      ],
      "guardIds": [
        "quality.lint"
      ],
      "evidence": "source-bound-action"
    },
    {
      "id": "guard-quality.test",
      "acceptanceCriterion": "Guard quality.test: Site source and package changes require test Evidence",
      "phase": "closure",
      "actionIds": [
        "quality.test"
      ],
      "guardIds": [
        "quality.test"
      ],
      "evidence": "source-bound-action"
    },
    {
      "id": "guard-quality.typecheck",
      "acceptanceCriterion": "Guard quality.typecheck: Site source and package changes require typecheck Evidence",
      "phase": "closure",
      "actionIds": [
        "quality.typecheck"
      ],
      "guardIds": [
        "quality.typecheck"
      ],
      "evidence": "source-bound-action"
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
      "id": "guard-repository.cold-checkout",
      "acceptanceCriterion": "Guard repository.cold-checkout: Repository and CI foundation changes require cold-checkout Evidence",
      "phase": "closure",
      "actionIds": [
        "repository.cold-checkout"
      ],
      "guardIds": [
        "repository.cold-checkout"
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
    },
    {
      "id": "guard-site.source-safety",
      "acceptanceCriterion": "Guard site.source-safety: Behavioral Site changes require source-safety Evidence",
      "phase": "closure",
      "actionIds": [
        "site.source-safety"
      ],
      "guardIds": [
        "site.source-safety"
      ],
      "evidence": "source-bound-action"
    }
  ],
  "memoryObligations": [
    {
      "id": "memory-standard-256f48d512",
      "role": "standard",
      "reason": "The declared Task scope owns canonical standard Memory at docs/standards/01-standalone-repository-boundary.md; review and synchronize it if project truth changes.",
      "status": "complete",
      "targetPath": "docs/standards/01-standalone-repository-boundary.md",
      "resolution": "memory-updated",
      "resolutionReason": "The canonical standalone repository boundary standard was added and synchronized with the approved origin and authority model.",
      "resolvedAt": "2026-08-27T17:04:24.398Z",
      "resolvedByActorId": "codex"
    }
  ],
  "questions": [],
  "recommendations": [
    {
      "id": "run-quality.build",
      "title": "Build the Site application",
      "summary": "Required by Guard quality.build.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "quality.build",
      "blocking": false,
      "status": "complete"
    },
    {
      "id": "run-quality.lint",
      "title": "Lint Site source",
      "summary": "Required by Guard quality.lint.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "quality.lint",
      "blocking": false,
      "status": "complete"
    },
    {
      "id": "run-quality.test",
      "title": "Test Site behavior",
      "summary": "Required by Guard quality.test.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "quality.test",
      "blocking": false,
      "status": "complete"
    },
    {
      "id": "run-quality.typecheck",
      "title": "Typecheck Site source",
      "summary": "Required by Guard quality.typecheck.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "quality.typecheck",
      "blocking": false,
      "status": "complete"
    },
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
      "id": "run-repository.cold-checkout",
      "title": "Verify cold checkout, frozen install, and CI command parity",
      "summary": "Required by Guard repository.cold-checkout.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "repository.cold-checkout",
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
    },
    {
      "id": "run-site.source-safety",
      "title": "Verify Site source-safety behavior",
      "summary": "Required by Guard site.source-safety.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "site.source-safety",
      "blocking": false,
      "status": "complete"
    }
  ],
  "ownershipExpansions": [
    {
      "paths": [
        "scripts/check-repository-boundary.mjs"
      ],
      "reason": "Cut over the boundary verifier from no-remote candidate semantics to the approved standalone-origin model exposed by the selected boundary action.",
      "actorId": "codex",
      "recordedAt": "2026-08-27T16:55:01.604Z",
      "baselinePaths": [
        {
          "path": "scripts/check-repository-boundary.mjs",
          "digest": "fe6f0da7e6672cf823a4a436fe6d7ac8771c8c6078de45261aa1a35d49d56fd0",
          "digestAlgorithm": "skopos-path-v2-code-unit-segment-dfs"
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
    "docs",
    "package.json",
    "scripts/check-repository-boundary.mjs"
  ]
}
```
<!-- skopos:task-state:end -->
