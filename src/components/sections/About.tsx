"use client";

import { TerminalWindow } from "@/components/ui";
import { profile } from "@/data";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Python",
  "TensorFlow",
  "Docker",
  "Git",
  "Tailwind CSS",
];

const stats = [
  { label: "Years Coding", value: "3+" },
  { label: "Projects Built", value: "15+" },
  { label: "Current CGPA", value: "8.96" },
  { label: "Response Time", value: "<24h" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-main">
        {/* Section Header */}
        <header className="section-header">
          <div className="section-label">
            <span className="section-line" />
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              About
            </span>
            <span className="section-line" />
          </div>
          <h2 className="section-title">
            <span className="text-muted">$ cat</span>{" "}
            <span className="text-accent">about.md</span>
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bio */}
          <TerminalWindow title="~/about/bio.md">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <span className="text-accent shrink-0">##</span>
                <span className="text-xl font-bold text-foreground">
                  Who am I?
                </span>
              </div>

              <p className="text-muted leading-relaxed pl-6">
                Hey! I&apos;m{" "}
                <span className="text-accent font-semibold">
                  {profile.name}
                </span>
                , also known as{" "}
                <span className="text-accent font-semibold">
                  {profile.alias}
                </span>
                . I&apos;m a passionate Full Stack MERN Developer from{" "}
                <span className="text-foreground">{profile.location}</span>.
              </p>

              <p className="text-muted leading-relaxed pl-6">
                Currently pursuing my{" "}
                <span className="text-foreground">BCA at Amity University</span>{" "}
                (2024-2027) with a CGPA of{" "}
                <span className="text-green-400">8.96</span>. I build full-stack
                web applications with a strong focus on backend systems, RESTful
                APIs, and clean architecture.
              </p>

              <p className="text-muted leading-relaxed pl-6">
                I&apos;m currently working with{" "}
                <span className="text-accent">chati.ai</span> and am always open
                to new challenges, freelance work, and collaboration
                opportunities.
              </p>

              <div className="pt-4 border-t border-border mt-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-accent">❯</span>
                  <span className="text-muted">mindset:</span>
                  <span className="text-foreground">
                    &quot;Build-to-learn, ready for new challenges&quot;
                  </span>
                </div>
              </div>
            </div>
          </TerminalWindow>

          {/* Quick Skills */}
          <TerminalWindow title="~/about/skills.sh">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-accent">❯</span>
                <span className="text-muted">echo</span>
                <span className="text-foreground">$CORE_SKILLS</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-border mt-6">
                <div className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-green-400">✓</span>
                  <span>{skills.length} core skills loaded</span>
                </div>
              </div>
            </div>
          </TerminalWindow>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card text-center group">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:text-glow transition-all">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Resume Link */}
        <div className="mt-12 text-center">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <span>📄</span>
            <span>$ download resume.pdf</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
