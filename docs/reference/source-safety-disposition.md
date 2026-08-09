---
id: 'DOC-c9d713a6f214'
owner: 'site-maintainers'
scope: workspace
role: reference
lifecycle: active
authority: supporting
provenance: observed
view: transition
---

# Site Source-Safety Disposition

This ledger records the source-safety disposition of every path in the audited
`unisane-landing/**` product baseline before any repository extraction. It does not
authorize a local shadow, source rename, dependency convergence, lockfile regeneration,
public release, or deployment.

## Facts

- The audited product baseline is umbrella commit
  `8dcbadbc556476dfb8866f819400fbb884dc9827`: 140 tracked paths and the exact
  tree/digest identities recorded by
  [the current source and history inventory](current-source-and-history-inventory.md).
- `pnpm-workspace.yaml` and `turbo.json` are the two historical-only paths. They are
  listed below in addition to the 140 baseline paths.
- The four accepted Site Memory documents added after the audited product baseline are
  not silently counted as product baseline paths. Their current disposition is to
  retain and update them as Site-local Memory.
- Route/import analysis started from the five baseline App Router entries. The removed
  intake form was reachable only through the removed `/onboarding` route; the removed
  CTA sources pointed to that route or unapproved contact destinations. Every deleted
  copied UI component has no import path from the retained route graph.
- Disposition totals across the 142 audited current-plus-historical paths are: `blocked` 56, `delete` 64, `regenerate` 4, `retain` 7, `rewrite` 11.
- `scripts/check-source-safety.mjs` is a new owner-local check, not a baseline path.

## Disposition Meanings

- `retain`: necessary owner-local source/support remains unchanged.
- `rewrite`: this Task makes an owner-independent safety correction; the row may still
  carry a separately named owner blocker.
- `delete`: exact route/import/reference proof establishes unsafe, empty, unused, or
  template-only residue.
- `regenerate`: the path is generated or must be recreated only from an approved
  standalone tooling decision.
- `blocked`: the candidate remains unchanged because legal, brand, content, asset, UI,
  tooling, or public-safety truth is unresolved.

## File-Level Ledger

