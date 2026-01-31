"use client";

import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-32 transition-colors duration-0">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT COLUMN: Narrative & Info Tags */}
        <div className="space-y-10">
          <div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-8">
              <span className="snap-text">Building the </span>
              <span className="text-blue-600">Future</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed snap-text">
              As a Computer Engineering student at{" "}
              <span className="font-medium snap-text">
                Toronto Metropolitan University
              </span>
              . Specializing in software and embedded systems.
            </p>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed snap-text">
              A big part of my learning comes from spending time{" "}
              <span className="font-medium snap-text">
                understanding how things work
              </span>{" "}
              and figuring them out as I go. Each project pushes me to learn more and
              improve with every iteration.
            </p>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed snap-text">
              This{" "}
              <span className="font-medium snap-text">
                curiosity-driven approach
              </span>{" "}
              has shaped the way I work. Continuously learning and digging deeper into
              systems helps me adapt quickly and build confidence when tackling more complex
              challenges over time.
            </p>
          

            </div>
          </div>

          {/* STATUS TAGS - Snap Logic Applied */}
 <div className="grid grid-cols-2 gap-4 pt-4">
  <div className="px-6 py-5 bg-[#111827] border border-indigo-500/40 rounded-2xl flex flex-col">
    <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
      Education
    </span>
    <span className="text-white text-base font-bold">
      CompEng @ TMU
    </span>
  </div>

  <div className="px-6 py-5 bg-[#111827] border border-purple-500/40 rounded-2xl flex flex-col">
    <span className="text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
      Base
    </span>
    <span className="text-white text-base font-bold">
      Toronto, ON
    </span>
  </div>

  <div className="px-6 py-5 bg-[#111827] border border-emerald-500/40 rounded-2xl flex flex-col">
    <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
      Background
    </span>
    <span className="text-white text-base font-bold">
      First-Gen Student
    </span>
  </div>

  <div className="px-6 py-5 bg-[#111827] border border-orange-500/40 rounded-2xl flex flex-col">
    <span className="text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
      Status
    </span>
    <span className="text-white text-base font-bold">
      Seeking Summer 2026 Co-op
    </span>
  </div>


</div>

        </div>
        {/* RIGHT COLUMN: Technical Interests Card */}
       {/* RIGHT COLUMN: Technical Interests Card */}
<div className="relative">
  <div className="bg-[#111827] rounded-[2.5rem] p-10 border border-white/10 shadow-2xl transition-all duration-0">
    
    <div className="flex justify-between items-center mb-10">
      <h4 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 opacity-60">
        Technical Interests
      </h4>
      <div className="flex gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-blue-600/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-blue-600/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-blue-600/20" />
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        { title: "SDE", desc: "Scalable software and frameworks.", icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> },
        { title: "Embedded", desc: "Hardware and microcontrollers.", icon: <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /> },
        { title: "Databases", desc: "Modeling and optimization.", icon: <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /> },
        { title: "Full-Stack", desc: "End-to-end architecture.", icon: <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /> },
      ].map((item) => (
        <div
          key={item.title}
          className="p-6 rounded-3xl bg-[#0b0f1a] border border-white/10 hover:border-blue-500/50 transition-all duration-0 group"
        >
          <div className="mb-4 w-10 h-10 rounded-xl flex items-center justify-center bg-blue-600/10 text-blue-500 transition-all">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              {item.icon}
            </svg>
          </div>

          <h5 className="font-bold text-lg mb-2 text-white">
            {item.title}
          </h5>

<p className="text-medium leading-relaxed text-slate-300 max-w-[22ch]">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono tracking-widest text-slate-500">
       
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default AboutSection;