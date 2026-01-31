"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Apply theme (ONLY toggles the class — Tailwind handles text colors)
  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;

    html.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");

    // OPTIONAL: if you want to force background only (NOT text)
    // comment these out if you want Tailwind to handle bg too
    // html.style.backgroundColor = dark ? "#0b1220" : "#f3f8ff";
  };

  useEffect(() => {
    setMounted(true);

    // 1) Try saved theme
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      const dark = saved === "dark";
      setIsDark(dark);
      applyTheme(dark);
      return;
    }

    // 2) Fallback: system preference (first visit)
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
    setIsDark(prefersDark);
    applyTheme(prefersDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    applyTheme(newDark);
  };

  // Prevent layout shift while mounting
  if (!mounted) return <div className="h-10 w-20" />;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`relative h-10 w-20 rounded-full transition-all duration-300 shadow-lg
        ${isDark ? "bg-[#0b1220]" : "bg-[#7da6ff]"}
      `}
    >
      {/* Moving Knob */}
      <span
        className={`absolute top-1.5 left-1.5 h-7 w-7 rounded-full bg-white transition-transform duration-300 z-10
          ${isDark ? "translate-x-10" : "translate-x-0"}
        `}
      />

      {/* Light-mode bubbles */}
      {!isDark && (
        <>
          <span className="absolute left-11 top-4 h-1.5 w-1.5 rounded-full bg-white/90" />
          <span className="absolute left-14 top-6 h-1 w-1 rounded-full bg-white/70" />
        </>
      )}

      {/* Dark-mode moon + stars */}
      {isDark && (
        <>
          <span className="absolute left-4 top-3 h-1.5 w-1.5 rounded-full bg-white/90" />
          <span className="absolute left-8 top-4.5 h-1 w-1 rounded-full bg-white/90" />
          <span className="absolute left-9 top-7 h-1.5 w-1.5 rounded-full bg-white/90" />
          <span className="absolute left-5 top-7 h-1 w-1 rounded-full bg-white/70" />
          <span className="absolute left-9 top-2.5 h-6 w-6 rounded-full bg-[#0b1220]" />
        </>
      )}
    </button>
  );
}
