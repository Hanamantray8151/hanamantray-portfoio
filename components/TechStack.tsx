import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <section id="skills" className="relative py-28">
      <div className="relative mx-auto w-full max-w-5xl text-center group">
        {/* Neon Glow Effect */}
        <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-linear-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Skills Image */}
        <div className="relative overflow-hidden rounded-xl transition-all duration-500 ease-out group-hover:scale-[1.015] group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.35)]">
          <Image
            src="/images/Skills.png"
            alt="My Technical Skills"
            width={900}
            height={700}
            className="h-auto w-full transition-all duration-500 group-hover:brightness-110"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
