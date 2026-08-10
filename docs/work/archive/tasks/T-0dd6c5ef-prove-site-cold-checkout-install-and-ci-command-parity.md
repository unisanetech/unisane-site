---
title: "Task: Prove Site cold-checkout install and CI command parity"
status: complete
owner: "bhaskarbarma"
id: T-0dd6c5ef
scope: "workspace"
role: task
lifecycle: historical
authority: canonical
provenance: accepted
view: exception
risk: standard
proofSubject: task-closure
proofBaseline: baseline-d0984e4b463e6148
lastUpdated: 2026-08-10
---

# Task: Prove Site cold-checkout install and CI command parity

## Changelog

- `2026-08-10`: Synchronized Task state `complete` from Skopos.

## Goal

Prove Site cold-checkout install and CI command parity

## Acceptance

- A disposable archive-backed Git checkout is reconstructed from exact committed HEAD with an identical tree, no remote, no parent authority, and no dependency or build state inherited from the source checkout.
- Node 24.13.0 and pnpm 10.26.0 perform pnpm install --frozen-lockfile from empty node_modules and an empty task-local pnpm store without changing the lockfile or tracked tree.
- The provider-neutral root ci:verify declaration exactly matches and passes source-safety, typecheck, lint, build, test, local-readiness, and repository-boundary commands in the disposable checkout.
- A registered target-local Action and Guard require source-bound cold-checkout Evidence for package, lock, workspace, CI-command, or cold-check harness changes without replacing behavioral Actions.
- SITE-B04 and overview truth record only local cold-checkout and CI-command parity; cross-platform/provider CI, owner thresholds, claims, assets, legal, privacy, security, preview, remote, deployment, DNS, analytics, release, and authority cutover remain fail-closed.
- Task-selected Actions, focused formatting/diff checks, and strict Git integrity pass with no secrets or external mutations beyond read-only package-registry retrieval.

## Non-Goals

- Create or activate a GitHub/provider workflow, remote, push, deployment, DNS, analytics, secret, public release, or authority cutover.

## Constraints

- None declared.

## Admission And Workflow

- Workflow: `tracked`
- Selected risk/detail: `standard` / `standard`
- Recommended risk/detail: `standard` / `standard`
- Selection source: `explicit-override`
- Reason: The work changes multiple paths, durable guidance, configuration, or a normal coordinated surface.

## Owned Paths

- `docs/overview.md`
- `docs/reference/generated/site-local-readiness-baseline.json`
- `docs/standards/00-repository-readiness-contract.md`
- `package.json`
- `scripts/check-cold-checkout.mjs`
- `scripts/check-local-readiness.mjs`
- `tools/skopos/actions/repository-cold-checkout.yaml`
- `tools/skopos/guards/repository-cold-checkout.yaml`

## Ownership Expansions

- `2026-08-10T21:02:51.963Z` by `bhaskarbarma`: `docs/reference/generated/site-local-readiness-baseline.json` — The Task-owned package.json CI command changes the registered local-readiness sourceInputDigest; the generator-owned receipt must be regenerated atomically with its causal package input.
- `2026-08-10T21:07:18.527Z` by `bhaskarbarma`: `scripts/check-local-readiness.mjs` — The committed cold checkout mechanically reproduces same-source Next route HTML gzip-byte variance while sourceInputDigest, raw HTML bytes, bundle totals, and source are unchanged; the checker owner must exclude only that host-observed generated field from stable equality.

## Steps

