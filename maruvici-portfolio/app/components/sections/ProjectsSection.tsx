"use client";

import projects from "@/data/projects";
import { useSkillFilter } from "@/app/context/SkillFilterContext";
import ProjectCard from "@/app/components/ui/ProjectCard";

interface ProjectsSectionProps {
  onOpenProject: (id: number) => void;
}

export default function ProjectsSection({ onOpenProject }: ProjectsSectionProps) {
  const { selected } = useSkillFilter();

  const filtered =
    selected.size === 0
      ? projects
      : projects.filter((p) => p.tags.some((tag) => selected.has(tag)));

  return (
    <section id="projects">
      {/* Section label */}
      <div className="sec-label">
        <span className="sec-label-prefix">~/</span>projects/
      </div>
      <h2 className="sec-title">Projects</h2>

      {filtered.length === 0 ? (
        <EmptyState selected={selected} />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              selectedSkills={selected}
              onOpen={onOpenProject}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function EmptyState({ selected }: { selected: Set<string> }) {
  const techList = [...selected].join(", ");

  return (
    <div
      style={{
        color: "var(--fg3)",
        fontSize: "13px",
        padding: "1.5rem 0",
        fontFamily: "var(--font-mono)",
        transition: "color 0.3s ease",
      }}
    >
      <span>
        // Projects involving{" "}
        <span style={{ color: "var(--accent)" }}>{techList}</span> coming
        soon.
      </span>
    </div>
  );
}