"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // ✅ Apply BOTH background + text color globally
  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;

   if (dark) {
  document.documentElement.style.backgroundColor = "#1e2a44"; // dark blue
  document.documentElement.style.color = "#ffffff";           // white text
} else {
  document.documentElement.style.backgroundColor = "#f3f8ff"; // light sky blue
  document.documentElement.style.color = "#0f172a";           // black/dark text
}

  };

  useEffect(() => {
    setMounted(true);

    // ✅ Use saved theme first (prevents getting stuck)
    const saved = localStorage.getItem("theme");
    const initialDark = saved === "dark";

    setIsDark(initialDark);
    applyTheme(initialDark);
  }, []);

  if (!mounted) return null;

  const setTheme = (dark: boolean) => {
    setIsDark(dark);
    applyTheme(dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Light label */}
      <button
        type="button"
        onClick={() => setTheme(false)}
        className={`text-lg font-semibold transition ${
          !isDark ? "text-[#111827]" : "text-white/30"
        }`}
      >
              {/* Light, if you wanr it to say Ligth with the toggle */}

      </button>

      {/* Switch */}
      <button
        type="button"
        aria-label="Toggle theme"
        onClick={() => setTheme(!isDark)}
        className={`relative h-10 w-20 rounded-full transition-all duration-300
          shadow-[0_8px_20px_rgba(0,0,0,0.25)]
          ${isDark ? "bg-[#0b1220]" : "bg-[#7da6ff]"}
        `}
      >
        {/* Knob */}
        <span
          className={`absolute top-1.5 left-1.5 h-7 w-7 rounded-full bg-white transition-transform duration-300
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
            <span className="absolute left-1 top-2 h-1 w-1 rounded-full bg-white/70" />
            <span className="absolute left-9 top-2.5 h-6 w-6 rounded-full bg-[#0b1220]" />
          </>
        )}
      </button>

      {/* Dark label */}
      <button
        type="button"
        onClick={() => setTheme(true)}
        className={`text-lg font-semibold transition ${
          isDark ? "text-white/40" : "text-[#111827]"
        }`}
      >
              {/* Dark, if you want it to say dark  */}

      </button>
    </div>
  );
}
