// components/ProjectsSection.tsx
"use client";

type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  href?: string; // live demo
  repo?: string; // github
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "QueueSense",
    tagline: "Full-stack booking + waitlist system for small businesses",
    description:
      "A full-stack web app that lets customers book time slots, join a waitlist, and get notified when spots open up. Admins can manage availability, approve/cancel bookings, and view a simple dashboard of daily traffic.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Auth",
      "Tailwind",
    ],
    highlights: [
      "Role-based access (admin vs customer)",
      "Booking conflicts prevented with server-side checks",
      "Waitlist auto-promotion when slots open",
    ],
    href: "#", // put your live link later
    repo: "#", // put your github later
    featured: true,
  },

  {
    title: "API Health Monitor",
    tagline: "Track uptime + latency for your endpoints",
    description:
      "A monitoring tool that pings configured endpoints on a schedule and logs response time, status codes, and downtime events. Includes a small dashboard with filters and basic charts.",
    stack: ["Next.js", "Node.js", "Cron Jobs", "SQLite/Postgres"],
    highlights: ["Scheduled checks", "Incident log", "Dashboard filters"],
    href: "#",
    repo: "#",
  },

  {
    title: "Campus Marketplace",
    tagline: "Buy/sell listings with messaging",
    description:
      "A marketplace for students to post listings, save favorites, and message sellers. Includes image upload, search + category filters, and moderation-friendly reporting tools.",
    stack: ["React", "Express", "MongoDB", "Cloud Uploads"],
    highlights: ["Search + filters", "Messaging", "Image uploads"],
    href: "#",
    repo: "#",
  },
];


function Chip({ label }: { label: string }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-full border border-white/15 bg-white/10">
      {label}
    </span>
  );
}

function ButtonLink({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:opacity-90"
      : "border border-white/20 text-white hover:bg-white/10";

  return (
    <a
      href={href || "#"}
      className={`${base} ${styles}`}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default function ProjectsSection() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
          <p className="mt-3 text-base opacity-80 max-w-2xl mx-auto">
            A few things I’ve built to practice real-world engineering: clean UI, strong structure,
            and purposeful features.
          </p>
        </div>

        {/* Featured project */}
        {featured && (
          <div
            className="
              rounded-3xl
              bg-[#1f2a44]
              text-white
              border border-white/10
              p-8 md:p-10
              hover:-translate-y-1
              hover:shadow-xl
              transition
            "
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="text-sm font-semibold opacity-80 mb-2">
                  Featured Project
                </div>

                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  {featured.title}
                </h3>

                <p className="mt-2 text-lg opacity-90">{featured.tagline}</p>

                <p className="mt-5 opacity-85 leading-relaxed">
                  {featured.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.stack.map((s) => (
                    <Chip key={s} label={s} />
                  ))}
                </div>
              </div>

              <div className="md:w-[320px] w-full">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="font-semibold mb-3">Key Highlights</div>
                  <ul className="space-y-2 opacity-90 text-sm">
                    {featured.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-0.5">✅</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex gap-3">
                    <ButtonLink href={featured.href} variant="primary">
                      Live Demo
                    </ButtonLink>
                    <ButtonLink href={featured.repo} variant="ghost">
                      GitHub
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other projects */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {rest.map((p) => (
            <div
              key={p.title}
              className="
                rounded-2xl
                border border-current/10
                bg-white/60 dark:bg-black/15
                backdrop-blur
                p-7
                hover:-translate-y-0.5
                hover:shadow-md
                transition
              "
            >
              <h4 className="text-xl font-bold">{p.title}</h4>
              <div className="mt-1 text-sm opacity-75">{p.tagline}</div>

              <p className="mt-4 text-sm opacity-85 leading-relaxed">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full border border-current/10 bg-white/40 dark:bg-black/10"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={p.href || "#"}
                  className="text-sm font-semibold underline underline-offset-4 opacity-80 hover:opacity-100 transition"
                >
                  View →
                </a>
                <a
                  href={p.repo || "#"}
                  className="text-sm font-semibold underline underline-offset-4 opacity-80 hover:opacity-100 transition"
                >
                  Repo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
