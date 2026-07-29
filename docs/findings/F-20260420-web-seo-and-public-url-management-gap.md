---
id: 'F-dab91fc12e24'
owner: 'unisane'
scope: workspace
role: finding
lifecycle: active
authority: supporting
provenance: accepted
view: current
severity: SHOULD
status: in-progress
---

# F-20260420-web-seo-and-public-url-management-gap: Shared Web SEO And Public URL Management Gap

## Changelog

- `2026-07-24`: Split the remaining destination explicitly: reusable SEO helpers converge into `@unisane/web-runtime/seo`, while persistent public URL, slug, redirect, and alias ownership remains a separate Framework capability.
- `2026-04-20`: Archived `P77-W2` after the invoice-platform adoption slice verified cleanly. Both `data-entry-lm` and `invoice-platform` now lower metadata through `@unisane/web-seo`, both apps ship `robots.ts` plus `sitemap.ts`, `invoice-platform` preserves region-aware canonicals and alternates through the shared contract, and private auth/dashboard route families now use the same noindex helper path. The finding stays open because the broader cross-app adoption lane, starter defaults, and the future `@unisane/public-urls` capability are still queued.
- `2026-04-20`: Archived `P77-W1` after the proving slice verified cleanly. `@unisane/web-seo` now exists, `data-entry-lm` uses the shared typed metadata config plus public/private helper wrappers, `robots.ts` and `sitemap.ts` are live there, and the home page ships the bounded JSON-LD baseline. Opened `P77-W2` for the next bounded slice: migrate `invoice-platform` onto the shared toolkit, preserve its region-aware alternates contract, and keep redirects/slug persistence out of scope.
- `2026-04-20`: Opened after the cross-app SEO architecture review. The repo still has fragmented metadata ownership, no shared robots/sitemap/canonical/Open Graph/Twitter/JSON-LD toolkit, no consistent public-vs-private indexing policy, and no bounded future path for redirects, slug history, or canonical public URL identity. Activated the paired strategy plan and opened `P77-W1` as the first proving slice.

## Summary

- Severity: `SHOULD`
- Status: `in-progress`
- Owner: `architecture-program`
- Target Pack: `queued-next-shared-seo-adoption-slice`

## Symptom

Unisane still treats public-site SEO as app-local glue instead of one framework capability:

1. `data-entry-lm` owns a basic app-local metadata helper, but the route family is not yet standardized around shared builders for public pages, private pages, `robots`, `sitemap`, or structured data.
2. `invoice-platform` previously carried a different app-local metadata pattern for canonicals and alternates, which proved the need and the drift. That app now also lowers through the shared toolkit.
3. No shared package currently owns site metadata, page metadata, noindex behavior, Open Graph, Twitter cards, canonical URL helpers, or JSON-LD builders.
4. Cross-app adoption is still incomplete, so not every future app or starter automatically inherits the new truthful noindex policy yet.
5. The repo has no explicit framework-owned future lane for redirects, slug history, aliases, canonical path ownership, or dynamic sitemap feeds when a public app grows beyond static marketing pages.

## Impact

If this gap stays open:

1. every new app will reinvent metadata helpers and naming
2. public routes and private routes will keep drifting on indexability and canonical behavior
3. social sharing and structured-data quality will remain inconsistent across apps
4. future ecommerce, CMS, directory, or marketplace work will be tempted to overload a simple metadata helper with slug/redirect persistence instead of using a dedicated capability
5. developers and LLMs will not have one obvious, typed, IDE-friendly contract for route metadata

## Fix Plan

1. Preserve the current `@unisane/web-seo` behavior while converging its reusable runtime helpers into `@unisane/web-runtime/seo` through the Ops extraction plan.
2. Keep app-owned defaults in `config/ui/metadata.ts` and app-specific helpers under `src/support/metadata/**`.
3. Prove the pattern in `data-entry-lm` by converging root/public/private metadata, adding `robots.ts`, adding `sitemap.ts`, and setting truthful canonical metadata for the public marketing routes.
4. Use `invoice-platform` as the second proof so the shared API covers both the simple single-site case and the region-aware public-site case.
5. Continue starter and wider app adoption from the same toolkit instead of allowing a second helper family to appear.
6. Keep the later dynamic public-surface lane separate under the future `@unisane/public-urls` capability instead of mixing redirects and slug identity into the metadata toolkit.
7. Freeze the naming contract to industry-standard terms only: `canonical`, `robots`, `sitemap`, `openGraph`, `twitter`, `alternates`, `slug`, `redirect`, `jsonLd`, `SiteSeoConfig`, `PageSeoInput`, `createPageMetadata`, `createRobots`, and related standard web terms.

## Verification

1. `pnpm docs:core:check`
2. `pnpm program:index:check`
3. `pnpm architecture:index:check`
4. `pnpm -w typecheck`
5. `pnpm --filter @unisane-platforms/invoice-platform build`

## Linked Docs

1. `docs/work/archive/plans/framework-web-seo-and-public-url-management-plan.md`
2. `docs/work/archive/tasks/P77-W2.md`
