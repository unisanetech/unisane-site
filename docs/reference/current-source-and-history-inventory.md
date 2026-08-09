---
id: 'DOC-12a19c8c930e'
owner: 'site-maintainers'
scope: workspace
role: reference
lifecycle: durable
authority: supporting
provenance: observed
view: current
status: accepted
---

# Current Site Source And History Inventory

This inventory records the observed `unisane-landing/**` boundary at umbrella commit
`8dcbadbc556476dfb8866f819400fbb884dc9827`. It is evidence for source
convergence, not permission to retain, rename, filter, publish, or deploy any file.

## Exact Current Boundary

| Measure | Observed value |
| --- | --- |
| included path | `unisane-landing/**` only |
| Git tree object | `2662e9e714e369bb9e9ecb9da68df322aefb6850` |
| tracked files | `140` |
| tracked blob bytes | `13,743,727` |
| sorted path-list SHA-256 | `4cb2e850ce59f7e33a47f11aebb4cf7054c81cfaedd4c04c613b5bfcb4666e97` |
| index-entry SHA-256 | `13ee5f426971443b155962d8bc7eb89174e0184babaf2bab212f44a99dec36dd` |
| tracked images | `21` files / `13,145,971` bytes |
| lockfiles | one `pnpm-lock.yaml` / `248,590` bytes |

The current file set is exactly the union below; the counts total 140:

| Boundary | Count | Exact contents |
| --- | ---: | --- |
| root | 7 | `.eslintrc.js`, `.gitignore`, `.npmrc`, `README.md`, `package.json`, `pnpm-lock.yaml`, `tsconfig.json` |
| `apps/web` | 60 | six files under `app/**` including the favicon; 16 under `components/**`; four under `hooks/**`; five under `lib/**`; 21 under `public/images/**`; one under `stores/**`; and seven app-root config/manifest/type files |
| `packages/ui` | 63 | six package-root config/manifest files; 53 named component modules plus one `.gitkeep` under `src/components/**`; one `src/hooks/.gitkeep`; one `src/lib/utils.ts`; and one `src/styles/globals.css` |
| `packages/eslint-config` | 5 | `README.md`, `base.js`, `next.js`, `react-internal.js`, `package.json` |
| `packages/typescript-config` | 5 | `README.md`, `base.json`, `nextjs.json`, `react-library.json`, `package.json` |

The tree object and both digests are the normative exactness check. A later disposition
ledger must enumerate all 140 paths from Git and assign one `retain`, `move`, `rewrite`,
`regenerate`, `delete`, or `block` result; this summary does not predetermine that
file-level decision.

## Current Product And Residue Observations

### Product-source candidates

- `apps/web/app/**` implements `/`, `/services`, `/work`, and `/onboarding` routes plus
  the root layout.
- `apps/web/components/**`, `hooks/**`, `stores/**`, and `lib/seo/**` implement actual
  Site layout, presentation, navigation, theme behavior, and metadata.
- `apps/web/lib/content/portfolio.ts` and the associated public images express intended
  case-study content, but every claim and asset remains blocked on owner and rights
  evidence.
- the inline SVG logo and favicon family are intended brand surfaces, but brand approval
  and provenance are not recorded.

### Template, dummy, stale, or unresolved candidates

- `README.md` still identifies the project as a shadcn monorepo template and repeats
  placeholder Unisane headings.
- the root package name is `unisane`; the app is `web`; local packages remain named
  `@workspace/*`; no manifest identifies the final `unisane-site` repository.
- `packages/ui/**` is a private, generic local component library shaped by the template.
  The app directly imports only nine component subpaths plus `lib/utils`; retention of
  the whole 63-file package is unproved and conflicts with the accepted released-UI
  dependency direction unless an explicit Site-local ownership decision justifies a
  smaller boundary.
- `apps/web/tsconfig.json` aliases `@workspace/ui/*` directly to package source, and
  `next.config.mjs` points Turbopack at the umbrella root.
- five `.gitkeep` files preserve empty scaffolds. `cta-section.tsx`,
  `onboarding-section.tsx`, and `use-header-theme.ts` have no observed consumer beyond
  their own declarations and require an exact dependency audit before deletion.
