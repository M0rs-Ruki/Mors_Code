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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-dark to-background" />
      <div className="absolute inset-0 bg-grid" />

      {/* Decorative Elements */}
      <div className="decorative-box w-20 h-20 top-20 left-10 rotate-45 animate-float" />
      <div
        className="decorative-box w-16 h-16 bottom-40 right-20 rotate-12 animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 container-main text-center">
        {/* Welcome Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-accent/50 rounded-lg mb-8 animate-fadeInUp">
          <span className="text-accent">✦</span>
          <span className="text-muted">Welcome to</span>
          <span className="text-accent font-semibold">Mors Code</span>
        </div>

        {/* ASCII Name */}
        <div
          className="mb-6 animate-fadeInUp"
          style={{ animationDelay: "0.1s" }}
        >
          <pre className="ascii-art text-glow text-[0.35rem] sm:text-[0.5rem] md:text-xs lg:text-sm inline-block">
            {BLOCK_NAME}
          </pre>
        </div>

        {/* Real Name */}
        <h2
          className="text-xl md:text-2xl text-muted font-light tracking-widest mb-8 animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          {profile.name.toUpperCase()}
        </h2>

        {/* Terminal Info Box */}
        <div
          className="inline-block bg-background-dark border border-border rounded-lg px-6 py-4 mb-8 animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex items-center gap-3 text-left">
            <span className="text-accent">❯</span>
            <span className="text-muted">role:</span>
            <Typewriter
              text={profile.role}
              speed={50}
              delay={800}
              className="text-accent font-semibold"
              onComplete={() => setShowStatus(true)}
            />
          </div>

          {showStatus && (
            <div className="flex items-center gap-3 text-left mt-2 animate-fadeInUp">
              <span className="text-accent">❯</span>
              <span className="text-muted">status:</span>
              <Typewriter
                text={profile.status}
                speed={40}
                delay={100}
                className="text-green-400 font-medium"
                onComplete={() => setShowLocation(true)}
              />
            </div>
          )}

          {showLocation && (
            <div className="flex items-center gap-3 text-left mt-2 animate-fadeInUp">
              <span className="text-accent">❯</span>
              <span className="text-muted">location:</span>
              <Typewriter
                text={`${profile.location} 🇮🇳`}
                speed={30}
                delay={100}
                className="text-foreground"
              />
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <a href="#projects" className="btn btn-primary">
            <span>$ ls ./projects</span>
            <span>→</span>
          </a>
          <a href="#contact" className="btn btn-outline">
            <span>$ contact --hire</span>
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-6 animate-fadeInUp"
          style={{ animationDelay: "0.5s" }}
        >
          {socialLinks.slice(0, 4).map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 link"
              aria-label={social.name}
            >
              <span className="text-lg group-hover:scale-110 transition-transform">
                {social.icon}
              </span>
              <span className="text-sm hidden sm:inline">{social.name}</span>
            </a>
          ))}
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-xs">scroll</span>
          <span className="text-accent">↓</span>
        </div>
      </div>
    </section>
  );
}
