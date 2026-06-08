export interface ContactLink {
  label: string;
  value: string;       // display text
  href: string;        // full URL or mailto:
  type: "email" | "github" | "linkedin";
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  tagline: string;                // shown under the name in the hero
  roles: string[];                // typewriter cycling list
  status: string;                 // availability line next to pulse dot
  location: string;
  bio: string[];                  // paragraphs for the About section
  contact: ContactLink[];
}

const personal: PersonalInfo = {
  name: "Maruvici",
  firstName: "Mav",
  tagline: "Building things that work, and automating the rest.",
  roles: [
    "software developer",
    "automation engineer",
    "problem solver",
    "upd graduate",
    "caffeine-to-code converter",
  ],
  status: "Employed — Open to Opportunities",
  location: "Philippines 🇵🇭",
  bio: [
    "I'm Mav, a Computer Engineering graduate and software developer based in the Philippines. " +
      "I specialize in fullstack web development — building professional apps, tools, and systems " +
      "that scale effortlessly, and meet clients' needs.",
    "I also dabble in automation — utilizing Bash scripts, Docker containers, and Ansible playbooks" +
      "to reduce tedious manual tasks, and improve overall work efficiency. I make sure to bring " +
      "engineering rigor to every project. Always learning, always building.",
  ],
  contact: [
    {
      label: "email",
      value: "mvtevangelista0820@gmail.com",
      href: "mailto:mvtevangelista0820@gmail.com",
      type: "email",
    },
    {
      label: "github",
      value: "github.com/maruvici",
      href: "https://github.com/maruvici",
      type: "github",
    },
    {
      label: "linkedin",
      value: "linkedin.com/in/mavi-evangelista",
      href: "https://linkedin.com/in/mavi-evangelista",
      type: "linkedin",
    },
  ],
};

export default personal;