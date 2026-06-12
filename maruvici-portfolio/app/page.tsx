"use client";

import { useState } from "react";
import HeroSection from "@/app/components/sections/HeroSection";
import AboutSection from "@/app/components/sections/AboutSection";
import SkillsSection from "@/app/components/sections/SkillsSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import ProjectModal from "@/app/components/ui/ProjectModal";
import ExperienceSection from "@/app/components/sections/ExperienceSection";
import ContactSection from "@/app/components/sections/ContactSection";
import projects from "@/data/projects";

export default function Home() {
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  const openProject =
    openProjectId !== null
      ? projects.find((p) => p.id === openProjectId) ?? null
      : null;

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection onOpenProject={setOpenProjectId} />
      <ExperienceSection />
      <ContactSection />

      <ProjectModal project={openProject} onClose={() => setOpenProjectId(null)} />
    </>
  );
}