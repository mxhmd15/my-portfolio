/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Keep this inside module.exports (Tailwind reads it here)
  safelist: [
    "bg-indigo-500/10", "bg-indigo-500/15", "bg-indigo-500/25",
    "bg-purple-500/10", "bg-purple-500/15", "bg-purple-500/25",
    "bg-emerald-500/10", "bg-emerald-500/15", "bg-emerald-500/25",
    "bg-amber-500/10", "bg-amber-500/15", "bg-amber-500/25",
    "hover:border-indigo-500/50",
    "hover:border-purple-500/50",
    "hover:border-emerald-500/50",
    "hover:border-amber-500/50",

    // OPTIONAL: if you use these exact classes anywhere
    "bg-white/[0.02]",
    "bg-white/[0.04]",
    "border-white/5",
    "border-white/10",
  ],

  theme: {
    extend: {
      colors: {
        darkBackground: "#0b1220",
        lightBackground: "#f3f8ff",
      },
    },
  },
  plugins: [],
};
