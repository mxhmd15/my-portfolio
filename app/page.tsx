// app/page.tsx
import Image from "next/image";
import ThemeToggle from "../components/ThemeToggle";
import Header from "../components/Header";

import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300">





 <div id="top" />
      <Header />
      




      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <Image
          src="/me.jpg"
          alt="Mohammad profile picture"
          width={210}
          height={150}
          className="rounded-full mb-6 border-2"
          priority
        />

        <h1 className="text-5xl font-bold mb-4">
          Mohammad Amir
        </h1>

        <p className="text-xl opacity-80 mb-8 max-w-2xl">
          Computer Engineering Student at Toronto Metropolitan University (Formerly Ryerson) | Full-Stack Developer
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg font-medium border hover:opacity-90 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg font-medium border hover:opacity-90 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

<ProjectsSection />


      {/* Technologies*/}
  <section id="projects" className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 border transition">
            <h3 className="text-2xl font-semibold mb-2">
              Weather App
            </h3>
            <p className="opacity-80 mb-4">
              Real-time weather application using React and OpenWeather API.
            </p>
            <a href="#" className="underline underline-offset-4 hover:opacity-80">
              View Project →
            </a>
          </div>

          <div className="rounded-xl p-6 border transition">
            <h3 className="text-2xl font-semibold mb-2">
              Path Finder
            </h3>
            <p className="opacity-80 mb-4">
              Visual pathfinding algorithms with interactive UI.
            </p>
            <a href="#" className="underline underline-offset-4 hover:opacity-80">
              View Project →
            </a>
          </div>
        </div>
      </section>


  {/* skills*/}

