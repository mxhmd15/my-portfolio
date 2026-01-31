"use client";

import Image from "next/image";
import Header from "../components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection"; // Imported new component
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[600px] h-[600px] rounded-full blur-[120px] 
            bg-indigo-400/20 dark:bg-indigo-600/10 transition-all duration-700" />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
        </div>

        <div className="relative mb-10">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-indigo-600 rounded-full blur opacity-15" />
          <Image
            src="/me.jpg"
            alt="Mohammad profile picture"
            width={240}
            height={240}
            priority
            className="relative rounded-full border-4 border-[#1e293b] object-cover shadow-xl"
          />
        </div>

        <div className="relative max-w-4xl">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 blur-3xl bg-indigo-500/10 -z-10 rounded-full" />
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="snap-text">Hi, I’m </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-500">
                Mohammad
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed snap-text">
            Computer Engineering student at{" "}
            <span className="font-medium snap-text">
              Toronto Metropolitan University
            </span>
            . Specializing in software, embedded systems, and hardware design
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a
              href="#projects"
              className="px-10 py-4 rounded-full font-bold text-lg text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-10 py-4 rounded-full font-bold text-lg text-white bg-black border border-white/10 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_16px_rgba(99,102,241,0.18)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24 relative">
        <ProjectsSection />
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight 
                           text-transparent bg-clip-text bg-gradient-to-r 
                           from-indigo-500 via-blue-500 to-pink-500 
                           drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              Technical Skills
            </h2>
            <p className="text-xl max-w-2xl mx-auto snap-text opacity-80">
              A snapshot of the tools and languages I use to solve problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Languages", icon: "💻", color: "indigo", list: ["Python", "Java", "C/C++", "JavaScript", "TypeScript"] },
              { title: "Frameworks", icon: "🧩", color: "purple", list: ["HTML","CSS","Node.js", "React.js", "Express.js","Next.js","Tailwind CSS",] },
              { title: "Databases", icon: "🗄️", color: "emerald", list: ["MongoDB", "MySQL", "PostgreSQL","SQLite"] },
              { title: "Tools", icon: "🛠️", color: "amber", list: ["Git", "GitHub", "VS Code", "Shell"] },
            ].map((skill, i) => (
              <div
                key={i}
                className={`group relative p-10 rounded-3xl bg-[#0b1120] border border-white/10 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.45)] hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]`}
              >
                <div className={`absolute inset-0 rounded-3xl bg-${skill.color}-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 -z-10`} />
                <div className={`w-14 h-14 mb-8 rounded-2xl bg-${skill.color}-500/15 flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                  <span className="text-3xl">{skill.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{skill.title}</h3>
                <ul className="space-y-4 text-white/70 text-base font-medium">
                  {skill.list.map((item, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <span className={`w-2 h-2 bg-${skill.color}-500 rounded-full`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Now separated */}
      <AboutSection />

     {/* CONTACT SECTION */}


<section id="contact" className="max-w-4xl mx-auto px-6 py-32 text-center">
  <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-8">
    <span className="snap-text">Let’s Start a </span>
    <span className="text-blue-600 dark:text-blue-400">Conversation</span>
  </h2>

  <p className="text-xl mb-12 snap-text opacity-80">
    I’m currently looking for 2026 Internship & Co-op opportunities.
    Whether you have a question or just want to say hi, my inbox is always open.
  </p>

  

  {/* NEW BLOCK: Contact Info + Socials */}
  <div className="text-left">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Information */}
      <div>
        <h3 className="text-2xl font-black tracking-tight mb-4 text-blue-600 dark:text-blue-400">
          Contact Information
        </h3>

        <div className="space-y-4 ">
          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            className="group flex items-center gap-4 rounded-3xl border border-slate-200/60 dark:border-white/10 bg-[#111827] px-6 py-5 shadow-lg shadow-slate-200/40 dark:shadow-black/20 hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            <div className="h-12 w-12 rounded-2xl bg-blue-600/10 dark:bg-blue-500/15 flex items-center justify-center">
              {/* Mail icon */}
              <svg
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16v16H4z" opacity="0" />
                <path d="M4 8l8 5 8-5" />
                <path d="M4 6h16v12H4z" />
              </svg>
            </div>

            <div className="min-w-0">
              <div className="font-extrabold text-slate-900 dark:text-white">
                Email
              </div>
              <div className="text-slate-600 dark:text-slate-300 truncate">
                mohammad.amir@torontomu.ca
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+13652288830"
            className="group flex items-center gap-4 rounded-3xl border border-slate-200/60 dark:border-white/10 bg-[#111827] px-6 py-5 shadow-lg shadow-slate-200/40 dark:shadow-black/20 hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            <div className="h-12 w-12 rounded-2xl bg-blue-600/10 dark:bg-blue-500/15 flex items-center justify-center">
              {/* Phone icon */}
              <svg
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.6 2.5a2 2 0 0 1-.45 2.11L9.1 10.9a16 16 0 0 0 4 4l1.57-1.05a2 2 0 0 1 2.11-.45c.8.28 1.64.48 2.5.6A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>

            <div className="min-w-0">
              <div className="font-extrabold text-slate-900 dark:text-white">
                Phone
              </div>
              <div className="text-slate-600 dark:text-slate-300 truncate">
                647-563-6384
              </div>
            </div>
          </a>

          {/* Location */}
          <div className="group flex items-center gap-4 rounded-3xl border border-slate-200/60 dark:border-white/10 bg-[#111827] px-6 py-5 shadow-lg shadow-slate-200/40 dark:shadow-black/20 hover:-translate-y-0.5 hover:shadow-xl transition-all">
            <div className="h-12 w-12 rounded-2xl bg-blue-600/10 dark:bg-blue-500/15 flex items-center justify-center">
              {/* Location icon */}
              <svg
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                <path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </div>

            <div className="min-w-0">
              <div className="font-extrabold text-slate-900 dark:text-white">
                Location
              </div>
              <div className="text-slate-600 dark:text-slate-300 truncate">
                Toronto, ON
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Follow Me */}
      <div>
        <h3 className="text-2xl font-black tracking-tight mb-4 text-blue-600 dark:text-blue-400">
          Follow Me
        </h3>

        <div className="space-y-4">
          {/* GitHub */}
          <a
            href="https://github.com/mxhmd15"
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-slate-200/60 dark:border-white/10 bg-[#111827] px-6 py-8 shadow-lg shadow-slate-200/40 dark:shadow-black/20 hover:-translate-y-0.5 hover:shadow-xl transition-all flex items-center gap-4"
          >
            <div className="h-12 w-12 rounded-2xl bg-blue-600/10 dark:bg-blue-500/15 flex items-center justify-center">
              {/* GitHub icon */}
              <svg
                className="h-7 w-7 text-blue-600 dark:text-blue-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C17.1 4.9 18 5.2 18 5.2c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
              </svg>
            </div>

            <div className="min-w-0">
              <div className="font-extrabold text-slate-900 dark:text-white">
                GitHub
              </div>
              <div className="text-slate-600 dark:text-slate-300 truncate">
                @mxhmd15
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mohammad-amir-9b23a2220/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-slate-200/60 dark:border-white/10 bg-[#111827] px-6 py-8 shadow-lg shadow-slate-200/40 dark:shadow-black/20 hover:-translate-y-0.5 hover:shadow-xl transition-all flex items-center gap-4"
          >
            <div className="h-12 w-12 rounded-2xl bg-blue-600/10 dark:bg-blue-500/15 flex items-center justify-center">
              {/* LinkedIn icon */}
              <svg
                className="h-7 w-7 text-blue-600 dark:text-blue-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.61 0 4.28 2.38 4.28 5.47v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </div>

            <div className="min-w-0">
              <div className="font-extrabold text-slate-900 dark:text-white">
                LinkedIn
              </div>
              <div className="text-slate-600 dark:text-slate-300 truncate">
                /in/Mohammad-Amir
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    {/* Footer */}
    
  </div>

        
        <footer className="py-16 text-center snap-text text-sm tracking-[0.2em] font-bold uppercase opacity-60">
          © {new Date().getFullYear()} Mohammad Amir. All Rights Reserved.
        </footer>
      </section>
    </main>
  );
}