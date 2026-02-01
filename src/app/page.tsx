import {
  Navigation,
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Contact,
  Footer,
} from "@/components";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
