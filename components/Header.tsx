"use client";

import { useEffect, useMemo, useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type SectionId = "top" | "projects" | "skills" | "about";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("top");

  const links = useMemo(
    () => [
      { id: "projects" as const, label: "Projects" },
      { id: "skills" as const, label: "Technologies" },
      { id: "about" as const, label: "About" },
    ],
    []
  );

  useEffect(() => {
    const ids: SectionId[] = ["top", "projects", "skills", "about"];

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
        <span className="text-base font-semibold">{label}</span>
        <span
          className={`absolute left-0 -bottom-0.5 h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${
            isActive ? "scale-x-100" : "scale-x-0"
          }`} 
          style={{ transformOrigin: "left" }}
        />
      </a>
    );
  };

  return (
  <header className="sticky top-0 z-50">
     {/* backdrop */} 
     <div className="backdrop-blur-md bg-transparent border-b/10 border-current/10"> 
     <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
         {/* Brand */} 
         <a href="#top"
          className="flex items-center gap-4 group"
           onClick={() => setOpen(false)} 
           > 
           <span className="h-10 w-1 rounded-full bg-current opacity-70 group-hover:opacity-100 transition" /> 
           <div className="leading-[1.05]"> 
            <div className="text-2xl font-bold tracking-tight">
                Mohammad
                </div> 
                <div className="text-xl font-semibold tracking-tight">
                    Amir
                    </div> 
                    </div>
                     </a>
           




  

            {/* ✅ MOBILE: icons next to name (like screenshot) */}
            <div className="flex items-center gap-4 pl-2 md:hidden">
              <a
                href="https://github.com/YOUR_GITHUB"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-2xl opacity-75 hover:opacity-100 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-2xl opacity-75 hover:opacity-100 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          

          {/* =========================
              DESKTOP NAV (md+)
          ========================== */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <NavLink key={l.id} id={l.id} label={l.label} />
            ))}

            {/* divider */}
            <span className="h-5 w-px bg-current/20" />

            {/* ✅ DESKTOP: icons after Technologies */}
            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-xl opacity-70 hover:opacity-100 hover:-translate-y-0.5 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-xl opacity-70 hover:opacity-100 hover:-translate-y-0.5 transition"
            >
              <FaLinkedin />
            </a>

            {/* divider */}
            <span className="h-5 w-px bg-current/20" />

            <ThemeToggle />
          </nav>

          {/* =========================
              RIGHT: Mobile controls
          ========================== */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="h-10 w-10 rounded-lg border border-current/20 flex items-center justify-center"
            >
              <div className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                    open ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition ${
                    open ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* ✅ Mobile dropdown nav */}
        {open && (
          <div className="md:hidden">
            <div className="mx-auto max-w-6xl px-6 pb-4 flex flex-col gap-3">
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
