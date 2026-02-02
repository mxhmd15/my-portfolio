"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;
    html.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const saved = localStorage.getItem("theme");
      let darkValue = false;

      if (saved === "dark" || saved === "light") {
        darkValue = saved === "dark";
      } else {
        darkValue = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
      }

      setIsDark(darkValue);
      applyTheme(darkValue);
      setMounted(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    applyTheme(newDark);
  };

  // 1. Adjusted placeholder size to match the new button (h-8 w-14)
  if (!mounted) return <div className="h-8 w-14" />;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      /* 2. Changed h-10 w-20 -> h-8 w-14 */
      className={`relative h-8 w-14 rounded-full transition-all duration-300 shadow-md
        ${isDark ? "bg-[#0b1220]" : "bg-[#7da6ff]"}
      `}
    >
      {/* Moving Knob - Size reduced from h-7 w-7 to h-6 w-6 */}
      <span
        className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white transition-transform duration-300 z-10
          ${isDark ? "translate-x-6" : "translate-x-0"}
        `}
      />

      {/* Light-mode bubbles - Re-positioned for smaller width */}
      {!isDark && (
        <>
          <span className="absolute left-8 top-3 h-1 w-1 rounded-full bg-white/90" />
          <span className="absolute left-10 top-5 h-0.5 w-0.5 rounded-full bg-white/70" />
        </>
      )}

      {/* Dark-mode moon + stars - Re-positioned for smaller width */}
      {isDark && (
        <>
          <span className="absolute left-3 top-2 h-1 w-1 rounded-full bg-white/90" />
          <span className="absolute left-5 top-5 h-1 w-1 rounded-full bg-white/90" />
          <span className="absolute left-2.5 top-5 h-0.5 w-0.5 rounded-full bg-white/70" />
        </>
      )}
    </button>
  );
}