"use client";

import { useHeaderSection } from "@/hooks/use-header-section";
import {
  ArrowUpRight,
  Code2,
  Database,
  Layers,
  Server,
  Smartphone,
  Globe,
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export function ServicesSection() {
  const sectionRef = useHeaderSection({
    background: "bg-background",
    foreground: "text-foreground",
    accentColor: "text-primary",
  });

  return (
    <section
      ref={sectionRef}
      id="services-section"
      className="bg-background py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center space-y-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] font-bold tracking-tight leading-[1.15] text-balance">
              Build, launch &amp; grow
              <br />— one team, zero hand-offs
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-[1.6]">
              We design, develop, and scale SaaS, e-commerce, and marketplaces.
              Clear roadmaps, plain-language updates, and SEO, GTM, and GA4
              baked in from day one.
            </p>
          </div>
        </div>

        <div className="bg-muted rounded-2xl p-2 md:p-3 ">
          <div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-2 gap-2 md:gap-3">
            {/* Featured Service - Full-Stack Development - Takes 2 columns, spans 2 rows */}
            <div className="lg:col-span-2 lg:row-span-2 rounded-2xl p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[500px] lg:min-h-0 bg-primary text-primary-foreground shadow-lg dark:text-white">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center">
                    <Layers className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div className="bg-primary-foreground/20 text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium dark:text-white">
                    Full-Stack
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold leading-[1.3] dark:text-white">
                  Full-stack delivery
                </h3>

                <p className="mt-4 text-sm sm:text-base md:text-base lg:text-lg text-primary-foreground/85 leading-relaxed dark:text-white/90">
                  One team from idea to impact. Strategy, UX, System Design,
                  engineering, launch, and ongoing optimisation in a single
                  workflow -- so you always know what is shipping next and why
                  it matters.
                </p>
              </div>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="mt-8 w-fit rounded-full border-primary-foreground/40 bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-primary-foreground dark:text-white dark:hover:text-white/90"
              >
                <Link href="/onboarding" className="inline-flex items-center">
                  <Globe className="mr-2 h-4 w-4" />
                  Plan your build
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Right side - 2x2 grid of smaller cards, each taking 2 columns */}
            {/* Frontend Development */}
            <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
                  <Code2 className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="bg-muted text-muted-foreground px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium">
                  Frontend
                </div>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-bold mb-2 sm:mb-3 leading-[1.3]">
                Frontend Development
              </h3>

              <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base text-muted-foreground leading-[1.6]">
                React/Next.js that looks great and loads fast. Accessible,
                responsive UI with Tailwind + shadcn/ui and smart motion.
                SEO-ready (titles, meta, schema, sitemaps) and easy for your
                team to update.
              </p>
            </div>

            {/* Backend Development */}
            <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
                  <Server className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="bg-muted text-muted-foreground px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium">
                  Backend
                </div>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-bold mb-2 sm:mb-3 leading-[1.3]">
                Backend &amp; APIs
              </h3>

              <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base text-muted-foreground leading-[1.6]">
                Reliable Node.js services you can trust. Auth/roles,
                REST/GraphQL, caching and rate limits. Payments and
                subscriptions (Stripe/Razorpay/PayPal plus the gateways your
                users rely on), webhooks, vendor payouts -- built with logging
                and security by default.
              </p>
            </div>

            {/* Database Architecture */}
            <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
                  <Database className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="bg-muted text-muted-foreground px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium">
                  Database
                </div>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-bold mb-2 sm:mb-3 leading-[1.3]">
                Data, Search &amp; Analytics
              </h3>

              <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base text-muted-foreground leading-[1.6]">
                Databases and growth tracking that make sense.
                PostgreSQL/MongoDB schemas designed for reporting, safe
                migrations, and product/search indexing. Marketing stack
                included: GA4, GTM, server-side tagging, Meta Pixel/CAPI,
                consent mode, events, funnels, dashboards.
              </p>
            </div>

            {/* Mobile Development */}
            <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
                  <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="bg-muted text-muted-foreground px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium">
                  Mobile
                </div>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-bold mb-2 sm:mb-3 leading-[1.3]">
                Mobile &amp; Performance
              </h3>

              <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base text-muted-foreground leading-[1.6]">
                Built for phones, tuned for speed. Mobile-first UX with
                offline-friendly patterns, image/CDN strategy, and Core Web
                Vitals targets (LCP/INP/TTFB) so your app, store, or marketplace
                feels instant.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile See More Button */}
        <div className="flex justify-center mt-8 lg:hidden">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 rounded-full px-6 bg-transparent"
          >
            See More
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
