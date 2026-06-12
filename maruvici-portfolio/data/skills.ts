export interface SkillGroup {
  label: string;       // display label shown in the section header
  comment: string;     // // comment line shown above tags
  skills: string[];    // must exactly match tag strings used in projects.ts
}

const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    comment: "// languages",
    skills: ["Python", "Bash", "JavaScript", "TypeScript", "Java", "C", "C++", "Rust"],
  },
  {
    label: "Frameworks & Libraries",
    comment: "// frameworks & libraries",
    skills: ["Node.js", "Next.js", "React", "Spring", "Tailwind", "FastAPI"],
  },
  {
    label: "Tools & DevOps",
    comment: "// tools & devops",
    skills: ["Git", "Docker", "Ansible", "Nginx", "Vercel"],
  },
  {
    label: "Databases",
    comment: "// databases",
    skills: ["PostgreSQL", "Oracle", "MySQL", "SQLite"],
  },
  {
    label: "Operating Systems",
    comment: "// operating systems",
    skills: ["Windows", "Ubuntu", "RHEL"],
  },
  {
    label: "Administrative & Project Management",
    comment: "// admin & proj management",
    skills: ["Jira", "Confluence", "Mermaid", "Mkdocs"],
  },
];

export default skillGroups;