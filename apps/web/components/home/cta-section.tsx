"use client";

import { useHeaderSection } from "@/hooks/use-header-section";
import { Button } from "@workspace/ui/components/button";
import { Calendar } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  const sectionRef = useHeaderSection<HTMLDivElement>({
    background: "bg-background",
    foreground: "text-foreground",
    accentColor: "text-primary",
  });

  return (
    <section ref={sectionRef} id="cta-section" className="bg-background py-14 sm:py-16">
      <div className="px-0 md:px-6 lg:px-8">
        <div className="relative mx-auto w-full overflow-hidden border border-secondary/40 bg-secondary px-6 py-12 sm:rounded-2xl sm:px-12 sm:py-16 lg:px-20 lg:py-20 sm:[background-size:12px_12px] sm:[background-image:radial-gradient(circle,_rgba(255,255,255,0.28)_1px,_transparent_1px)]">
          <div className="relative flex flex-col gap-10 text-left text-secondary-foreground">
            <div className="flex max-w-2xl flex-col gap-6">
              <span className="inline-flex w-fit items-center rounded-full bg-secondary-foreground/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-secondary-foreground/70">
                Let&apos;s talk
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-balance">
                Ready to build the next release together?
              </h2>
              <p className="text-sm sm:text-base text-secondary-foreground/75 leading-relaxed">
                Book a 30-minute call with Unisane Technologies (OPC) Pvt Ltd and walk away with a clear
                roadmap, estimated timelines, and the team that can deliver it—without the jargon.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button asChild className="rounded-full px-12 py-5 text-base font-semibold transition sm:px-14 sm:py-6 bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 dark:bg-primary dark:text-white dark:hover:bg-primary/90">
                  <Link href="/onboarding" className="inline-flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule a call
                  </Link>
                </Button>
                <a
                  href="mailto:hello@unisane.com"
                  className="inline-flex items-center justify-center rounded-full border border-secondary-foreground/40 px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-secondary-foreground/10"
                >
                  hello@unisane.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
