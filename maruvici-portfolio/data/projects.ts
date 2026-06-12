export type ProjectStatus = "live" | "wip" | "archived";

export interface Project {
  id: number;
  name: string;
  sub: string;               // short subtitle / category
  status: ProjectStatus;
  excerpt: string;           // ~1 sentence shown on card
  desc: string;              // full description shown in modal
  tags: string[];            // tech tags — must match skill keys in skills.ts
  github: string;
  demo: string | null;
  image: string | null;      // path under /public/images/projects/ or null
  featured: boolean;         // reserved for future "featured" filter
}

const projects: Project[] = [
  {
    id: 0,
    name: "Information Hub",
    sub: "Internal Knowledge Base",
    status: "live",
    excerpt:
      "A Next.js and PostgreSQL knowledge platform streamlining info sharing and communication.",
    desc:
      "A secure internal knowledge base built with Next.js, Nginx, Drizzle ORM, and PostgreSQL. " +
      "Features Microsoft SSO, rich-text editing, file storage, global post searching and filtering, " +
      "and nested comments among others. Includes documentation created using Mkdocs.",
    tags: ["Next.js", "Node.js", "TypeScript", "JavaScript", "React", "Tailwind", "Nginx", "PostgreSQL", "Mkdocs", "Mermaid"],
    github: "https://github.com/maruvici/info-hub",
    demo: null,
    image: null,
    featured: true,
  },
  {
    id: 1,
    name: "Automated Database Health Check",
    sub: "Database Diagnostics Collector and Report Generator",
    status: "archived",
    excerpt:
      "Metrics collector for Oracle Databases capable of automatic report generation using Quarto.",
    desc:
      "Collects database diagnostic data using Bash and SQLPlus scripts and stores them in CSV files. " +
      "Creates a Docker container, which runs Python scripts that extract and filter the diagnostic data " +
      "to produce interactive HTML and PDF reports using the Quarto engine.",
    tags: ["Bash", "Python", "SQLPlus", "Oracle", "Docker"],
    github: "https://github.com/maruvici/auto-dbhc",
    demo: null,
    image: null,
    featured: true,
  },
  {
    id: 2,
    name: "COMMUTE",
    sub: "Quezon City Traffic Simulator using MPC-based traffic control",
    status: "archived",
    excerpt:
      "Comparative simulator of MPC-based traffic signal control approaches using SUMo, Python, and Bash.",
    desc:
      "Capstone project — A study comparing various MPC-based traffic signal control approaches " +
      "using SUMo. Utilizes Python scripts to collect performance metrics via TRACI and Bash scripts " +
      "to automate simulations. Responsible for DMPC implementation and traffic demand generation.",
    tags: ["Python", "Bash"],
    github: "https://github.com/maruvici/commute",
    demo: null,
    image: null,
    featured: false,
  },
  {
    id: 3,
    name: "My Portfolio",
    sub: "A very solid case of recursion",
    status: "live",
    excerpt:
      "Terminal-themed developer portfolio with interactive shell, skill filtering, and dark/light mode.",
    desc:
      "A fully custom terminal-themed portfolio built to showcase projects and experience to " +
      "potential hirers. Features a fake OS boot sequence on load, a functional in-page terminal " +
      "accepting custom commands, interactive skill-tag filtering that highlights matching projects, " +
      "a macOS-style project modal with iframe live previews, typewriter role animation, and a " +
      "responsive sidebar with mobile drawer. Built with Next.js 16 App Router, TypeScript, " +
      "Tailwind CSS v4, and Framer Motion. Deployed on Vercel.",
    tags: ["Next.js", "Node.js", "TypeScript", "React", "Tailwind", "Vercel"],
    github: "https://github.com/maruvici/portfolio",
    demo: null,
    image: null,
    featured: true,
  },
];

export default projects;