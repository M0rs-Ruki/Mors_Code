"use client";

import { TerminalWindow } from "@/components/ui";
import AsciiHeader from "@/components/ui/AsciiHeader";
import { projects } from "@/data";

const PROJECTS_ASCII = `
   ██╗    ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
  ██╔╝    ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
 ██╔╝     ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
██╔╝      ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
╚██╗      ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
 ╚═╝      ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝`;

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="container-main relative z-10">
        {/* Section Header */}
        <AsciiHeader text={PROJECTS_ASCII} />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <TerminalWindow
              key={project.id}
              title={`~/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group hover:shadow-lg hover:shadow-accent/10 transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="flex flex-col h-full bg-background-dark/50">
                {/* Project Image/Preview Area */}
                <div className="relative h-48 bg-background border-b border-border p-4 flex items-center justify-center overflow-hidden group-hover:bg-background-light/50 transition-colors">
                  <div className="text-4xl select-none opacity-20 group-hover:opacity-40 transition-opacity grayscale group-hover:grayscale-0">
                    {/* Using emoji as placeholder if no image, or just stylistic choice */}
                    {project.title.includes("Chati")
                      ? "🤖"
                      : project.title.includes("CMS")
                        ? "📝"
                        : "💻"}
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-1 text-[10px] uppercase tracking-wider font-mono border border-accent/20 text-accent rounded bg-accent/5">
                    {project.status === "deployed" ? "Live" : "Dev"}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto space-y-4">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="skill-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs sm:text-sm text-muted hover:text-accent transition-colors"
                        >
                          <span className="text-accent">⌘</span>
                          <span>Source</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs sm:text-sm text-muted hover:text-accent transition-colors"
                        >
                          <span className="text-accent">↗</span>
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/mors_ruki?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <span>view all repositories</span>
            <span className="text-accent">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
