---
title: "Task: Make the Site asset inventory privacy-fail-closed and Task-enforced"
status: active
owner: "bhaskarbarma"
id: T-b0adf516
scope: "workspace"
role: task
lifecycle: active
authority: canonical
provenance: accepted
view: current
risk: high-impact
proofSubject: task-closure
proofBaseline: baseline-5b6ac55fff61a16b
lastUpdated: 2026-08-10
---

# Task: Make the Site asset inventory privacy-fail-closed and Task-enforced

## Changelog

- `2026-08-10`: Synchronized Task state `active` from Skopos.

## Goal

Make the Site asset inventory privacy-fail-closed and Task-enforced

## Acceptance

- Expose one canonical pnpm verifier command and one read-only, networkless site.asset-inventory Action that runs the existing generator verifier without a second implementation.
- Require the site.asset-inventory Action through a registered Guard for app asset/source/CSS, checker, receipt, package command, directly owned docs, and its Action/Guard declarations.
- Structurally reject any customer-like raw locator/path, any raw network target/hostname field or URL-shaped network value, and any occurrence of the exact withheld paths/targets retained in memory before serialization or write.
- Add focused no-network negative fixtures proving a raw customer locator and raw URL/hostname field are rejected by the same privacy invariant used in generation.
- Regenerate only directly invalidated generated receipts, run every Task-selected Action/Guard, create the required immutable high-impact snapshot, and close with no blockers.
- Preserve all application and asset bytes and keep rights, license, brand, privacy/provider approval, thresholds, publication, release, remote, and source authority fail-closed.

## Non-Goals

- Do not alter, delete, rename, or optimize assets or application behavior; do not decide rights, license, provider, privacy, performance thresholds, publication, or release.

## Constraints

- Do not rewrite a69f5004 or 49ed2dfd; no remote, push, deploy, DNS, analytics, provider mutation, or authority cutover.

## Admission And Workflow

- Workflow: `strict`
- Selected risk/detail: `high-impact` / `detailed`
- Recommended risk/detail: `high-impact` / `detailed`
- Selection source: `automatic`
- Reason: The goal contains high-impact signal: privacy.

## Owned Paths

- `docs/00-start-here.md`
- `docs/reference/generated/site-asset-font-network-inventory.json`
- `docs/reference/generated/site-local-readiness-baseline.json`
- `docs/standards/00-repository-readiness-contract.md`
- `package.json`
- `scripts/check-site-asset-inventory.mjs`
- `tools/skopos/actions/site-asset-inventory.yaml`
- `tools/skopos/guards/site-asset-inventory.yaml`

## Ownership Expansions

- None recorded.

## Steps

- [x] **Record Task risk and detail before editing** (implementation, complete) — Confirm whether Task risk is light, standard, or high-impact. Keep the active Task current, use a Plan only for multi-Task direction, add a Decision for durable choices, and add or update a Finding for structural gaps.
- [x] **Review the current pattern in unisane-site** (implementation, complete) — Use the compact references to confirm the current scope, command surface, and docs entrypoints before editing code.
- [x] **Implement the smallest scoped change** (implementation, complete) — Carry out "Make the Site asset inventory privacy-fail-closed and Task-enforced" inside the resolved scope before widening impact to adjacent areas.
- [x] **Sync docs and instruction surfaces if touched** (docs, complete) — Keep docs, instruction mirrors, and generated project knowledge aligned with the implementation.
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

- Expose one canonical pnpm verifier command and one read-only, networkless site.asset-inventory Action that runs the existing generator verifier without a second implementation. (closure, agent-observation)
- Require the site.asset-inventory Action through a registered Guard for app asset/source/CSS, checker, receipt, package command, directly owned docs, and its Action/Guard declarations. (closure, agent-observation)
- Structurally reject any customer-like raw locator/path, any raw network target/hostname field or URL-shaped network value, and any occurrence of the exact withheld paths/targets retained in memory before serialization or write. (closure, agent-observation)
- Add focused no-network negative fixtures proving a raw customer locator and raw URL/hostname field are rejected by the same privacy invariant used in generation. (closure, agent-observation)
- Regenerate only directly invalidated generated receipts, run every Task-selected Action/Guard, create the required immutable high-impact snapshot, and close with no blockers. (closure, agent-observation)
- Preserve all application and asset bytes and keep rights, license, brand, privacy/provider approval, thresholds, publication, release, remote, and source authority fail-closed. (closure, agent-observation)
- Guard quality.build: Site source and package changes require build Evidence (closure, source-bound-action)
- Guard quality.lint: Site source and package changes require lint Evidence (closure, source-bound-action)
- Guard quality.test: Site source and package changes require test Evidence (closure, source-bound-action)
- Guard quality.typecheck: Site source and package changes require typecheck Evidence (closure, source-bound-action)
- Guard repository.boundary: Repository-shape changes require boundary and integrity Evidence (closure, source-bound-action)
- Guard repository.cold-checkout: Repository and CI foundation changes require cold-checkout Evidence (closure, source-bound-action)
- Guard site.local-readiness: Site route and readiness changes require local readiness Evidence (closure, source-bound-action)
- Guard site.source-safety: Behavioral Site changes require source-safety Evidence (closure, source-bound-action)

