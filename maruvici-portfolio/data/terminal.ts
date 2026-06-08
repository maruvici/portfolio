// Each command returns an array of HTML strings (one per output line).
// Components render these using dangerouslySetInnerHTML so span classes work.
// Keep output short — terminal height is fixed at 200px.

export interface TerminalCommand {
  name: string;
  description: string;   // shown in the help listing
  // output is computed at runtime in the terminal component
  // using live data from other data files — defined here for reference only
}

export const TERMINAL_COMMANDS: TerminalCommand[] = [
  { name: "help",     description: "list available commands" },
  { name: "whoami",   description: "who is Mark" },
  { name: "about",    description: "short bio" },
  { name: "skills",   description: "tech stack" },
  { name: "projects", description: "list all projects" },
  { name: "contact",  description: "contact information" },
  { name: "status",   description: "availability" },
  { name: "clear",    description: "clear the terminal" },
];

export const BOOT_LINES: string[] = [
  "> BIOS v1.0.0 — Maruvici OS initialized",
  "> Loading kernel modules.............. OK",
  "> Mounting /home/maruvici/portfolio........ OK",
  "> Starting systemd services........... OK",
  "> Initializing Next.js runtime......... OK",
  "> Compiling CSS modules............... OK",
  "> Connecting to GitHub API............. OK",
  "> Loading project manifests........... OK",
  "> Warming up Vercel edge nodes......... OK",
  "> Drinking some coffee........... OK",
  "> All systems operational.",
  "",
  "Portfolio v1.0.0 — ready.",
];