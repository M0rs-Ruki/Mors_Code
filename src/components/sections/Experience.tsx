"use client";

import { experiences } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background-dark">
      <div className="container-main">
        {/* Section Header */}
        <header className="section-header">
          <div className="section-label">
            <span className="section-line" />
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Experience
            </span>
            <span className="section-line" />
          </div>
          <h2 className="section-title">
            <span className="text-muted">$ git log</span>{" "}
            <span className="text-accent">--career</span>
          </h2>
        </header>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <article key={exp.id} className="experience-card">
              {/* Timeline Connector */}
              <div className="experience-timeline-line">
                <div className="experience-dot" />
                {index < experiences.length - 1 && (
                  <div className="experience-connector" />
                )}
              </div>

              {/* Content */}
              <div className="experience-content">
                {/* Header */}
                <div className="experience-header">
                  <div className="experience-header-main">
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company">
                      <span className="text-accent font-semibold">
                        {exp.company}
                      </span>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                  </div>
                  <div className="experience-meta">
                    <div className="experience-date">
                      <span className="text-accent">⏱</span>
                      {exp.startDate} - {exp.endDate}
                    </div>
                    <div className="experience-location">
                      <span className="text-accent">◉</span>
                      {exp.location} · {exp.mode}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="experience-description">{exp.description}</p>

                {/* Highlights */}
                <div className="experience-highlights">
                  <div className="experience-highlights-header">
                    <span className="text-accent">$</span> Key Achievements
                  </div>
                  <ul className="experience-highlights-list">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="experience-highlight-item">
                        <span className="text-accent shrink-0">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="experience-skills">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