- navigation contains unresolved fragment targets; footer information, social links,
  privacy, terms, and cookie links contain placeholders or generic destinations.
- the onboarding form simulates success with a timer, emits submitted personal and
  business fields to the browser console, and promises a confirmation email that is not
  implemented. It is not an admissible public collection path.
- there are no tracked Site tests, CI workflows, `.env.example`, `LICENSE`, `NOTICE`,
  `SECURITY.md`, `CONTRIBUTING.md`, `CODEOWNERS`, `robots`, `sitemap`, or deployment
  configuration files.
- the root exposes no `test` or `typecheck` script; `packages/ui` exposes lint only.
  The root build invokes Turbo although current history deleted `turbo.json` and
  `pnpm-workspace.yaml`.
- current manifests and `pnpm-lock.yaml` disagree on material dependency versions,
  including Next and Lucide. A pnpm command aimed at this directory resolved the parent
  umbrella's 134-project workspace instead of proving a contained Site install.

## History Boundary

Exactly ten commits in the available refs touch `unisane-landing/**`. There are no
path-touching merge commits and no observed Site-owned tags. The path begins with one
bulk import and nine later modifications:

| Order | Commit | Date | Site-path effect |
| ---: | --- | --- | --- |
| 1 | `b31cb4159d10f3e56d405a2c2a6af613bb71162b` | 2026-01-19 | bulk-add current source plus `pnpm-workspace.yaml` and `turbo.json` |
| 2 | `26735c5651d4d0094bd9ae577acffea65aee33a2` | 2026-01-23 | app manifest change; delete workspace and Turbo configuration |
| 3 | `ee42289ca275ef1d5824f78e986d494c53f59272` | 2026-01-26 | TypeScript config changes |
| 4 | `52888516f01a30bdccb526d154a5ceb439d6490c` | 2026-02-05 | app manifest change |
| 5 | `b351e348a7b69b973aca626df172f10a71f4957d` | 2026-02-07 | generated Next type declaration change |
| 6 | `7cb6600c66a64229de4a95979f1f1298d1ce2245` | 2026-03-03 | app manifest change |
| 7 | `34f4d9e9ca963b8165bfe86a9375ffbdbf7004d8` | 2026-03-06 | work/portfolio, SEO, and ESLint changes |
| 8 | `2e0fdd34d75939856ccfa6972115d7002169ecfb` | 2026-03-08 | manifests and generated Next type declaration changes |
| 9 | `0335c5c0c28c666c30fdfc5777cc813b799c3171` | 2026-04-01 | Next configuration change |
| 10 | `9a8e34d1358348aea44ffbc36386e20a00e1da09` | 2026-04-01 | root layout change |

Across these commits the path records 10,837 added and 123 deleted text lines. The
available history contains 153 distinct blobs totaling 13,764,070 bytes. The only
historical-only paths are `pnpm-workspace.yaml` and `turbo.json`.

Five historical image blobs exceed 1 MiB:

| Path | Bytes |
| --- | ---: |
| `apps/web/public/images/portfolio/rhythmo.png` | 2,666,949 |
| `apps/web/public/images/portfolio/zipper.png` | 1,989,375 |
| `apps/web/public/images/portfolio/billquest.png` | 1,646,547 |
| `apps/web/public/images/proccess/discover-and-align.png` | 1,074,710 |
| `apps/web/public/images/proccess/design-and-architect.png` | 1,065,945 |

## Audit Limits

A narrow high-confidence credential-pattern scan produced no candidate path, and the
history contains no tracked local environment, private-key, build-output, cache, or
archive filename matching the reviewed patterns. No dedicated secret scanner was
available in this lane. This is negative heuristic evidence only; it is not a complete
secret, privacy, provenance, license, or public-safety audit.

The current tree intentionally contains public-facing organizational identity, contact,
social, domain, testimonial, portfolio, and outcome claims. Some values appear personal
or customer-related. Their truth, consent, publication rights, and privacy
classification are unresolved and must be reviewed without copying sensitive findings
into public receipts.
