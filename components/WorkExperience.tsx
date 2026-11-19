import React from "react";

interface Experience {
  company: string;
  position: string;
  period: string;
  status?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "SAP Labs India",
    position: "Software Engineer | Full Stack Developer",
    period: "July 2022 - Present",
    status: "Current",
    description:
      "Working on enterprise-grade applications and scalable backend systems.",
    responsibilities: [
      "Building reusable frontend components and responsive user interfaces across SAP's functionalities.",
      "Contributing to SAP's next-generation Shopping Cart within SRM (Supplier Relationship Management) and MM (Material Management) supporting modernisation of global order workflows.",
      "Designed and developed APIs to fulfill the global customer requirement to perform the seamless order execution supporing 5000+ concurrent orders.",
      "Introduced caching, improving cache-backed API performance by ~30%.",
      "Built an event-driven order, payment, and inventory sync pipeline in Go and Kafka processing 100K+ daily events, eliminating overselling during flash sales via partition-key ordering and idempotent consumers",
      "Optimized asynchronous processing with Goroutines, channels, and Go profiling, acheiving latency below 200ms, improved from ~500ms baseline, while maintaining 99% availability.",
      "Collaborated with cross-functional stakeholders to design and deliver scalable solutions to complex order management workflows.",
      "Contributed to the design, implementation, and maintenance of enterprise software, applying distributed-systems principles and performance-focused engineering practices.",
      "Contributed to debugging production issues and resolved global customer escalations across application, API, and backend layers, applying systematic debugging and cross-functional collaboration with the teams to support customer's business across the world.",
    ],
    technologies: [
      "Golang",
      "React.js",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Kafka",
      "Docker",
      "CI/CD",
      "Git",
    ],
  },
  {
    company: "SAP Labs India",
    position: "Software Engineer Intern",
    period: "January 2022 - June 2022",
    status: "Previous",
    description:
      "Contributed to full-stack application development and enterprise solutions.",
    responsibilities: [
      "Developed frontend modules and backend application features.",
      "Implemented API integrations and database operations.",
      "Improved application performance and maintainability.",
      "Participated in code reviews and technical discussions.",
      "Worked closely with stakeholders to deliver business requirements.",
    ],
    technologies: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#0c0c12] px-5 py-24 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-20">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            Career Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Work Experience<span className="text-purple-500">.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
            My professional journey, the products I&apos;ve contributed to, and
            the technologies I&apos;ve worked with.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute bottom-0 left-29 top-0 hidden w-px bg-linear-to-b from-purple-500/50 via-zinc-800 to-transparent md:block" />

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.company}-${index}`}
                className="relative grid grid-cols-1 gap-6 md:grid-cols-[116px_1fr]"
              >
                {/* Date and Timeline Marker */}
                <div className="relative flex items-center justify-between md:block">
                  <span className="pt-1 font-mono text-xs tracking-wide text-zinc-500">
                    {experience.period}
                  </span>

                  {/* Timeline Dot */}
                  <span
                    className={`absolute -right-1.25 top-1 hidden h-3 w-3 rounded-full border-2 border-[#0c0c12] md:block ${
                      index === 0
                        ? "bg-purple-500 shadow-[0_0_12px_3px_rgba(168,85,247,0.35)]"
                        : "bg-zinc-600"
                    }`}
                  />

                  {experience.status && (
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-medium md:hidden ${
                        experience.status === "Current"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-purple-500/10 text-purple-400"
                      }`}
                    >
                      {experience.status}
                    </span>
                  )}
                </div>

                {/* Experience Content */}
                <div className="md:pl-8">
                  {/* Company and Status */}
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
                      {experience.company}
                    </h3>

                    {experience.status && (
                      <span
                        className={`hidden rounded-full border px-3 py-1 text-[10px] font-medium md:inline-flex ${
                          experience.status === "Current"
                            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                            : "border-purple-500/30 bg-purple-500/10 text-purple-400"
                        }`}
                      >
                        {experience.status}
                      </span>
                    )}
                  </div>

                  {/* Position */}
                  <h4 className="mb-2 text-sm font-medium text-zinc-400">
                    {experience.position}
                  </h4>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-7 text-zinc-500">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <ul className="mb-6 space-y-3">
                    {experience.responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[13px] leading-6 text-zinc-300 sm:text-sm"
                      >
                        <span className="mt-0.5 shrink-0 text-purple-500">
                          ↳
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.07] bg-white/2.5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-400 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                {index !== experiences.length - 1 && (
                  <div className="absolute -bottom-8 left-0 right-0 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent" />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
