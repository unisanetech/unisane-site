# Unisane Site

`unisane-landing/**` is the current authoritative umbrella source for the candidate
future `unisane-site` repository. It is not a standalone repository or deployment
authority, and no extraction or public release is authorized from this directory.

Start with [the Site Memory router](docs/00-start-here.md). The
[repository-readiness contract](docs/architecture/00-repository-readiness-contract.md)
defines the unresolved dependency, tooling, legal, asset, content, security, and
operational gates.

Run the source-safety floor with:

```bash
pnpm run check:source-safety
```

The check is deliberately narrow. It prevents the removed simulated intake behavior,
unapproved contact destinations, broken static internal targets, missing referenced
assets, and new sibling-repository dependency locators from returning. It does not
claim the final install, build, UI-package, lockfile, CI, accessibility, SEO,
performance, deployment, or public-release gates are ready.
