"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export default function Typewriter({
  text,
  speed = 50,
  delay = 0,
  className = "",
  showCursor = true,
  onComplete,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);
  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  const handleTyping = useCallback(() => {
    if (!started) return;

    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!completedRef.current) {
      completedRef.current = true;
      setTimeout(() => {
        onCompleteRef.current?.();
      }, 0);
    }
  }, [displayText, text, speed, started]);

  useEffect(() => {
    return handleTyping();
  }, [handleTyping]);

  const isComplete = displayText.length === text.length;

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span
          className={`inline-block w-2 h-5 bg-accent ml-1 align-middle ${
            !isComplete ? "animate-blink" : "opacity-0"
          }`}
        >
          &nbsp;
        </span>
      )}
    </span>
  );
}
