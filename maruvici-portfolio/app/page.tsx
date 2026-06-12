import HeroSection from "@/app/components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";

const PLACEHOLDER_SECTIONS = ["skills", "projects", "experience", "contact"];

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
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
            ~/{id} — coming in Phase {6 + PLACEHOLDER_SECTIONS.indexOf(id)}
          </p>
        </section>
      ))}
    </>
  );
}