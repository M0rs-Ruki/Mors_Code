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

/* Explicit dark text in light mode so it's always visible */
const text = "text-[#1A1A1A] dark:text-smoke";
const textMuted = "text-[#1A1A1A]/90 dark:text-smoke/90";
const border = "border border-[#1A1A1A]/40 dark:border-smoke/20";
const borderLight = "border-b border-[#1A1A1A]/40 dark:border-smoke/20";

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
      <main className="min-h-screen overflow-x-hidden pb-16 pt-16 sm:pb-24 sm:pt-20">
      {/* Hero – border-b only, code.claude.com style */}
      <header
        className={`${container} ${borderLight} pb-8 pt-6 sm:pb-12 sm:pt-8`}
      >
        <h1 className={`font-serif text-2xl font-semibold tracking-tight ${text} sm:text-3xl md:text-4xl`}>
          {name}
        </h1>
        <span className={`mt-1.5 block font-mono text-xs uppercase leading-snug tracking-tight opacity-90 sm:mt-2 sm:text-sm sm:tracking-widest ${text}`}>
          {role}
        </span>
      </header>

      {/* About */}
      <section className={`${container} ${borderLight} py-8 sm:py-10 lg:py-12`}>
        <h2 className={`font-serif text-lg font-semibold sm:text-xl ${text}`}>
          About
        </h2>
        <p className={`mt-2 font-serif text-sm leading-relaxed sm:mt-3 sm:text-base ${text}`}>
          {bio}
        </p>
      </section>

      {/* Experience – code.claude.com style: clean cards, type badge, dates, bullets */}
      <section className={`${container} ${borderLight} py-8 sm:py-10 lg:py-12`}>
        <h2 className={`font-serif text-lg font-semibold sm:text-xl ${text}`}>
          Experience
        </h2>
        <div className="mt-6 space-y-8 sm:mt-8 sm:space-y-10">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.title}`}
              className={`${border} p-4 transition-colors hover:bg-[#1A1A1A]/5 dark:hover:bg-smoke/5 sm:p-5`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className={`font-serif text-base font-semibold sm:text-lg ${text}`}>
                    {exp.title}
                  </h3>
                  <p className={`mt-0.5 font-mono text-xs sm:text-sm ${textMuted}`}>
                    {exp.company}
                    <span className="ml-1.5 opacity-80">· {exp.type}</span>
                  </p>
                </div>
                <span className={`font-mono text-[11px] sm:text-xs ${textMuted}`}>
                  {exp.startDate} – {exp.endDate} · {exp.duration}
                </span>
              </div>
              <p className={`mt-1.5 font-mono text-[11px] sm:text-xs ${textMuted}`}>
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
                <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className={`flex gap-2 font-serif text-xs leading-relaxed sm:text-sm ${text}`}
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current opacity-70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Project Gallery – 3-col grid, thin borders, hover states */}
      <section className={`${container} py-8 sm:py-10 lg:py-12`}>
        <h2 className={`font-serif text-lg font-semibold sm:text-xl ${text}`}>
          Projects
        </h2>
        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`${border} p-4 transition-colors hover:bg-[#1A1A1A]/5 dark:hover:bg-smoke/5 sm:p-5`}
            >
              <h3 className={`font-serif text-base font-semibold sm:text-lg ${text}`}>
                {project.title}
              </h3>
              <p className={`mt-1.5 font-serif text-xs leading-relaxed sm:mt-2 sm:text-sm ${text}`}>
                {project.description}
              </p>
              <p className={`mt-1.5 font-mono text-[11px] sm:mt-2 sm:text-xs ${textMuted}`}>
                {project.tech}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-3">
                {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1 font-mono text-xs text-accent hover:underline sm:min-h-0 sm:min-w-0 sm:text-sm"
                >
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  Live
                </a>
                )}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1 font-mono text-xs text-accent hover:underline sm:min-h-0 sm:min-w-0 sm:text-sm"
                >
                  <Code2 className="h-3.5 w-3.5 shrink-0" />
                  Repo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills – below Projects */}
      <section className={`${container} ${borderLight} py-8 sm:py-10 lg:py-12`}>
        <h2 className={`font-serif text-lg font-semibold sm:text-xl ${text}`}>
          Skills
        </h2>
        <div className="mt-4 space-y-6 sm:mt-6 sm:space-y-8">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className={`font-mono text-xs font-medium uppercase tracking-wider sm:text-sm ${textMuted} mb-1.5 sm:mb-2`}>
                {cat.title}
              </h3>
              <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                {cat.items.map((skill) => (
                  <li
                    key={skill}
                    className={`font-mono text-xs sm:text-sm ${border} px-2.5 py-2 sm:px-3 sm:py-1.5 ${text}`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className={`${container} pt-6 pb-8 sm:pt-8 sm:pb-10`}>
        <h2 className={`font-serif text-base font-semibold sm:text-lg ${text}`}>
          Contact
        </h2>
        <div className={`mt-3 flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-xs sm:mt-4 sm:text-sm ${text}`}>
          <a
            href={`mailto:${contact.email}`}
            className="flex min-h-[44px] min-w-[44px] items-center gap-2 text-accent hover:underline sm:min-h-0 sm:min-w-0"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span className="break-all">{contact.email}</span>
          </a>
          <span className={`flex items-center gap-2 ${text}`}>
            <MapPin className="h-4 w-4 shrink-0" />
            {contact.location}
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-4">
          <a
            href={contact.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1 font-mono text-xs text-accent hover:underline sm:min-h-0 sm:min-w-0 sm:text-sm"
          >
            <ExternalLink className="h-4 w-4 shrink-0" />
            Portfolio
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1 font-mono text-xs text-accent hover:underline sm:min-h-0 sm:min-w-0 sm:text-sm"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4 shrink-0" />
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1 font-mono text-xs text-accent hover:underline sm:min-h-0 sm:min-w-0 sm:text-sm"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4 shrink-0" />
            LinkedIn
          </a>
          <a
            href={contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1 font-mono text-xs text-accent hover:underline sm:min-h-0 sm:min-w-0 sm:text-sm"
            aria-label="Twitter"
          >
            <Twitter className="h-4 w-4 shrink-0" />
            Twitter
          </a>
          <a
            href={contact.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center font-mono text-xs text-accent hover:underline sm:min-h-0 sm:min-w-0 sm:text-sm"
          >
            LeetCode
          </a>
        </div>
      </footer>
    </main>
    </>
  );
}
