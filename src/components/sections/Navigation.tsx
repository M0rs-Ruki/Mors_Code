"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/data";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navigation() {
  const [activeItem, setActiveItem] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground h-16 transition-colors">
      <div className="container-main">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <span className="text-foreground text-xl font-bold">❯</span>
            <span className="text-lg font-bold tracking-wider group-hover:underline transition-all">
              MORS
            </span>
            <span className="w-2 h-4 bg-foreground animate-blink" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`relative px-4 py-2 text-sm font-bold transition-colors border-2 border-transparent hover:border-foreground
                    ${
                      activeItem === item.label
                        ? "text-background bg-foreground"
                        : "text-foreground hover:bg-foreground hover:text-background"
                    }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="opacity-100">$</span>
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button - Align right */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground border-2 border-transparent hover:border-foreground transition-all"
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
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-foreground">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveItem(item.label);
                  setIsOpen(false);
                }}
                className={`block px-4 py-3 text-sm font-bold transition-colors border-l-2
                  ${
                    activeItem === item.label
                      ? "text-background bg-foreground border-background"
                      : "text-foreground hover:bg-foreground hover:text-background border-transparent hover:border-foreground"
                  }`}
              >
                <span className="mr-2">$</span>
                {item.command}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
