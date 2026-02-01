"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "@/components/ui";
import AsciiHeader from "@/components/ui/AsciiHeader";
import { experiences } from "@/data";

const EXPERIENCE_ASCII = `
             ██████╗ ██████╗ ██████╗ ███████╗███████╗██████╗ 
             ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔══██╗
█████╗█████╗ ██║     ██████╔╝██████╔╝█████╗  █████╗  ██████╔╝
╚════╝╚════╝ ██║     ██╔══██╗██╔══██╗██╔══╝  ██╔══╝  ██╔══██╗
             ╚██████╗██║  ██║██║  ██║███████╗███████╗██║  ██║
              ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝`;

export default function Experience() {
  return (
    <section
      id="experience"
      className="p-8 bg-background relative overflow-hidden border-t-2 border-foreground"
    >
      <div className="absolute inset-0 bg-grid opacity-100" />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <AsciiHeader text={EXPERIENCE_ASCII} />

        <div className="max-w-4xl mx-auto mt-8">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-foreground">
            {experiences.map((job, index) => (
              <div
                key={job.id}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-foreground bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <div className="w-3 h-3 bg-foreground rounded-full group-hover:bg-background" />
                </div>

                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 bg-background border-2 border-foreground rounded-none shadow-sm hover:bg-foreground hover:text-background transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-background">
                      {job.role}
                    </h3>
                    <span className="text-xs font-mono text-foreground bg-transparent px-2 py-1 border-2 border-foreground rounded-none group-hover:text-background group-hover:border-background">
                      {job.startDate} - {job.endDate}
                    </span>
                  </div>

                  <div className="text-sm text-foreground font-bold mb-3 flex items-center gap-2 group-hover:text-background">
                    <span className="text-foreground group-hover:text-background">@</span> {job.company}
                  </div>

                  <p className="text-foreground text-sm leading-relaxed mb-4 group-hover:text-background">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] px-2 py-1 bg-transparent border border-foreground text-foreground font-mono group-hover:border-background group-hover:text-background"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
