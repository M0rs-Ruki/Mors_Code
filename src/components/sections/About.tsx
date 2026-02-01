"use client";

import AsciiHeader from "@/components/ui/AsciiHeader";
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

const ABOUT_ASCII = `
 █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗    ███╗   ███╗██████╗ 
██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝    ████╗ ████║██╔══██╗
███████║██████╔╝██║   ██║██║   ██║   ██║       ██╔████╔██║██║  ██║
██╔══██║██╔══██╗██║   ██║██║   ██║   ██║       ██║╚██╔╝██║██║  ██║
██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║       ██║ ╚═╝ ██║██████╔╝
╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝       ╚═╝     ╚═╝╚═════╝ `;

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="container-main relative z-10">
        {/* Section Header */}
        <AsciiHeader text={ABOUT_ASCII} />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Bio */}
          <TerminalWindow title="~/about/bio.md">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <span className="text-accent shrink-0">##</span>
                <span className="text-xl font-bold text-foreground">
                  Who am I?
                </span>
              </div>

              <div className="text-muted leading-relaxed pl-4 sm:pl-6 space-y-4">
                <p>
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

                <p>
                  Currently pursuing my{" "}
                  <span className="text-foreground">
                    BCA at Amity University
                  </span>{" "}
                  (2024-2027) with a CGPA of{" "}
                  <span className="text-green-400">8.96</span>. I build
                  full-stack web applications with a strong focus on backend
                  systems, RESTful APIs, and clean architecture.
                </p>

                <p>
                  I&apos;m currently working with{" "}
                  <span className="text-accent">chati.ai</span> and am always
                  open to new challenges, freelance work, and collaboration
                  opportunities.
                </p>
              </div>

              <div className="pt-4 border-t border-border mt-6">
                <div className="flex items-start sm:items-center gap-2 text-sm">
                  <span className="text-accent shrink-0">❯</span>
                  <span className="text-muted shrink-0">mindset:</span>
                  <span className="text-foreground italic">
                    &quot;Build-to-learn, ready for new challenges&quot;
                  </span>
                </div>
              </div>
            </div>
          </TerminalWindow>

          {/* Quick Skills & Stats Combined */}
          <div className="space-y-6">
            <TerminalWindow title="~/about/skills.sh">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-6 text-sm sm:text-base">
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

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background-dark border border-border rounded-lg p-4 text-center hover:border-accent/50 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Link */}
            <div className="text-center pt-2">
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full sm:w-auto"
              >
                <span>📄</span>
                <span>$ download resume.pdf</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
