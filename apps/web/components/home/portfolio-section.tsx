'use client'

import { useHeaderSection } from '@/hooks/use-header-section'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PORTFOLIO_HIGHLIGHTS } from '@/lib/content/portfolio'

const getDisplayUrl = (url: string) =>
  url.replace(/^https?:\/\//, '').replace(/\/$/, '')

export function PortfolioSection() {
  const sectionRef = useHeaderSection({
    background: 'bg-portfolio',
    foreground: 'text-white',
    accentColor: 'text-white',
  })

  const showcaseItems = PORTFOLIO_HIGHLIGHTS.filter(
    (
      item,
    ): item is (typeof PORTFOLIO_HIGHLIGHTS)[number] &
      Required<
        Pick<typeof item, 'url' | 'logo' | 'image' | 'imageBackground'>
      > =>
      !item.isConfidential &&
      Boolean(item.url && item.logo && item.image && item.imageBackground),
  )

  const infiniteItems = [...showcaseItems, ...showcaseItems, ...showcaseItems]

  const itemCount = showcaseItems.length

  // Start in the middle block so we can go both directions
  const [currentIndex, setCurrentIndex] = useState(itemCount + 1)
  const [hasTransition, setHasTransition] = useState(true)
  const isResettingRef = useRef(false)
  const pendingResetIndexRef = useRef<number | null>(null)

  const trackRef = useRef<HTMLDivElement | null>(null)

  const getRealIndex = (idx: number) =>
    ((idx % itemCount) + itemCount) % itemCount

  const goToPrevious = () => {
    if (isResettingRef.current) return
    const next = currentIndex - 1
    // if we're going to overflow past the left bound, remember where to snap after transition
    if (next < itemCount) {
      pendingResetIndexRef.current = next + itemCount
    }
    setHasTransition(true)
    setCurrentIndex(next)
  }

  const goToNext = () => {
    if (isResettingRef.current) return
    const next = currentIndex + 1
    // if we're going to overflow past the right bound, remember where to snap after transition
    if (next >= itemCount * 2) {
      pendingResetIndexRef.current = next - itemCount
    }
    setHasTransition(true)
    setCurrentIndex(next)
  }

  const goToSlide = (realIndex: number) => {
    if (isResettingRef.current) return
    // jump within the middle block to keep distance minimal
    const target = itemCount + realIndex
    setHasTransition(true)
    setCurrentIndex(target)
  }

  // Smooth wrap reset exactly when CSS transition ends
  const handleTransitionEnd = () => {
    const target = pendingResetIndexRef.current
    if (target == null) return
    // prevent user clicks while snapping
    isResettingRef.current = true

    // 1) turn off transition
    setHasTransition(false)

    // 2) on next frame, set the snapped index without animation
    requestAnimationFrame(() => {
      setCurrentIndex(target)

      // 3) on the following frame, re-enable transition for future moves
      requestAnimationFrame(() => {
        pendingResetIndexRef.current = null
        isResettingRef.current = false
        setHasTransition(true)
      })
    })
  }

  // transform calc (unchanged)
  const getTransform = () => {
    const slideWidthPercent = 65
    const gapPercent = 1
    const totalSlideWidth = slideWidthPercent + gapPercent
    const offset = 17.5 // centers 65% slide
    return `translateX(calc(${offset}% - ${currentIndex * totalSlideWidth}%))`
  }

  return (
    <section
      ref={sectionRef}
      id="portfolio-section"
      className="bg-portfolio relative flex min-h-screen flex-col justify-center py-12 text-white sm:py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:gap-6 md:mb-10 lg:mb-12 xl:mb-14">
          <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <p className="text-[10px] font-semibold tracking-[0.35em] text-white/70 uppercase sm:text-xs">
              Selected work
            </p>
            <h2 className="mt-2 text-2xl leading-[1.15] font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem]">
              Shipped products
              <br />— live in production
            </h2>
            <p className="mt-2 max-w-2xl text-xs text-white/70 sm:text-sm md:text-base">
              SaaS, e-commerce, and marketplaces—Next.js & Node, MongoDB, SEO,
              GTM & GA4 in place.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        {/* Mobile */}
        <div className="space-y-6 px-4 sm:space-y-8 sm:px-6 md:hidden">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className="w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
            >
              <div className="flex flex-col">
                <div
                  className="relative flex h-56 items-center justify-center overflow-hidden rounded-t-xl p-8 sm:h-72 sm:p-10"
                  style={{ background: item.imageBackground }}
                >
                  <Image
                    src={item.image}
                    alt={`${item.name} project`}
                    width={640}
                    height={360}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="flex h-full flex-col gap-5 p-6 sm:gap-6 sm:p-8">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex size-12 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/10 ring-2 ring-white/20 sm:size-14">
                      <Image
                        src={item.logo}
                        alt={`${item.name} logo`}
                        width={56}
                        height={56}
                        className="size-full rounded-full object-contain"
                      />
                    </div>
                    <span className="truncate text-sm font-semibold text-white sm:text-base">
                      {item.name}
                    </span>
                  </div>

                  <p className="text-base leading-snug font-semibold text-balance text-white/90 sm:text-lg">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="flex items-center">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="truncate text-[10px] text-white/60 transition-colors hover:text-white/80 sm:text-xs"
                    >
                      {getDisplayUrl(item.url)}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop carousel */}
        <div className="hidden md:block">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              className={`flex gap-4 will-change-transform ${
                hasTransition
                  ? 'transition-transform duration-700 ease-out'
                  : ''
              }`}
              style={{ transform: getTransform() }}
            >
              {infiniteItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className={`min-h-[360px] w-[65%] flex-shrink-0 transition-transform duration-700 ease-out md:min-h-[400px] lg:min-h-[440px] xl:min-h-[480px] ${index === currentIndex ? 'scale-100' : 'scale-90'}`}
                >
                  <div className="relative size-full">
                    <div className="h-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                      <div className="grid h-full items-stretch md:grid-cols-2">
                        {/* Left: Logo → Quote → Site */}
                        <div className="flex min-w-0 flex-col justify-between gap-4 p-6 md:gap-5 md:p-6 lg:gap-6 lg:p-7 xl:p-7 2xl:p-8">
                          <div className="flex min-w-0 items-center gap-3">
                            <div className="flex size-11 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/10 ring-2 ring-white/20 md:size-12 lg:size-12">
                              <Image
                                src={item.logo}
                                alt={`${item.name} logo`}
                                width={48}
                                height={48}
                                className="size-full rounded-full object-contain"
                              />
                            </div>
                            <p className="truncate text-sm font-semibold text-white md:text-base lg:text-lg">
                              {item.name}
                            </p>
                          </div>

                          <p className="line-clamp-5 min-w-0 text-base leading-snug font-semibold text-balance text-white/90 md:text-lg lg:text-lg xl:line-clamp-6 xl:text-lg 2xl:text-xl">
                            &ldquo;{item.quote}&rdquo;
                          </p>

                          <div className="flex items-center">
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="truncate text-[10px] text-white/60 transition-colors hover:text-white/80 md:text-xs lg:text-sm xl:text-xs"
                            >
                              {getDisplayUrl(item.url)}
                            </a>
                          </div>
                        </div>

                        {/* Right: Image fills height */}
                        <div
                          className="relative flex h-full items-center justify-center overflow-hidden rounded-br-xl p-8 md:p-10 lg:p-12"
                          style={{ background: item.imageBackground }}
                        >
                          <Image
                            src={item.image}
                            alt={`${item.name} project`}
                            width={640}
                            height={360}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Dim non-active slides */}
                    {index !== currentIndex && (
                      <div className="pointer-events-none absolute inset-0 rounded-xl bg-black/60 transition-opacity duration-700" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company names + arrows */}
          <div className="relative mt-5 md:mt-6 lg:mt-6">
            <div className="flex items-center justify-center gap-4 text-[10px] text-white/40 md:gap-5 md:text-xs lg:gap-6 lg:text-sm xl:gap-8">
              {showcaseItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => goToSlide(index)}
                  disabled={isResettingRef.current}
                  className={`transition-colors hover:text-white/70 disabled:cursor-not-allowed disabled:opacity-50 ${
                    getRealIndex(currentIndex) === index
                      ? 'font-medium text-white'
                      : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="absolute top-1/2 right-[17.5%] flex -translate-y-1/2 items-center gap-2 md:gap-3">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                aria-label="Previous portfolio item"
                onClick={goToPrevious}
                disabled={isResettingRef.current}
                className="size-7 rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-white/20 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50 md:size-8 lg:size-9 xl:size-10"
              >
                <ChevronLeft className="size-3 md:size-4 lg:size-4 xl:size-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                aria-label="Next portfolio item"
                onClick={goToNext}
                disabled={isResettingRef.current}
                className="size-7 rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-white/20 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50 md:size-8 lg:size-9 xl:size-10"
              >
                <ChevronRight className="size-3 md:size-4 lg:size-4 xl:size-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
