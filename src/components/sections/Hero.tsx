"use client";

import { useState } from "react";
import { Typewriter } from "@/components/ui";
import { profile, socialLinks } from "@/data";

const BLOCK_NAME = `
███╗   ███╗ ██████╗ ██████╗ ███████╗
████╗ ████║██╔═══██╗██╔══██╗██╔════╝
██╔████╔██║██║   ██║██████╔╝███████╗
██║╚██╔╝██║██║   ██║██╔══██╗╚════██║
██║ ╚═╝ ██║╚██████╔╝██║  ██║███████║
╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝`;

export default function Hero() {
  const [showStatus, setShowStatus] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-background text-foreground"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      <div className="relative z-10 container-main text-center">
        {/* Welcome Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground mb-8">
          <span className="text-foreground">✦</span>
          <span className="text-foreground font-bold">Welcome to</span>
          <span className="text-foreground font-bold">Mors Code</span>
        </div>

        {/* ASCII Name */}
        <div
          className="mb-6"
        >
          <pre className="ascii-art text-[0.35rem] sm:text-[0.5rem] md:text-xs lg:text-sm inline-block text-foreground leading-none">
            {BLOCK_NAME}
          </pre>
        </div>

        {/* Real Name */}
        <h2
          className="text-xl md:text-2xl text-foreground font-bold tracking-widest mb-8"
        >
          {profile.name.toUpperCase()}
        </h2>

        {/* Terminal Info Box */}
        <div
          className="inline-block bg-background border-2 border-foreground px-6 py-4 mb-8 text-left min-w-[300px]"
        >
          <div className="flex items-center gap-3">
            <span className="text-foreground font-bold">❯</span>
            <span className="text-foreground font-bold">role:</span>
            <Typewriter
              text={profile.role}
              speed={50}
              delay={800}
              className="text-foreground font-bold"
              onComplete={() => setShowStatus(true)}
            />
          </div>

          {showStatus && (
            <div className="flex items-center gap-3 mt-2">
              <span className="text-foreground font-bold">❯</span>
              <span className="text-foreground font-bold">status:</span>
              <Typewriter
                text={profile.status}
                speed={40}
                delay={100}
                className="text-foreground font-bold"
                onComplete={() => setShowLocation(true)}
              />
            </div>
          )}

          {showLocation && (
            <div className="flex items-center gap-3 mt-2">
              <span className="text-foreground font-bold">❯</span>
              <span className="text-foreground font-bold">location:</span>
              <Typewriter
                text={`${profile.location}`}
                speed={30}
                delay={100}
                className="text-foreground font-bold"
              />
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a href="#projects" className="px-6 py-3 bg-foreground text-background border-2 border-foreground font-bold hover:bg-background hover:text-foreground transition-colors flex items-center gap-2">
            <span>$ ls ./projects</span>
            <span>→</span>
          </a>
          <a href="#contact" className="px-6 py-3 bg-background text-foreground border-2 border-foreground font-bold hover:bg-foreground hover:text-background transition-colors">
            <span>$ contact --hire</span>
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-6"
        >
          {socialLinks.slice(0, 4).map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-foreground hover:underline"
              aria-label={social.name}
            >
              <span className="text-lg">
                {social.icon}
              </span>
              <span className="text-sm hidden sm:inline font-bold">{social.name}</span>
            </a>
          ))}
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2 text-foreground">
          <span className="text-xs font-bold">scroll</span>
          <span className="text-foreground font-bold">↓</span>
        </div>
      </div>
    </section>
  );
}
