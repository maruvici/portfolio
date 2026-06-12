"use client";

import { useState } from "react";
import HeroSection from "@/app/components/sections/HeroSection";
import AboutSection from "@/app/components/sections/AboutSection";
import SkillsSection from "@/app/components/sections/SkillsSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import ProjectModal from "@/app/components/ui/ProjectModal";
import projects from "@/data/projects";
import ExperienceSection from "@/app/components/sections/ExperienceSection";

// Remaining sections added in Steps 12–13
const PLACEHOLDER_SECTIONS = ["contact"];

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

      {PLACEHOLDER_SECTIONS.map((id) => (
        <section
          key={id}
          id={id}
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
            }}
          >
            ~/{id} — coming in Phase 4
          </p>
        </section>
      ))}

      <ProjectModal project={openProject} onClose={() => setOpenProjectId(null)} />
    </>
  );
}