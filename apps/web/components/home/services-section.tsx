'use client';

import { useHeaderSection } from '@/hooks/use-header-section';
import { Code2, Database, Layers, Server, Smartphone } from 'lucide-react';

export function ServicesSection() {
  const sectionRef = useHeaderSection({
    background: 'bg-background',
    foreground: 'text-foreground',
    accentColor: 'text-primary',
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
            <h2 className="text-2xl leading-[1.15] font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem]">
              Build, launch &amp; grow
              <br />— one team, zero hand-offs
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-sm leading-[1.6] sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
              We design, develop, and scale SaaS, e-commerce, and marketplaces. Clear roadmaps,
              plain-language updates, and SEO, GTM, and GA4 baked in from day one.
            </p>
          </div>
        </div>

        <div className="bg-muted rounded-2xl p-2 md:p-3">
          <div className="grid grid-cols-1 gap-2 md:gap-3 lg:grid-cols-6 lg:grid-rows-2">
            {/* Featured Service - Full-Stack Development - Takes 2 columns, spans 2 rows */}
            <div className="bg-primary text-primary-foreground flex min-h-[500px] flex-col justify-between rounded-2xl p-8 shadow-lg md:p-10 lg:col-span-2 lg:row-span-2 lg:min-h-0 lg:p-12 dark:text-white">
              <div>
                <div className="mb-6 flex items-start justify-between">
                  <div className="bg-primary-foreground/20 flex h-14 w-14 items-center justify-center rounded-2xl sm:h-16 sm:w-16">
                    <Layers className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <div className="bg-primary-foreground/20 text-primary-foreground rounded-full px-3 py-1.5 text-xs font-medium sm:px-4 sm:py-1.5 sm:text-sm dark:text-white">
                    Full-Stack
                  </div>
                </div>

                <h3 className="text-xl leading-[1.3] font-bold sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl dark:text-white">
                  Full-stack delivery
                </h3>

                <p className="text-primary-foreground/85 mt-4 text-sm leading-relaxed sm:text-base md:text-base lg:text-lg dark:text-white/90">
                  One team from idea to impact. Strategy, UX, System Design, engineering, launch,
                  and ongoing optimisation in a single workflow -- so you always know what is
                  shipping next and why it matters.
                </p>
              </div>
            </div>

            {/* Right side - 2x2 grid of smaller cards, each taking 2 columns */}
            {/* Frontend Development */}
            <div className="bg-card border-border hover:border-primary/30 rounded-2xl border p-6 transition-colors md:p-8 lg:col-span-2">
              <div className="mb-4 flex items-start justify-between">
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl sm:h-14 sm:w-14">
                  <Code2 className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div className="bg-muted text-muted-foreground rounded-full px-2.5 py-1 text-xs font-medium sm:px-3 sm:py-1">
                  Frontend
                </div>
              </div>

              <h3 className="mb-2 text-base leading-[1.3] font-bold sm:mb-3 sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl">
                Frontend Development
              </h3>

              <p className="text-muted-foreground text-xs leading-[1.6] sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base">
                React/Next.js that looks great and loads fast. Accessible, responsive UI with
                Tailwind + shadcn/ui and smart motion. SEO-ready (titles, meta, schema, sitemaps)
                and easy for your team to update.
              </p>
            </div>

            {/* Backend Development */}
            <div className="bg-card border-border hover:border-primary/30 rounded-2xl border p-6 transition-colors md:p-8 lg:col-span-2">
              <div className="mb-4 flex items-start justify-between">
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl sm:h-14 sm:w-14">
                  <Server className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div className="bg-muted text-muted-foreground rounded-full px-2.5 py-1 text-xs font-medium sm:px-3 sm:py-1">
                  Backend
                </div>
              </div>

              <h3 className="mb-2 text-base leading-[1.3] font-bold sm:mb-3 sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl">
                Backend &amp; APIs
              </h3>

              <p className="text-muted-foreground text-xs leading-[1.6] sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base">
                Reliable Node.js services you can trust. Auth/roles, REST/GraphQL, caching and rate
                limits. Payments and subscriptions (Stripe/Razorpay/PayPal plus the gateways your
                users rely on), webhooks, vendor payouts -- built with logging and security by
                default.
              </p>
            </div>

            {/* Database Architecture */}
            <div className="bg-card border-border hover:border-primary/30 rounded-2xl border p-6 transition-colors md:p-8 lg:col-span-2">
              <div className="mb-4 flex items-start justify-between">
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl sm:h-14 sm:w-14">
                  <Database className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div className="bg-muted text-muted-foreground rounded-full px-2.5 py-1 text-xs font-medium sm:px-3 sm:py-1">
                  Database
                </div>
              </div>

              <h3 className="mb-2 text-base leading-[1.3] font-bold sm:mb-3 sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl">
                Data, Search &amp; Analytics
              </h3>

              <p className="text-muted-foreground text-xs leading-[1.6] sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base">
                Databases and growth tracking that make sense. PostgreSQL/MongoDB schemas designed
                for reporting, safe migrations, and product/search indexing. Marketing stack
                included: GA4, GTM, server-side tagging, Meta Pixel/CAPI, consent mode, events,
                funnels, dashboards.
              </p>
            </div>

            {/* Mobile Development */}
            <div className="bg-card border-border hover:border-primary/30 rounded-2xl border p-6 transition-colors md:p-8 lg:col-span-2">
              <div className="mb-4 flex items-start justify-between">
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl sm:h-14 sm:w-14">
                  <Smartphone className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div className="bg-muted text-muted-foreground rounded-full px-2.5 py-1 text-xs font-medium sm:px-3 sm:py-1">
                  Mobile
                </div>
              </div>

              <h3 className="mb-2 text-base leading-[1.3] font-bold sm:mb-3 sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl">
                Mobile &amp; Performance
              </h3>

              <p className="text-muted-foreground text-xs leading-[1.6] sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base">
                Built for phones, tuned for speed. Mobile-first UX with offline-friendly patterns,
                image/CDN strategy, and Core Web Vitals targets (LCP/INP/TTFB) so your app, store,
                or marketplace feels instant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
