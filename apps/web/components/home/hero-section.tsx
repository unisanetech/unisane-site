'use client'

import { useHeaderSection } from '@/hooks/use-header-section'
import { RotatingText } from './rotating-text'
import { motion } from 'motion/react'
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
} from 'react-icons/si'

export function HeroSection() {
  const sectionRef = useHeaderSection<HTMLDivElement>({
    background: 'bg-background',
    foreground: 'text-foreground',
    accentColor: 'text-primary',
  })
  const brands = [
    { icon: SiVercel, name: 'Vercel' },
    { icon: SiNetlify, name: 'Netlify' },
    { icon: SiAmazon, name: 'AWS' },
    { icon: SiShopify, name: 'Shopify' },
    { icon: SiGoogle, name: 'Google' },
    { icon: SiStripe, name: 'Stripe' },
    { icon: SiNotion, name: 'Notion' },
    { icon: SiSlack, name: 'Slack' },
    { icon: SiFigma, name: 'Figma' },
    { icon: SiGithub, name: 'GitHub' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: SiPostgresql, name: 'PostgreSQL' },
  ]

  return (
    <div
      ref={sectionRef}
      id="hero-section"
      className="flex h-[calc(100vh-3.5rem)] min-h-0 flex-col px-4 pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)] supports-[height:100dvh]:h-[calc(100dvh-3.5rem)] md:px-6 lg:px-8"
    >
      <section className="border-border bg-foreground/5 relative flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-2xl border [background-image:radial-gradient(circle,_rgba(148,163,184,0.3)_1px,_transparent_1px)] [background-size:12px_12px] md:rounded-3xl dark:[background-image:radial-gradient(circle,_rgba(71,85,105,0.4)_1px,_transparent_1px)]">
        <div className="container mx-auto flex min-h-0 flex-1 items-center justify-center px-2 sm:px-4">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
            <div className="pb-6 sm:pb-8 lg:pb-12">
              <h1>
                <span className="block text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
                  <RotatingText />
                </span>
                <span className="text-foreground -mt-1 block text-4xl leading-[1.1] font-bold tracking-tight sm:-mt-2 sm:text-5xl md:text-6xl lg:-mt-3 lg:text-7xl xl:text-8xl 2xl:text-8xl">
                  Web Development
                </span>
              </h1>
            </div>

            <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10">
              <p className="text-foreground/70 max-w-2xl px-4 text-sm leading-[1.6] sm:px-0 sm:text-base md:text-lg lg:text-xl">
                Modern architecture, a reusable design system, and cloud-ready
                backends—so your SaaS, store, or marketplace stays fast, secure,
                easy to scale, and backed by continuous support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative flex h-14 shrink-0 items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="relative container mx-auto overflow-hidden">
          {/* Edge fade (match original look, no blur) */}
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r to-transparent sm:w-32 md:w-48 lg:w-64" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l to-transparent sm:w-32 md:w-48 lg:w-64" />

          <div className="relative overflow-hidden">
            <motion.div
              className="flex min-w-max gap-6 will-change-transform sm:gap-8 md:gap-12 lg:gap-16"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 36, ease: 'linear', repeat: Infinity }}
              aria-label="Technologies and platforms"
            >
              {/* First row (accessible) */}
              {brands.map((brand, index) => (
                <div
                  key={`brand-a-${index}`}
                  className="flex items-center gap-2 whitespace-nowrap opacity-60 transition-opacity hover:opacity-100"
                >
                  <brand.icon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <span className="text-xs font-medium sm:text-sm">
                    {brand.name}
                  </span>
                </div>
              ))}
              {/* Second row (duplicate for seamless loop; hidden from a11y) */}
              {brands.map((brand, index) => (
                <div
                  key={`brand-b-${index}`}
                  className="flex items-center gap-2 whitespace-nowrap opacity-60 transition-opacity hover:opacity-100"
                  aria-hidden
                >
                  <brand.icon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <span className="text-xs font-medium sm:text-sm">
                    {brand.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
