import type { Metadata } from 'next';

import {
  DEFAULT_SEO_ENTRY,
  SEO_ENTRIES,
  SITE_NAME,
  SITE_URL,
  type SeoEntry,
  type SeoRoute,
} from './config';

const metadataBase = new URL(SITE_URL);

const baseOpenGraph = {
  locale: 'en_US',
  siteName: SITE_NAME,
  type: 'website' as const,
};

const baseTwitter = {
  card: 'summary_large_image' as const,
};

const baseRobots: NonNullable<Metadata['robots']> = {
  index: true,
  follow: true,
};

const baseMetadata: Metadata = {
  metadataBase,
  applicationName: SITE_NAME,
  generator: SITE_NAME,
  category: 'technology',
  robots: baseRobots,
  openGraph: baseOpenGraph,
  twitter: baseTwitter,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: SITE_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    'og:site_name': SITE_NAME,
  },
};

type MaybeArray<T> = T | T[] | undefined;

const toArray = <T>(value: MaybeArray<T>): T[] | undefined => {
  if (!value) {
    return undefined;
  }
  return Array.isArray(value) ? value : [value];
};

const toAbsolute = (path: string) =>
  path.startsWith('http://') || path.startsWith('https://')
    ? path
    : new URL(path.replace(/^\//, ''), metadataBase).toString();

const normaliseOgImages = (
  images: NonNullable<Metadata['openGraph']>['images'],
  fallback: string,
) => {
  const list = toArray(images);
  if (!list) return undefined;

  return list.map((image) => {
    if (typeof image === 'string') {
      return { url: toAbsolute(image) };
    }
    if (image instanceof URL) {
      return { url: image.toString() };
    }
    const imageUrl =
      'url' in image && image.url
        ? typeof image.url === 'string'
          ? toAbsolute(image.url)
          : image.url.toString()
        : fallback;
    return {
      ...image,
      url: imageUrl,
    };
  });
};

const normaliseTwitterImages = (
  images: NonNullable<Metadata['twitter']>['images'],
  fallback: string,
) => {
  const list = toArray(images);
  if (!list) return undefined;

  return list.map((image) => {
    if (typeof image === 'string') {
      return toAbsolute(image);
    }
    if (image instanceof URL) {
      return image.toString();
    }
    const absoluteUrl =
      'url' in image && image.url
        ? typeof image.url === 'string'
          ? toAbsolute(image.url)
          : image.url.toString()
        : fallback;
    return {
      ...image,
      url: absoluteUrl,
    };
  });
};

const mergeEntry = (entry: SeoEntry): SeoEntry => {
  if (entry === DEFAULT_SEO_ENTRY) return entry;
  return {
    ...DEFAULT_SEO_ENTRY,
    ...entry,
    keywords: Array.from(
      new Set([...(DEFAULT_SEO_ENTRY.keywords ?? []), ...(entry.keywords ?? [])]),
    ),
    openGraph: {
      ...DEFAULT_SEO_ENTRY.openGraph,
      ...entry.openGraph,
    },
    twitter: {
      ...DEFAULT_SEO_ENTRY.twitter,
      ...entry.twitter,
    },
  };
};

export function createBaseMetadata(): Metadata {
  return { ...baseMetadata };
}

export function createPageMetadata(route: SeoRoute, overrides?: Partial<SeoEntry>): Metadata {
  const entry = mergeEntry({
    ...SEO_ENTRIES[route],
    ...overrides,
  });

  const canonicalOverride = entry.alternates?.canonical;
  let canonicalPath: string;
  if (typeof canonicalOverride === 'string') {
    canonicalPath = canonicalOverride;
  } else if (canonicalOverride instanceof URL) {
    canonicalPath = canonicalOverride.pathname + canonicalOverride.search;
  } else if (
    canonicalOverride &&
    typeof canonicalOverride === 'object' &&
    'url' in canonicalOverride &&
    canonicalOverride.url
  ) {
    const rawUrl = canonicalOverride.url;
    canonicalPath = typeof rawUrl === 'string' ? rawUrl : rawUrl.pathname + rawUrl.search;
  } else {
    canonicalPath = entry.path ?? '/';
  }

  const canonical =
    canonicalPath.startsWith('/') || canonicalPath.startsWith('http')
      ? canonicalPath
      : `/${canonicalPath}`;
  const absoluteCanonical = toAbsolute(canonical);

  const otherAlternates = entry.alternates ? { ...entry.alternates } : undefined;
  if (otherAlternates) {
    delete otherAlternates.canonical;
  }

  const ogImages = normaliseOgImages(entry.openGraph?.images, absoluteCanonical);
  const defaultOgImages = normaliseOgImages(DEFAULT_SEO_ENTRY.openGraph?.images, absoluteCanonical);
  const twitterImages = normaliseTwitterImages(entry.twitter?.images, absoluteCanonical);
  const defaultTwitterImages = normaliseTwitterImages(
    DEFAULT_SEO_ENTRY.twitter?.images,
    absoluteCanonical,
  );

  return {
    ...baseMetadata,
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    robots: entry.robots ?? baseRobots,
    alternates: {
      ...otherAlternates,
      canonical,
    },
    openGraph: {
      ...baseOpenGraph,
      ...entry.openGraph,
      title: entry.openGraph?.title ?? (typeof entry.title === 'string' ? entry.title : undefined),
      description: entry.openGraph?.description ?? entry.description,
      url: entry.openGraph?.url ?? absoluteCanonical,
      images: ogImages ?? defaultOgImages,
    },
    twitter: {
      ...baseTwitter,
      ...entry.twitter,
      title: entry.twitter?.title ?? (typeof entry.title === 'string' ? entry.title : undefined),
      description: entry.twitter?.description ?? entry.description,
      images: twitterImages ?? defaultTwitterImages,
    },
  };
}
