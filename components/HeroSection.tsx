"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-36 pb-24">
      <div className="mt-12 md:mt-24">
        {/* Avatar and Headline */}
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          {/* Avatar */}
          <div className="relative flex justify-center md:justify-end">
            <div className="pointer-events-none absolute -inset-12 md:-inset-24 rounded-full bg-purple-500/40 blur-3xl opacity-50"></div>
            <div>
              <Image
                src="/images/avatar.png"
                alt="avatar image"
                width={200}
                height={200}
                className="relative"
                priority
              />
            </div>
          </div>

          {/* Headline */}
          <div className="md:pl-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-3xl font-normal text-white mb-6 tracking-tight leading-[2.2]">
              Hanamantray Kumbar
            </h1>
            <p className="text-sm md:text-base text-white mb-2">
              Building distributed systems at scale — Engineering @ SAP Labs
              India
            </p>
            <p className="text-sm md:base font-normal tracking-tight leading-[1.1]">
              Specialising in Golang · Microservices · Apache Kafka · Git · AWS,
            </p>
          </div>
        </div>
        {/* Role and Description */}

        <div className="mt-18 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-normal tracking-tight">
            <Typewriter
              words={["I'm a Full Stack Developer."]}
              typeSpeed={50}
              delaySpeed={600}
              deleteSpeed={0}
              cursor
              cursorStyle="|"
              loop={1}
            />
          </h2>
          <p>
            Currently, I&apos;m a Software Engineer at{" "}
            <span className="inline-flex items-center gap-1 text-[#1877f2] font-medium">
              SAP
            </span>
          </p>
          <p className="mt-6 text-white/70 leading-7">
            {" "}
            Software Developer with 3+ years of experience building the web
            applications modern JavaScript frameworks. Strong foundation in
            full-stack development, REST APIs, responsive UI design, and
            performance optimization. Experienced in collaborating with
            cross-functional teams, handling global escalations, and delivering
            maintainable, user-centric solutions in enterprise environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
