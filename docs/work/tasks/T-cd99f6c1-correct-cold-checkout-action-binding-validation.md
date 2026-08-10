---
title: "Task: Correct cold-checkout Action binding validation"
status: active
owner: "bhaskarbarma"
id: T-cd99f6c1
scope: "workspace"
role: task
lifecycle: active
authority: canonical
provenance: accepted
view: current
risk: standard
proofSubject: task-closure
proofBaseline: baseline-3ac68038aa10e8aa
lastUpdated: 2026-08-10
---

# Task: Correct cold-checkout Action binding validation

## Changelog

- `2026-08-10`: Synchronized Task state `active` from Skopos.

## Goal

Correct cold-checkout Action binding validation

## Acceptance

- Structurally parse all seven registered Action declarations and assert each exact expected id, command, and cwd=.
- Fail closed on malformed declarations, duplicate or incorrect ids, wrong commands, wrong cwd, and textual comment decoys.
- Provide focused non-network regressions for a leading comment command decoy and wrong cwd without running the cold install.
- Refresh only the package-identity-invalidated local readiness baseline and capture proportional registered Action/Guard Evidence.
- Preserve application behavior, owner thresholds, external authority, and the accepted four-commit ancestry.

## Non-Goals

- Do not change application source, claims, assets, Actions/Guards capability scope, remotes, release, deployment, DNS, analytics, or source authority.

## Constraints

- Use actor bhaskarbarma; do not rewrite prior commits; no remote, push, deploy, or cutover.

## Admission And Workflow

- Workflow: `tracked`
- Selected risk/detail: `standard` / `standard`
- Recommended risk/detail: `standard` / `standard`
- Selection source: `explicit-override`
- Reason: The work changes multiple paths, durable guidance, configuration, or a normal coordinated surface.

## Owned Paths

- `docs/reference/generated/site-local-readiness-baseline.json`
- `package.json`
- `pnpm-lock.yaml`
- `scripts/check-cold-checkout.mjs`

## Ownership Expansions

- None recorded.

## Steps

- [ ] **Record Task risk and detail before editing** (implementation, pending) — Confirm whether Task risk is light, standard, or high-impact. Keep the active Task current, use a Plan only for multi-Task direction, add a Decision for durable choices, and add or update a Finding for structural gaps.
- [ ] **Review the current pattern in unisane-site** (implementation, pending) — Use the compact references to confirm the current scope, command surface, and docs entrypoints before editing code.
- [ ] **Implement the smallest scoped change** (implementation, pending) — Carry out "Correct cold-checkout Action binding validation" inside the resolved scope before widening impact to adjacent areas.
- [ ] **Sync docs and instruction surfaces if touched** (docs, pending) — Keep docs, instruction mirrors, and generated project knowledge aligned with the implementation.
- [ ] **Build the Site application** (action, pending) — Required by Guard quality.build.
- [ ] **Lint Site source** (action, pending) — Required by Guard quality.lint.
- [ ] **Test Site behavior** (action, pending) — Required by Guard quality.test.
- [ ] **Typecheck Site source** (action, pending) — Required by Guard quality.typecheck.
- [ ] **Verify standalone repository boundary and Git integrity** (action, pending) — Required by Guard repository.boundary.
- [ ] **Verify cold checkout, frozen install, and CI command parity** (action, pending) — Required by Guard repository.cold-checkout.
- [ ] **Verify local Site routes, semantics, SEO, and baselines** (action, pending) — Required by Guard site.local-readiness.
- [ ] **Verify Site source-safety behavior** (action, pending) — Required by Guard site.source-safety.

## Actions And Guards

- Action `quality.build`: Required by Guard quality.build.
- Action `quality.lint`: Required by Guard quality.lint.
- Action `quality.test`: Required by Guard quality.test.
- Action `quality.typecheck`: Required by Guard quality.typecheck.
- Action `repository.boundary`: Required by Guard repository.boundary.
- Action `repository.cold-checkout`: Required by Guard repository.cold-checkout.
- Action `site.local-readiness`: Required by Guard site.local-readiness.
- Action `site.source-safety`: Required by Guard site.source-safety.
- Guard `quality.build`
- Guard `quality.lint`
- Guard `quality.test`
- Guard `quality.typecheck`
- Guard `repository.boundary`
- Guard `repository.cold-checkout`
- Guard `site.local-readiness`
- Guard `site.source-safety`

