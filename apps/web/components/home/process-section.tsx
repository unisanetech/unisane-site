"use client";

import * as React from "react";
import { useCallback, useEffect, useId, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useHeaderSection } from "@/hooks/use-header-section";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type ProcessTab = {
  id: string;
  title: string;
  blurb: string;
  imageSrc?: string;
  imageAlt?: string;
};

type ProcessSectionProps = {
  className?: string;
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  layout?: "side" | "stack";
  tabs?: ProcessTab[];
  syncHash?: boolean;
  useInitialHash?: boolean;
  scrollMarginTopClass?: string;
  autoRotate?: boolean;
  rotateDelayMs?: number;
};

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function ProcessSection({
  className,
  id = "process-section",
  eyebrow = "How we build",
  title = "Plan, build, launch—then scale",
  description = "Clear architecture, a reusable design system, and cloud-ready backends. We ship in small releases with CI/CD, observability, and SEO/GTM/GA4 baked in—so SaaS, stores, and marketplaces grow safely.",
  layout = "side",
  tabs: overrideTabs,
  syncHash = false,
  useInitialHash = true,
  scrollMarginTopClass = "scroll-mt-36",
  autoRotate = true,
  rotateDelayMs = 6000,
}: ProcessSectionProps) {
  const sectionRef = useHeaderSection<HTMLDivElement>({
    background: "bg-background",
    foreground: "text-foreground",
    accentColor: "text-primary",
  });

  const defaultTabs: ProcessTab[] = useMemo(
    () => [
      {
        id: "discover",
        title: "Discover & Scope",
        blurb:
          "Workshops, goals, and success metrics. We map users, risks, and a realistic roadmap with estimates and priorities.",
        imageSrc: "/images/proccess/discover-and-align.png",
        imageAlt: "Discovery workshop, goals, and roadmap",
      },
      {
        id: "architecture",
        title: "Architecture & Design System",
        blurb:
          "System design, data models, and API contracts—alongside a reusable component library and design tokens for consistent UI.",
        imageSrc: "/images/proccess/design-and-architect.png",
        imageAlt: "System architecture and design system tokens",
      },
      {
        id: "build",
        title: "Build & Integrate",
        blurb:
          "Iterative releases start with a measurable MVP: Next.js frontends, Node/REST or GraphQL APIs, PostgreSQL/Mongo data, payments/search. CI, tests, and code review every sprint.",
        imageSrc: "/images/proccess/build-and-validate.png",
        imageAlt: "Engineering sprint and integrations",
      },
      {
        id: "launch",
        title: "Launch, Measure & Improve",
        blurb:
          "Calm go-live with SEO basics, GTM/GA4, and dashboards. We track Core Web Vitals, watch logs/alerts, and run a monthly improvements loop.",
        imageSrc: "/images/proccess/launch-and-grow.png",
        imageAlt: "Launch analytics and optimisation dashboard",
      },
    ],
    []
  );

  const tabs = overrideTabs?.length ? overrideTabs : defaultTabs;

  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldAnimate = !prefersReducedMotion;
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const autoRotateEnabled = autoRotate && !prefersReducedMotion;

  // Use stable ids for aria wiring.
  const ns = useId();
  const headingId = `${ns}-heading`;
  const tabId = (i: number) => `${ns}-tab-${tabs[i]?.id ?? i}`;
  const panelId = (i: number) => `${ns}-panel-${tabs[i]?.id ?? i}`;

  // Hash -> initial tab
  useEffect(() => {
    if (!useInitialHash || typeof window === "undefined") return;
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const idx = tabs.findIndex((tab) => tab.id === hash);
    if (idx >= 0) {
      setActive(idx);
    }
  }, [tabs, useInitialHash]);

  // Active tab -> hash
  useEffect(() => {
    if (!syncHash || typeof window === "undefined") return;
    const idValue = tabs[active]?.id;
    if (!idValue) return;
    const next = `#${idValue}`;
    if (window.location.hash !== next) {
      history.replaceState(null, "", next);
    }
  }, [active, tabs, syncHash]);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const max = tabs.length - 1;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        setActive((index) => Math.min(index + 1, max));
        setProgress(0);
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        setActive((index) => Math.max(index - 1, 0));
        setProgress(0);
      } else if (event.key === "Home") {
        event.preventDefault();
        setActive(0);
        setProgress(0);
      } else if (event.key === "End") {
        event.preventDefault();
        setActive(max);
        setProgress(0);
      }
    },
    [tabs.length]
  );

  useEffect(() => {
    if (!autoRotateEnabled) {
      setProgress(0);
      return;
    }

    if (isHovered || tabs.length <= 1 || typeof window === "undefined") {
      return;
    }

    setProgress(0);

    const intervalMs = 50;
    const step = 100 / Math.max(1, rotateDelayMs / intervalMs);

    const progressInterval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + step;
      });
    }, intervalMs);

    const switchTimeout = window.setTimeout(() => {
      setActive((index) => (index + 1) % tabs.length);
    }, rotateDelayMs);

    return () => {
      window.clearInterval(progressInterval);
      window.clearTimeout(switchTimeout);
    };
  }, [active, autoRotateEnabled, isHovered, rotateDelayMs, tabs.length]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cx(
        "w-full bg-background scroll-mt-32 sm:scroll-mt-36",
        "pt-16 sm:pt-20 lg:pt-28 pb-32",
        className
      )}
      aria-labelledby={headingId}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cx(
            "mt-12 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-28",
            layout === "side"
              ? "grid grid-cols-1 items-start gap-12 sm:gap-16 lg:grid-cols-[minmax(0,470px)_minmax(0,1fr)] lg:gap-44"
              : "space-y-10 sm:space-y-12 md:space-y-14"
          )}
        >
          <div className="flex flex-col justify-between gap-10 sm:gap-12 lg:self-stretch">
            <header className="max-w-xl text-left space-y-5">
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.35em] text-primary sm:text-sm"
                initial={shouldAnimate ? { opacity: 0, y: 6 } : false}
                whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                {eyebrow}
              </motion.p>
              <motion.h2
                id={headingId}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] font-bold leading-[1.15] tracking-tight text-balance text-foreground"
                initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
                whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {title}
              </motion.h2>
              <motion.p
                className="mt-4 text-base sm:text-lg text-muted-foreground leading-[1.6]"
                initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
                whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.28, ease: "easeOut", delay: 0.04 }}
              >
                {description}
              </motion.p>
            </header>

            <div
              role="tablist"
              aria-label="Process steps"
              onKeyDown={onKeyDown}
              className="border-t border-border/60 sm:border-t-2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onFocusCapture={() => setIsHovered(true)}
              onBlurCapture={() => setIsHovered(false)}
            >
              {tabs.map((tab, index) => {
                const selected = index === active;
                return (
                  <div key={tab.id} className={cx("border-b border-border/60 sm:border-b-2")}>
                    <button
                      id={tabId(index)}
                      role="tab"
                      type="button"
                      aria-selected={selected}
                      aria-controls={panelId(index)}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => {
                        setActive(index);
                        setProgress(0);
                      }}
                      className={cx(
                        "relative w-full py-4 sm:py-5 text-left transition-colors",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        selected
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground/80"
                      )}
                    >
                      {selected ? (
                        <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-border/60">
                          <span
                            className="block h-full bg-primary transition-[width] duration-75 ease-linear"
                            style={{ width: `${autoRotateEnabled ? Math.min(progress, 100) : 100}%` }}
                          />
                        </span>
                     ) : null}

                      <span
                        className={cx(
                          "mt-1.5 block text-lg sm:text-xl font-semibold leading-tight",
                          selected ? "text-foreground" : "text-foreground/70"
                        )}
                      >
                        {tab.title}
                      </span>
                    </button>

                    {selected ? (
                      <div className="pb-4 pr-4 sm:pb-5 sm:pr-5 space-y-4">
                        <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {tab.blurb}
                        </p>
                        <div className="lg:hidden">
                          <ProcessImage
                            src={tab.imageSrc}
                            alt={tab.imageAlt ?? tab.title ?? ""}
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="hidden min-h-[280px] items-center justify-center sm:min-h-[320px] lg:flex lg:self-stretch lg:justify-end"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={tabs[active]?.id}
                role="tabpanel"
                id={panelId(active)}
                aria-labelledby={tabId(active)}
                className={cx(
                  "flex h-full w-full items-center justify-center lg:justify-end",
                  layout === "side" ? "lg:rounded-3xl" : undefined,
                  scrollMarginTopClass
                )}
                initial={shouldAnimate ? { opacity: 0, y: 14 } : false}
                animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                exit={shouldAnimate ? { opacity: 0, y: -10 } : undefined}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <ProcessImage
                  src={tabs[active]?.imageSrc}
                  alt={tabs[active]?.imageAlt ?? tabs[active]?.title ?? ""}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessImage({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-border/60 bg-card lg:ml-auto">
      <div className="relative w-full">
        {src ? (
          <div className="relative aspect-square">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <PlaceholderMedia label={alt || "Process preview"} />
        )}
      </div>
    </div>
  );
}

function PlaceholderMedia({ label }: { label: string }) {
  return (
    <div className="grid aspect-square w-full place-items-center rounded-3xl border border-border/60 bg-muted/40">
      <div className="rounded-2xl border border-dashed border-muted-foreground/30 bg-background/70 px-4 py-6 text-center text-sm text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Utilities                                                                  */
/* -------------------------------------------------------------------------- */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(Boolean(mq.matches));
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
