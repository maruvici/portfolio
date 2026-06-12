"use client";

import { useEffect, useRef, useState } from "react";
import { useTerminal } from "@/app/context/TerminalContext";
import { runCommand, escapeHtml } from "./terminal-commands";

interface TermLine {
  id: number;
  html: string;
}

let lineIdCounter = 0;

export default function FloatingTerminal() {
  const { isOpen, closeTerminal } = useTerminal();
  const [lines, setLines] = useState<TermLine[]>([
    {
      id: lineIdCounter++,
      html: `<span class="t-g">maruvici@portfolio</span>:<span class="t-d">~</span>$ Type <span class="t-g">help</span> to see available commands.`,
    },
  ]);
  const [input, setInput] = useState("");
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when terminal opens
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 320);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Auto-scroll to bottom whenever lines change
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeTerminal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, closeTerminal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = input.trim();
    setInput("");

    // Echo the command line
    const echoHtml = `<span class="t-g">maruvici@portfolio</span>:<span class="t-d">~</span>$ ${escapeHtml(
      value
    )}`;
    setLines((prev) => [...prev, { id: lineIdCounter++, html: echoHtml }]);

    if (!value) return;

    if (value.toLowerCase() === "clear") {
      // Clear everything, including the echoed "clear" line itself
      setLines([]);
      return;
    }

    const output = runCommand(value);
    if (output) {
      setLines((prev) => [...prev, { id: lineIdCounter++, html: output }]);
    }
  };

  return (
    <div
      id="term-float"
      className={isOpen ? "term-open" : ""}
      role="region"
      aria-label="Interactive terminal"
      aria-hidden={!isOpen}
    >
      {/* Title bar */}
      <div className="term-bar">
        <div className="win-dots">
          <div
            className="win-dot win-dot-red"
            role="button"
            tabIndex={isOpen ? 0 : -1}
            aria-label="Close terminal"
            onClick={closeTerminal}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                closeTerminal();
              }
            }}
          />
          <div className="win-dot win-dot-yellow" aria-hidden="true" />
          <div className="win-dot win-dot-green" aria-hidden="true" />
        </div>
      </div>

      {/* Output */}
      <div id="term-output" ref={outputRef}>
        {lines.map((line) => (
          <div
            key={line.id}
            className="term-line"
            dangerouslySetInnerHTML={{ __html: line.html }}
          />
        ))}
      </div>

      {/* Input row */}
      <form className="term-input-row" onSubmit={handleSubmit}>
        <span className="term-ps">maruvici@portfolio:~$&nbsp;</span>
        <input
          id="term-input"
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
          spellCheck="false"
          placeholder="enter a command..."
          tabIndex={isOpen ? 0 : -1}
          aria-label="Terminal command input"
        />
      </form>
    </div>
  );
}