## Memory Obligations

- [complete] architecture: High-impact work must review and synchronize durable Memory for Scope workspace.; resolution: reviewed-no-change

## Portable Task State

This machine-readable block is the durable source used to rebuild local Skopos state.

<!-- skopos:task-state:start -->
```json
{
  "schemaVersion": 1,
  "id": "T-b0adf516",
  "type": "task",
  "status": "active",
  "generatedAt": "2026-08-10T21:44:44.406Z",
  "updatedAt": "2026-08-10T21:51:16.867Z",
  "planIds": [],
  "childTasks": [],
  "state": "active",
  "detail": "detailed",
  "title": "Make the Site asset inventory privacy-fail-closed and Task-enforced",
  "goal": "Make the Site asset inventory privacy-fail-closed and Task-enforced",
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
      "Expose one canonical pnpm verifier command and one read-only, networkless site.asset-inventory Action that runs the existing generator verifier without a second implementation.",
      "Require the site.asset-inventory Action through a registered Guard for app asset/source/CSS, checker, receipt, package command, directly owned docs, and its Action/Guard declarations.",
      "Structurally reject any customer-like raw locator/path, any raw network target/hostname field or URL-shaped network value, and any occurrence of the exact withheld paths/targets retained in memory before serialization or write.",
      "Add focused no-network negative fixtures proving a raw customer locator and raw URL/hostname field are rejected by the same privacy invariant used in generation.",
      "Regenerate only directly invalidated generated receipts, run every Task-selected Action/Guard, create the required immutable high-impact snapshot, and close with no blockers.",
      "Preserve all application and asset bytes and keep rights, license, brand, privacy/provider approval, thresholds, publication, release, remote, and source authority fail-closed."
    ],
    "nonGoals": [
      "Do not alter, delete, rename, or optimize assets or application behavior; do not decide rights, license, provider, privacy, performance thresholds, publication, or release."
    ],
    "constraints": [
      "Do not rewrite a69f5004 or 49ed2dfd; no remote, push, deploy, DNS, analytics, provider mutation, or authority cutover."
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
      "ownedPathCount": 8,
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
    "baselineId": "baseline-5b6ac55fff61a16b"
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
      "detail": "Carry out \"Make the Site asset inventory privacy-fail-closed and Task-enforced\" inside the resolved scope before widening impact to adjacent areas.",
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
        "tools/skopos/actions/site-asset-inventory.yaml",
        "tools/skopos/guards/site-asset-inventory.yaml"
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
      "acceptanceCriterion": "Expose one canonical pnpm verifier command and one read-only, networkless site.asset-inventory Action that runs the existing generator verifier without a second implementation.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-2",
      "acceptanceCriterion": "Require the site.asset-inventory Action through a registered Guard for app asset/source/CSS, checker, receipt, package command, directly owned docs, and its Action/Guard declarations.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-3",
      "acceptanceCriterion": "Structurally reject any customer-like raw locator/path, any raw network target/hostname field or URL-shaped network value, and any occurrence of the exact withheld paths/targets retained in memory before serialization or write.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-4",
      "acceptanceCriterion": "Add focused no-network negative fixtures proving a raw customer locator and raw URL/hostname field are rejected by the same privacy invariant used in generation.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-5",
      "acceptanceCriterion": "Regenerate only directly invalidated generated receipts, run every Task-selected Action/Guard, create the required immutable high-impact snapshot, and close with no blockers.",
      "phase": "closure",
      "actionIds": [],
      "guardIds": [],
      "evidence": "agent-observation"
    },
    {
      "id": "acceptance-6",
      "acceptanceCriterion": "Preserve all application and asset bytes and keep rights, license, brand, privacy/provider approval, thresholds, publication, release, remote, and source authority fail-closed.",
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
  "memoryObligations": [
    {
      "id": "memory-architecture-21a3230e03",
      "role": "architecture",
      "reason": "High-impact work must review and synchronize durable Memory for Scope workspace.",
      "status": "complete",
      "resolution": "reviewed-no-change",
      "resolutionReason": "Reviewed workspace architecture Memory: this successor adds local verification enforcement only and changes no application architecture or external authority; the supporting readiness standard already records the enforcement truth.",
      "resolvedAt": "2026-08-10T21:51:16.867Z",
      "resolvedByActorId": "bhaskarbarma"
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
    "docs/00-start-here.md",
    "docs/reference/generated/site-asset-font-network-inventory.json",
    "docs/reference/generated/site-local-readiness-baseline.json",
    "docs/standards/00-repository-readiness-contract.md",
    "package.json",
    "scripts/check-site-asset-inventory.mjs",
    "tools/skopos/actions/site-asset-inventory.yaml",
    "tools/skopos/guards/site-asset-inventory.yaml"
  ]
}
```
<!-- skopos:task-state:end -->
