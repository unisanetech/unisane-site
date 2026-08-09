import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const webRoot = join(siteRoot, 'apps', 'web');
const appRoot = join(webRoot, 'app');
const publicRoot = join(webRoot, 'public');
const excludedDirectories = new Set([
  '.next',
  '.turbo',
  'build',
  'coverage',
  'dist',
  'node_modules',
]);

const walk = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory() && excludedDirectories.has(entry.name)) return [];
    return entry.isDirectory() ? walk(path) : [path];
  });

const sourceExtensions = new Set(['.js', '.mjs', '.ts', '.tsx']);
const sourceFiles = walk(webRoot).filter((path) => sourceExtensions.has(extname(path)));
const failures = [];

const fail = (path, message) => {
  failures.push(`${relative(siteRoot, path)}: ${message}`);
};

const removedPaths = [
  join(appRoot, 'onboarding', 'page.tsx'),
  join(webRoot, 'components', 'onboarding', 'onboarding-form.tsx'),
  join(webRoot, 'components', 'home', 'onboarding-section.tsx'),
  join(webRoot, 'components', 'home', 'cta-section.tsx'),
];

for (const path of removedPaths) {
  if (existsSync(path)) fail(path, 'removed intake or CTA source has returned');
}

const routes = new Set(
  walk(appRoot)
    .filter((path) => path.endsWith('page.tsx'))
    .map((path) => {
      const route = relative(appRoot, dirname(path)).replaceAll('\\', '/');
      return route ? `/${route}` : '/';
    }),
);

const ids = new Set();
for (const path of sourceFiles.filter((candidate) => candidate.endsWith('.tsx'))) {
  const source = readFileSync(path, 'utf8');
  for (const match of source.matchAll(/\bid\s*=\s*["']([^"']+)["']/g)) {
    ids.add(match[1]);
  }
}

