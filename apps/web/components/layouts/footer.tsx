'use client';

import Link from 'next/link';
import { useHeaderSection } from '@/hooks/use-header-section';
import { Logo } from '@/components/shared/logo';

const primaryLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/#process-section' },
  { label: 'Our Work', href: '/work' },
];

export function SiteFooter() {
  const footerRef = useHeaderSection<HTMLDivElement>({
    background: 'bg-background',
    foreground: 'text-foreground',
    accentColor: 'text-primary',
  });

  return (
    <footer ref={footerRef} className="bg-background pt-10 pb-16 sm:pt-14 sm:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Logo size={36} className="text-primary" aria-hidden />
              <span className="text-xl font-semibold tracking-tight">Unisane</span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Full-stack partners for ambitious teams. Strategy, design, engineering, and ongoing
              growth—all under one roof.
            </p>
          </div>

          <FooterColumn title="Menu" links={primaryLinks} />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-muted-foreground text-sm font-semibold tracking-[0.2em] uppercase">
        {title}
      </h3>
      <ul className="text-muted-foreground space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-foreground transition">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
