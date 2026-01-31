"use client";

import { skillCategories, focusAreas } from "@/data";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-main">
        {/* Section Header */}
        <header className="section-header">
          <div className="section-label">
            <span className="section-line" />
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Skills
            </span>
            <span className="section-line" />
          </div>
          <h2 className="section-title">
            <span className="text-muted">$ echo</span>{" "}
            <span className="text-accent">$SKILLS</span>
          </h2>
        </header>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <article key={category.title} className="card group">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl text-accent">{category.icon}</span>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Current Focus Section */}
        <div className="mt-16">
          <article className="card">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-accent">❯</span>
              <span className="text-muted">cat</span>
              <span className="text-foreground">current-focus.md</span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h4 className="text-accent font-semibold flex items-center gap-2">
                  <span>🎯</span> Currently Learning
                </h4>
                <ul className="space-y-2">
                  {focusAreas.learning.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted flex items-center gap-2"
                    >
                      <span className="text-accent text-xs">~</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-accent font-semibold flex items-center gap-2">
                  <span>💼</span> Working On
                </h4>
                <ul className="space-y-2">
                  {focusAreas.working.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted flex items-center gap-2"
                    >
                      <span className="text-accent text-xs">~</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-accent font-semibold flex items-center gap-2">
                  <span>🚀</span> Goals
                </h4>
                <ul className="space-y-2">
                  {focusAreas.goals.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted flex items-center gap-2"
                    >
                      <span className="text-accent text-xs">~</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
