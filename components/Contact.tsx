"use client";

import { Mail, Phone, BriefcaseBusiness, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    label: "hanamantraykumbar.work@gmail.com",
    href: "mailto:hanamantraykumbar.work@gmail.com",
    icon: Mail,
  },
  {
    label: "+91 8151006161",
    href: "tel:+918151006161",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hanamantray-kumbar-1116a41b2/",
    icon: BriefcaseBusiness,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0c0c12] px-5 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-4xl">
        {/* Contact Card */}
        <div className="relative overflow-hidden rounded-3xl border bg-[#140a26] border-[#2f1c55] shadow-[0_10px_40px_rgba(113, 39, 186, 0.25)] transition-all duration-300 hover:-translate-y-1 md:-translate-y-2 hover:border-[#7c3aed]/60 hover:shadow-[0_20px_60px_rgba(113, 39, 186, 0.40)] px-6 py-20 text-center sm:px-10 lg:py-24">
          {/* Background Effects */}
          <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,rgba(255,255,255,0.012)_5px,rgba(255,255,255,0.012)_6px)]" />

          <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-600/10 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan-500/8 blur-[100px]" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Section Label */}
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="font-mono text-[20px] font-semibold uppercase tracking-[0.25em] text-purple-400">
                Contact
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
              Let&apos;s build
              <br />
              something great<span className="text-white-500">.</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
              I&apos;m always open to discussing backend systems, distributed
              architecture, AI-driven products or interesting engineering
              challenges. Drop me a message.
            </p>

            {/* Contact Links */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group inline-flex items-center gap-2 rounded-lg border border-white/8 bg-[#0b0b11]/80 px-4 py-3 text-xs font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
                  >
                    <Icon
                      size={13}
                      className="text-purple-400 transition-colors group-hover:text-purple-300"
                    />

                    <span>{link.label}</span>

                    {link.href.startsWith("http") && (
                      <ArrowUpRight
                        size={11}
                        className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
