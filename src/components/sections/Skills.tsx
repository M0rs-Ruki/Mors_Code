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
      className="p-8 bg-background relative overflow-hidden border-t-2 border-foreground"
    >
      <div className="absolute inset-0 bg-grid opacity-100" />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <AsciiHeader text={SKILLS_ASCII} />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
          {/* Main Skills */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4 text-foreground">
              <span className="font-bold font-mono text-sm">~/skills/main.json</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((category) => (
                <div
                  key={category.title}
                  className="bg-background border-2 border-foreground p-4 hover:bg-foreground hover:text-background transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-3 text-foreground font-bold group-hover:text-background">
                    <span>{category.icon}</span>
                    <h3>{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((item) => (
                      <span
                        key={item}
                        className="text-xs text-foreground group-hover:text-background font-mono px-2 py-1 bg-transparent rounded-none border-2 border-foreground group-hover:border-background"
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
            <div className="flex items-center gap-2 mb-4 text-foreground">
              <span className="font-bold font-mono text-sm">~/skills/focus.md</span>
            </div>

            <TerminalWindow title="current-focus">
              <div className="space-y-6 p-2">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="text-foreground font-bold">▹</span> Currently Learning
                  </h4>
                  <ul className="pl-6 space-y-1 text-sm text-foreground font-medium list-disc marker:text-foreground">
                    {learning.learning.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="text-foreground font-bold">▹</span> To Learn CheckList
                  </h4>
                  <ul className="pl-6 space-y-1 text-sm text-foreground font-medium">
                    {learning.goals.map((item, i) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-foreground font-bold text-xs">□</span>
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
