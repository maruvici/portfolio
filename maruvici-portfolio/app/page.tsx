import HeroSection from "@/app/components/sections/HeroSection";

const PLACEHOLDER_SECTIONS = ["about", "skills", "projects", "experience", "contact"];

export default function Home() {
  return (
    <>
      <HeroSection />
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
            ~/{id} — coming in Phase {4 + PLACEHOLDER_SECTIONS.indexOf(id)}
          </p>
        </section>
      ))}
    </>
  );
}