export default function Home() {
  return (
    <div style={{
      fontFamily: "var(--font-mono)",
      background: "var(--bg)",
      color: "var(--fg)",
      minHeight: "100vh",
      padding: "2rem",
    }}>
      <p style={{ color: "var(--accent)", marginBottom: "1rem" }}>
        maruvici@portfolio:~$ ./step2-tokens.sh
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "13px" }}>
        <span>bg: <span style={{ background: "var(--bg2)", padding: "0 6px", border: "1px solid var(--border)" }}>--bg2</span></span>
        <span>accent: <span style={{ color: "var(--accent)" }}>var(--accent) ✓</span></span>
        <span>accent muted: <span style={{ color: "var(--accent3)" }}>var(--accent3) ✓</span></span>
        <span>fg2: <span style={{ color: "var(--fg2)" }}>var(--fg2) ✓</span></span>
        <span>fg3: <span style={{ color: "var(--fg3)" }}>var(--fg3) ✓</span></span>
        <span className="skill-tag clickable" style={{ display: "inline-block", marginTop: "0.5rem" }}>skill-tag</span>
        <span className="skill-tag selected" style={{ display: "inline-block" }}>selected</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "0.5rem", color: "var(--fg3)", fontSize: "12px" }}>
          <span className="status-dot"></span> status dot pulse
        </span>
        <span style={{ marginTop: "0.5rem", color: "var(--fg2)", fontSize: "13px" }}>
          typewriter cursor: <span className="tw-cursor"></span>
        </span>
      </div>
      <p style={{ color: "var(--fg3)", marginTop: "2rem", fontSize: "12px" }}>
        Step 2 complete — design tokens &amp; global styles ✓
      </p>
    </div>
  );
}