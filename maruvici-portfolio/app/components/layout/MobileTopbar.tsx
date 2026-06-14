"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { useTerminal } from "@/app/context/TerminalContext";

interface MobileTopbarProps {
  onMenuOpen: () => void;
}

export default function MobileTopbar({ onMenuOpen }: MobileTopbarProps) {
  const { theme, toggleTheme } = useTheme();
  const { toggleTerminal } = useTerminal();

  return (
    <div id="mobile-topbar" style={{ gap: "0.5rem" }} role="banner">
      <span
        style={{
          color: "var(--accent)",
          fontSize: "12px",
          fontWeight: 700,
          fontFamily: "var(--font-mono)",
        }}
      >
        maruvici@portfolio:~$
      </span>

      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center"}}>
        <TopbarBtn onClick={toggleTheme} label={theme === "dark" ? "[ 𖤓 ]" : "[ ⏾ ]"} />
        <TopbarBtn onClick={toggleTerminal} label="[ >_ ]" />
        <TopbarBtn onClick={onMenuOpen} label="[ ☰ ]" />
      </div>
    </div>
  );
}

function TopbarBtn({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "1px solid var(--border2)",
        color: "var(--fg2)",
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        padding: "0.35rem 0.65rem",
        borderRadius: "var(--radius)",
        cursor: "pointer",
        transition: "border-color 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border2)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--fg2)";
      }}
    >
      {label}
    </button>
  );
}