"use client";

import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  selectedSkills: Set<string>;
  onOpen: (id: number) => void;
}

export default function ProjectCard({
  project,
  selectedSkills,
  onOpen,
}: ProjectCardProps) {
  const isLive = project.status === "live";
  const isArchived = project.status === "archived";

  const badgeLabel = isLive ? "● live" : isArchived ? "◆ archived" : "◌ wip";
  const badgeColors = isLive
    ? { bg: "var(--accent-dim)", color: "var(--accent)", border: "var(--accent3)" }
    : isArchived
    ? { bg: "rgba(150, 150, 150, 0.08)", color: "var(--fg3)", border: "var(--border2)" }
    : { bg: "rgba(255, 160, 0, 0.08)", color: "#e8930a", border: "#7a4a00" };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(project.id);
        }
      }}
      style={{
        background: "var(--bg2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.2s ease, transform 0.2s ease, background-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Image / GIF placeholder */}
      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={`${project.name} preview`}
          loading="lazy"
          style={{
            width: "100%",
            height: "140px",
            objectFit: "cover",
            display: "block",
            background: "var(--bg3)",
            borderBottom: "1px solid var(--border)",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "140px",
            background: "var(--bg3)",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
            fontFamily: "var(--font-mono)",
            transition: "background-color 0.3s ease, border-color 0.3s ease",
          }}
        >
          <span style={{ fontSize: "22px", color: "var(--border2)" }}>
            [ image / gif ]
          </span>
          <span style={{ fontSize: "10px", color: "var(--fg3)" }}>
            // {project.name.toLowerCase()} preview
          </span>
        </div>
      )}

      {/* Card body */}
      <div style={{ padding: "1rem" }}>
        {/* Top row: name + status badge */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "13fr 7fr",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.4rem",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "var(--fg)",
              fontFamily: "var(--font-mono)",
              transition: "color 0.3s ease",
            }}
          >
            {project.name}
          </div>
          <span
            style={{
              fontSize: "10px",
              padding: "0.15rem 0.5rem",
              borderRadius: "var(--radius)",
              fontFamily: "var(--font-mono)",
              background: badgeColors.bg,
              color: badgeColors.color,
              border: `1px solid ${badgeColors.border}`,
              alignSelf: "flex-start",
              justifySelf: "flex-end",
            }}
          >
            {badgeLabel}
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "11px",
            color: "var(--accent3)",
            marginBottom: "0.4rem",
            fontFamily: "var(--font-mono)",
            transition: "color 0.3s ease",
          }}
        >
          {project.sub}
        </div>

        {/* Excerpt */}
        <div
          style={{
            fontSize: "11px",
            color: "var(--fg2)",
            lineHeight: 1.6,
            marginBottom: "0.7rem",
            fontFamily: "var(--font-mono)",
            transition: "color 0.3s ease",
          }}
        >
          {project.excerpt}
        </div>

        {/* Tag row — highlight tags matching the active filter */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
          {project.tags.map((tag) => {
            const matched = selectedSkills.size > 0 && selectedSkills.has(tag);
            return (
              <span
                key={tag}
                style={{
                  fontSize: "10px",
                  padding: "0.12rem 0.45rem",
                  borderRadius: "var(--radius)",
                  fontFamily: "var(--font-mono)",
                  border: `1px solid ${matched ? "var(--accent)" : "var(--border2)"}`,
                  color: matched ? "var(--accent)" : "var(--fg3)",
                  background: matched ? "var(--accent-dim)" : "transparent",
                  transition: "all 0.15s ease",
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>

        {/* Click hint */}
        <div
          style={{
            fontSize: "10px",
            color: "var(--accent3)",
            marginTop: "0.6rem",
            fontFamily: "var(--font-mono)",
            transition: "color 0.3s ease",
          }}
        >
          [ click to open ]
        </div>
      </div>
    </div>
  );
}