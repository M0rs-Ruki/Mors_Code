"use client";

import { useState, FormEvent } from "react";
import { TerminalWindow } from "@/components/ui";
import { profile, socialLinks } from "@/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-background-dark">
      <div className="container-main">
        {/* Section Header */}
        <header className="section-header">
          <div className="section-label">
            <span className="section-line" />
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Contact
            </span>
            <span className="section-line" />
          </div>
          <h2 className="section-title">
            <span className="text-muted">$ mail -s</span>{" "}
            <span className="text-accent">&quot;Hello&quot;</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Have a project in mind? Want to collaborate? Feel free to reach out!
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <TerminalWindow title="~/contact/send-message.sh">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-accent">❯</span>
                  <span>name:</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="Enter your name..."
                  className="input"
                  aria-label="Your name"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-accent">❯</span>
                  <span>email:</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="your@email.com"
                  className="input"
                  aria-label="Your email"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-accent">❯</span>
                  <span>message:</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="input resize-none"
                  aria-label="Your message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">◐</span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>$ send --message</span>
                    <span>→</span>
                  </>
                )}
              </button>

              {submitted && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm flex items-center gap-2">
                  <span>✓</span>
                  <span>Message sent! I&apos;ll get back to you soon.</span>
                </div>
              )}
            </form>
          </TerminalWindow>

          {/* Contact Info */}
          <div className="space-y-6">
            <TerminalWindow title="~/contact/info.json">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-accent">📧</span>
                  <div>
                    <span className="text-muted text-sm">email:</span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="block text-foreground hover:text-accent transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">🌐</span>
                  <div>
                    <span className="text-muted text-sm">website:</span>
                    <a
                      href={profile.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-foreground hover:text-accent transition-colors"
                    >
                      {profile.website.replace("https://", "")}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">📍</span>
                  <div>
                    <span className="text-muted text-sm">location:</span>
                    <span className="block text-foreground">
                      {profile.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">⚡</span>
                  <div>
                    <span className="text-muted text-sm">response_time:</span>
                    <span className="block text-green-400">
                      {profile.responseTime}
                    </span>
                  </div>
                </div>
              </div>
            </TerminalWindow>

            <TerminalWindow title="~/contact/socials.sh">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted mb-4">
                  <span className="text-accent">❯</span>
                  <span>ls -la ./social-links</span>
                </div>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 bg-background border border-border rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl text-accent">{link.icon}</span>
                      <span className="text-foreground group-hover:text-accent transition-colors">
                        {link.name}
                      </span>
                    </div>
                    <span className="text-xs text-muted font-mono hidden sm:block">
                      {link.command}
                    </span>
                  </a>
                ))}
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  );
}