| Baseline path                                              | Disposition | Fact or remaining gate                                                                                                    |
| ---------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| `.eslintrc.js`                                             | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `.gitignore`                                               | retain      | Reachable owner-local source or neutral repository support retained without changing unresolved public claims.            |
| `.npmrc`                                                   | delete      | Empty placeholder has no owned runtime or tooling behavior.                                                               |
| `README.md`                                                | rewrite     | Replace template identity with the authoritative Site boundary and safety command.                                        |
| `apps/web/app/favicon.ico`                                 | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/app/layout.tsx`                                  | retain      | Reachable owner-local source or neutral repository support retained without changing unresolved public claims.            |
| `apps/web/app/onboarding/page.tsx`                         | delete      | Unsafe or non-functional intake/CTA surface removed with its route references.                                            |
| `apps/web/app/page.tsx`                                    | rewrite     | Remove template-only implementation comments; retained page composition remains authoritative.                            |
| `apps/web/app/services/page.tsx`                           | blocked     | Genuine Site content candidate; claims, consent, links, or product ownership remain unresolved.                           |
| `apps/web/app/work/page.tsx`                               | blocked     | Genuine Site content candidate; claims, consent, links, or product ownership remain unresolved.                           |
| `apps/web/components.json`                                 | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `apps/web/components/.gitkeep`                             | delete      | Empty placeholder has no owned runtime or tooling behavior.                                                               |
| `apps/web/components/home/cta-section.tsx`                 | delete      | Unsafe or non-functional intake/CTA surface removed with its route references.                                            |
| `apps/web/components/home/hero-section.tsx`                | rewrite     | Remove unsafe CTA/contact/placeholder behavior while preserving unresolved genuine content.                               |
| `apps/web/components/home/onboarding-section.tsx`          | delete      | Unsafe or non-functional intake/CTA surface removed with its route references.                                            |
| `apps/web/components/home/portfolio-section.tsx`           | rewrite     | Remove unsafe CTA/contact/placeholder behavior while preserving unresolved genuine content.                               |
| `apps/web/components/home/process-section.tsx`             | blocked     | Genuine Site content candidate; claims, consent, links, or product ownership remain unresolved.                           |
| `apps/web/components/home/rotating-text.tsx`               | blocked     | Genuine Site content candidate; claims, consent, links, or product ownership remain unresolved.                           |
| `apps/web/components/home/services-section.tsx`            | rewrite     | Remove unsafe CTA/contact/placeholder behavior while preserving unresolved genuine content.                               |
| `apps/web/components/home/tech-stack-section.tsx`          | blocked     | Genuine Site content candidate; claims, consent, links, or product ownership remain unresolved.                           |
| `apps/web/components/layouts/footer.tsx`                   | rewrite     | Remove unsafe CTA/contact/placeholder behavior while preserving unresolved genuine content.                               |
| `apps/web/components/layouts/main-header.tsx`              | rewrite     | Remove unsafe CTA/contact/placeholder behavior while preserving unresolved genuine content.                               |
| `apps/web/components/layouts/page-layout.tsx`              | rewrite     | Remove unsafe CTA/contact/placeholder behavior while preserving unresolved genuine content.                               |
| `apps/web/components/onboarding/onboarding-form.tsx`       | delete      | Unsafe or non-functional intake/CTA surface removed with its route references.                                            |
| `apps/web/components/providers.tsx`                        | retain      | Reachable owner-local source or neutral repository support retained without changing unresolved public claims.            |
| `apps/web/components/shared/logo.tsx`                      | blocked     | Brand-source candidate retained pending authorized identity and rights approval.                                          |
| `apps/web/components/shared/theme-toggle.tsx`              | retain      | Reachable owner-local source or neutral repository support retained without changing unresolved public claims.            |
| `apps/web/eslint.config.js`                                | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `apps/web/hooks/.gitkeep`                                  | delete      | Empty placeholder has no owned runtime or tooling behavior.                                                               |
| `apps/web/hooks/use-header-section.ts`                     | retain      | Reachable owner-local source or neutral repository support retained without changing unresolved public claims.            |
| `apps/web/hooks/use-header-theme.ts`                       | delete      | No import path from any route entry.                                                                                      |
| `apps/web/hooks/use-mobile.ts`                             | delete      | No import path from any route entry.                                                                                      |
| `apps/web/lib/.gitkeep`                                    | delete      | Empty placeholder has no owned runtime or tooling behavior.                                                               |
| `apps/web/lib/content/portfolio.ts`                        | blocked     | Genuine Site content candidate; claims, consent, links, or product ownership remain unresolved.                           |
| `apps/web/lib/seo/config.ts`                               | rewrite     | Remove the deleted route and unapproved social/legal identity metadata.                                                   |
| `apps/web/lib/seo/create-metadata.ts`                      | rewrite     | Remove the deleted route and unapproved social/legal identity metadata.                                                   |
| `apps/web/lib/seo/index.ts`                                | retain      | Reachable owner-local source or neutral repository support retained without changing unresolved public claims.            |
| `apps/web/next-env.d.ts`                                   | regenerate  | Framework-generated declaration; reproduce from the final standalone toolchain.                                           |
| `apps/web/next.config.mjs`                                 | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `apps/web/package.json`                                    | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `apps/web/postcss.config.mjs`                              | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `apps/web/public/images/cta/code-sample.png`               | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/icons/android-chrome-192x192.png`  | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/icons/android-chrome-512x512.png`  | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/icons/apple-touch-icon.png`        | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/icons/favicon-16x16.png`           | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/icons/favicon-32x32.png`           | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/icons/favicon.ico`                 | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/portfolio/bill-generator.png`      | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/portfolio/billquest.png`           | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/portfolio/examon.png`              | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/portfolio/logo/bill-generator.png` | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/portfolio/logo/billquest.png`      | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/portfolio/logo/examon.png`         | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/portfolio/logo/rhythmo.png`        | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/portfolio/logo/zipper.png`         | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/portfolio/rhythmo.png`             | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/portfolio/zipper.png`              | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/proccess/build-and-validate.png`   | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/proccess/design-and-architect.png` | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/proccess/discover-and-align.png`   | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/public/images/proccess/launch-and-grow.png`      | blocked     | Retain unchanged pending asset provenance, rights, optimization, and public-safety approval.                              |
| `apps/web/stores/header-store.ts`                          | retain      | Reachable owner-local source or neutral repository support retained without changing unresolved public claims.            |
| `apps/web/tsconfig.json`                                   | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `package.json`                                             | rewrite     | Add only the dependency-free conventional source-safety command; final package/tool versions remain blocked.              |
| `packages/eslint-config/README.md`                         | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `packages/eslint-config/base.js`                           | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `packages/eslint-config/next.js`                           | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `packages/eslint-config/package.json`                      | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `packages/eslint-config/react-internal.js`                 | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `packages/typescript-config/README.md`                     | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `packages/typescript-config/base.json`                     | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `packages/typescript-config/nextjs.json`                   | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `packages/typescript-config/package.json`                  | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `packages/typescript-config/react-library.json`            | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `packages/ui/components.json`                              | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `packages/ui/eslint.config.js`                             | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `packages/ui/package.json`                                 | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `packages/ui/postcss.config.mjs`                           | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `packages/ui/src/components/.gitkeep`                      | delete      | Empty placeholder has no owned runtime or tooling behavior.                                                               |
| `packages/ui/src/components/accordion.tsx`                 | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/alert-dialog.tsx`              | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/alert.tsx`                     | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/aspect-ratio.tsx`              | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/avatar.tsx`                    | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/badge.tsx`                     | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/breadcrumb.tsx`                | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/button-group.tsx`              | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/button.tsx`                    | blocked     | Currently required local UI subset; final disposition depends on SITE-B02 and may not create a sibling-source workaround. |
| `packages/ui/src/components/calendar.tsx`                  | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/card.tsx`                      | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/carousel.tsx`                  | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/chart.tsx`                     | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/checkbox.tsx`                  | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/collapsible.tsx`               | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/command.tsx`                   | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/context-menu.tsx`              | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/dialog.tsx`                    | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/drawer.tsx`                    | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/dropdown-menu.tsx`             | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/empty.tsx`                     | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/field.tsx`                     | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/form.tsx`                      | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/hover-card.tsx`                | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/input-group.tsx`               | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/input-otp.tsx`                 | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/input.tsx`                     | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/item.tsx`                      | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/kbd.tsx`                       | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/label.tsx`                     | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/menubar.tsx`                   | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/navigation-menu.tsx`           | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/pagination.tsx`                | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/popover.tsx`                   | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/progress.tsx`                  | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/radio-group.tsx`               | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/resizable.tsx`                 | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/scroll-area.tsx`               | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/select.tsx`                    | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/separator.tsx`                 | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/sheet.tsx`                     | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/sidebar.tsx`                   | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/skeleton.tsx`                  | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/slider.tsx`                    | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/sonner.tsx`                    | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/spinner.tsx`                   | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/switch.tsx`                    | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/table.tsx`                     | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/tabs.tsx`                      | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/textarea.tsx`                  | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/toggle-group.tsx`              | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/toggle.tsx`                    | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/components/tooltip.tsx`                   | delete      | No import path from the retained Site route graph after intake removal; copied template scaffold.                         |
| `packages/ui/src/hooks/.gitkeep`                           | delete      | Empty placeholder has no owned runtime or tooling behavior.                                                               |
| `packages/ui/src/lib/utils.ts`                             | blocked     | Currently required local UI subset; final disposition depends on SITE-B02 and may not create a sibling-source workaround. |
| `packages/ui/src/styles/globals.css`                       | blocked     | Currently required local UI subset; final disposition depends on SITE-B02 and may not create a sibling-source workaround. |
| `packages/ui/tsconfig.json`                                | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `packages/ui/tsconfig.lint.json`                           | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `pnpm-lock.yaml`                                           | regenerate  | Regenerate only after the UI/package/tooling contract is approved (SITE-B02/B03).                                         |
| `tsconfig.json`                                            | blocked     | Final standalone package/tooling/configuration decision remains unresolved under SITE-B02/B03/B04.                        |
| `pnpm-workspace.yaml`                                      | regenerate  | Historical-only workspace/build file; create from approved target tooling rather than restoring stale content.            |
| `turbo.json`                                               | regenerate  | Historical-only workspace/build file; create from approved target tooling rather than restoring stale content.            |

