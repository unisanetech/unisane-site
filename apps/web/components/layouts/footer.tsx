"use client";

import Link from "next/link";
import { useHeaderSection } from "@/hooks/use-header-section";
import { Logo } from "@/components/shared/logo";
import { Github, Linkedin, Twitter } from "lucide-react";

const primaryLinks = [
  { label: "Services", href: "#services-section" },
  { label: "Process", href: "#process-section" },
  { label: "Our Work", href: "#portfolio-section" },
];

const infoLinks = [
  { label: "Pricing", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Blog", href: "#" },
];

export function SiteFooter() {
  const footerRef = useHeaderSection<HTMLDivElement>({
    background: "bg-background",
    foreground: "text-foreground",
    accentColor: "text-primary",
  });

  return (
    <footer
      ref={footerRef}
      className="bg-background pt-10 pb-16 sm:pt-14 sm:pb-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Logo size={36} className="text-primary" aria-hidden />
              <span className="text-xl font-semibold tracking-tight">Unisane</span>
            </Link>
            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
              Full-stack partners for ambitious teams. Strategy, design, engineering,
              and ongoing growth—all under one roof.
            </p>
            <div className="flex items-center gap-3">
              <FooterIcon href="https://twitter.com" label="Twitter">
                <Twitter className="h-4 w-4" />
              </FooterIcon>
              <FooterIcon href="https://linkedin.com" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </FooterIcon>
              <FooterIcon href="https://github.com" label="GitHub">
                <Github className="h-4 w-4" />
              </FooterIcon>
            </div>
          </div>

          <FooterColumn title="Menu" links={primaryLinks} />
          <FooterColumn title="More info" links={infoLinks} />

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <Link href="mailto:hello@unisane.com" className="block hover:text-foreground">
                hello@unisane.com
              </Link>
              <Link href="tel:+917602272402" className="block hover:text-foreground">
                +91 76022 72402
              </Link>
              <p className="text-muted-foreground/80">India • UK • Remote-first</p>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Mon–Fri · 8 am – 7 pm</p>
              <p>Support within 24 hours guaranteed.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Unisane Technologies (OPC) Pvt Ltd. All
            rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground">
              Cookies
            </Link>
          </div>
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
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </h3>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="transition hover:text-foreground">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      aria-label={label}
      href={href}
      className="flex size-9 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition hover:border-primary/60 hover:text-primary"
    >
      {children}
    </Link>
  );
}
