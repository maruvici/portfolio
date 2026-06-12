"use client";

import { scrollToSection } from "@/app/components/layout/use-active-section";
import { useTypewriter } from "@/app/components/ui/use-typewriter";
import personal from "@/data/personal";

export default function HeroSection() {
  const role = useTypewriter({ strings: personal.roles });

  return (
    <section id="hero">
      {/* Prompt line */}
      <p
        style={{
          color: "var(--fg3)",
          fontSize: "12px",
          marginBottom: "0.8rem",
          fontFamily: "var(--font-mono)",
        }}
      >
        maruvici@portfolio:~$ ./init portfolio.sh
      </p>

      {/* Name */}
      <h1
        style={{
          fontSize: "clamp(28px, 4.5vw, 48px)",
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: "1rem",
          color: "var(--fg)",
          fontFamily: "var(--font-mono)",
          transition: "color 0.3s ease",
        }}
      >
        Hi, I&apos;m{" "}
        <em style={{ fontStyle: "normal", color: "var(--accent)" }}>
          {personal.firstName}
        </em>
        .
      </h1>

      {/* Typewriter role line */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "15px",
          color: "var(--fg2)",
          height: "26px",
          fontFamily: "var(--font-mono)",
          transition: "color 0.3s ease",
        }}
        aria-label={`Role: ${role}`}
      >
        <span style={{ color: "var(--accent3)" }}>role:</span>
        <span style={{ color: "var(--accent)" }}>{role}</span>
        <span className="tw-cursor" aria-hidden="true" />
      </div>

      {/* Status line */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          fontSize: "12px",
          color: "var(--fg3)",
          marginTop: "1.2rem",
          fontFamily: "var(--font-mono)",
          transition: "color 0.3s ease",
        }}
      >
        <span className="status-dot" aria-hidden="true" />
        {personal.status} &mdash; {personal.location}
      </div>

      {/* CTA buttons */}
      <div
        style={{
          display: "flex",
          gap: "0.8rem",
          marginTop: "1.8rem",
          flexWrap: "wrap",
        }}
      >
        <HeroBtn
          label="view projects"
          onClick={() => scrollToSection("projects")}
          primary
        />
        <HeroBtn
          label="get in touch"
          onClick={() => scrollToSection("contact")}
        />
      </div>
    </section>
  );
}

/* ── Internal button ── */
function HeroBtn({
  label,
  onClick,
  primary = false,
}: {
  label: string;
  onClick: () => void;
  primary?: boolean;
}) {
  if (primary) {
    return (
      <button
        onClick={onClick}
        style={{
          background: "var(--accent)",
          color: "#000",
          fontWeight: 700,
          padding: "0.5rem 1.3rem",
          fontSize: "12px",
          fontFamily: "var(--font-mono)",
          border: "none",
          borderRadius: "var(--radius)",
          cursor: "pointer",
          transition: "background 0.2s ease",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background =
            "var(--accent2)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background =
            "var(--accent)")
        }
      >
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      style={{
        background: "transparent",
        color: "var(--fg2)",
        padding: "0.5rem 1.3rem",
        fontSize: "12px",
        fontFamily: "var(--font-mono)",
        border: "1px solid var(--border2)",
        borderRadius: "var(--radius)",
        cursor: "pointer",
        transition: "border-color 0.2s ease, color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "var(--accent)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "var(--border2)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--fg2)";
      }}
    >
      {label}
    </button>
  );
}