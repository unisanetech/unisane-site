---
id: 'DOC-31092dd4b5be'
owner: 'site-maintainers'
scope: workspace
role: standard
lifecycle: historical
authority: supporting
provenance: accepted
view: transition
status: accepted
---

# Unisane Site Repository Readiness Contract

This contract defines the fail-closed boundary that must be satisfied before the current
`unisane-landing/**` candidate can become a local filtered `unisane-site` shadow. It does
not authorize the shadow, a rename, a copy, history filtering, a remote, public
visibility, publication, DNS or hosting changes, or deployment.

## Governing Authority

This contract applies, but does not replace, the canonical repository owners:

- The Infrastructure [ecosystem architecture Standard](https://github.com/unisanetech/unisane-infrastructure/blob/main/docs/standards/04-ecosystem-architecture.md)
  and [repository remote and visibility Decision](https://github.com/unisanetech/unisane-infrastructure/blob/main/docs/decisions/D-20260724-unisane-ecosystem-repository-remote-and-visibility-contract.md)
  own repository topology, visibility, and authority transfer. Until cutover is
  explicitly completed, this repository remains a local, non-authoritative candidate.
- `unisane-infrastructure/repository-system/manifests/unisane-site.json`
- The UI [application architecture baseline](https://github.com/unisanetech/unisane-ui/blob/main/docs/standards/10-ui-application-architecture-baseline.md)
  owns the shared UI application contract.
- The Framework [documentation structure and authority Standard](https://github.com/unisanetech/unisane/blob/main/docs/standards/06-docs-structure-and-authority.md),
  [documentation metadata and changelog Standard](https://github.com/unisanetech/unisane/blob/main/docs/standards/docs-metadata-and-changelog-standard.md),
  and [workspace build and tooling simplicity Standard](https://github.com/unisanetech/unisane/blob/main/docs/standards/08-workspace-build-and-tooling-simplicity-contract.md)
  own documentation and workspace conventions.
- `AGENTS.md` and the accepted security/public-history rules embedded in the separation
  authority

If this document conflicts with one of those canonical owners, the canonical owner wins
and this contract must be corrected. Repo-local Skopos owns target-local Tasks,
Evidence, Readiness, and closure only.

## Truth Discipline

### Accepted facts

- the final repository identity is public `github.com/unisane/unisane-site` with
  protected `main`;
- the Site owns the public website, content, site-local UI, privacy/analytics policy,
  deployment configuration, Site tests, brand publishing, and Site documentation;
- the Site is a publication gateway and never owns writable product/package truth;
- the current source path is `unisane-landing/**`, and its filtered history is renamed
  to the target repository root only after convergence;
- Site may consume released `@unisane/ui` and `@unisane/tokens` artifacts and versioned
  product projections; sibling-source links are forbidden;
- the target manifest fixes Node `24.13.0`, pnpm `10.26.0`, Corepack, a pnpm workspace,
  TypeScript, ESLint, Prettier, Vitest, and Turbo as the target foundation;
- accountable ownership is founder/site-maintainers, while recovery, CODEOWNERS,
  security, deployment, legal, contributor, asset-rights, public-distribution, and
  target-authority decisions remain unresolved in the manifest.

### Evidence-based inferences

- the current App Router pages and Site composition are plausible product-source
  candidates, but their content is not publication-approved merely because it renders;
- the generic local UI/config packages are template residue or transitional copies
  unless the next Task proves a necessary Site-local boundary;
- a minimal standalone target can remain a small pnpm workspace if it owns more than the
  deployable app; otherwise unnecessary packages must collapse rather than survive for
  monorepo neatness;
- environment, analytics, privacy, domain, hosting, and operational work will require
  both Site-owned declarations and provider/Infrastructure coordination, but that does
  not transfer product source or deployment responsibility to Infrastructure.

### Unresolved owner decisions

No value below may be guessed:

1. legal entity and approved public source/content license;
2. NOTICE, dependency attribution, contributor terms, and asset/font/image/content
   rights;
3. final brand identity, logo, company claims, contact details, social accounts,
   testimonials, case studies, customer consent, and outcome substantiation;
4. real CODEOWNERS identities, security owner, recovery owner, vulnerability-reporting
   route, and public support route;
5. production and preview host, deployment identity, protected environments, rollback,
   incident, SLO, monitoring, backup, and cost ownership;
6. canonical domains, redirects, registrar, DNS provider, DNS mutation owner, domain
   recovery, certificate, and expiration ownership;
7. analytics provider, event taxonomy, consent basis, privacy/cookie policy, retention,
   deletion, data-subject request, access, and incident owners;
8. onboarding intake owner, transport, storage, retention, consent, spam/abuse controls,
   notification behavior, and whether the public form should exist;
9. final framework/package versions and whether any Site-local package survives source
   convergence;
10. accessibility, SEO, performance, availability, and support budgets.

## Final Target Shape

The source-convergence Task must justify every retained root. The target shape is:

```text
unisane-site/
├── apps/web/                       # deployable public Site
├── packages/                       # only proven Site-local packages, otherwise absent
├── content/                        # approved Site-owned content/projections, if needed
├── docs/                           # local Memory and public contributor/operator docs
├── scripts/                        # bounded owner-local checks only, if needed
├── tests/                          # cross-route/evidence tests not owned by apps/web
├── .github/
│   ├── CODEOWNERS
│   └── workflows/
├── AGENTS.md
├── skopos.config.yaml
├── tools/skopos/                   # local Scopes/profiles/policy/Actions/Guards only
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── turbo.json
├── eslint/prettier/typescript/test configuration
├── .gitignore
├── .gitattributes
├── LICENSE                         # only after authorized approval
├── NOTICE                          # only after authorized approval
└── SECURITY.md and contributor/community files
```

There is one repo-local package manager, workspace definition, lockfile, task graph, CI,
deployment configuration, documentation router, and Skopos authority. Root commands are
conventional and bounded: `dev`, `build`, `start`, `lint`, `typecheck`, and `test`, plus
named content/link/privacy/accessibility/SEO/performance/preview checks only when the
repository actually owns them. No command may inherit the umbrella or checkout parent.

The source-convergence Task must reconcile the target-manifest tool versions with the
actual dependency graph and regenerate one frozen lockfile. It must not preserve current
manifest/lock drift or silently select different major versions.

### Local materialization result

The non-authoritative candidate filtered from
`e3cb9c768c1b3b96c059269b2a68d0db1624b9bc` now uses `apps/web/**`,
`docs/**`, `scripts/**`, and the repository-system foundation. The previously local
`Button`, `cn`, and stylesheet files moved into app-owned source with their Git
history; the generic `packages/**` shells are absent. The target owns one Node
`24.13.0` / pnpm `10.26.0` workspace and lockfile and contains no `@workspace/*`,
sibling-source, `file:`, `link:`, symlink, submodule, or parent-checkout dependency.

The target-owned environment-variable contract now documents and mechanically checks
the sole public input, `NEXT_PUBLIC_SITE_URL`, including a reserved local placeholder
and fail-closed release/deployment states. This result is technical local evidence only.
It does not approve Site content, assets,
license, NOTICE, contributors, public distribution, security ownership, recovery,
CODEOWNERS, deployment, analytics, domains, hosting, a remote, or an authority cutover.

## Dependency Contract

1. Site imports public UI through released registry versions and explicit flat exports.
2. The normal first-party app imports `@unisane/ui/styles.css` and approved flat modules;
   it does not alias UI source or import token source directly. Although the repository
   manifest permits `@unisane/tokens`, direct use requires the UI owner contract to
   justify it rather than bypassing `@unisane/ui`.
3. Inside the target only, `workspace:*` is allowed for a package proven to be Site-owned.
4. Across repositories, `workspace:*`, `file:`, `link:`, source aliases, symlinks,
   submodules, sibling paths, branch dependencies, and committed tarballs are forbidden.
5. Exact local cross-repository proof uses a disposable packed artifact; shared proof
   uses an immutable canary. Neither becomes source or release authority.
6. Product documentation and product facts arrive as versioned, immutable, read-only
   projections. Site cannot edit or redefine the product owner.
7. Infrastructure owns repository/domain/vendor desired state and reviewed mutations,
   not Site source, build configuration, content, deployment implementation, or runtime.

## Content, Brand, Asset, And Operational Ownership

| Surface                                                            | Site-local owner       | External/shared owner                                                          | Gate                              |
| ------------------------------------------------------------------ | ---------------------- | ------------------------------------------------------------------------------ | --------------------------------- |
| navigation, marketing pages, Site UI and Site SEO copy             | Site                   | brand/legal review where applicable                                            | source convergence/public release |
| logo use, identity, company claims, social/contact identities      | Site publishing        | founder/authorized brand and legal owner                                       | source convergence                |
| product claims and documentation                                   | read-only presentation | owning product repository publishes a versioned projection                     | source convergence                |
| case studies, testimonials, metrics and customer names             | Site content           | customer/contract/legal consent owner                                          | public release                    |
| fonts, icons, images, video, screenshots and copied components     | Site asset manifest    | copyright/license/provenance owner                                             | local shadow/public release       |
| environment-variable schema and non-secret examples                | Site                   | provider-specific values remain in approved host/secret manager                | local shadow/deployment           |
| analytics events, consent UX, privacy/cookie content               | Site                   | approved analytics/privacy/security owners                                     | public release/deployment         |
| canonical URL, redirects and application host requirements         | Site                   | Infrastructure owns declarative domain/DNS control; provider owns actual state | local shadow/deployment           |
| preview/production config, migrations, rollback and runtime checks | Site                   | approved hosting provider and deployment identities                            | local shadow/deployment           |
| monitoring, alerting, SLO, incident, backup and recovery           | Site operations        | provider capabilities and company emergency owner                              | production deployment             |

Environment-variable documentation records names, purpose, required/optional state,
scope, safe placeholder, validation, rotation owner, and provider owner. Values and
sensitive identifiers never enter Git, public Evidence, logs, or build output. Public
fork CI receives no deployment, analytics, provider, or private-platform secrets.

## Legal And Public Distribution Gate

Before public remote population or distribution, an authorized legal/business owner
must approve and evidence:

- root license text and legal owner; public visibility is not a license grant;
- package metadata license expressions where applicable;
- NOTICE and a complete third-party dependency/attribution report;
- contributor rights for employees, contractors, and external contributors;
- rights and consent for source, docs, templates, UI copies, fonts, icons, logos, images,
  screenshots, fixtures, customer names, testimonials, metrics, and links;
- deployment-bundle and source-tree notice inclusion plus incompatible-material
  exclusion;
- privacy, cookies, analytics, intake, retention, deletion, and public contact policies.

Current `PROPRIETARY` package metadata, absent root terms, template origin, and footer
“all rights reserved” text do not decide the final public license. No agent may invent or
copy license text to clear this gate.

## History And Public-Safety Gate

Before a filtered shadow, the next owner must audit a disposable full clone at a new
source freeze and record:

1. immutable source remote, branch, commit, tree, tracked manifest, included/excluded
   paths, and exact rename/filter specification;
2. all commits, authors, committers, timestamps, merge ancestry, tags, releases,
   deleted paths, path renames, blame, and representative `--follow` histories;
3. full-history secret scanning with approved scanners and reviewed high-confidence
   patterns; any exposed credential is rotated before rewriting or publishing;
4. current and historical email, phone, personal, customer, testimonial, form, analytics,
   provider, account, environment, and internal-only data classification;
5. every binary and large object by path, size, type, digest, current reachability,
   necessity, optimization decision, provenance, rights, and target disposition;
6. generated output, caches, build products, logs, archives, dependency directories,
   local Skopos state, and provider evidence; undeclared output is excluded;
7. dependency licenses, copied templates/components, fonts, icons, images, screenshots,
   content and contributor provenance;
8. redacted receipt identities and integrity hashes in public provenance while detailed
   sensitive findings remain in an access-controlled audit store;
9. old-to-new commit map, filter hash, file-manifest comparison, omitted material and
   rationale; and
10. a clean post-convergence tree with no dummy, stale, unused, sibling-coupled,
    umbrella-only, or unresolved-public-safety residue.

The deterministic local certificate now binds the exact approved standalone checkpoint,
preserved-provenance inputs, all reachable objects, every unique blob-path association
across the reachable commit trees, privacy-safe secret/private/customer/provider signal
categories, large and binary objects, generated-output exclusions, and fail-closed
fixtures. Object content is scanned once while all path-sensitive predicates and content
signal associations cover the complete path-association set. Its live command applies the
same proof to current approved local refs without emitting raw findings. This advances
only the mechanical local checkpoint: approved scanners, human classification, rotations
or scrubs, rights review, and public-release authority remain required. History rewriting
never occurs in the active worktree or sole clone.

## Deterministic Evidence Contract

All evidence binds the exact source freeze, lockfile, Node/pnpm/Corepack versions,
operating-system/runtime image, commands, relevant configuration, and cold-cache state.
Receipts identify artifact/report digests and redact sensitive values.

| Evidence             | Minimum pass condition                                                                                                                                                                                                                       |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| clean install        | disposable standalone clone; no parent/sibling checkout; empty package/cache/build state; Corepack selects Node `24.13.0` and pnpm `10.26.0`; `pnpm install --frozen-lockfile` succeeds without lock changes or undeclared lifecycle repair  |
| dependency direction | lockfile and source scan contain no forbidden cross-repository locator or source alias; UI resolves to approved released/canary coordinates                                                                                                  |
| lint and types       | repo-root `pnpm lint` and `pnpm typecheck` select all owned source and pass with zero warnings where configured as errors                                                                                                                    |
| tests                | repo-root `pnpm test` runs unit, component, route, content/link, privacy, data-handling, and failure-path coverage selected by the owner; zero tests is failure                                                                              |
| production build     | cold `pnpm build` succeeds twice from the same source/lock in isolated clones; output manifests match after documented nondeterministic metadata exclusions; no network/provider mutation, secret leak, or parent resolution occurs          |
| runtime smoke        | built output starts by the documented command; every public route, 404/error path, navigation target, metadata asset and declared form behavior is exercised                                                                                 |
| accessibility        | automated semantic/contrast checks plus keyboard, focus, reduced-motion, zoom/reflow and screen-reader smoke journeys pass the owner-approved accessibility budget; absent budget or unreviewed serious findings fail                        |
| SEO                  | approved canonical domain input; route/canonical/metadata/Open Graph/robots/sitemap/structured-data/link checks pass; placeholder, broken, duplicate or unintended-index content fails                                                       |
| performance          | fixed production profile, route set, network/device conditions, run count and aggregation method are committed before measurement; owner-approved Web Vitals/bundle/image budgets pass; absent thresholds fail rather than inventing numbers |
| preview              | immutable commit deploys to a protected non-production environment with no production/DNS mutation; route, security-header, privacy/consent, intake and rollback smoke checks pass; the preview URL and receipt are access-appropriate       |
| provenance           | tracked manifest/tree, history/filter/map digests, audit receipt IDs, target foundation digest and build/preview receipts reconcile to one source freeze                                                                                     |

Public fork checks never receive secrets. Jobs requiring protected environments run only
under explicit trust conditions. CI artifacts, Lighthouse/axe reports, screenshots,
bundles, logs and provenance attestations use retention policy and are not committed
unless a reviewed fixture explicitly owns them.

## Fail-Closed Blocker Ledger

`open` means the applicable gate cannot advance. A later-stage blocker does not claim an
earlier technical shadow is publicly releasable.

| ID       | Open blocker                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Owner decision/evidence required                                                                                          | Earliest blocked gate                                              |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| SITE-B01 | closed in the local candidate: repository/app identity is `unisane-site` / `@unisane-site/web`, and retained roots are reconciled                                                                                                                                                                                                                                                                                                                                                                    | preserve the reviewed root inventory through cutover                                                                      | source convergence                                                 |
| SITE-B02 | closed in the local candidate: the three required UI files are app-owned and no cross-repository source/package dependency exists                                                                                                                                                                                                                                                                                                                                                                    | any future shared UI use must consume an approved released coordinate                                                     | source convergence                                                 |
| SITE-B03 | closed in the local candidate: target-local Node/pnpm/workspace/Turbo/config/lockfile authority passes clean isolated install                                                                                                                                                                                                                                                                                                                                                                        | preserve frozen-lock and contained-command proof                                                                          | source convergence                                                 |
| SITE-B04 | host-observed local readiness plus same-host archive-backed cold-checkout, empty-store frozen-install, and provider-neutral CI-command parity pass; cross-platform/provider CI, owner budgets, privacy/security, and preview proof remain open                                                                                                                                                                                                                                                       | cross-platform/provider CI plus approved accessibility/SEO/performance budgets and privacy/security/preview evidence      | local shadow                                                       |
| SITE-B06 | brand, contact, social, legal-entity, portfolio, testimonial and quantified-outcome claims are unverified                                                                                                                                                                                                                                                                                                                                                                                            | authorized brand/content/legal evidence and explicit per-claim disposition                                                | source convergence                                                 |
| SITE-B07 | license, NOTICE, attribution, contributor and public-distribution terms are unapproved                                                                                                                                                                                                                                                                                                                                                                                                               | authorized legal decisions and enforcement evidence                                                                       | public remote/release                                              |
| SITE-B08 | a source-bound privacy-safe certificate passes for all objects and every unique blob-path association across commit trees reachable from the exact approved local checkpoint, with zero high-confidence secret, sensitive-path, generated-output, or unscanned-oversized blockers; the live command applies the same object and path-association proof to all current approved local refs, while private/customer/provider signals and large/binary objects remain category-and-digest evidence only | approved scanner selection, human privacy/customer/provider/rights classification, and rotations or scrubs where required | local shadow                                                       |
| SITE-B09 | a registered read-only, networkless Action/Guard now enforces the privacy-safe mechanical receipt for tracked app assets/source/CSS, checker, receipt, package command and owning docs; the receipt records 22 image assets by digest, type, dimensions and bytes, keeps customer-like filenames opaque, records no tracked font asset and digest-binds network references; necessity, optimization, provenance, rights, privacy, provider approval and thresholds remain unresolved                 | per-asset owner, rights, disposition and performance evidence plus approved font/network/privacy decisions                | local shadow                                                       |
| SITE-B10 | closed in the local candidate: the one public environment input is documented with exposure, gate requirements, owners, validation, and a reserved safe placeholder; the checker binds the exact contract                                                                                                                                                                                                                                                                                            | an authorized owner must still approve the canonical domain and provider value                                            | local shadow                                                       |
| SITE-B11 | analytics, consent, privacy, cookie, retention and data-subject ownership are unresolved                                                                                                                                                                                                                                                                                                                                                                                                             | approved product/privacy/security contract and tests                                                                      | public release/deployment                                          |
| SITE-B12 | canonical domains, redirects, registrar/DNS ownership and recovery are unverified                                                                                                                                                                                                                                                                                                                                                                                                                    | Site requirements plus Infrastructure/provider desired-state and recovery evidence                                        | local shadow for domain claims; deployment for mutation            |
| SITE-B13 | host, preview/production deployment, rollback, incidents, monitoring, SLO and cost ownership are unresolved                                                                                                                                                                                                                                                                                                                                                                                          | approved Site operations contract and preview proof                                                                       | local shadow for target shape; production deployment for operation |
| SITE-B14 | closed for target-local workflow readiness: reviewed existing-project adoption and eight local Action/Guard pairs are activated for local Tasks and Evidence only                                                                                                                                                                                                                                                                                                                                    | preserve the reviewed adoption and capability receipts without transferring umbrella source authority                     | local shadow                                                       |
| SITE-B15 | CODEOWNERS, recovery, vulnerability reporting, community/security policy and branch controls are unresolved                                                                                                                                                                                                                                                                                                                                                                                          | authenticated human/team and security-owner decisions                                                                     | remote authority                                                   |
| SITE-B16 | retained route navigation, fragment and home-return journeys, static targets, framework error artifacts, and runtime 404 behavior are declared and checked; owner accessibility/SEO/performance budgets and forced-error/preview journeys remain open                                                                                                                                                                                                                                                | approve budgets and separately authorize any failure-injection or preview contract                                        | local shadow                                                       |
| SITE-B17 | no target remote or external organization authority is authorized                                                                                                                                                                                                                                                                                                                                                                                                                                    | separate authenticated owner/recovery/governance Task and approval                                                        | remote authority                                                   |
| SITE-B18 | closed for the local candidate: frozen source, path-rename filter spec, commit-map digest, inventory digest, and zero-residue receipt are recorded                                                                                                                                                                                                                                                                                                                                                   | preserve receipts through any reviewed authority cutover                                                                  | local shadow                                                       |

`SITE-B05` is closed for the current authoritative tree: the non-functional intake
route/form, simulated success, visitor-field console emission, and every route CTA are
deleted, and the Site-local source-safety check fails if they return. A future intake
surface requires a new approved product/privacy/security contract and Task; this closure
does not pre-approve one.

The manifest still declares local-shadow admission blocked while `SITE-B04`,
`SITE-B06`, `SITE-B08`, `SITE-B09`, `SITE-B12`, `SITE-B13`, or `SITE-B16`
is open. `SITE-B07`, `SITE-B11`, `SITE-B15`, and `SITE-B17` remain explicit
later-gate blockers.

The committed local-readiness baseline and cold-checkout proof are host-observed. Their
environment and timings are non-evaluated observations. The cold harness forwards no
ambient credentials, retrieves public packages into an empty task-local store, and runs
the exact registered command sequence from a no-remote checkout whose tree matches the
committed source tree. This does not establish cross-platform or provider CI readiness.

## Safest Next Task

After reviewer acceptance of the cold-checkout proof, provider CI still requires a
separate security/remote-governance decision and cross-platform execution. Claims,
assets, legal, privacy, security, remote, deployment, DNS, analytics, public release,
owner performance/accessibility/SEO budgets, and authority cutover remain fail-closed
later Tasks requiring explicit owner approval. No successor work starts from this lane
without review.