## Evidence And Readiness

- Structurally parse all seven registered Action declarations and assert each exact expected id, command, and cwd=. (closure, agent-observation)
- Fail closed on malformed declarations, duplicate or incorrect ids, wrong commands, wrong cwd, and textual comment decoys. (closure, agent-observation)
- Provide focused non-network regressions for a leading comment command decoy and wrong cwd without running the cold install. (closure, agent-observation)
- Refresh only the package-identity-invalidated local readiness baseline and capture proportional registered Action/Guard Evidence. (closure, agent-observation)
- Preserve application behavior, owner thresholds, external authority, and the accepted four-commit ancestry. (closure, agent-observation)
- Guard quality.build: Site source and package changes require build Evidence (closure, source-bound-action)
- Guard quality.lint: Site source and package changes require lint Evidence (closure, source-bound-action)
- Guard quality.test: Site source and package changes require test Evidence (closure, source-bound-action)
- Guard quality.typecheck: Site source and package changes require typecheck Evidence (closure, source-bound-action)
- Guard repository.boundary: Repository-shape changes require boundary and integrity Evidence (closure, source-bound-action)
- Guard repository.cold-checkout: Repository and CI foundation changes require cold-checkout Evidence (closure, source-bound-action)
- Guard site.local-readiness: Site route and readiness changes require local readiness Evidence (closure, source-bound-action)
- Guard site.source-safety: Behavioral Site changes require source-safety Evidence (closure, source-bound-action)

## Memory Obligations

- No durable Memory obligation is inferred.

## Portable Task State

This machine-readable block is the durable source used to rebuild local Skopos state.

