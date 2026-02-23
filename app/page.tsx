import {
  name,
  role,
  bio,
  skillCategories,
  projects,
  experiences,
  contact,
  siteUrl,
} from "@/lib/content";
import {
  Mail,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Code2,
} from "lucide-react";

const container =
  "mx-auto w-full max-w-3xl px-4 sm:px-6 md:px-8 lg:px-12";

/* Section heading – consistent hierarchy */
const sectionTitle =
  "font-serif text-base font-semibold tracking-tight text-[#1A1A1A] dark:text-smoke sm:text-lg";

/* Explicit dark text in light mode so it's always visible */
const text = "text-[#1A1A1A] dark:text-smoke";
const textMuted = "text-[#1A1A1A]/85 dark:text-smoke/85";
const border = "border border-[#1A1A1A]/30 dark:border-smoke/20";
const borderLight = "border-b border-[#1A1A1A]/30 dark:border-smoke/20";

const linkStyle =
  "inline-flex items-center gap-1.5 font-mono text-xs text-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm";

/** JSON-LD structured data for SEO (Person + WebSite). */
function getJsonLd() {
  const skills = skillCategories.flatMap((c) => c.items);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name,
        jobTitle: "Software Developer",
        description: bio,
        email: contact.email,
        address: { "@type": "PostalAddress", addressLocality: contact.location },
        url: siteUrl,
        sameAs: [
          contact.github,
          contact.linkedin,
          contact.twitter,
          contact.portfolio,
        ],
        knowsAbout: skills,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${name} - Software Developer`,
        description: bio,
        author: { "@id": `${siteUrl}/#person` },
      },
    ],
  };
}

export default function Home() {
  const jsonLd = getJsonLd();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen overflow-x-hidden pb-20 pt-20 sm:pb-28 sm:pt-24">
      {/* Hero */}
      <header
        className={`${container} ${borderLight} pb-10 pt-2 sm:pb-14 sm:pt-4`}
      >
        <h1 className={`font-serif text-2xl font-semibold tracking-tight ${text} sm:text-3xl md:text-4xl`}>
          {name}
        </h1>
        <p className={`mt-2 font-mono text-xs uppercase tracking-widest ${textMuted} sm:text-sm`}>
          {role}
        </p>
      </header>

      {/* About */}
      <section id="about" className={`${container} ${borderLight} py-10 sm:py-12 lg:py-14`}>
        <h2 className={`${sectionTitle} ${text}`}>
          About me
        </h2>
        <p className={`mt-4 max-w-2xl font-serif text-sm leading-relaxed ${text} sm:text-base`}>
          {bio}
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className={`${container} ${borderLight} py-10 sm:py-12 lg:py-14`}>
        <h2 className={`${sectionTitle} ${text}`}>
          Experience
        </h2>
        <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.title}`}
              className={`${border} rounded-sm bg-transparent p-5 transition-colors hover:bg-[#1A1A1A]/[0.04] dark:hover:bg-smoke/[0.04] sm:p-6`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className={`font-serif text-lg font-semibold tracking-tight ${text} sm:text-xl`}>
                    {exp.company}
                  </h3>
                  <p className={`mt-1 font-mono text-xs ${textMuted} sm:text-sm`}>
                    {exp.title}
                    <span className="ml-1.5 opacity-75">· {exp.type}</span>
                  </p>
                </div>
                <span className={`font-mono text-[11px] ${textMuted} sm:text-xs`}>
                  {exp.startDate} – {exp.endDate} · {exp.duration}
                </span>
              </div>
              <p className={`mt-2 font-mono text-[11px] ${textMuted} sm:text-xs`}>
                {exp.location} · {exp.workMode}
              </p>
              {exp.skills.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                  {exp.skills.map((skill) => (
                    <li
                      key={skill}
                      className={`font-mono text-[11px] sm:text-xs ${border} px-2 py-1 ${textMuted}`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
              {exp.bullets.length > 0 && (
                <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className={`flex gap-3 font-serif text-sm leading-relaxed ${text} sm:text-[15px]`}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={`${container} py-10 sm:py-12 lg:py-14`}>
        <h2 className={`${sectionTitle} ${text}`}>
          Projects
        </h2>
        <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`${border} rounded-sm bg-transparent p-5 transition-colors hover:bg-[#1A1A1A]/[0.04] dark:hover:bg-smoke/[0.04] sm:p-6`}
            >
              <h3 className={`font-serif text-base font-semibold tracking-tight sm:text-lg ${text}`}>
                {project.title}
              </h3>
              <p className={`mt-2 font-serif text-sm leading-relaxed ${text} sm:text-[15px]`}>
                {project.description}
              </p>
              <p className={`mt-2 font-mono text-[11px] ${textMuted} sm:text-xs`}>
                {project.tech}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 sm:gap-4">
                {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyle}
                >
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  View live
                </a>
                )}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyle}
                >
                  <Code2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  Source code
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className={`${container} ${borderLight} py-10 sm:py-12 lg:py-14`}>
        <h2 className={`${sectionTitle} ${text}`}>
          Skills
        </h2>
        <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className={`font-mono text-xs font-medium uppercase tracking-wider ${textMuted} mb-2 sm:text-sm`}>
                {cat.title}
              </h3>
              <ul className="flex flex-wrap gap-2 sm:gap-2.5">
                {cat.items.map((skill) => (
                  <li
                    key={skill}
                    className={`font-mono text-xs ${border} rounded-sm px-3 py-1.5 sm:text-sm sm:py-2 ${text}`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className={`${container} py-10 pb-12 sm:py-12 sm:pb-16`}>
        <h2 className={`${sectionTitle} ${text}`}>
          Contact
        </h2>
        <div className={`mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-sm ${text} sm:mt-6`}>
          <a
            href={`mailto:${contact.email}`}
            className={`${linkStyle} flex items-center gap-2`}
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            <span className="break-all">{contact.email}</span>
          </a>
          <span className={`flex items-center gap-2 ${textMuted}`}>
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            {contact.location}
          </span>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 sm:mt-8 sm:gap-5">
          <a
            href={contact.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
            Portfolio
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
            aria-label="GitHub"
          >
            <Github className="h-4 w-4 shrink-0" aria-hidden />
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
            LinkedIn
          </a>
          <a
            href={contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
            aria-label="X (Twitter)"
          >
            <Twitter className="h-4 w-4 shrink-0" aria-hidden />
            X
          </a>
          <a
            href={contact.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            LeetCode
          </a>
        </div>
      </footer>
    </main>
    </>
  );
}
