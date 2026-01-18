"use client";

import { useHeaderSection } from "@/hooks/use-header-section";
import { Button } from "@workspace/ui/components/button";
import { FaWhatsapp } from "react-icons/fa";
import { RotatingText } from "./rotating-text";
import Link from "next/link";
import { motion } from "motion/react";
import {
  SiVercel,
  SiNetlify,
  SiAmazon,
  SiShopify,
  SiGoogle,
  SiStripe,
  SiNotion,
  SiSlack,
  SiFigma,
  SiGithub,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

export function HeroSection() {
  const sectionRef = useHeaderSection<HTMLDivElement>({
    background: "bg-background",
    foreground: "text-foreground",
    accentColor: "text-primary",
  });
  const brands = [
    { icon: SiVercel, name: "Vercel" },
    { icon: SiNetlify, name: "Netlify" },
    { icon: SiAmazon, name: "AWS" },
    { icon: SiShopify, name: "Shopify" },
    { icon: SiGoogle, name: "Google" },
    { icon: SiStripe, name: "Stripe" },
    { icon: SiNotion, name: "Notion" },
    { icon: SiSlack, name: "Slack" },
    { icon: SiFigma, name: "Figma" },
    { icon: SiGithub, name: "GitHub" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiPostgresql, name: "PostgreSQL" },
  ];

  return (
    <div
      ref={sectionRef}
      id="hero-section"
      className="flex flex-col px-4 md:px-6 lg:px-8 min-h-0 h-[calc(100vh-3.5rem)] supports-[height:100dvh]:h-[calc(100dvh-3.5rem)] pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)]"
    >
      <section className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl border border-border flex flex-col flex-1 min-h-0 bg-foreground/5  [background-size:12px_12px] [background-image:radial-gradient(circle,_rgba(148,163,184,0.3)_1px,_transparent_1px)] dark:[background-image:radial-gradient(circle,_rgba(71,85,105,0.4)_1px,_transparent_1px)]">
        <div className="container mx-auto px-2 sm:px-4  flex-1 flex items-center justify-center min-h-0">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto w-full">
            <div className="pb-6 sm:pb-8 lg:pb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-bold leading-[1.1] tracking-tight">
                <RotatingText />
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-bold leading-[1.1] tracking-tight -mt-1 sm:-mt-2 lg:-mt-3">
                <span className="text-foreground">Web Development</span>
              </h1>
            </div>

            <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl leading-[1.6] px-4 sm:px-0">
                Modern architecture, a reusable design system, and cloud-ready backends—so your SaaS, store, or marketplace stays fast, secure, easy to scale, and backed by continuous support.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
                <Button asChild className="rounded-full px-10 sm:px-12 md:px-14 h-12 sm:h-13 md:h-14 text-base sm:text-lg font-medium w-full sm:w-auto">
                  <Link href="/onboarding">Get a Quote</Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full h-12 sm:h-13 md:h-14 px-10 sm:px-12 md:px-14 text-base sm:text-lg font-medium gap-3 bg-background w-full sm:w-auto"
                  asChild
                >
                  <a
                    href="https://wa.me/917602272402"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7 shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 shrink-0 overflow-hidden relative flex items-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative overflow-hidden">
          {/* Edge fade (match original look, no blur) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-32 md:w-48 lg:w-64 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-32 md:w-48 lg:w-64 bg-gradient-to-l from-background to-transparent" />

          <div className="relative overflow-hidden">
            <motion.div
              className="flex min-w-max gap-6 sm:gap-8 md:gap-12 lg:gap-16 will-change-transform"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 36, ease: "linear", repeat: Infinity }}
              aria-label="Technologies and platforms"
            >
              {/* First row (accessible) */}
              {brands.map((brand, index) => (
                <div
                  key={`brand-a-${index}`}
                  className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap"
                >
                  <brand.icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{brand.name}</span>
                </div>
              ))}
              {/* Second row (duplicate for seamless loop; hidden from a11y) */}
              {brands.map((brand, index) => (
                <div
                  key={`brand-b-${index}`}
                  className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap"
                  aria-hidden
                >
                  <brand.icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{brand.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
