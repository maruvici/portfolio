import personal from "@/data/personal";

export default function AboutSection() {
  return (
    <section id="about">
      {/* Section label */}
      <div className="sec-label">
        <span className="sec-label-prefix">~/</span>about_me.txt
      </div>
      <h2 className="sec-title">About Me</h2>

      {/* Bio card */}
      <div
        style={{
          background: "var(--bg2)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          padding: "1.5rem",
          position: "relative",
          overflow: "hidden",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
        }}
      >
        {/* Accent top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "var(--accent)",
          }}
          aria-hidden="true"
        />

        {/* Comment line */}
        <div
          style={{
            color: "var(--fg3)",
            fontSize: "12px",
            marginBottom: "0.8rem",
            fontFamily: "var(--font-mono)",
            transition: "color 0.3s ease",
          }}
        >
          // whoami
        </div>

        {/* Bio paragraphs */}
        {personal.bio.map((paragraph, i) => (
          <p
            key={i}
            style={{
              color: "var(--fg2)",
              fontSize: "13px",
              lineHeight: 1.9,
              fontFamily: "var(--font-mono)",
              marginBottom: i < personal.bio.length - 1 ? "1rem" : 0,
              transition: "color 0.3s ease",
            }}
          >
            {renderWithHighlights(paragraph, personal.firstName)}
          </p>
        ))}
      </div>
    </section>
  );
}

/**
 * Bolds the person's first name and the words "automation engineering"
 * wherever they appear, matching the prototype's <strong> highlights.
 */
function renderWithHighlights(text: string, firstName: string) {
  const highlightTerms = [firstName, "automation engineering"];
  const pattern = new RegExp(`(${highlightTerms.join("|")})`, "g");
  const parts = text.split(pattern);

  return parts.map((part, i) =>
    highlightTerms.includes(part) ? (
      <strong key={i} style={{ color: "var(--fg)", fontWeight: 500 }}>
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}