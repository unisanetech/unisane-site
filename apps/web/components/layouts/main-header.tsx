"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { useHeaderStore } from "@/stores/header-store";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "#process-section", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#resources", label: "Resources" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const theme = useHeaderStore((state) => state.theme);
  const previousTheme = useHeaderStore((state) => state.previousTheme);
  const animationKey = useHeaderStore((state) => state.animationKey);
  const direction = useHeaderStore((state) => state.direction);

  const incomingClass =
    direction === "down"
      ? "animate-header-slide-down"
      : "animate-header-slide-up";
  const outgoingClass =
    animationKey === 0
      ? ""
      : direction === "down"
        ? "animate-header-slide-down-out"
        : "animate-header-slide-up-out";

  const isInverseTheme = theme.foreground.includes("white");
  const borderClass = isInverseTheme ? "border-white/10" : "border-border";
  const linkColorClass = isInverseTheme
    ? "text-white/75 hover:text-white"
    : "text-muted-foreground hover:text-foreground";

  return (
    <header className="sticky top-0 z-50 w-full overflow-hidden">
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${previousTheme.background} ${outgoingClass}`.trim()}
        />
        <div
          key={`${animationKey}-${direction}`}
          className={`absolute inset-0 ${theme.background} ${incomingClass}`}
        />
      </div>

      <div
        className={`relative z-10  ${borderClass} transition-colors duration-500 ${theme.foreground}`}
      >
        <div className="container m-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 ">
            <Link href="/" className="flex items-center gap-2">
              <Logo
                key={animationKey}
                aria-hidden
                className={theme.accentColor}
                size={32}
              />
              <span className="text-2xl font-semibold tracking-tight">
                Unisane
              </span>
            </Link>
            <nav className="hidden items-center gap-6 lg:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${linkColorClass}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 xl:gap-5">
            <ThemeToggle />
            <Link
              href="tel:+917602272402"
              className="hidden items-center gap-2 text-sm transition-opacity duration-300 hover:opacity-80 lg:flex"
            >
              <Phone className="h-4 w-4" />
              <span>+91 76022 72402</span>
            </Link>
            <Button
              asChild
              className="hidden h-9 rounded-full px-6 text-sm font-medium transition-colors duration-500 md:inline-flex"
            >
              <Link href="/onboarding">Get a Quote</Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border-border text-foreground lg:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        <div
          className={`lg:hidden border-t ${borderClass} bg-background transition-all duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="px-4 pb-4 pt-3 flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 transition-colors duration-200 ${
                  isInverseTheme
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-1 h-9 rounded-full px-6 text-sm font-medium transition-colors duration-500"
              onClick={() => setOpen(false)}
            >
              <Link href="/onboarding">Get a Quote</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
