"use client";

import { useEffect, useState } from "react";

type Variant = {
  text: string;
  color: string;
  bgColor: string;
};

const variants = [
  {
    text: "Full-Stack",
    color: "text-blue-600 dark:text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-950/30",
  },
  {
    text: "Enterprise-Grade",
    color: "text-red-600 dark:text-red-500",
    bgColor: "bg-red-100 dark:bg-red-950/30",
  },
  {
    text: "Custom-Built",
    color: "text-orange-600 dark:text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-950/30",
  },
  {
    text: "High-Performance",
    color: "text-green-600 dark:text-green-500",
    bgColor: "bg-green-100 dark:bg-green-950/30",
  },
  {
    text: "Scalable",
    color: "text-purple-600 dark:text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-950/30",
  },
] as const satisfies Variant[];

const defaultVariant: Variant = variants[0]!;

const getVariant = (index: number): Variant => variants[index] ?? defaultVariant;

export function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentVariant = getVariant(currentIndex);

  useEffect(() => {
    let animationTimeout: number | null = null;
    const interval = window.setInterval(() => {
      setIsAnimating(true);
      animationTimeout = window.setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % variants.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => {
      if (animationTimeout !== null) {
        window.clearTimeout(animationTimeout);
      }
      window.clearInterval(interval);
    };
  }, []);

  return (
    <span className="inline-block relative overflow-hidden">
      <span
        className={`inline-block transition-all duration-300 ${currentVariant.color} ${
          isAnimating
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        {currentVariant.text}
      </span>
    </span>
  );
}

export function useCurrentVariant() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % variants.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return getVariant(currentIndex);
}