const forbiddenSource = [
  [
    /\bconsole\s*\.\s*(?:debug|error|info|log|warn)\s*\(/,
    'console output is forbidden in Site visitor source',
  ],
  [/["']\/onboarding(?:[/?#"']|$)/, 'the removed onboarding route is referenced'],
  [/<form\b/i, 'visitor form collection requires an approved owner contract'],
  [/\bonSubmit\s*=/, 'visitor submission behavior requires an approved owner contract'],
  [/\bhandleSubmit\s*\(/, 'simulated or unowned form submission behavior is forbidden'],
  [
    /(?:@hookform\/resolvers|react-hook-form)/,
    'removed intake dependencies are referenced by Site source',
  ],
  [
    /href\s*=\s*["'](?:mailto:|tel:|https:\/\/wa\.me\/)/,
    'contact destinations require approved ownership',
  ],
  [/["']\/placeholder\.svg["']/, 'the missing placeholder asset is referenced'],
];

for (const path of sourceFiles) {
  const source = readFileSync(path, 'utf8');
  for (const [pattern, message] of forbiddenSource) {
    if (pattern.test(source)) fail(path, message);
  }

  for (const match of source.matchAll(/\bhref\s*(?:=|:)\s*["']([^"']+)["']/g)) {
    const target = match[1];
    if (target === '#') {
      fail(path, 'placeholder href is forbidden');
      continue;
    }
    if (!target.startsWith('/') && !target.startsWith('#')) continue;

    const [pathname, fragment] = target.split('#', 2);
    const route = pathname || '/';
    if (!routes.has(route)) fail(path, `static internal route does not exist: ${target}`);
    if (fragment && !ids.has(fragment)) {
      fail(path, `static internal fragment does not exist: ${target}`);
    }
  }

  for (const match of source.matchAll(/["'](\/images\/[^"']+)["']/g)) {
    const asset = join(publicRoot, match[1].slice(1));
    if (!existsSync(asset)) fail(path, `referenced public asset does not exist: ${match[1]}`);
  }
}

const moduleFiles = walk(siteRoot).filter(
  (path) =>
    path !== join(webRoot, 'next-env.d.ts') && new Set(['.css', '.ts', '.tsx']).has(extname(path)),
);
const moduleFileSet = new Set(moduleFiles);

const resolveOwnedImport = (from, specifier) => {
  let base;
  if (specifier === '@workspace/ui/globals.css') {
    base = join(siteRoot, 'packages', 'ui', 'src', 'styles', 'globals.css');
  } else if (specifier.startsWith('@/')) {
    base = join(webRoot, specifier.slice(2));
  } else if (specifier.startsWith('@workspace/ui/')) {
    base = join(siteRoot, 'packages', 'ui', 'src', specifier.slice('@workspace/ui/'.length));
  } else if (specifier.startsWith('.')) {
    base = join(dirname(from), specifier);
  } else {
    return undefined;
  }

  return [base, `${base}.ts`, `${base}.tsx`, join(base, 'index.ts'), join(base, 'index.tsx')].find(
    (candidate) => moduleFileSet.has(candidate),
  );
};

const importGraph = new Map();
for (const path of moduleFiles) {
  const source = readFileSync(path, 'utf8');
  const specifiers = [
    ...source.matchAll(/\bfrom\s+["']([^"']+)["']/g),
    ...source.matchAll(/\bimport\s+(?:\(\s*)?["']([^"']+)["']/g),
  ].map((match) => match[1]);
  const ownedSpecifiers = specifiers.filter(
    (specifier) =>
      specifier.startsWith('.') ||
      specifier.startsWith('@/') ||
      specifier.startsWith('@workspace/ui/'),
  );
  const resolvedImports = ownedSpecifiers.map((specifier) => ({
    specifier,
    path: resolveOwnedImport(path, specifier),
  }));
  for (const unresolved of resolvedImports.filter((entry) => !entry.path)) {
    fail(path, `owned import does not resolve: ${unresolved.specifier}`);
  }
  importGraph.set(path, resolvedImports.map((entry) => entry.path).filter(Boolean));
}

const entryModules = moduleFiles.filter(
  (path) =>
    path === join(appRoot, 'layout.tsx') || (path.startsWith(appRoot) && path.endsWith('page.tsx')),
);
const reachableModules = new Set();
const pendingModules = [...entryModules];
while (pendingModules.length > 0) {
  const path = pendingModules.pop();
  if (reachableModules.has(path)) continue;
  reachableModules.add(path);
  pendingModules.push(...(importGraph.get(path) ?? []));
}

const runtimeModules = moduleFiles.filter(
  (path) =>
    path.startsWith(join(webRoot, 'app')) ||
    path.startsWith(join(webRoot, 'components')) ||
    path.startsWith(join(webRoot, 'hooks')) ||
    path.startsWith(join(webRoot, 'lib')) ||
    path.startsWith(join(webRoot, 'stores')) ||
    path.startsWith(join(siteRoot, 'packages', 'ui', 'src')),
);

for (const path of runtimeModules) {
  if (!reachableModules.has(path)) {
    fail(path, 'runtime module is unreachable from every retained route entry');
  }
}

const dependencyFiles = walk(siteRoot).filter((path) =>
  /(?:package\.json|tsconfig(?:\.[^/]+)?\.json|\.npmrc)$/.test(path),
);
const forbiddenDependencyLocator =
  /(?:"(?:file|link|github):|git\+|\.\.\/(?:\.\.\/)*unisane-(?:infrastructure|ops|platforms|pro|ui)(?:\/|"))/;

for (const path of dependencyFiles) {
  if (forbiddenDependencyLocator.test(readFileSync(path, 'utf8'))) {
    fail(path, 'sibling-repository or non-registry dependency locator is forbidden');
  }
}

const readme = readFileSync(join(siteRoot, 'README.md'), 'utf8');
if (/shadcn\/ui monorepo template/i.test(readme)) {
  fail(join(siteRoot, 'README.md'), 'template-only repository identity has returned');
}

if (failures.length > 0) {
  console.error(`Site source-safety check failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `Site source-safety check passed: ${routes.size} routes, ${runtimeModules.length} reachable runtime modules, no intake flow or broken static target.`,
  );
}
