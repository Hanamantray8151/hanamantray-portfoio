"use client";

import React from "react";
import { Download, ArrowUpRight } from "lucide-react";

const Resume = () => {
  return (
    <section
      id="resume"
      className="relative overflow-hidden px-5 py-16 sm:px-10 lg:px-16"
    >
      <div className="relative mx-auto max-w-6xl group">
        {/* Neon Background Glow */}
        <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-linear-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-40 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl" />

        {/* Resume Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-linear-to-br from-[#171326] via-[#11121b] to-[#101b25] px-7 py-12 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-purple-500/50 group-hover:shadow-[0_20px_60px_rgba(113,39,186,0.35)] sm:px-12 sm:py-14 md:px-16">
          {/* Decorative Background Effects */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px] transition-all duration-500 group-hover:bg-purple-600/25" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px] transition-all duration-500 group-hover:bg-blue-500/25" />

          {/* Content */}
          <div className="relative z-10">
            {/* Section Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-purple-400 transition-colors duration-300 group-hover:text-blue-400">
                Resume
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Want the full picture
              <span className="text-purple-500 transition-colors duration-300 group-hover:text-blue-400">
                ?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300 sm:text-base">
              Download my resume for a complete overview of my experience,
              technical skills, projects, and professional achievements.
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              {/* Download Resume */}
              <a
                href="/images/Resume.pdf"
                download="Hanamantray_Kumbar_Resume.pdf"
                className="group/btn inline-flex items-center gap-3 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_0_25px_rgba(249,115,22,0.2)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(249,115,22,0.55)]"
              >
                <Download
                  size={17}
                  className="transition-transform duration-300 group-hover/btn:translate-y-1"
                />
                Download Resume
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="group/contact inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/3 px-7 py-4 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]"
              >
                Get In Touch
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover/contact:translate-x-1 group-hover/contact:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
