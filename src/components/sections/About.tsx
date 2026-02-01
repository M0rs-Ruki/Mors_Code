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
      className="p-8 bg-background relative overflow-hidden border-t-2 border-foreground"
    >
      <div className="container-main relative z-10">
        {/* Section Header */}
        <AsciiHeader text={ABOUT_ASCII} />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
          {/* Bio */}
          <TerminalWindow title="~/about/bio.md">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <span className="text-foreground shrink-0 font-bold">##</span>
                <span className="text-xl font-bold text-foreground">
                  Who am I?
                </span>
              </div>

              <div className="text-foreground leading-relaxed pl-4 sm:pl-6 space-y-4 font-medium">
                <p>
                  Hey! I&apos;m{" "}
                  <span className="text-foreground font-bold underline">
                    {profile.name}
                  </span>
                  , also known as{" "}
                  <span className="text-foreground font-bold underline">
                    {profile.alias}
                  </span>
                  . I&apos;m a passionate Full Stack MERN Developer from{" "}
                  <span className="text-foreground font-bold">{profile.location}</span>.
                </p>

                <p>
                  Currently pursuing my{" "}
                  <span className="text-foreground font-bold">
                    BCA at Amity University
                  </span>{" "}
                  (2024-2027) with a CGPA of{" "}
                  <span className="text-foreground font-bold">8.96</span>. I build
                  full-stack web applications with a strong focus on backend
                  systems, RESTful APIs, and clean architecture.
                </p>

                <p>
                  I&apos;m currently working with{" "}
                  <span className="text-foreground font-bold underline">chati.ai</span> and am always
                  open to new challenges, freelance work, and collaboration
                  opportunities.
                </p>
              </div>

              <div className="pt-4 border-t-2 border-foreground mt-6">
                <div className="flex items-start sm:items-center gap-2 text-sm">
                  <span className="text-foreground shrink-0 font-bold">❯</span>
                  <span className="text-foreground shrink-0 font-bold">mindset:</span>
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
                  <span className="text-foreground font-bold">❯</span>
                  <span className="text-foreground font-bold">echo</span>
                  <span className="text-foreground font-bold">$CORE_SKILLS</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-background border-2 border-foreground text-foreground font-bold text-xs uppercase hover:bg-foreground hover:text-background transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t-2 border-foreground mt-6">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <span className="font-bold">✓</span>
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
                  className="bg-background border-2 border-foreground p-4 text-center hover:bg-foreground hover:text-background transition-colors group"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-background mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-foreground group-hover:text-background uppercase tracking-wider font-bold">
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
                className="inline-flex w-full sm:w-auto px-6 py-3 bg-background text-foreground border-2 border-foreground font-bold hover:bg-foreground hover:text-background transition-colors items-center justify-center gap-2"
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
