import { profile } from "@/data";

const ASCII_LOGO = `
    __  _______  ____  _____
   /  |/  / __ \\/ __ \\/ ___/
  / /|_/ / / / / /_/ /\\__ \\ 
 / /  / / /_/ / _, _/___/ / 
/_/  /_/\\____/_/ |_|/____/  
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background-dark">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted text-sm">
            <span className="text-accent">❯</span>
            <span>Built with</span>
            <span className="text-accent">♥</span>
            <span>by</span>
            <a
              href="https://github.com/M0rs-Ruki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-light transition-colors"
            >
              {profile.alias}
            </a>
          </div>

          <div className="flex items-center gap-2 text-muted text-sm">
            <span className="font-mono">v1.0.0</span>
            <span className="text-border">|</span>
            <span>Next.js + TypeScript + Tailwind</span>
          </div>

          <div className="text-muted text-sm">
            <span>
              © {currentYear} {profile.name}. All rights reserved.
            </span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <pre className="ascii-art opacity-30 text-[0.35rem] sm:text-[0.45rem] inline-block">
            {ASCII_LOGO}
          </pre>
        </div>
      </div>
    </footer>
  );
}