<!-- skopos:task-state:start -->
```json
{
  "schemaVersion": 1,
  "id": "T-cd99f6c1",
  "type": "task",
  "status": "active",
  "generatedAt": "2026-08-10T21:18:55.051Z",
  "updatedAt": "2026-08-10T21:18:55.051Z",
  "planIds": [],
  "childTasks": [],
  "state": "active",
  "detail": "standard",
  "title": "Correct cold-checkout Action binding validation",
  "goal": "Correct cold-checkout Action binding validation",
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
      "Structurally parse all seven registered Action declarations and assert each exact expected id, command, and cwd=.",
      "Fail closed on malformed declarations, duplicate or incorrect ids, wrong commands, wrong cwd, and textual comment decoys.",
      "Provide focused non-network regressions for a leading comment command decoy and wrong cwd without running the cold install.",
      "Refresh only the package-identity-invalidated local readiness baseline and capture proportional registered Action/Guard Evidence.",
      "Preserve application behavior, owner thresholds, external authority, and the accepted four-commit ancestry."
    ],
    "nonGoals": [
      "Do not change application source, claims, assets, Actions/Guards capability scope, remotes, release, deployment, DNS, analytics, or source authority."
    ],
    "constraints": [
      "Use actor bhaskarbarma; do not rewrite prior commits; no remote, push, deploy, or cutover."
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
    "baselineId": "baseline-3ac68038aa10e8aa"
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
      "detail": "Carry out \"Correct cold-checkout Action binding validation\" inside the resolved scope before widening impact to adjacent areas.",
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
      "id": "action-quality.build",
      "kind": "action",
      "title": "Build the Site application",
      "detail": "Required by Guard quality.build.",
      "status": "pending"
    },
    {
      "id": "action-quality.lint",
      "kind": "action",
      "title": "Lint Site source",
      "detail": "Required by Guard quality.lint.",
      "status": "pending"
    },
    {
      "id": "action-quality.test",
      "kind": "action",
      "title": "Test Site behavior",
      "detail": "Required by Guard quality.test.",
      "status": "pending"
    },
    {
      "id": "action-quality.typecheck",
      "kind": "action",
      "title": "Typecheck Site source",
      "detail": "Required by Guard quality.typecheck.",
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
      "id": "action-repository.cold-checkout",
      "kind": "action",
      "title": "Verify cold checkout, frozen install, and CI command parity",
      "detail": "Required by Guard repository.cold-checkout.",
      "status": "pending"
    },
    {
      "id": "action-site.local-readiness",
      "kind": "action",
      "title": "Verify local Site routes, semantics, SEO, and baselines",
      "detail": "Required by Guard site.local-readiness.",
      "status": "pending"
    },
    {
      "id": "action-site.source-safety",
      "kind": "action",
      "title": "Verify Site source-safety behavior",
      "detail": "Required by Guard site.source-safety.",
      "status": "pending"
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
        "package.json",
        "pnpm-lock.yaml"
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
        "package.json",
        "pnpm-lock.yaml"
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
        "package.json",
        "pnpm-lock.yaml"
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
        "package.json",
        "pnpm-lock.yaml"
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
        "package.json",
        "pnpm-lock.yaml"
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
        "scripts/check-cold-checkout.mjs",
        "package.json",
        "pnpm-lock.yaml"
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
        "package.json",
        "docs/reference/generated/site-local-readiness-baseline.json"
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
        "package.json",
        "pnpm-lock.yaml"
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
    "site.local-readiness",
    "site.source-safety"
  ],
  "evidenceRequirements": [
    {
      "id": "acceptance-1",
      "acceptanceCriterion": "Structurally parse all seven registered Action declarations and assert each exact expected id, command, and cwd=.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-2",
      "acceptanceCriterion": "Fail closed on malformed declarations, duplicate or incorrect ids, wrong commands, wrong cwd, and textual comment decoys.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-3",
      "acceptanceCriterion": "Provide focused non-network regressions for a leading comment command decoy and wrong cwd without running the cold install.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-4",
      "acceptanceCriterion": "Refresh only the package-identity-invalidated local readiness baseline and capture proportional registered Action/Guard Evidence.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-5",
      "acceptanceCriterion": "Preserve application behavior, owner thresholds, external authority, and the accepted four-commit ancestry.",
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
  "memoryObligations": [],
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
      "status": "open"
    },
    {
      "id": "run-quality.lint",
      "title": "Lint Site source",
      "summary": "Required by Guard quality.lint.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "quality.lint",
      "blocking": false,
      "status": "open"
    },
    {
      "id": "run-quality.test",
      "title": "Test Site behavior",
      "summary": "Required by Guard quality.test.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "quality.test",
      "blocking": false,
      "status": "open"
    },
    {
      "id": "run-quality.typecheck",
      "title": "Typecheck Site source",
      "summary": "Required by Guard quality.typecheck.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "quality.typecheck",
      "blocking": false,
      "status": "open"
    },
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
      "id": "run-repository.cold-checkout",
      "title": "Verify cold checkout, frozen install, and CI command parity",
      "summary": "Required by Guard repository.cold-checkout.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "repository.cold-checkout",
      "blocking": false,
      "status": "open"
    },
    {
      "id": "run-site.local-readiness",
      "title": "Verify local Site routes, semantics, SEO, and baselines",
      "summary": "Required by Guard site.local-readiness.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "site.local-readiness",
      "blocking": false,
      "status": "open"
    },
    {
      "id": "run-site.source-safety",
      "title": "Verify Site source-safety behavior",
      "summary": "Required by Guard site.source-safety.",
      "priority": "medium",
      "actionKind": "run-action",
      "actionId": "site.source-safety",
      "blocking": false,
      "status": "open"
    }
  ],
  "declaredOwnedPaths": [
    "docs/reference/generated/site-local-readiness-baseline.json",
    "package.json",
    "pnpm-lock.yaml",
    "scripts/check-cold-checkout.mjs"
  ]
}
```
<!-- skopos:task-state:end -->
