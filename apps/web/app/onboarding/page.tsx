import type { Metadata } from "next";
import { BarChart3, Quote, Rocket, ShieldCheck, Users2 } from "lucide-react";

import { OnboardingForm } from "@/components/onboarding/onboarding-form";
import { Badge } from "@workspace/ui/components/badge";
import { createPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layouts/page-layout";

export const metadata: Metadata = createPageMetadata("onboarding");

const highlights = [
  {
    title: "Launch measured MVPs",
    description: "Six to eight week MVPs with CI/CD, QA, and analytics pre-configured.",
    icon: Rocket,
  },
  {
    title: "Embedded product crew",
    description: "Strategy, UX, engineering, QA, and analytics working as one team.",
    icon: Users2,
  },
  {
    title: "Scale-ready architecture",
    description: "Next.js, Node, PostgreSQL/MongoDB, Redis, Kafka, and AWS best practices.",
    icon: ShieldCheck,
  },
  {
    title: "Metrics-first delivery",
    description: "SEO, GTM, GA4, and reporting dashboards from the very first sprint.",
    icon: BarChart3,
  },
];

export default function OnboardingPage() {
  return (
    <PageLayout mainClassName="bg-background text-foreground">
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-0 sm:px-6 lg:px-8">
          <div className="mx-auto grid gap-6 rounded-[32px] bg-background p-0 sm:p-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="space-y-8 rounded-none sm:rounded-[28px] bg-background px-6 py-8 sm:px-10 sm:py-12">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary/40 text-xs uppercase tracking-[0.32em] text-primary">
                  Project onboarding
                </Badge>
                <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Tell us what you are building — we’ll bring the delivery plan
                </h1>
                <p className="text-balance text-sm text-muted-foreground sm:text-base">
                  Share your roadmap, timelines, and constraints. We’ll assemble the crew, confirm fit
                  within one business day, and arrive at kickoff ready to ship.
                </p>
              </div>

              <OnboardingForm />
            </div>

            <aside className="flex flex-col justify-between rounded-none sm:rounded-[28px] border border-primary/40 bg-primary px-6 py-8 text-primary-foreground sm:px-10 sm:py-12">
              <div className="space-y-8">
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary-foreground/70">
                    Why teams partner with Unisane
                  </span>
                  <h2 className="text-2xl font-semibold leading-tight sm:text-[2.2rem]">
                    A full-stack product team that ships, measures, and iterates with you
                  </h2>
                  <p className="text-sm text-primary-foreground/80 sm:text-base">
                    No hand-offs, no silos. Strategy, UX, engineering, analytics, and QA operate as a single crew so every release moves metrics.
                  </p>
                </div>

                <div className="space-y-4">
                  {highlights.map(({ title, description, icon: Icon }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 rounded-2xl border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-3"
                    >
                      <Icon className="mt-1 size-4" />
                      <div className="space-y-1">
                        <p className="text-sm font-semibold">{title}</p>
                        <p className="text-sm text-primary-foreground/80">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <figure className="space-y-3 rounded-2xl border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-5">
                  <Quote className="size-6 text-primary-foreground/70" />
                  <blockquote className="text-sm leading-relaxed text-primary-foreground/80">
                    “Every onboarding form we receive informs a clear MVP plan, a runway of measured releases, and a product team that already understands our domain.”
                  </blockquote>
                  <figcaption className="text-sm font-semibold">
                    Bhaskar Barma
                    <span className="ml-2 font-normal text-primary-foreground/70">
                      Founder, Unisane Technologies
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/60">
                  Shipping with tooling across
                </span>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-primary-foreground/80">
                  <span>AWS</span>
                  <span>Vercel</span>
                  <span>Stripe</span>
                  <span>MongoDB</span>
                  <span>PostgreSQL</span>
                  <span>Next.js</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
