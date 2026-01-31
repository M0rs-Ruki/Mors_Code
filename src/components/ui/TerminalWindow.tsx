"use client";

import { ReactNode } from "react";

interface TerminalWindowProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export default function TerminalWindow({
  children,
  title = "terminal",
  className = "",
}: TerminalWindowProps) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot terminal-dot--red" />
          <div className="terminal-dot terminal-dot--yellow" />
          <div className="terminal-dot terminal-dot--green" />
        </div>
        <span className="text-sm text-muted ml-3">{title}</span>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
}
