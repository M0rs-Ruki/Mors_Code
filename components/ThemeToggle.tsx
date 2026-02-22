"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className="fixed right-4 top-4 z-10 h-11 w-11 rounded border border-[#1A1A1A]/40 dark:border-smoke/20 sm:right-6 sm:top-6 sm:h-9 sm:w-9"
        aria-hidden
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed right-4 top-4 z-10 flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-[#1A1A1A]/40 p-2 text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A]/5 hover:text-accent dark:border-smoke/20 dark:text-smoke dark:hover:bg-smoke/5 sm:right-6 sm:top-6 sm:min-h-0 sm:min-w-0"
      aria-label="Toggle light or dark theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 sm:h-5 sm:w-5" />
      ) : (
        <Moon className="h-5 w-5 sm:h-5 sm:w-5" />
      )}
    </button>
  );
}