## Recommendations

1. Keep every `blocked` path in the authoritative umbrella until its named owner
   supplies evidence. A blocked disposition is not permission to copy it into a public
   shadow.
2. Resolve the released-UI versus Site-local UI contract before pruning package
   manifests, changing `@workspace/ui`, or regenerating the lockfile.
3. Treat the remaining marketing content and every image/icon/logo as publication
   candidates, not approved claims or assets.
4. Run the dependency-free source-safety check on every Site source change, while
   retaining full install/build/test/accessibility/SEO/performance/preview proof as
   later fail-closed gates.

## Unresolved Owner Decisions

- founder/brand/legal: legal entity, brand identity, contact and social identities,
  claims, testimonials, metrics, customer consent, and public copy;
- legal/asset owner: source/content license, NOTICE, contributor terms, copied-template
  provenance, and rights for every font, icon, image, logo, screenshot, and case study;
- UI/tooling owners: released UI coordinates, the fate of the current local subset,
  package names/versions, workspace shape, Node/pnpm versions, and one final lockfile;
- privacy/security/product: whether any visitor intake may exist in the future and, if
  so, its consent, transport, storage, retention, deletion, abuse, notification, and
  incident contract;
- Site/Infrastructure/operators: domains, analytics, hosting, deployment, recovery,
  monitoring, and external provider ownership.