- [x] **Record Task risk and detail before editing** (implementation, complete) — Confirm whether Task risk is light, standard, or high-impact. Keep the active Task current, use a Plan only for multi-Task direction, add a Decision for durable choices, and add or update a Finding for structural gaps.
- [x] **Review the current pattern in unisane-site** (implementation, complete) — Use the compact references to confirm the current scope, command surface, and docs entrypoints before editing code.
- [x] **Implement the smallest scoped change** (implementation, complete) — Carry out "Prove Site cold-checkout install and CI command parity" inside the resolved scope before widening impact to adjacent areas.
- [x] **Sync docs and instruction surfaces if touched** (docs, complete) — Keep docs, instruction mirrors, and generated project knowledge aligned with the implementation.
- [x] **Build the Site application** (action, complete) — Required by Guard quality.build.
- [x] **Lint Site source** (action, complete) — Required by Guard quality.lint.
- [x] **Test Site behavior** (action, complete) — Required by Guard quality.test.
- [x] **Typecheck Site source** (action, complete) — Required by Guard quality.typecheck.
- [x] **Verify standalone repository boundary and Git integrity** (action, complete) — Required by Guard repository.boundary.
- [x] **Verify cold checkout, frozen install, and CI command parity** (action, complete) — Required by Guard repository.cold-checkout.
- [x] **Verify local Site routes, semantics, SEO, and baselines** (action, complete) — Required by Guard site.local-readiness.
- [x] **Verify Site source-safety behavior** (action, complete) — Required by Guard site.source-safety.

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

