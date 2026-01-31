"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/data";

export default function Navigation() {
  const [activeItem, setActiveItem] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-dark/95 backdrop-blur-md border-b border-border">
      <div className="container-main">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <span className="text-accent text-xl font-bold">❯</span>
            <span className="text-lg font-bold tracking-wider group-hover:text-accent transition-colors">
              MORS
            </span>
            <span className="w-2 h-4 bg-accent animate-blink" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors group
                  ${
                    activeItem === item.label
                      ? "text-accent"
                      : "text-muted hover:text-accent"
                  }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-accent opacity-50 group-hover:opacity-100">
                    $
                  </span>
                  {item.label}
                </span>
                {activeItem === item.label && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted hover:text-accent transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`w-6 h-0.5 bg-current transition-transform ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveItem(item.label);
                  setIsOpen(false);
                }}
                className={`block px-4 py-3 text-sm font-medium transition-colors
                  ${
                    activeItem === item.label
                      ? "text-accent bg-accent/10"
                      : "text-muted hover:text-accent hover:bg-accent/5"
                  }`}
              >
                <span className="text-accent mr-2">$</span>
                {item.command}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
