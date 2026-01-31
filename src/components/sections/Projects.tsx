"use client";

import { TerminalWindow } from "@/components/ui";
import { projects } from "@/data";

const statusLabels = {
  deployed: "● Live",
  development: "● In Dev",
  backend: "● Backend",
} as const;

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-background-dark">
      <div className="container-main">
        {/* Section Header */}
        <header className="section-header">
          <div className="section-label">
            <span className="section-line" />
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Projects
            </span>
            <span className="section-line" />
          </div>
          <h2 className="section-title">
            <span className="text-muted">$ ls</span>{" "}
            <span className="text-accent">./projects</span>
          </h2>
          <p className="mt-4 text-muted">
            <span className="text-green-400">✓</span> {projects.length} projects
            found
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => (
            <TerminalWindow
              key={project.id}
              title={`~/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group hover:shadow-lg hover:shadow-accent/10 transition-shadow duration-300"
            >
              <div className="space-y-3 sm:space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className={`status-badge status-badge--${project.status} mt-2`}
                    >
                      {statusLabels[project.status]}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-3 sm:pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs sm:text-sm link"
                  >
                    <span>⌘</span>
                    <span>Source</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs sm:text-sm link"
                    >
                      <span>↗</span>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/M0rs-Ruki"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>⌘</span>
            <span>$ cd github --view-all</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