- A disposable archive-backed Git checkout is reconstructed from exact committed HEAD with an identical tree, no remote, no parent authority, and no dependency or build state inherited from the source checkout. (closure, agent-observation)
- Node 24.13.0 and pnpm 10.26.0 perform pnpm install --frozen-lockfile from empty node_modules and an empty task-local pnpm store without changing the lockfile or tracked tree. (closure, agent-observation)
- The provider-neutral root ci:verify declaration exactly matches and passes source-safety, typecheck, lint, build, test, local-readiness, and repository-boundary commands in the disposable checkout. (closure, agent-observation)
- A registered target-local Action and Guard require source-bound cold-checkout Evidence for package, lock, workspace, CI-command, or cold-check harness changes without replacing behavioral Actions. (closure, agent-observation)
- SITE-B04 and overview truth record only local cold-checkout and CI-command parity; cross-platform/provider CI, owner thresholds, claims, assets, legal, privacy, security, preview, remote, deployment, DNS, analytics, release, and authority cutover remain fail-closed. (closure, agent-observation)
- Task-selected Actions, focused formatting/diff checks, and strict Git integrity pass with no secrets or external mutations beyond read-only package-registry retrieval. (closure, agent-observation)
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
  "id": "T-0dd6c5ef",
  "type": "task",
  "status": "durable",
  "generatedAt": "2026-08-10T20:53:36.323Z",
  "updatedAt": "2026-08-10T21:12:40.618Z",
  "planIds": [],
  "childTasks": [],
  "state": "complete",
  "detail": "standard",
  "title": "Prove Site cold-checkout install and CI command parity",
  "goal": "Prove Site cold-checkout install and CI command parity",
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
      "A disposable archive-backed Git checkout is reconstructed from exact committed HEAD with an identical tree, no remote, no parent authority, and no dependency or build state inherited from the source checkout.",
      "Node 24.13.0 and pnpm 10.26.0 perform pnpm install --frozen-lockfile from empty node_modules and an empty task-local pnpm store without changing the lockfile or tracked tree.",
      "The provider-neutral root ci:verify declaration exactly matches and passes source-safety, typecheck, lint, build, test, local-readiness, and repository-boundary commands in the disposable checkout.",
      "A registered target-local Action and Guard require source-bound cold-checkout Evidence for package, lock, workspace, CI-command, or cold-check harness changes without replacing behavioral Actions.",
      "SITE-B04 and overview truth record only local cold-checkout and CI-command parity; cross-platform/provider CI, owner thresholds, claims, assets, legal, privacy, security, preview, remote, deployment, DNS, analytics, release, and authority cutover remain fail-closed.",
      "Task-selected Actions, focused formatting/diff checks, and strict Git integrity pass with no secrets or external mutations beyond read-only package-registry retrieval."
    ],
    "nonGoals": [
      "Create or activate a GitHub/provider workflow, remote, push, deployment, DNS, analytics, secret, public release, or authority cutover."
    ],
    "constraints": []
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
    "baselineId": "baseline-d0984e4b463e6148"
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
      "detail": "Carry out \"Prove Site cold-checkout install and CI command parity\" inside the resolved scope before widening impact to adjacent areas.",
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
        "package.json",
        "tools/skopos/actions/repository-cold-checkout.yaml",
        "tools/skopos/guards/repository-cold-checkout.yaml"
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
        "package.json",
        "scripts/check-cold-checkout.mjs",
        "tools/skopos/actions/repository-cold-checkout.yaml",
        "tools/skopos/guards/repository-cold-checkout.yaml"
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
        "docs/reference/generated/site-local-readiness-baseline.json",
        "package.json",
        "scripts/check-local-readiness.mjs"
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
    "site.local-readiness",
    "site.source-safety"
  ],
  "evidenceRequirements": [
    {
      "id": "acceptance-1",
      "acceptanceCriterion": "A disposable archive-backed Git checkout is reconstructed from exact committed HEAD with an identical tree, no remote, no parent authority, and no dependency or build state inherited from the source checkout.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-2",
      "acceptanceCriterion": "Node 24.13.0 and pnpm 10.26.0 perform pnpm install --frozen-lockfile from empty node_modules and an empty task-local pnpm store without changing the lockfile or tracked tree.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-3",
      "acceptanceCriterion": "The provider-neutral root ci:verify declaration exactly matches and passes source-safety, typecheck, lint, build, test, local-readiness, and repository-boundary commands in the disposable checkout.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-4",
      "acceptanceCriterion": "A registered target-local Action and Guard require source-bound cold-checkout Evidence for package, lock, workspace, CI-command, or cold-check harness changes without replacing behavioral Actions.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-5",
      "acceptanceCriterion": "SITE-B04 and overview truth record only local cold-checkout and CI-command parity; cross-platform/provider CI, owner thresholds, claims, assets, legal, privacy, security, preview, remote, deployment, DNS, analytics, release, and authority cutover remain fail-closed.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-6",
      "acceptanceCriterion": "Task-selected Actions, focused formatting/diff checks, and strict Git integrity pass with no secrets or external mutations beyond read-only package-registry retrieval.",
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
        "docs/reference/generated/site-local-readiness-baseline.json"
      ],
      "reason": "The Task-owned package.json CI command changes the registered local-readiness sourceInputDigest; the generator-owned receipt must be regenerated atomically with its causal package input.",
      "actorId": "bhaskarbarma",
      "recordedAt": "2026-08-10T21:02:51.963Z",
      "baselinePaths": [
        {
          "path": "docs/reference/generated/site-local-readiness-baseline.json",
          "digest": "1cd73857930686ffb50453abd65009bbbd72587f9c794cbf5bb8089de907badb"
        }
      ]
    },
    {
      "paths": [
        "scripts/check-local-readiness.mjs"
      ],
      "reason": "The committed cold checkout mechanically reproduces same-source Next route HTML gzip-byte variance while sourceInputDigest, raw HTML bytes, bundle totals, and source are unchanged; the checker owner must exclude only that host-observed generated field from stable equality.",
      "actorId": "bhaskarbarma",
      "recordedAt": "2026-08-10T21:07:18.527Z",
      "baselinePaths": [
        {
          "path": "scripts/check-local-readiness.mjs",
          "digest": "02e956a4dfc5b41456053aa4ce41820bcef38762c36c5943488a2f05e6e4e23e"
        }
      ]
    }
  ],
  "declaredOwnedPaths": [
    "docs/overview.md",
    "docs/reference/generated/site-local-readiness-baseline.json",
    "docs/standards/00-repository-readiness-contract.md",
    "package.json",
    "scripts/check-cold-checkout.mjs",
    "scripts/check-local-readiness.mjs",
    "tools/skopos/actions/repository-cold-checkout.yaml",
    "tools/skopos/guards/repository-cold-checkout.yaml"
  ]
}
```
<!-- skopos:task-state:end -->
