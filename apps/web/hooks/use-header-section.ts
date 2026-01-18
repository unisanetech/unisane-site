"use client";

import { useEffect, useMemo, useRef } from "react";
import { useHeaderStore } from "@/stores/header-store";

type HeaderTheme = {
  background: string;
  foreground: string;
  accentColor: string;
};

interface SectionData {
  theme: HeaderTheme;
  rect: DOMRectReadOnly | null;
}

const HEADER_HEIGHT = 56;
const observedSections: Map<Element, SectionData> = new Map();

let sharedObserver: IntersectionObserver | null = null;
let latestSetTheme: ((
  theme: HeaderTheme,
  direction: "down" | "up"
) => void) | null = null;
let activeElement: Element | null = null;

function ensureObserver() {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const record = observedSections.get(entry.target);
        if (!record) return;

        record.rect = entry.isIntersecting ? entry.boundingClientRect : null;
      });

      updateActiveTheme();
    },
    {
      rootMargin: "-56px 0px 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }
  );

  return sharedObserver;
}

function updateActiveTheme() {
  if (!latestSetTheme) return;

  let best:
    | {
        element: Element;
        rect: DOMRectReadOnly;
        theme: HeaderTheme;
        distance: number;
      }
    | null = null;
  const detectionLine = HEADER_HEIGHT + 4;

  for (const [element, data] of observedSections) {
    const rect = data.rect;
    if (!rect) continue;

    let distance: number;

    if (rect.top <= detectionLine && rect.bottom >= detectionLine) {
      distance = 0;
    } else if (rect.bottom < detectionLine) {
      distance = detectionLine - rect.bottom;
    } else {
      distance = rect.top - detectionLine;
    }

    if (!best || distance < best.distance) {
      best = { element, rect, theme: data.theme, distance };
    }
  }

  if (!best) {
    return;
  }

  let direction: "down" | "up" = "down";

  if (activeElement && activeElement !== best.element) {
    const previousRect = observedSections.get(activeElement)?.rect;
    if (previousRect) {
      direction = best.rect.top > previousRect.top ? "down" : "up";
    } else {
      direction = best.rect.top >= detectionLine ? "down" : "up";
    }
  } else if (!activeElement) {
    direction = "down";
  }

  activeElement = best.element;

  latestSetTheme(best.theme, direction);
}

export function useHeaderSection<T extends HTMLElement = HTMLElement>(
  theme: HeaderTheme
) {
  const targetRef = useRef<T | null>(null);
  const setTheme = useHeaderStore((state) => state.setTheme);

  const themeSnapshot = useMemo(
    () => ({ ...theme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme.background, theme.foreground, theme.accentColor]
  );

  useEffect(() => {
    const node = targetRef.current;
    if (!node) return;

    latestSetTheme = setTheme;
    const observer = ensureObserver();

    observedSections.set(node, {
      theme: themeSnapshot,
      rect: null,
    });

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observedSections.delete(node);
      if (activeElement === node) {
        activeElement = null;
      }
      if (observedSections.size === 0) {
        latestSetTheme = null;
      }
      updateActiveTheme();
    };
  }, [setTheme, themeSnapshot]);

  return targetRef;
}
