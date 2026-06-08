import projects from "@/data/projects";
import skillGroups from "@/data/skills";
import experience from "@/data/experience";
import personal from "@/data/personal";
import { BOOT_LINES } from "@/data/terminal";

export default function Home() {
  return (
    <div style={{
      fontFamily: "var(--font-mono)",
      background: "var(--bg)",
      color: "var(--fg)",
      minHeight: "100vh",
      padding: "2rem",
      fontSize: "13px",
    }}>
      <p style={{ color: "var(--accent)", marginBottom: "1rem" }}>
        maruvici@portfolio:~$ ./verify-data.sh
      </p>
      <p>✓ personal.name: <span style={{ color: "var(--accent)" }}>{personal.name}</span></p>
      <p>✓ personal.roles: <span style={{ color: "var(--accent)" }}>{personal.roles.join(", ")}</span></p>
      <p>✓ projects loaded: <span style={{ color: "var(--accent)" }}>{projects.length}</span></p>
      <p>✓ skill groups: <span style={{ color: "var(--accent)" }}>{skillGroups.length}</span></p>
      <p>✓ experience entries: <span style={{ color: "var(--accent)" }}>{experience.length}</span></p>
      <p>✓ boot lines: <span style={{ color: "var(--accent)" }}>{BOOT_LINES.length}</span></p>
      <p style={{ color: "var(--fg3)", marginTop: "1.5rem" }}>
        Step 3 complete — data layer verified ✓
      </p>
    </div>
  );
}