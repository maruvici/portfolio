"use client";

import skillGroups from "@/data/skills";
import { useSkillFilter } from "@/app/context/SkillFilterContext";

export default function SkillsSection() {
  const { selected, toggleSkill, clearFilters, isSelected } = useSkillFilter();

  return (
    <section id="skills">
      {/* Section label */}
      <div className="sec-label">
        <span className="sec-label-prefix">~/</span>skills.json
      </div>
      <h2 className="sec-title">Tech Stack</h2>

      {/* Skill groups grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: "0.8rem",
        }}
      >
        {skillGroups.map((group) => (
          <div
            key={group.label}
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "1rem",
              transition: "background-color 0.3s ease, border-color 0.3s ease",
            }}
          >
            {/* Group label */}
            <div
              style={{
                color: "var(--accent)",
                fontSize: "11px",
                letterSpacing: "0.08em",
                marginBottom: "0.7rem",
                paddingBottom: "0.4rem",
                borderBottom: "1px solid var(--border)",
                fontFamily: "var(--font-mono)",
                transition: "border-color 0.3s ease",
              }}
            >
              {group.comment}
            </div>

            {/* Skill tags */}
            {group.skills.map((skill) => (
              <span
                key={skill}
                className={`skill-tag clickable ${
                  isSelected(skill) ? "selected" : ""
                }`}
                onClick={() => toggleSkill(skill)}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected(skill)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleSkill(skill);
                  }
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Active filter hint */}
      {selected.size > 0 && (
        <div
          style={{
            fontSize: "11px",
            color: "var(--fg3)",
            marginTop: "0.8rem",
            fontFamily: "var(--font-mono)",
            transition: "color 0.3s ease",
          }}
        >
          Filtering projects by:{" "}
          {[...selected].map((skill, i) => (
            <span key={skill}>
              <span style={{ color: "var(--accent)" }}>{skill}</span>
              {i < selected.size - 1 ? ", " : ""}
            </span>
          ))}
          {" — "}
          <button
            onClick={clearFilters}
            style={{
              background: "none",
              border: "none",
              color: "var(--fg3)",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              cursor: "pointer",
              textDecoration: "underline",
              padding: 0,
            }}
          >
            clear
          </button>
        </div>
      )}
    </section>
  );
}