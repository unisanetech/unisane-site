"use client";

import { useHeaderSection } from "@/hooks/use-header-section";
import Link from "next/link";
import type { CSSProperties, ComponentType } from "react";
import {
  SiApachekafka,
  SiCloudflare,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiStorybook,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiSentry,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaAws } from "react-icons/fa6";

type FrameworkCard = {
  name: string;
  icon: ComponentType<{ className?: string }>;
  href: string;
  glow: string;
  iconClass?: string;
};

type FrameworkRow = {
  offset: string;
  cards: Array<FrameworkCard | null>;
};

const FRAMEWORKS: FrameworkCard[] = [
  {
    name: "React",
    icon: SiReact,
    href: "https://react.dev/",
    glow: "#61dafb",
    iconClass: "text-[#61DAFB]",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    href: "https://nextjs.org/",
    glow: "#ffffff",
    iconClass: "text-white",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    href: "https://www.typescriptlang.org/",
    glow: "#3178c6",
    iconClass: "text-[#3178C6]",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    href: "https://nodejs.org/",
    glow: "#3c873a",
    iconClass: "text-[#3C873A]",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    href: "https://tailwindcss.com/",
    glow: "#06b6d4",
    iconClass: "text-[#06B6D4]",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    href: "https://vercel.com/",
    glow: "#ffffff",
    iconClass: "text-white",
  },
  {
    name: "AWS",
    icon: FaAws,
    href: "https://aws.amazon.com/",
    glow: "#ff9900",
    iconClass: "text-[#FF9900]",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    href: "https://www.postgresql.org/",
    glow: "#4169e1",
    iconClass: "text-[#336791]",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    href: "https://www.mongodb.com/",
    glow: "#47a248",
    iconClass: "text-[#47A248]",
  },
  {
    name: "Redis",
    icon: DiRedis,
    href: "https://redis.io/",
    glow: "#d82c20",
    iconClass: "text-[#D82C20]",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    href: "https://www.prisma.io/",
    glow: "#0c344b",
    iconClass: "text-[#0C344B]",
  },
  {
    name: "Kafka",
    icon: SiApachekafka,
    href: "https://kafka.apache.org/",
    glow: "#ff6b2c",
    iconClass: "text-[#FF6B2C]",
  },
  {
    name: "OpenAI",
    icon: SiOpenai,
    href: "https://openai.com/",
    glow: "#10a37f",
    iconClass: "text-[#10A37F]",
  },
  {
    name: "shadcn/ui",
    icon: SiShadcnui,
    href: "https://ui.shadcn.com/",
    glow: "#ffffff",
    iconClass: "text-white",
  },
  {
    name: "Docker",
    icon: SiDocker,
    href: "https://www.docker.com/",
    glow: "#2496ed",
    iconClass: "text-[#2496ED]",
  },
  {
    name: "Stripe",
    icon: SiStripe,
    href: "https://stripe.com/",
    glow: "#635bff",
    iconClass: "text-[#635BFF]",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    href: "https://firebase.google.com/",
    glow: "#ffca28",
    iconClass: "text-[#FFCA28]",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    href: "https://graphql.org/",
    glow: "#e535ab",
    iconClass: "text-[#E535AB]",
  },
  {
    name: "Cloudflare",
    icon: SiCloudflare,
    href: "https://www.cloudflare.com/",
    glow: "#f38020",
    iconClass: "text-[#F38020]",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    href: "https://github.com/",
    glow: "#ffffff",
    iconClass: "text-white",
  },
  {
    name: "Storybook",
    icon: SiStorybook,
    href: "https://storybook.js.org/",
    glow: "#ff4785",
    iconClass: "text-[#FF4785]",
  },
  {
    name: "Sentry",
    icon: SiSentry,
    href: "https://sentry.io/",
    glow: "#fb4226",
    iconClass: "text-[#FB4226]",
  },
  {
    name: "Vite",
    icon: SiVite,
    href: "https://vitejs.dev/",
    glow: "#facc15",
    iconClass: "text-[#FACC15]",
  },
  {
    name: "Figma",
    icon: SiFigma,
    href: "https://www.figma.com/",
    glow: "#0acf83",
    iconClass: "text-[#0ACF83]",
  },
];

const ROW_COUNT = 5;
const MIN_COLUMNS = 14;
const ROW_OFFSETS = ["12px", "36px", "12px", "36px", "12px"] as const;

