"use client";

import { useEffect, useState } from "react";

export type HeaderTheme = "light" | "dark";

export function useHeaderTheme() {
  const [theme, setTheme] = useState<HeaderTheme>("light");

  useEffect(() => {
    // Get all sections with data-header-theme attribute
    const sections = document.querySelectorAll<HTMLElement>(
      "[data-header-theme]"
    );

    if (sections.length === 0) return;

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let activeSection: HTMLElement | null = null;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeSection = entry.target as HTMLElement;
          }
        });

        const sectionTheme =
          (activeSection as HTMLElement | null)?.dataset?.headerTheme;
        if (sectionTheme === "light" || sectionTheme === "dark") {
          setTheme(sectionTheme);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "-56px 0px 0px 0px", // Account for header height
      }
    );

    // Observe all sections
    sections.forEach((section) => observer.observe(section));

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return theme;
}
