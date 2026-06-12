import projects from "@/data/projects";
import skillGroups from "@/data/skills";
import personal from "@/data/personal";
import { TERMINAL_COMMANDS } from "@/data/terminal";

/**
 * Executes a terminal command and returns the HTML output to print.
 * Returns null for "clear" (handled specially by the component) and
 * for empty input (nothing to print).
 */
export function runCommand(rawInput: string): string | null {
  const cmd = rawInput.trim().toLowerCase();

  if (!cmd) return null;
  if (cmd === "clear") return null; // handled by the component directly

  switch (cmd) {
    case "help":
      return [
        '<span class="t-g">commands:</span>',
        ...TERMINAL_COMMANDS
          .filter((c) => c.name !== "help")
          .map(
            (c) =>
              `&nbsp;&nbsp;<span class="t-g">${c.name.padEnd(9)}</span>— ${c.description}`
          ),
      ].join("<br>");

    case "whoami":
      return `${personal.name} — ${personal.roles[0]
        .split(" ")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ")}, ${personal.location}`;

    case "about":
      return personal.bio[0].replace(/\. /g, ".<br>");

    case "skills":
      return skillGroups
        .map((g) => g.skills.join(" · "))
        .join("<br>");

    case "projects":
      return projects
        .map(
          (p) =>
            `<span class="t-g">${p.name}</span> — ${p.sub} [${p.status}]`
        )
        .join("<br>");

    case "contact":
      return personal.contact
        .map((c) => `${c.label.padEnd(8)}: ${c.value}`)
        .join("<br>");

    case "status":
      return `<span class="t-g">● ${personal.status.toUpperCase()}</span> — ${personal.tagline}`;

    default:
      return `<span class="t-err">bash: ${escapeHtml(
        cmd
      )}: command not found.</span> Type <span class="t-g">help</span>.`;
  }
}

/** Escapes HTML special characters in user input before display */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}