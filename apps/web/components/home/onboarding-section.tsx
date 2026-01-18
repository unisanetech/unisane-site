"use client";

import Link from "next/link";
import { useHeaderSection } from "@/hooks/use-header-section";
import { Button } from "@workspace/ui/components/button";
import { ArrowRight, ClipboardList, Timer, Users } from "lucide-react";

const highlights = [
  {
    title: "5-minute brief",
    description: "Share contact details, scope, and outcomes without writing a proposal.",
    icon: ClipboardList,
  },
  {
    title: "MVP-first plan",
    description: "We map the first measurable release and note the guardrails you already have.",
    icon: Timer,
  },
  {
    title: "Dedicated crew",
    description: "Meet the product lead, engineers, and designers who will own delivery.",
    icon: Users,
  },
];

export function OnboardingSection() {
  const sectionRef = useHeaderSection<HTMLDivElement>({
    background: "bg-background",
    foreground: "text-foreground",
    accentColor: "text-primary",
  });

  return (
    <section
      ref={sectionRef}
      id="onboarding-section"
      className="border-t border-border/60 bg-background py-16 sm:py-18 lg:py-20"
    >
      <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="space-y-6">
          <div className="space-y-4">
            <span className="inline-flex w-fit items-center rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Onboarding
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Line up your project kickoff in one guided form
            </h2>
            <p className="text-balance text-sm text-muted-foreground sm:text-base">
              Skip the back-and-forth emails. Once you submit, we reply within one business day
              with a kickoff agenda, delivery plan, and the people you’ll build with.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="flex h-full flex-col gap-2 rounded-2xl border border-border/60 bg-background/80 p-5 transition-colors hover:border-primary/50"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Icon className="size-4" />
                  <span>{title}</span>
                </div>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 rounded-3xl border border-border/60 bg-background/80 p-6 sm:p-7">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold tracking-tight">
              What happens after you submit
            </h3>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">1. Same-day review:</span> We confirm fit,
                clarify any open questions, and loop in the right specialists.
              </li>
              <li>
                <span className="font-medium text-foreground">2. Kickoff invite:</span> Receive an agenda,
                timeline draft, and discovery checklist tailored to your stack.
              </li>
              <li>
                <span className="font-medium text-foreground">3. Delivery runway:</span> We outline MVP
                milestones, integration touchpoints, and analytics/SEO setup.
              </li>
            </ol>
          </div>
          <Button
            asChild
            className="group inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            <Link href="/onboarding">
              Start the onboarding form
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Prefer to talk first? Email{" "}
            <a
              href="mailto:hello@unisane.com"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              hello@unisane.com
            </a>{" "}
            or call <a href="tel:+917602272402" className="font-semibold text-foreground">+91 76022 72402</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
