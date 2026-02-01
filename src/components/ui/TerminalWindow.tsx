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
    <div
      className={`rounded-none border-2 border-foreground bg-background ${className}`}
    >
      <div className="flex items-center px-4 py-2 border-b-2 border-foreground bg-background">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full border-2 border-foreground bg-foreground" />
          <div className="w-3 h-3 rounded-full border-2 border-foreground bg-transparent" />
          <div className="w-3 h-3 rounded-full border-2 border-foreground bg-transparent" />
        </div>
        <span className="text-sm text-foreground font-bold ml-3">{title}</span>
      </div>
      <div className="p-4 bg-background">{children}</div>
    </div>
  );
}
