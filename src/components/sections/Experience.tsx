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
      className="section-padding bg-background-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.4]" />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <AsciiHeader text={EXPERIENCE_ASCII} />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {experiences.map((job, index) => (
              <div
                key={job.id}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-accent transition-colors">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                </div>

                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 bg-background border border-border rounded-xl shadow-sm hover:border-accent/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-foreground">
                      {job.role}
                    </h3>
                    <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded border border-accent/20">
                      {job.startDate} - {job.endDate}
                    </span>
                  </div>

                  <div className="text-sm text-foreground font-medium mb-3 flex items-center gap-2">
                    <span className="text-accent">@</span> {job.company}
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] px-2 py-1 bg-background-dark border border-border rounded text-muted font-mono"
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