const FRAMEWORK_ROWS: FrameworkRow[] = (() => {
  const rows: Array<FrameworkCard[]> = Array.from(
    { length: ROW_COUNT },
    () => []
  );

  const targetRowOrder = [1, 2, 3] as const;
  type MainRowIndex = (typeof targetRowOrder)[number];
  const rowLimits = new Map<MainRowIndex, number>([
    [1, 9],
    [2, 9],
    [3, 6],
  ]);

  let pointer = 0;

  FRAMEWORKS.forEach((card) => {
    const orderLength = targetRowOrder.length;

    for (let offset = 0; offset < orderLength; offset++) {
      const rowIndex = (targetRowOrder[(pointer + offset) % orderLength] ??
        targetRowOrder[0]!) as MainRowIndex;
      const limit = rowLimits.get(rowIndex);
      if (limit == null || rows[rowIndex]!.length < limit) {
        rows[rowIndex]!.push(card);
        pointer = (pointer + offset + 1) % orderLength;
        return;
      }
    }

    const fallbackRowIndex = (targetRowOrder[pointer % orderLength] ??
      targetRowOrder[0]!) as MainRowIndex;
    rows[fallbackRowIndex]!.push(card);
    pointer = (pointer + 1) % orderLength;
  });

  const maxColumns = Math.max(
    MIN_COLUMNS,
    ...rows.map((cards) => cards.length)
  );

  return rows.map((cards, rowIndex) => {
    const gap = Math.max(0, maxColumns - cards.length);
    const leading = Math.floor(gap / 2);
    const trailing = gap - leading;

    const padded: Array<FrameworkCard | null> = [
      ...Array.from({ length: leading }, () => null),
      ...cards,
      ...Array.from({ length: trailing }, () => null),
    ];

    const offset = ROW_OFFSETS[rowIndex % ROW_OFFSETS.length] ?? "12px";

    return {
      offset,
      cards: padded,
    };
  });
})();

const CARD_BASE =
  "group relative flex h-24 w-24 items-center justify-center rounded-[12px] border border-white/15 bg-white/10 transition-transform duration-200 hover:-translate-y-1 hover:scale-[0.92] hover:shadow-[0_28px_55px_rgba(0,0,0,0.45)]";

const PLACEHOLDER_CARD =
  "relative flex h-24 w-24 items-center justify-center rounded-[12px] border border-white/10 bg-white/5";

export function TechStackSection() {
  const sectionRef = useHeaderSection({
    background: "bg-portfolio",
    foreground: "text-white",
    accentColor: "text-white",
  });

  return (
    <section
      ref={sectionRef}
      id="tech-stack-section"
      className="frameworks-section relative w-full bg-portfolio py-20 lg:py-24 xl:py-28 text-white"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] font-bold tracking-tight leading-[1.15] text-balance text-white">
          Built with modern technologies
          <br />— trusted by industry leaders
        </h2>
        <p className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl text-white/70 leading-[1.6]">
          We leverage cutting-edge technologies and frameworks to build
          scalable, high-performance web applications that stand the test of
          time.
        </p>
      </div>

      <div className="frameworks-container relative mt-10 w-full overflow-hidden bg-portfolio">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-portfolio via-portfolio/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-portfolio via-portfolio/70 to-transparent" />

        <div
          className="relative px-4 py-10 sm:px-6 lg:px-12"
          style={
            {
              WebkitMaskImage:
                "linear-gradient(180deg, transparent 0%, #ffffff 10%, #ffffff 90%, transparent 100%)",
              maskImage:
                "linear-gradient(180deg, transparent 0%, #ffffff 10%, #ffffff 90%, transparent 100%)",
            } satisfies CSSProperties
          }
        >
          <div
            className="relative space-y-6"
            style={
              {
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent 0%, #ffffff 300px, #ffffff calc(100% - 300px), transparent 100%)",
                maskImage:
                  "linear-gradient(90deg, transparent 0%, #ffffff 300px, #ffffff calc(100% - 300px), transparent 100%)",
              } satisfies CSSProperties
            }
          >
            {FRAMEWORK_ROWS.map((row, rowIndex) => {
              const concreteRowOffset = row.offset ?? "0px";
              const frameworkRowStyle: CSSProperties & {
                "--row-offset": string;
              } = {
                transform: "translate3d(var(--row-offset), 0, 0)",
                "--row-offset": concreteRowOffset,
              };

              return (
                <div
                  key={`framework-row-${rowIndex}`}
                  className="framework-row grid grid-flow-col auto-cols-[96px] gap-6 justify-center"
                  style={frameworkRowStyle}
                >
                  {row.cards.map((card, index) => {
                    if (!card) {
                      return (
                        <div
                          key={`placeholder-${rowIndex}-${index}`}
                          className={PLACEHOLDER_CARD}
                          aria-hidden="true"
                        />
                      );
                    }

                    const Icon = card.icon;
                    return (
                      <Link
                        key={`${card.name}-${rowIndex}-${index}`}
                        href={card.href}
                        target="_blank"
                        rel="noreferrer"
                        prefetch={false}
                        className={CARD_BASE}
                        aria-label={card.name}
                        style={
                          {
                            "--glow-color": card.glow,
                          } as CSSProperties
                        }
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-[10%] rounded-[10px] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                          style={{
                            backgroundColor: "var(--glow-color)",
                          }}
                        />
                        <Icon
                          className={`relative text-5xl drop-shadow-[0_0_12px_rgba(0,0,0,0.35)] ${card.iconClass ?? ""}`}
                        />
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
