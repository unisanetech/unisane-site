---
title: "Task: Add deterministic local Site readiness evidence"
status: complete
owner: "bhaskarbarma"
id: T-425009c6
scope: "workspace"
role: task
lifecycle: historical
authority: canonical
provenance: accepted
view: exception
risk: standard
proofSubject: task-closure
proofBaseline: baseline-4bafed26c9f59c09
lastUpdated: 2026-08-10
---

# Task: Add deterministic local Site readiness evidence

## Changelog

- `2026-08-10`: Synchronized Task state `complete` from Skopos.

## Goal

Add deterministic local Site readiness evidence

## Acceptance

- The retained routes, internal navigation and fragments, static targets, framework 404/error surfaces, and existing visitor journeys have deterministic local checks and runtime Evidence.
- Mechanical accessibility and semantic checks plus a canonical-input and SEO metadata inventory pass without inventing claims, budgets, domains, or owner approval.
- A generated local baseline records reproducible environment and run methodology, bundle and image sizes, and observed local response timing as non-evaluated where thresholds are absent.
- Package-owned scripts and proportional Skopos Actions/Guards enforce the new evidence, and SITE-B04/B16 change only for the proof actually implemented.
- Build, typecheck, lint, test, source-safety, local-readiness, boundary, formatting, and link proof pass with no external mutation or authority change.

## Non-Goals

- Do not change marketing claims, asset/rights dispositions, contact/legal/privacy text, analytics, environment values, providers, hosting, deployment, DNS, remotes, public release, or source authority.

## Constraints

- Use no network or external system; owner thresholds, canonical-domain approval, asset rights, privacy/security, preview/deployment, and release gates remain fail-closed.

## Admission And Workflow

- Workflow: `tracked`
- Selected risk/detail: `standard` / `standard`
- Recommended risk/detail: `standard` / `standard`
- Selection source: `explicit-override`
- Reason: The work changes multiple paths, durable guidance, configuration, or a normal coordinated surface.

## Owned Paths

- `apps/web/app`
- `apps/web/components/home/hero-section.tsx`
- `apps/web/components/home/portfolio-section.tsx`
- `apps/web/components/layouts`
- `apps/web/package.json`
- `docs/reference/generated/site-local-readiness-baseline.json`
- `docs/standards/00-repository-readiness-contract.md`
- `package.json`
- `scripts/check-local-readiness.mjs`
- `tools/skopos/actions/quality-test.yaml`
- `tools/skopos/actions/site-local-readiness.yaml`
- `tools/skopos/guards/site-local-readiness.yaml`

## Ownership Expansions

- `2026-08-10T12:02:43.852Z` by `bhaskarbarma`: `tools/skopos/actions/quality-test.yaml` — The package-owned test command now invokes the local readiness checker, so its registered Action must declare the checker and generated baseline as causal inputs for source-bound Evidence.

## Steps

- [x] **Record Task risk and detail before editing** (implementation, complete) — Confirm whether Task risk is light, standard, or high-impact. Keep the active Task current, use a Plan only for multi-Task direction, add a Decision for durable choices, and add or update a Finding for structural gaps.
- [x] **Review the current pattern in unisane-site** (implementation, complete) — Use the compact references to confirm the current scope, command surface, and docs entrypoints before editing code.
- [x] **Implement the smallest scoped change** (implementation, complete) — Carry out "Add deterministic local Site readiness evidence" inside the resolved scope before widening impact to adjacent areas.
- [x] **Sync docs and instruction surfaces if touched** (docs, complete) — Keep docs, instruction mirrors, and generated project knowledge aligned with the implementation.
- [x] **Build the Site application** (action, complete) — Required by Guard quality.build.
- [x] **Lint Site source** (action, complete) — Required by Guard quality.lint.
- [x] **Test Site behavior** (action, complete) — Required by Guard quality.test.
- [x] **Typecheck Site source** (action, complete) — Required by Guard quality.typecheck.
- [x] **Verify standalone repository boundary and Git integrity** (action, complete) — Required by Guard repository.boundary.
- [x] **Verify local Site routes, semantics, SEO, and baselines** (action, complete) — Required by Guard site.local-readiness.
- [x] **Verify Site source-safety behavior** (action, complete) — Required by Guard site.source-safety.

