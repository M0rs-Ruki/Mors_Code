"use client";

import { motion } from "framer-motion";

interface AsciiHeaderProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AsciiHeader({
  text,
  className = "",
  delay = 0,
}: AsciiHeaderProps) {
  return (
    <div className={`overflow-hidden mb-8 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay }}
        className="flex justify-center"
      >
        <pre className="ascii-art text-[0.35rem] sm:text-[0.45rem] md:text-xs lg:text-sm leading-none whitespace-pre text-foreground select-none">
          {text}
        </pre>
      </motion.div>
    </div>
  );
}
