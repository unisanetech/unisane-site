"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative flex cursor-pointer items-center justify-center rounded-xl p-2 text-neutral-500 transition hover:shadow-input dark:text-neutral-400"
      type="button"
    >
      <LuSun
        aria-hidden
        className={`h-4 w-4 transition-all duration-300 ${mounted ? "rotate-0 scale-100 dark:-rotate-90 dark:scale-0" : "opacity-0"}`}
      />
      <LuMoon
        aria-hidden
        className={`absolute h-4 w-4 transition-all duration-300 ${mounted ? "rotate-90 scale-0 dark:rotate-0 dark:scale-100" : "opacity-0"}`}
      />
      {!mounted && <LuSun aria-hidden className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
