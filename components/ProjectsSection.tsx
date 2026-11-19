import Image from "next/image";
import React from "react";

const projectItems = [
  {
    title: "Smart Infodoc Retention",
    description:
      "Assist AIS Development Support teams in efficiently identifying and prioritizing Infodocs for quality checks. Built a web application to categorize and prioritize Infodocs.",
    image: "/images/SIR.png",
  },
  {
    title: "Ecommerce Platform",
    description:
      "Built a Go-based e-commerce platform using Kafka, PostgreSQL, Redis, JWT authentication, and concurrent workers to handle incoming traffic efficiently for customers globally.",
    image: "/images/Ecommerce.png",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="relative py-16">
      {/* Glow Effect */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[70vw] sm:w-190 md:w-200 h-70 sm:h-95 md:h-130" />

      <div className="relative">
        <h3 className="mb-8 text-2xl font-semibold text-white/90 md:text-3xl">
          Projects
        </h3>

        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:gap-8">
          {projectItems.map((item, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#2f1c55] bg-[#140a26] shadow-[0_10px_40px_rgba(113,39,186,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#7c3aed]/60 hover:shadow-[0_20px_60px_rgba(113,39,186,0.4)]"
            >
              {/* Card Layout */}
              <div className="relative flex flex-col sm:flex-row sm:items-stretch">
                {/* Project Image */}
                <div className="relative w-full min-h-55 overflow-hidden sm:w-[40%] sm:min-h-70 md:min-h-75">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Image Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#140a26]/50 via-transparent to-transparent sm:bg-linear-to-r sm:from-transparent sm:to-[#140a26]/30" />
                </div>

                {/* Project Content */}
                <div className="relative flex flex-1 flex-col justify-center p-5 sm:p-6 md:p-8">
                  {/* Background Gradient */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(120% 80% at 80% 10%, rgba(125,58,242,0.25) 0%, rgba(126,58,242,0.08) 35%, transparent 70%)",
                    }}
                  />

                  <div className="relative z-10">
                    <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.2em] text-purple-400">
                      Featured Project
                    </span>

                    <h4 className="mb-4 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-purple-300 md:text-2xl">
                      {item.title}
                    </h4>

                    <p className="text-sm leading-7 text-white/60 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
