"use client";

import { TerminalWindow } from "@/components/ui";
import AsciiHeader from "@/components/ui/AsciiHeader";
import { skillCategories as skills, focusAreas as learning } from "@/data";

const SKILLS_ASCII = `
███████╗    ███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
██╔════╝    ██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
███████╗    ███████╗█████╔╝ ██║██║     ██║     ███████╗
╚════██║    ╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
███████║    ███████║██║  ██╗██║███████╗███████╗███████║
╚══════╝    ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝`;

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding bg-background-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.2]" />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <AsciiHeader text={SKILLS_ASCII} />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Main Skills */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4 text-accent">
              <span className="font-mono text-sm">~/skills/main.json</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((category) => (
                <div
                  key={category.title}
                  className="bg-background border border-border rounded-lg p-4 hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3 text-accent font-semibold">
                    <span>{category.icon}</span>
                    <h3>{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((item) => (
                      <span
                        key={item}
                        className="text-xs text-muted font-mono px-2 py-1 bg-background-dark rounded border border-border/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Focus / Learning */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4 text-accent">
              <span className="font-mono text-sm">~/skills/focus.md</span>
            </div>

            <TerminalWindow title="current-focus">
              <div className="space-y-6 p-2">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="text-accent">▹</span> Currently Learning
                  </h4>
                  <ul className="pl-6 space-y-1 text-sm text-muted list-disc marker:text-accent">
                    {learning.learning.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="text-accent">▹</span> To Learn CheckList
                  </h4>
                  <ul className="pl-6 space-y-1 text-sm text-muted">
                    {learning.goals.map((item, i) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-accent/50 text-xs">□</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  );
}
