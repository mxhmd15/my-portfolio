"use client";

import { useEffect, useMemo, useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// 1. Added 'home' to the SectionId type
type SectionId = "top" | "home" | "projects" | "skills" | "about";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("home");

  // 2. Added Home to the links array
  const links = useMemo(
    () => [
      { id: "home" as const, label: "Home" },
      { id: "projects" as const, label: "Projects" },
      { id: "skills" as const, label: "Technologies" },
      { id: "about" as const, label: "About" },
    ],
    []
  );

  useEffect(() => {
    const ids: SectionId[] = ["home", "projects", "skills", "about"];

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length === 0) return;

        const closest = intersecting.sort(
          (a, b) =>
            Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
        )[0];

        const id = (closest.target as HTMLElement).id;
        if (id) setActive(id as SectionId);
      },
      { root: null, rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const NavLink = ({ id, label }: { id: SectionId; label: string }) => {
    const isActive = active === id;

    return (
      <a
        href={`#${id}`}
        onClick={() => setOpen(false)}
        className={`relative py-2 transition ${
          isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
        }`}
      >
        <span className="text-lg font-bold tracking-tight snap-text">{label}</span>
        <span
          className={`absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-blue-600 transition-transform duration-300 ${
            isActive ? "scale-x-100" : "scale-x-0"
          }`} 
          style={{ transformOrigin: "left" }}
        />
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-md bg-transparent border-b border-white/5"> 
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          
          {/* Brand - Updated to Cobalt Blue Theme */} 
          <a
            href="#home"
            className="flex items-center gap-5 group"
            onClick={() => setOpen(false)}
          >
            <div className="flex items-center gap-4 group select-none">
              {/* Vertical Accent Bar - Updated to Blue */}
              <span
                className="
                  h-14 w-1.5
                  rounded-full
                  bg-blue-600
                  shadow-[0_0_14px_rgba(37,99,235,0.55)]
                  transition-all duration-300
                  group-hover:shadow-[0_0_20px_rgba(37,99,235,0.8)]
                "
              />

              {/* Name Stack - Updated to Cobalt Blue Gradient */}
              <div className="flex flex-col items-start leading-[0.85] select-none">
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_0_6px_rgba(37,99,235,0.2)]">
    Mohammad
  </span>
  
  {/* Amir - Reduced from 4xl/5xl to 3xl/4xl */}
  <span className="text-3xl md:text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 drop-shadow-[0_0_6px_rgba(37,99,235,0.2)]">
    Amir
  </span>
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-12">
            {links.map((l) => (
              <NavLink key={l.id} id={l.id} label={l.label} />
            ))}

            <span className="h-6 w-px bg-white/20" />

            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl opacity-70 hover:opacity-100 hover:text-blue-500 hover:-translate-y-1 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl opacity-70 hover:opacity-100 hover:text-blue-500 hover:-translate-y-1 transition"
            >
              <FaLinkedin />
            </a>

            <span className="h-6 w-px bg-white/20" />

            <div className="scale-125 origin-right">
                <ThemeToggle />
            </div>
          </nav>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-5 md:hidden">
            <div className="scale-125"><ThemeToggle /></div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="h-12 w-12 rounded-xl border border-white/20 flex items-center justify-center bg-white/5 snap-text"
            >
              <div className="relative h-5 w-6">
                <span className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`absolute left-0 top-2 h-0.5 w-6 bg-current transition ${open ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 top-4 h-0.5 w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden border-t border-white/5 bg-[#0b1120]/0 backdrop-blur-xl">
            <div className="mx-auto max-w-6xl px-10 py-8 flex flex-col gap-8">
              {links.map((l) => (
                <NavLink key={l.id} id={l.id} label={l.label} />
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}