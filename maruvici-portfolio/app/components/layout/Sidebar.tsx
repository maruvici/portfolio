"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { useTerminal } from "@/app/context/TerminalContext";
import { NAV_LINKS } from "./nav-links";
import { useActiveSection, scrollToSection } from "./use-active-section";

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const { toggleTheme } = useTheme();
  const { toggleTerminal } = useTerminal();
  const active = useActiveSection();

  const handleNavClick = (target: string) => {
    scrollToSection(target);
    onClose(); // close mobile drawer if open
  };

  return (
    <nav
      id="sidebar"
      className={mobileOpen ? "mobile-open" : ""}
      aria-label="Main navigation"
    >
      {/* ── Logo / identity ── */}
      <div
        style={{
          padding: "1rem",
          borderBottom: "1px solid var(--border)",
          transition: "border-color 0.3s ease",
        }}
      >
        <div
          style={{
            color: "var(--accent)",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.05em",
          }}
        >
          maruvici@portfolio:~$
        </div>
        <div style={{ color: "var(--fg3)", fontSize: "10px", marginTop: "3px" }}>
          v1.0.0 — 2026
        </div>
      </div>

      {/* ── Nav links ── */}
      <div style={{ padding: "0.6rem 0", flex: 1, overflowY: "auto" }}>
        {NAV_LINKS.map((link) => {
          const isActive = active === link.target;
          return (
            <button
              key={link.target}
              onClick={() => handleNavClick(link.target)}
              aria-current={isActive ? "location" : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: "100%",
                padding: "0.42rem 1rem",
                background: isActive ? "var(--accent-dim)" : "none",
                border: "none",
                borderLeft: `2px solid ${isActive ? "var(--accent)" : "transparent"}`,
                color: isActive ? "var(--accent)" : "var(--fg2)",
                fontSize: "12px",
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "var(--accent)";
                  (e.currentTarget as HTMLButtonElement).style.borderLeftColor =
                    "var(--accent)";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "var(--accent-dim)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "var(--fg2)";
                  (e.currentTarget as HTMLButtonElement).style.borderLeftColor =
                    "transparent";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "none";
                }
              }}
            >
              <span style={{ color: "var(--accent3)", fontSize: "11px" }}>❯</span>
              {link.label}
            </button>
          );
        })}
      </div>

      {/* ── Bottom actions ── */}
      <div
        style={{
          padding: "0.8rem 1rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          transition: "border-color 0.3s ease",
        }}
      >
        <SidebarBtn onClick={toggleTheme} label="[ toggle theme ]" />
        <SidebarBtn
          onClick={toggleTerminal}
          label="[ >_ terminal ]"
          accent
        />
      </div>
    </nav>
  );
}

function SidebarBtn({
  onClick,
  label,
  accent = false,
}: {
  onClick: () => void;
  label: string;
  accent?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        background: "none",
        border: `1px solid ${accent ? "var(--accent3)" : "var(--border2)"}`,
        color: accent ? "var(--accent3)" : "var(--fg3)",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        padding: "0.4rem",
        borderRadius: "var(--radius)",
        cursor: "pointer",
        textAlign: "center",
        transition: "border-color 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = accent
          ? "var(--accent3)"
          : "var(--border2)";
        (e.currentTarget as HTMLButtonElement).style.color = accent
          ? "var(--accent3)"
          : "var(--fg3)";
      }}
    >
      {label}
    </button>
  );
}