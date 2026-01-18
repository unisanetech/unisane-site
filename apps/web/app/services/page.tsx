import type { Metadata } from "next";
import {
  Blocks,
  Cloud,
  Figma,
  Layers,
  Orbit,
  Rocket,
  ServerCog,
  ShoppingBag,
  Workflow,
} from "lucide-react";

import { createPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layouts/page-layout";
import { cn } from "@workspace/ui/lib/utils";

type Service = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SERVICES: Service[] = [
  {
    title: "Launch-ready landing pages",
    description:
      "Custom, fast, and animated landing pages for SaaS, e-commerce, or brands — built with Next.js, motion effects, and pixel-perfect responsiveness.",
    icon: Rocket,
  },
  {
    title: "Design systems & UI libraries",
    description:
      "Reusable tokens, components, and docs (Tailwind/Shadcn) so teams ship faster and stay on brand—accessibility, dark/light theming, Storybook, and Figma handoff.",
    icon: Layers,
  },
  {
    title: "Product UX design",
    description:
      "User flows, wireframes, and interactive Figma prototypes that align product goals. We turn ideas into intuitive user experiences with research-backed design and rapid validation.",
    icon: Figma,
  },
  {
    title: "Custom web applications",
    description:
      "Full-stack Next.js apps with secure auth, dashboards, billing, and analytics. We build fast, secure apps with smooth onboarding, role-based access, and growth-ready infrastructure.",
    icon: Blocks,
  },
  {
    title: "AI-powered products",
    description:
      "Design AI workflows with chatbots, copilots, and background agents—so your app feels smart, dependable, and human-friendly.",
    icon: Orbit,
  },
  {
    title: "Backend APIs & integrations",
    description:
      "Connect your product with Stripe, HubSpot, or any custom system through well-designed APIs, automation, and background workflows.",
    icon: ServerCog,
  },
  {
    title: "E-commerce & marketplaces",
    description:
      "Launch fast, scalable D2C and B2B online stores and marketplaces—optimized for conversion, inventory management, and seamless payment experiences.",
    icon: ShoppingBag,
  },
  {
    title: "Cloud architecture & DevOps",
    description:
      "Plan and deploy resilient infrastructure on AWS, Vercel, or Render—with CI/CD, observability, caching, and cost control built in.",
    icon: Cloud,
  },
  {
    title: "Growth & maintenance retainers",
    description:
      "A dedicated Unisane team to ship weekly improvements—funnels, performance, accessibility, and security—without hiring overhead.",
    icon: Workflow,
  },
];

export const metadata: Metadata = createPageMetadata("services");

export default function ServicesPage() {
  return (
    <PageLayout>
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
              Services
            </p>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem]">
              A full-stack partner that ships, scales, and supports your
              product.
            </h1>
            <p className="mt-6 text-sm text-muted-foreground sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
              From first launch to enterprise-ready platforms, Unisane assembles
              product leads, engineers, designers, and data specialists to
              build, optimise, and operate the digital experiences your
              customers rely on.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl border border-border/60 md:mt-20">
            <div className="grid border-border/60 md:grid-cols-2 xl:grid-cols-3">
              {SERVICES.map(({ title, description, icon: Icon }, index) => {
                const total = SERVICES.length;
                const getGridMeta = (columns: number) => {
                  if (columns <= 0)
                    return { isLastColumn: true, isLastRow: true };
                  const rows = Math.ceil(total / columns);
                  const rowIndex = Math.floor(index / columns);
                  const isLastRow = rowIndex === rows - 1;
                  const itemsInLastRow = total % columns || columns;
                  const positionInRow = (index % columns) + 1;
                  const isLastColumn = isLastRow
                    ? positionInRow === itemsInLastRow
                    : positionInRow === columns;
                  return { isLastColumn, isLastRow };
                };

                const mdMeta = getGridMeta(2);
                const xlMeta = getGridMeta(3);

                const itemClassName = cn(
                  "flex flex-col gap-6 border-border/60 px-10 py-12 text-left border-b last:border-b-0",
                  mdMeta.isLastColumn ? "md:border-r-0" : "md:border-r",
                  mdMeta.isLastRow ? "md:border-b-0" : "md:border-b",
                  xlMeta.isLastColumn ? "xl:border-r-0" : "xl:border-r",
                  xlMeta.isLastRow ? "xl:border-b-0" : "xl:border-b"
                );

                return (
                  <article key={title} className={itemClassName}>
                    <Icon className="size-12 text-primary" strokeWidth={1.4} />
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold leading-snug tracking-tight sm:text-[1.4rem]">
                        {title}
                      </h2>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
