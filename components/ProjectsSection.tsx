"use client";

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      {/* Section header */}
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="opacity-70 max-w-2xl mx-auto">
          A selection of academic and personal projects demonstrating
          systems-level thinking, full-stack development, and software design.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Project 1 */}
        <ProjectCard
          title="Media Center Embedded System"
          date="December 2025"
          tech="C • ARM Cortex-M • Keil uVision"
          bullets={[
            "Designed and implemented an embedded media center on the MCB1700 development board using C",
            "Built a graphical LCD menu system navigated via joystick input",
            "Implemented a photo gallery displaying bitmap images converted to C arrays using GIMP",
            "Developed an MP3 audio player streaming audio from a PC via USB with volume control",
            "Integrated LCD, joystick, USB audio, LEDs, and speaker peripherals",
            "Focused on real-time interaction, memory management, and low-level hardware control",
          ]}
          demoLink="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
          demoLabel="Watch Demo"
        />

        {/* Project 2 */}
        <ProjectCard
          title="Academic Workload Planner"
          date="July 2025"
          tech="Node.js • Express • React • MongoDB • Docker"
          bullets={[
            "Developed RESTful APIs for managing users, events, and schedules",
            "Designed a responsive React frontend with filtering and search",
            "Implemented MongoDB schemas with Mongoose",
            "Enabled full CRUD functionality",
            "Containerized the app using Docker",
            "Focused on scalability and clean architecture",
          ]}
          githubLink="https://github.com/YOUR_USERNAME/academic-workload-planner"
        />

        {/* Project 3 */}
        <ProjectCard
          title="Book Library Management System"
          date="April 2025"
          tech="Java • JavaFX • OOP • Design Patterns"
          bullets={[
            "Built a JavaFX application using advanced object-oriented principles",
            "Applied the State Design Pattern to manage user reward states",
            "Designed UML class and use-case diagrams",
            "Used interfaces and abstract classes for extensibility",
            "Focused on clean, maintainable, and reusable code",
          ]}
          githubLink="https://github.com/YOUR_USERNAME/book-library-system"
        />
      </div>
    </section>
  );
}

/* ---------- Helper component ---------- */

function ProjectCard({
  title,
  date,
  tech,
  bullets,
  demoLink,
  demoLabel,
  githubLink,
}: {
  title: string;
  date: string;
  tech: string;
  bullets: string[];
  demoLink?: string;
  demoLabel?: string;
  githubLink?: string;
}) {
  return (
   <div className="rounded-2xl bg-[#1f2a44] text-white border border-white/10 p-7
                      hover:-translate-y-0.5 hover:shadow-md transition">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <span className="text-sm opacity-60 mt-1 md:mt-0">{date}</span>
      </div>

      <div className="text-sm font-medium opacity-80 mb-4">
        {tech}
      </div>

      <ul className="list-disc list-inside space-y-2 opacity-90 mb-6">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      {/* Links */}
      <div className="flex gap-4 flex-wrap">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-current/20
                       font-medium text-sm
                       hover:bg-current hover:text-white
                       transition"
          >
            🎥 {demoLabel ?? "View Demo"}
          </a>
        )}

        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-current/20
                       font-medium text-sm
                       hover:bg-current hover:text-white
                       transition"
          >
            💻 View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}
