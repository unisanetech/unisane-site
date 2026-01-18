import type { Metadata } from "next";
import Link from "next/link";

import { PageLayout } from "@/components/layouts/page-layout";
import { PORTFOLIO_HIGHLIGHTS } from "@/lib/content/portfolio";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@workspace/ui/lib/utils";

export const metadata: Metadata = createPageMetadata("work");

export default function WorkPage() {
  return (
    <PageLayout>
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
              Work
            </p>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem]">
              A showcase of products shipped by Unisane.
            </h1>
            <p className="mt-6 max-w-3xl text-sm text-muted-foreground sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl leading-[1.6]">
              Explore launches spanning SaaS, marketplaces, AI tooling, and
              commerce—each delivered by a dedicated Unisane crew that continues
              to evolve the product post-launch.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO_HIGHLIGHTS.map((item) => {
              const hasLink = Boolean(item.url);

              const initials = item.name
                .split(/\s+/)
                .map((segment) => segment.charAt(0).toUpperCase())
                .slice(0, 2)
                .join("");

              const displayUrl = item.url
                ? item.url.replace(/^https?:\/\//, "")
                : "Confidential engagement";

              const summaryText = item.isConfidential
                ? "This launch is under NDA. Request an intro to see the product in action."
                : item.summary;

              const services = item.services ?? [];

              const cardContent = (
                <>
                <div
                  className="relative h-60 w-full overflow-hidden bg-muted/40"
                  style={{
                    background:
                      item.imageBackground ??
                      "linear-gradient(135deg, rgba(18,19,22,0.35) 0%, rgba(18,19,22,0.7) 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35 opacity-80" />
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`${item.name} showcase`}
                      className="relative z-10 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative z-10 flex h-full w-full items-center justify-center bg-muted/30 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                      Preview under NDA
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={`${item.name} logo`}
                          className="h-6 w-6 object-contain"
                        />
                      ) : (
                        <span className="text-xs font-semibold text-primary">
                          {initials}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        {item.name}
                      </h2>
                      <p className="text-xs text-muted-foreground">{displayUrl}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">
                    {summaryText}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {services.slice(0, 3).map((service) => (
                      <span
                        key={`${item.id}-${service}`}
                        className="inline-flex items-center rounded-full border border-border/60 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                </>
              );

              if (hasLink) {
                return (
                  <Link
                    key={item.id}
                    href={item.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group flex h-full flex-col overflow-hidden rounded-md border border-border/60 bg-card transition-transform duration-200 hover:-translate-y-1 hover:border-primary/40",
                    )}
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div
                  key={item.id}
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-border/60 bg-card"
                >
                  {cardContent}
                </div>
              );
            })}
            <div className="group flex h-full flex-col gap-4 rounded-md border border-dashed border-border/80 bg-card/40 p-6 text-left sm:p-7">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="flex size-10 items-center justify-center rounded-full border border-border/60">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em]">
                    NDA
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                  Confidential projects
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">
                Several enterprise and growth-stage builds are protected by NDA. We’re happy to walk
                you through relevant modules, architecture decisions, and outcomes on a private call.
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
                7 engagements under NDA
              </p>
              <div className="mt-auto text-xs text-muted-foreground/80">
                Let’s talk and we’ll share anonymised dashboards, architecture diagrams, and rollout
                playbooks once an NDA is in place.
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
