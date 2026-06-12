import HeroSection from "@/app/components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";

const PLACEHOLDER_SECTIONS = ["skills", "projects", "experience", "contact"];

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
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
            ~/{id} — coming in Phase {5 + PLACEHOLDER_SECTIONS.indexOf(id)}
          </p>
        </section>
      ))}
    </>
  );
}