"use client";

import { useHeaderSection } from "@/hooks/use-header-section";
import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { PORTFOLIO_HIGHLIGHTS } from "@/lib/content/portfolio";

const getDisplayUrl = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export function PortfolioSection() {
  const sectionRef = useHeaderSection({
    background: "bg-portfolio",
    foreground: "text-white",
    accentColor: "text-white",
  });

  const showcaseItems = PORTFOLIO_HIGHLIGHTS.filter(
    (item): item is typeof PORTFOLIO_HIGHLIGHTS[number] &
      Required<Pick<typeof item, "url" | "logo" | "image" | "imageBackground">> =>
      !item.isConfidential && Boolean(item.url && item.logo && item.image && item.imageBackground),
  );

  const infiniteItems = [
    ...showcaseItems,
    ...showcaseItems,
    ...showcaseItems,
  ];

  const itemCount = showcaseItems.length;

  // Start in the middle block so we can go both directions
  const [currentIndex, setCurrentIndex] = useState(itemCount + 1);
  const [hasTransition, setHasTransition] = useState(true);
  const isResettingRef = useRef(false);
  const pendingResetIndexRef = useRef<number | null>(null);

  const trackRef = useRef<HTMLDivElement | null>(null);

  const getRealIndex = (idx: number) =>
    ((idx % itemCount) + itemCount) % itemCount;

  const goToPrevious = () => {
    if (isResettingRef.current) return;
    const next = currentIndex - 1;
    // if we're going to overflow past the left bound, remember where to snap after transition
    if (next < itemCount) {
      pendingResetIndexRef.current = next + itemCount;
    }
    setHasTransition(true);
    setCurrentIndex(next);
  };

  const goToNext = () => {
    if (isResettingRef.current) return;
    const next = currentIndex + 1;
    // if we're going to overflow past the right bound, remember where to snap after transition
    if (next >= itemCount * 2) {
      pendingResetIndexRef.current = next - itemCount;
    }
    setHasTransition(true);
    setCurrentIndex(next);
  };

  const goToSlide = (realIndex: number) => {
    if (isResettingRef.current) return;
    // jump within the middle block to keep distance minimal
    const target = itemCount + realIndex;
    setHasTransition(true);
    setCurrentIndex(target);
  };

  // Smooth wrap reset exactly when CSS transition ends
  const handleTransitionEnd = () => {
    const target = pendingResetIndexRef.current;
    if (target == null) return;
    // prevent user clicks while snapping
    isResettingRef.current = true;

    // 1) turn off transition
    setHasTransition(false);

    // 2) on next frame, set the snapped index without animation
    requestAnimationFrame(() => {
      setCurrentIndex(target);

      // 3) on the following frame, re-enable transition for future moves
      requestAnimationFrame(() => {
        pendingResetIndexRef.current = null;
        isResettingRef.current = false;
        setHasTransition(true);
      });
    });
  };

  // transform calc (unchanged)
  const getTransform = () => {
    const slideWidthPercent = 65;
    const gapPercent = 1;
    const totalSlideWidth = slideWidthPercent + gapPercent;
    const offset = 17.5; // centers 65% slide
    return `translateX(calc(${offset}% - ${currentIndex * totalSlideWidth}%))`;
  };

  return (
    <section
      ref={sectionRef}
      id="portfolio-section"
      className="relative bg-portfolio text-white min-h-screen py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28 flex flex-col justify-center "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:gap-6 md:mb-10 lg:mb-12 xl:mb-14">
          <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Selected work
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] font-bold leading-[1.15] tracking-tight text-balance">
              Shipped products
              <br />— live in production
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-white/70 max-w-2xl">
              SaaS, e-commerce, and marketplaces—Next.js & Node, MongoDB, SEO,
              GTM & GA4 in place.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        {/* Mobile */}
        <div className="md:hidden space-y-6 sm:space-y-8 px-4 sm:px-6">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className="w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
            >
              <div className="flex flex-col">
                <div
                  className="relative flex h-56 sm:h-72 items-center justify-center overflow-hidden rounded-t-xl p-8 sm:p-10"
                  style={{ background: item.imageBackground }}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.name} project`}
                    width={640}
                    height={360}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="flex flex-col h-full p-6 sm:p-8 gap-5 sm:gap-6">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex size-12 sm:size-14 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20 border border-white/30 overflow-hidden">
                      <Image
                        src={item.logo || "/placeholder.svg"}
                        alt={`${item.name} logo`}
                        width={56}
                        height={56}
                        className="size-full object-contain rounded-full"
                      />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-white truncate">
                      {item.name}
                    </span>
                  </div>

                  <p className="text-balance text-base sm:text-lg font-semibold leading-snug text-white/90">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="flex items-center">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] sm:text-xs text-white/60 hover:text-white/80 transition-colors truncate"
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
                  ? "transition-transform duration-700 ease-out"
                  : ""
              }`}
              style={{ transform: getTransform() }}
            >
              {infiniteItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className={`flex-shrink-0 w-[65%] min-h-[360px] md:min-h-[400px] lg:min-h-[440px] xl:min-h-[480px]
                    transition-transform duration-700 ease-out ${index === currentIndex ? "scale-100" : "scale-90"}`}
                >
                  <div className="relative size-full">
                    <div className="h-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                      <div className="grid h-full md:grid-cols-2 items-stretch">
                        {/* Left: Logo → Quote → Site */}
                        <div className="flex min-w-0 flex-col justify-between p-6 md:p-6 lg:p-7 xl:p-7 2xl:p-8 gap-4 md:gap-5 lg:gap-6">
                          <div className="flex items-center gap-3 min-w-0">
                                <div className="flex size-11 md:size-12 lg:size-12 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20 border border-white/30 overflow-hidden">
                              <Image
                                src={item.logo || "/placeholder.svg"}
                                alt={`${item.name} logo`}
                                width={48}
                                height={48}
                                className="size-full object-contain rounded-full"
                              />
                            </div>
                            <p className="text-sm md:text-base lg:text-lg font-semibold text-white truncate">
                              {item.name}
                            </p>
                          </div>

                          <p className="min-w-0 text-balance text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-semibold leading-snug text-white/90 line-clamp-5 xl:line-clamp-6">
                            &ldquo;{item.quote}&rdquo;
                          </p>

                          <div className="flex items-center">
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] md:text-xs lg:text-sm xl:text-xs text-white/60 hover:text-white/80 transition-colors truncate"
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
                            src={item.image || "/placeholder.svg"}
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
            <div className="flex items-center justify-center gap-4 md:gap-5 lg:gap-6 xl:gap-8 text-[10px] md:text-xs lg:text-sm text-white/40">
              {showcaseItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => goToSlide(index)}
                  disabled={isResettingRef.current}
                  className={`transition-colors hover:text-white/70 disabled:opacity-50 disabled:cursor-not-allowed ${
                    getRealIndex(currentIndex) === index
                      ? "font-medium text-white"
                      : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="absolute right-[17.5%] top-1/2 -translate-y-1/2 flex items-center gap-2 md:gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                disabled={isResettingRef.current}
                className="size-7 md:size-8 lg:size-9 xl:size-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/20 hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="size-3 md:size-4 lg:size-4 xl:size-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                disabled={isResettingRef.current}
                className="size-7 md:size-8 lg:size-9 xl:size-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/20 hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="size-3 md:size-4 lg:size-4 xl:size-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