## Actions And Guards

- Action `quality.build`: Required by Guard quality.build.
- Action `quality.lint`: Required by Guard quality.lint.
- Action `quality.test`: Required by Guard quality.test.
- Action `quality.typecheck`: Required by Guard quality.typecheck.
- Action `repository.boundary`: Required by Guard repository.boundary.
- Action `site.local-readiness`: Required by Guard site.local-readiness.
- Action `site.source-safety`: Required by Guard site.source-safety.
- Guard `quality.build`
- Guard `quality.lint`
- Guard `quality.test`
- Guard `quality.typecheck`
- Guard `repository.boundary`
- Guard `site.local-readiness`
- Guard `site.source-safety`

## Evidence And Readiness

- The retained routes, internal navigation and fragments, static targets, framework 404/error surfaces, and existing visitor journeys have deterministic local checks and runtime Evidence. (closure, agent-observation)
- Mechanical accessibility and semantic checks plus a canonical-input and SEO metadata inventory pass without inventing claims, budgets, domains, or owner approval. (closure, agent-observation)
- A generated local baseline records reproducible environment and run methodology, bundle and image sizes, and observed local response timing as non-evaluated where thresholds are absent. (closure, agent-observation)
- Package-owned scripts and proportional Skopos Actions/Guards enforce the new evidence, and SITE-B04/B16 change only for the proof actually implemented. (closure, agent-observation)
- Build, typecheck, lint, test, source-safety, local-readiness, boundary, formatting, and link proof pass with no external mutation or authority change. (closure, agent-observation)
- Guard quality.build: Site source and package changes require build Evidence (closure, source-bound-action)
- Guard quality.lint: Site source and package changes require lint Evidence (closure, source-bound-action)
- Guard quality.test: Site source and package changes require test Evidence (closure, source-bound-action)
- Guard quality.typecheck: Site source and package changes require typecheck Evidence (closure, source-bound-action)
- Guard repository.boundary: Repository-shape changes require boundary and integrity Evidence (closure, source-bound-action)
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
  "id": "T-425009c6",
  "type": "task",
  "status": "durable",
  "generatedAt": "2026-08-10T11:46:50.477Z",
  "updatedAt": "2026-08-10T12:31:26.821Z",
  "planIds": [],
  "childTasks": [],
  "state": "complete",
  "detail": "standard",
  "title": "Add deterministic local Site readiness evidence",
  "goal": "Add deterministic local Site readiness evidence",
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
      "The retained routes, internal navigation and fragments, static targets, framework 404/error surfaces, and existing visitor journeys have deterministic local checks and runtime Evidence.",
      "Mechanical accessibility and semantic checks plus a canonical-input and SEO metadata inventory pass without inventing claims, budgets, domains, or owner approval.",
      "A generated local baseline records reproducible environment and run methodology, bundle and image sizes, and observed local response timing as non-evaluated where thresholds are absent.",
      "Package-owned scripts and proportional Skopos Actions/Guards enforce the new evidence, and SITE-B04/B16 change only for the proof actually implemented.",
      "Build, typecheck, lint, test, source-safety, local-readiness, boundary, formatting, and link proof pass with no external mutation or authority change."
    ],
    "nonGoals": [
      "Do not change marketing claims, asset/rights dispositions, contact/legal/privacy text, analytics, environment values, providers, hosting, deployment, DNS, remotes, public release, or source authority."
    ],
    "constraints": [
      "Use no network or external system; owner thresholds, canonical-domain approval, asset rights, privacy/security, preview/deployment, and release gates remain fail-closed."
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
      "ownedPathCount": 11,
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
    "baselineId": "baseline-4bafed26c9f59c09"
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
      "detail": "Carry out \"Add deterministic local Site readiness evidence\" inside the resolved scope before widening impact to adjacent areas.",
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
        "apps/web/app",
        "apps/web/components/home/hero-section.tsx",
        "apps/web/components/home/portfolio-section.tsx",
        "apps/web/components/layouts",
        "apps/web/package.json",
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
        "apps/web/app",
        "apps/web/components/home/hero-section.tsx",
        "apps/web/components/home/portfolio-section.tsx",
        "apps/web/components/layouts",
        "apps/web/package.json",
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
        "apps/web/app",
        "apps/web/components/home/hero-section.tsx",
        "apps/web/components/home/portfolio-section.tsx",
        "apps/web/components/layouts",
        "apps/web/package.json",
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
        "apps/web/app",
        "apps/web/components/home/hero-section.tsx",
        "apps/web/components/home/portfolio-section.tsx",
        "apps/web/components/layouts",
        "apps/web/package.json",
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
        "tools/skopos/actions/quality-test.yaml",
        "tools/skopos/actions/site-local-readiness.yaml",
        "tools/skopos/guards/site-local-readiness.yaml"
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
        "apps/web/components/home/hero-section.tsx",
        "apps/web/components/home/portfolio-section.tsx",
        "apps/web/components/layouts",
        "apps/web/package.json",
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
        "apps/web/app",
        "apps/web/components/home/hero-section.tsx",
        "apps/web/components/home/portfolio-section.tsx",
        "apps/web/components/layouts",
        "apps/web/package.json",
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
    "site.local-readiness",
    "site.source-safety"
  ],
  "evidenceRequirements": [
    {
      "id": "acceptance-1",
      "acceptanceCriterion": "The retained routes, internal navigation and fragments, static targets, framework 404/error surfaces, and existing visitor journeys have deterministic local checks and runtime Evidence.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-2",
      "acceptanceCriterion": "Mechanical accessibility and semantic checks plus a canonical-input and SEO metadata inventory pass without inventing claims, budgets, domains, or owner approval.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-3",
      "acceptanceCriterion": "A generated local baseline records reproducible environment and run methodology, bundle and image sizes, and observed local response timing as non-evaluated where thresholds are absent.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-4",
      "acceptanceCriterion": "Package-owned scripts and proportional Skopos Actions/Guards enforce the new evidence, and SITE-B04/B16 change only for the proof actually implemented.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-5",
      "acceptanceCriterion": "Build, typecheck, lint, test, source-safety, local-readiness, boundary, formatting, and link proof pass with no external mutation or authority change.",
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
        "tools/skopos/actions/quality-test.yaml"
      ],
      "reason": "The package-owned test command now invokes the local readiness checker, so its registered Action must declare the checker and generated baseline as causal inputs for source-bound Evidence.",
      "actorId": "bhaskarbarma",
      "recordedAt": "2026-08-10T12:02:43.852Z",
      "baselinePaths": [
        {
          "path": "tools/skopos/actions/quality-test.yaml",
          "digest": "23a16d6779fc745b19287d21ba8c08ac67108408dc870af77fe452c019fa4780"
        }
      ]
    }
  ],
  "declaredOwnedPaths": [
    "apps/web/app",
    "apps/web/components/home/hero-section.tsx",
    "apps/web/components/home/portfolio-section.tsx",
    "apps/web/components/layouts",
    "apps/web/package.json",
    "docs/reference/generated/site-local-readiness-baseline.json",
    "docs/standards/00-repository-readiness-contract.md",
    "package.json",
    "scripts/check-local-readiness.mjs",
    "tools/skopos/actions/quality-test.yaml",
    "tools/skopos/actions/site-local-readiness.yaml",
    "tools/skopos/guards/site-local-readiness.yaml"
  ]
}
```
<!-- skopos:task-state:end -->
