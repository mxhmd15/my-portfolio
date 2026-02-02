"use client";

type Project = {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  color: string;
  codeUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
};

const projects: Project[] = [
  {
    title: "Media Center Embedded System",
    description: `An embedded media center that brings multiple features into one 
menu-driven system. Users can navigate through an LCD interface using a joystick to 
play audio, view images, and launch built-in games. The project focuses on creating a
smooth, responsive user experience while managing real-time input and multimedia 
functionality on embedded hardware.`,
    imageSrc: "/Embedded-systems.jpg",
    tags: ["C", "ARM Cortex-M3", "Keil uVision"],
    color: "emerald",
    codeUrl: "https://github.com/mxhmd15/Media-Centre-Embedded-Systems",
    demoUrl: "https://www.youtube.com/watch?v=F2NMGu9kf2c",
    demoLabel: "Watch Demo",
  },
  {
    title: "Academic Workload Planner",
    description: `A full-stack academic planner that helps users organize coursework, 
deadlines, and events in one place. The application allows users to create, update, and 
manage schedules with filtering and search features, providing a clean and efficient 
way to track academic workload through a responsive web interface.`,
    imageSrc: "/academics.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    color: "purple",
    codeUrl: "https://github.com/mxhmd15/Academic-Workload-Planner",
  },
  {
    title: "Book Library Management System",
    description: `A desktop-based book library management application that allows users 
to browse, manage, and track books through a structured JavaFX interface. The project 
focuses on clean object-oriented design, using state-based behavior to handle different 
user interactions while keeping the system modular and easy to extend.`,
    imageSrc: "/bookstore.png",
    tags: ["Java", "JavaFX"],
    color: "indigo",
    codeUrl: "https://github.com/mxhmd15/Book-Library",
  },
];
export default function ProjectsSection() {
  return (
    /* Remove text-white from the section class below */
<section id="projects" className="max-w-7xl mx-auto px-6 py-32">
  {/* Header - Scaled Up */}
  <div className="text-center mb-24">
    <h2 className="text-5xl md:text-5xl font-black mb-6 tracking-tight">
      {/* Apply snap-text here to make it turn black instantly */}
      <span className="snap-text">My </span>
    {/* "Projects" - Enhanced Cobalt Blue Gradient */}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">
    Projects
  </span>
</h2>
    <div className="h-2 w-32 bg-indigo-500 mx-auto rounded-full shadow-[0_0_20px_rgba(99,102,241,0.6)]" />
  </div>

  <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((p) => (
      <ProjectCard key={p.title} project={p} />
    ))}
  </div>
</section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const theme = {
    emerald: "hover:border-emerald-500/50 group-hover:text-emerald-400 bg-emerald-500/10 text-emerald-300",
    purple: "hover:border-purple-500/50 group-hover:text-purple-400 bg-purple-500/10 text-purple-300",
    indigo: "hover:border-indigo-500/50 group-hover:text-indigo-400 bg-indigo-500/10 text-indigo-300",
  }[project.color] || "hover:border-white/20";

  const dotColor = {
    emerald: "bg-emerald-600 hover:bg-emerald-500",
    purple: "bg-purple-600 hover:bg-purple-500",
    indigo: "bg-indigo-600 hover:bg-indigo-500",
  }[project.color] || "bg-white";

  return (
    <article className={`group rounded-[2.5rem] border border-white/10 overflow-hidden bg-[#0b1120] transition-all duration-500 shadow-2xl hover:-translate-y-2 ${theme.split(' ')[0]}`}>
      {/* Image with Dark Gradient Overlay */}
      <div className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.imageSrc})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/40 to-transparent" />
      </div>

      <div className="p-10">
        <h3 className={`text-3xl font-bold mb-4 text-white transition-colors duration-300 ${theme.split(" ")[1]}`}>
          {project.title}
        </h3>

        <p className="text-slate-400 text-lg leading-relaxed">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.tags.map((t) => (
            <span key={t} className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-white/5 ${theme.split(' ').slice(2).join(' ')}`}>
              {t}
            </span>
          ))}
        </div>

        {/* Updated Action Links */}
        <div className="mt-10 flex gap-4">
          {project.codeUrl && (
            <a 
              href={project.codeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 flex items-center justify-center gap-3 rounded-2xl py-4 text-base font-bold bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white"
            >
              <IconCode /> Code
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex-1 flex items-center justify-center gap-3 rounded-2xl py-4 text-base font-bold transition-all text-white ${dotColor} shadow-lg shadow-black/40`}
            >
              <IconExternal /> {project.demoLabel}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ---------- Icons (no changes) ---------- */
function IconCode() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 18L3 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 6L21 12L15 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 3H21V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 14V21H3V3H10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}