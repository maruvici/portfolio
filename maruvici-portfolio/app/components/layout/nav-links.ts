export interface NavLink {
  label: string;   // display text after the prompt
  target: string;  // section id to scroll to
}

export const NAV_LINKS: NavLink[] = [
  { label: "./home",       target: "hero"       },
  { label: "./about",      target: "about"      },
  { label: "./skills",     target: "skills"     },
  { label: "./projects",   target: "projects"   },
  { label: "./experience", target: "experience" },
  { label: "./contact",    target: "contact"    },
];