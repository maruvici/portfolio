export type ExperienceType = "work" | "education";

export interface ExperienceEntry {
  id: number;
  type: ExperienceType;
  role: string;
  organization: string;  // company or university name
  dateRange: string;     // e.g. "2024 – Present"
  bullets: string[];     // list of accomplishments / details
}

const experience: ExperienceEntry[] = [
  {
    id: 0,
    type: "work",
    role: "Automation Engineer",
    organization: "StrategicSynergy Inc. (SSI)",
    dateRange: "Dec 2025 – Jun 2026",
    bullets: [
      "Engineered an E2E automation workflow (Bash, SQL, Python, Docker) for Oracle DB health checks and reporting.",
      "Developed a Next.js and PSQL knowlege base, establishing a scalable and secure architecture for a core company resource.",
      "Assisted with configuration and implementation of EDB PSQL, Oracle SQL, and Ansible Playbooks for 4 enterprise clients.",
    ],
  },
  {
    id: 1,
    type: "work",
    role: "Software Engineering Intern",
    organization: "Analog Devices Inc. (ADI)",
    dateRange: "Jun 2025 - Jul 2025",
    bullets: [
      "Developed a REST API using FastAPI and MySQL for internal fullstack web app",
      "Utilized Mermaid diagrams and YAML contracts to design and document system architecture",
      "Configured Nginx reverse proxies to streamline workflows",
      "Employed Jira to manage projct lifecycle within an Agile workflow",
    ],
  },
  {
    id: 2,
    type: "education",
    role: "Undergraduate Student Assistant",
    organization: "UPD - Electrical and Electronics Engineering Institute (EEEI)",
    dateRange: "Jan 2025 - May 2025",
    bullets: [
      "Assisted in the course delivery for EEE 121 and EEE 143",
      "Co-developed and validated 6 technical assessments",
      "Proctored four major examinations across the semester",
      "Provided support for 60+ students with 12 C++ lab exercises"
    ],
  },
  {
    id: 3,
    type: "education",
    role: "B.S. Computer Engineering",
    organization: "University of the Philippines - Diliman",
    dateRange: "Sept 2021 - Jul 2025",
    bullets: [
      "Graduated Cum Laude with a final GWA of 1.61 / 1.0",
      "Undergraduate Affiliate of the Smart Systems Laboratory (SSL)",
      "Capstone Project: COMMUTE (A Comparative Analysis of MPC-based Models for Urban Traffic Environments)"
    ],
  },
];

export default experience;