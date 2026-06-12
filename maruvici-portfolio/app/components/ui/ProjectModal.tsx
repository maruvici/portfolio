"use client";

import { useEffect, useRef } from "react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const GH_SVG = (
  <svg className="gh-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLDivElement>(null);

  const isOpen = project !== null;

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus the close dot when opened, for keyboard users
  useEffect(() => {
    if (isOpen) closeBtnRef.current?.focus();
  }, [isOpen]);

  if (!project) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      id="modal-overlay"
      className="modal-open"
      style={{ display: "flex" }}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-name"
    >
      <div
        id="modal-window"
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", zIndex: 1001 }}
      >
        {/* Title bar */}
        <div className="modal-bar">
          <div className="win-dots">
            <div
              ref={closeBtnRef}
              className="win-dot win-dot-red"
              role="button"
              tabIndex={0}
              aria-label="Close dialog"
              onClick={onClose}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClose();
                }
              }}
            />
            <div className="win-dot win-dot-yellow" aria-hidden="true" />
            <div className="win-dot win-dot-green" aria-hidden="true" />
          </div>
          <div className="modal-win-title">
            ~/projects/{project.name.toLowerCase()}
          </div>
        </div>

        {/* Body */}
        <div className="modal-body">
          <div id="modal-project-name" className="modal-name">
            {project.name}
          </div>
          <div className="modal-sub">{project.sub}</div>

          {/* Preview area */}
          <div className="modal-preview">
            {project.demo ? (
              <iframe
                src={project.demo}
                title={`${project.name} live preview`}
                loading="lazy"
                style={{ width: "100%", height: "100%", border: "none" }}
              />
            ) : (
              <span style={{ color: "#555", fontSize: "12px", fontFamily: "var(--font-mono)" }}>
                // no live demo — see GitHub for source &amp; screenshots
              </span>
            )}
          </div>

          {/* Description */}
          <div className="modal-section">// description</div>
          <div className="modal-desc">{project.desc}</div>

          {/* Tech tags */}
          <div className="modal-section" style={{ marginTop: "1rem" }}>
            // tech used
          </div>
          <div>
            {project.tags.map((tag) => (
              <span key={tag} className="skill-tag" style={{ cursor: "default" }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="modal-links">
            <a
              className="modal-btn modal-btn-primary"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {GH_SVG} GitHub
            </a>
            {project.demo && (
              <a
                className="modal-btn"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                [ Live Demo ]
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}