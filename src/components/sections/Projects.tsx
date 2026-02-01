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
      className="p-8 bg-background relative overflow-hidden border-t-2 border-foreground"
    >
      <div className="container-main relative z-10">
        {/* Section Header */}
        <AsciiHeader text={PROJECTS_ASCII} />

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {projects.map((project) => (
            <TerminalWindow
              key={project.id}
              title={`~/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group h-full flex flex-col border-2 border-transparent hover:border-foreground transition-all duration-300"
            >
              <div className="flex flex-col h-full bg-background">
                {/* Project Image/Preview Area */}
                <div className="relative h-48 bg-background border-b-2 border-foreground p-4 flex items-center justify-center overflow-hidden group-hover:bg-foreground group-hover:text-background transition-colors">
                  <div className="text-4xl select-none transition-none">
                    {/* Using emoji as placeholder if no image, or just stylistic choice */}
                    {project.title.includes("Chati")
                      ? "🤖"
                      : project.title.includes("CMS")
                        ? "📝"
                        : "💻"}
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-1 text-[10px] uppercase tracking-wider font-bold font-mono border-2 border-foreground text-foreground rounded-none bg-background group-hover:border-background group-hover:text-background group-hover:bg-foreground">
                    {project.status === "deployed" ? "Live" : "Dev"}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2 underline decoration-2 decoration-foreground group-hover:decoration-background">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground font-medium leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto space-y-4">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-background border-2 border-foreground text-foreground text-xs font-bold uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4 border-t-2 border-foreground">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs sm:text-sm text-foreground font-bold hover:underline transition-all"
                        >
                          <span className="text-foreground">⌘</span>
                          <span>Source</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs sm:text-sm text-foreground font-bold hover:underline transition-all"
                        >
                          <span className="text-foreground">↗</span>
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
            className="inline-flex w-full sm:w-auto px-6 py-3 bg-background text-foreground border-2 border-foreground font-bold hover:bg-foreground hover:text-background transition-colors items-center justify-center gap-2"
          >
            <span>view all repositories</span>
            <span className="text-foreground lg:group-hover:text-background">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