{/* TECHNOLOGIES */}
<section id="skills" className="px-6 py-20">
  <div className="mx-auto max-w-5xl">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold tracking-tight">Technologies</h2>
      <p className="mt-3 text-base opacity-80 max-w-2xl mx-auto">
        Tools and technologies I’ve worked with across projects, coursework, and independent learning.
      </p>
    </div>

    {/* Skill groups */}
    <div className="grid md:grid-cols-2 gap-6">
      {/* Frontend */}
      <div className="rounded-2xl bg-[#1f2a44] text-white border border-white/10 p-7
                      hover:-translate-y-0.5 hover:shadow-md transition">
        <h3 className="text-xl font-bold mb-4">🎨 Frontend</h3>
        <ul className="space-y-3 text-sm opacity-90">
          <li>• React / Next.js</li>
          <li>• TypeScript & JavaScript (ES6+)</li>
          <li>• Tailwind CSS</li>
          <li>• Responsive & accessible UI design</li>
          <li>• Client-side state & component architecture</li>
        </ul>
      </div>

      {/* Backend */}
      <div className="rounded-2xl bg-[#1f2a44] text-white border border-white/10 p-7
                      hover:-translate-y-0.5 hover:shadow-md transition">
        <h3 className="text-xl font-bold mb-4">🧠 Backend & Server-Side</h3>
        <ul className="space-y-3 text-sm opacity-90">
          <li>• Node.js & Express</li>
          <li>• RESTful API design</li>
          <li>• Authentication & data validation</li>
          <li>• Server-side logic & routing</li>
          <li>• Understanding of system-level constraints</li>
        </ul>
      </div>

      {/* Databases */}
      <div className="rounded-2xl bg-[#1f2a44] text-white border border-white/10 p-7
                      hover:-translate-y-0.5 hover:shadow-md transition">
        <h3 className="text-xl font-bold mb-4">🗄️ Databases</h3>
        <ul className="space-y-3 text-sm opacity-90">
          <li>• PostgreSQL / SQL fundamentals</li>
          <li>• MongoDB (NoSQL concepts)</li>
          <li>• Data modeling & schema design</li>
          <li>• Query optimization basics</li>
        </ul>
      </div>

      {/* Systems / Embedded */}
      <div className="rounded-2xl bg-[#1f2a44] text-white border border-white/10 p-7
                      hover:-translate-y-0.5 hover:shadow-md transition">
        <h3 className="text-xl font-bold mb-4">🔌 Systems & Embedded</h3>
        <ul className="space-y-3 text-sm opacity-90">
          <li>• Embedded C / C++</li>
          <li>• Microcontrollers & low-level programming</li>
          <li>• Hardware–software interaction</li>
          <li>• Debugging at the system level</li>
        </ul>
      </div>

      {/* Tools */}
     

                        <div className="
    rounded-2xl
    bg-[#1f2a44]
    text-white
    border border-white/10
    p-7
    hover:-translate-y-0.5
    hover:shadow-lg
    transition
    md:col-span-2
  "
>

        <h3 className="text-xl font-bold mb-4">🛠️ Tools & Workflow</h3>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm opacity-90">
          <li>• Git & GitHub (version control)</li>
          <li>• Linux / command line</li>
          <li>• VS Code & developer tooling</li>
          <li>• Debugging & performance profiling</li>
          <li>• Documentation & technical writing</li>
          <li>• Agile-style project organization</li>
        </ul>
      </div>
    </div>

    {/* Footer line */}
    <p className="mt-10 text-center text-sm opacity-70 max-w-3xl mx-auto">
      I continuously expand my toolkit by building projects, exploring new technologies,
      and applying what I learn in practical, real-world scenarios.
    </p>
  </div>
</section>



{/*About me  */}
{/* ABOUT */}
<section id="about" className="px-6 py-20">
  <div className="mx-auto max-w-5xl">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
      <p className="mt-3 text-base opacity-80 max-w-2xl mx-auto">
        Computer Engineering student at Toronto Metropolitan University,
      breaking into tech through projects, learning as I go, and a lot of curiosity!
      </p>
    </div>

    {/* Main story card */}
    <div className="rounded-2xl bg-[#1f2a44] text-white border border-white/10 p-8
                    shadow-sm hover:shadow-md transition
                    hover:-translate-y-0.5">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left: quick highlights */}
        <div className="md:col-span-1">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-current/10 px-3 py-1 text-sm">
              🎓 <span className="font-semibold">TMU • 3rd Year</span>
            </div>
             <div className="inline-flex items-center gap-2 rounded-full border border-current/10 px-3 py-1 text-sm">
              🚀 <span className="font-semibold">Seeking Opportunities</span>
              
            </div>

<div className="inline-flex items-center gap-2 rounded-full border border-current/10 px-3 py-1 text-sm">
              📈 <span className="font-semibold">Enjoys Fast-Paced Environments </span>
              
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-current/10 px-3 py-1 text-sm">
              🧭 <span className="font-semibold">First-Generation Student</span>
            </div>
           



          </div>

          <div className="mt-6 text-sm opacity-80 leading-relaxed">
            I excel at bringing computer & software ideas into reality.

          </div>
        </div>

 {/* I excel at bringing computer & software ideas into reality.

  From full-stack web apps, Android apps, to machine learning applications in IoT devices and much more.*/}

        {/* Right: story */}
        <div className="md:col-span-2 space-y-5 leading-relaxed">
<p>🎓 As a first-generation university student at Toronto Metropolitan University 
  in my third year of Computer Engineering,
   building my path into the tech industry through hands-on projects</p>

          <p>
            🛠️ Without a traditional background in the industry, I’ve learned to be resourceful
            and self-driven, teaching myself new tools, turning ideas into working projects,
            and documenting my growth through this portfolio.
          </p>

          <p>
            Each project represents not just a technical outcome, but a meaningful step in my
            journey as an engineer.
          </p>

          <p>
            🚀 This portfolio reflects my progress, technical skill set, and commitment to becoming
            a capable, thoughtful, and impactful engineer. I’m actively seeking opportunities
            where I can learn, contribute meaningfully, apply my skills to real-world problems, and grow
            within the tech industry.
          </p>
        </div>
      </div>
    </div>

    {/* Two-column grids */}
    <div className="mt-10 grid md:grid-cols-2 gap-6">
      {/* Interests */}
      <div className="rounded-2xl bg-[#1f2a44] text-white border border-white/10 p-7
                      hover:-translate-y-0.5 hover:shadow-md transition">
        <h3 className="text-xl font-bold mb-4">💡 Technical Interests & Focus Areas</h3>
        <ul className="space-y-3 opacity-90">
          <li className="flex gap-3">
            <span>⚙️</span>
            <span><span className="font-semibold">Full-Stack & Application Development</span></span>
          </li>
          <li className="flex gap-3">
            <span>🧠</span>
            <span><span className="font-semibold">Backend & Server-Side Systems</span></span>
          </li>
          <li className="flex gap-3">
            <span>🔌</span>
            <span><span className="font-semibold">Embedded Systems Engineering</span></span>
          </li>
          <li className="flex gap-3">
            <span>🤖</span>
            <span><span className="font-semibold">AI / Machine Learning Applications</span></span>
          </li>
          <li className="flex gap-3">
            <span>⚡</span>
            <span><span className="font-semibold">Automation & Developer Productivity</span></span>
          </li>
        </ul>
      </div>

      {/* Strengths */}
      <div className="rounded-2xl bg-[#1f2a44] text-white border border-white/10 p-7
                      hover:-translate-y-0.5 hover:shadow-md transition">
        <h3 className="text-xl font-bold mb-4">🌱 Strengths & Mindset</h3>
        <ul className="space-y-3 opacity-90">
          <li className="flex gap-3">
            <span>🔥</span>
            <span><span className="font-semibold">Strong initiative</span> and ownership over projects</span>
          </li>
          <li className="flex gap-3">
            <span>📈</span>
            <span><span className="font-semibold">Highly motivated</span> and detail-oriented</span>
          </li>
          <li className="flex gap-3">
            <span>🧩</span>
            <span><span className="font-semibold">Organized</span>, disciplined, and consistent</span>
          </li>
          <li className="flex gap-3">
            <span>⚡</span>
            <span><span className="font-semibold">Quick learner</span> with a problem-solving mindset</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Callout */}
   <div
  className="
    mt-10
    rounded-2xl
    bg-[#1f2a44]
    text-white
    border border-white/10
    p-6
    flex flex-col md:flex-row
    items-start md:items-center
    justify-between
    gap-4
    transition
    hover:shadow-lg
  "
>
      <div>
        <div className="text-lg font-bold">Open to Opportunities</div>
        <div className="text-sm opacity-80">
          Internships • Co-op • Junior developer roles 
        </div>
      </div>

      <a
        href="#contact"
        className="px-5 py-3 rounded-xl font-semibold border border-current/20
                   hover:-translate-y-0.5 hover:shadow-md transition"
      >
        Let’s connect →
      </a>
    </div>
  </div>
</section>






   

    

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}


      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          Contact
        </h2>
        <p className="opacity-80 mb-6 max-w-xl">
          Let’s build something together. Email me and I’ll get back to you.
        </p>

<a
  href="/resume.pdf"
  target="_blank"
  className="px-6 py-3 mb-2 rounded-lg border font-medium hover:opacity-90 transition"
>
  Download Resume

</a>



        <a
          href="mailto:your@email.com"
          className="px-6 py-3 rounded-lg font-medium border hover:opacity-90 transition"
        >
          Email Me
        </a>
      </section>

      
<div className="flex gap-6 justify-center">
  <a href="mailto:you@email.com">Email</a>
  <a href="https://github.com/yourname">GitHub</a>
  <a href="https://linkedin.com/in/yourname">LinkedIn</a>
</div>




    </main>
  );
}

