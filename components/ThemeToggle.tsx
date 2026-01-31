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
    // Wrap everything in one frame to prevent cascading render warnings
    const id = requestAnimationFrame(() => {
      // 1) Determine the correct theme
      const saved = localStorage.getItem("theme");
      let darkValue = false;

      if (saved === "dark" || saved === "light") {
        darkValue = saved === "dark";
      } else {
        // Fallback to system preference
        darkValue = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
      }

      // 2) Apply and update state once
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

  // Prevent layout shift by rendering a placeholder of the same size
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
        </>
      )}
    </button>
  );
}