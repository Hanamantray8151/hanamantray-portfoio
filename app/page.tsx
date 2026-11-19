import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Resume from "@/components/Resume";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";
import React from "react";

const Home = () => {
  return (
    <>
      <main className="max-w-5xl mx-auto px-5 lg:px-7">
        <HeroSection />
        <WorkExperience />
        <TechStack />
        <ProjectsSection />
        <Resume />
      </main>
    </>
  );
};

export default Home;
