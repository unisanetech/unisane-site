import type { Metadata } from 'next';

export type SeoRoute = 'home' | 'services' | 'work';

export interface SeoEntry {
  /**
   * Page title. Can leverage Next.js template strings if required.
   */
  title: Metadata['title'];
  /**
   * Primary meta description.
   */
  description: string;
  /**
   * Relative pathname (e.g. "/about"). Used for canonicals and OG url fallbacks.
   */
  path: string;
  /**
   * Optional keyword list.
   */
  keywords?: string[];
  /**
   * Per-page robots overrides.
   */
  robots?: Metadata['robots'];
  /**
   * Open Graph overrides applied on top of site defaults.
   */
  openGraph?: Partial<NonNullable<Metadata['openGraph']>>;
  /**
   * Twitter card overrides applied on top of site defaults.
   */
  twitter?: Partial<NonNullable<Metadata['twitter']>>;
  /**
   * Alternate links (languages, canonical overrides, etc.).
   */
  alternates?: Partial<NonNullable<Metadata['alternates']>>;
}

export const SITE_NAME = 'Unisane';
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') ?? 'https://www.unisane.com';

export const DEFAULT_SEO_ENTRY: SeoEntry = {
  title: SITE_NAME,
  description:
    'Unisane is the product team for ambitious SaaS, marketplaces, and e-commerce brands—shipping modern web apps and cloud-ready backends end-to-end.',
  path: '/',
  keywords: [
    'Unisane',
    'Unisane Technologies',
    'Next.js agency',
    'full-stack development',
    'SaaS development',
    'e-commerce development',
    'marketplace development',
  ],
  openGraph: {
    type: 'website',
    images: [
      {
        url: '/images/cta/code-sample.png',
        width: 1200,
        height: 630,
        alt: 'Unisane product preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/cta/code-sample.png'],
  },
};

export const SEO_ENTRIES: Record<SeoRoute, SeoEntry> = {
  home: {
    ...DEFAULT_SEO_ENTRY,
    title: 'Unisane | Full-stack Web & Product Development',
    description:
      'Partner with Unisane to plan, design, build, and grow modern digital products. Next.js frontends, Node backends, bespoke design systems, and growth analytics included from day one.',
    path: '/',
    openGraph: {
      title: 'Unisane | Full-stack Web & Product Development',
      description:
        'Modern architecture, reusable design systems, and cloud-ready backends—delivered by one team from idea to scaling.',
    },
    twitter: {
      title: 'Unisane | Full-stack Web & Product Development',
      description:
        'Modern architecture, reusable design systems, and cloud-ready backends—delivered by one team from idea to scaling.',
    },
  },
  services: {
    title: 'Services | Unisane Full-Stack Product Teams',
    description:
      'Explore Unisane services—from landing page launches and design systems to bespoke web apps, backend APIs, and D2C/B2C e-commerce platforms.',
    path: '/services',
    keywords: [
      'web development services',
      'landing page design',
      'custom web applications',
      'e-commerce development',
      'backend API architecture',
      'design systems',
    ],
    openGraph: {
      title: 'Unisane Services | Build, Launch, and Scale',
      description:
        'Product strategy, design systems, frontends, APIs, and e-commerce builds—delivered by a dedicated Unisane crew.',
      images: [
        {
          url: '/images/portfolio/bill-generator.png',
          width: 1200,
          height: 630,
          alt: 'Unisane services overview',
        },
      ],
    },
    twitter: {
      title: 'Unisane Services | Build, Launch, and Scale',
      description:
        'See how Unisane tackles landing pages, product UX, backend APIs, and full e-commerce implementations.',
      images: ['/images/portfolio/bill-generator.png'],
    },
  },
  work: {
    title: 'Work | Unisane Case Studies',
    description:
      'See how Unisane delivers growth for SaaS, marketplaces, and e-commerce teams with full-stack product crews and measurable outcomes.',
    path: '/work',
    keywords: [
      'Unisane work',
      'case studies',
      'SaaS case study',
      'marketplace launch',
      'AI product delivery',
    ],
    openGraph: {
      title: 'Unisane Work | Case Studies & Results',
      description:
        'Bill Generator, Zipper, Examon AI and more—shipping production-ready experiences with strategy, design systems, engineering, and analytics.',
      images: [
        {
          url: '/images/portfolio/examon.png',
          width: 1200,
          height: 630,
          alt: 'Unisane work case studies montage',
        },
      ],
    },
    twitter: {
      title: 'Unisane Work | Case Studies & Results',
      description:
        'Explore the launches Unisane continues to support across SaaS, marketplaces, commerce, and AI-driven products.',
      images: ['/images/portfolio/examon.png'],
    },
  },
};
