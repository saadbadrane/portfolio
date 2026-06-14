"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const TERMINAL_LINES = [
  "Initializing kernel...",
  "Fetching dependencies...",
  "Establishing database connection...",
  "Starting dev server...",
];

const LINE_INTERVAL = 20;
const CHAR_SPEED = 0;

interface TerminalLoaderProps {
  onComplete?: () => void;
}

export default function TerminalLoader({ onComplete }: TerminalLoaderProps) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Type out characters one by one
  useEffect(() => {
    if (lineIndex >= TERMINAL_LINES.length) {
      setDone(true);
      return;
    }

    const line = TERMINAL_LINES[lineIndex];

    if (charIndex < line.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + line[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, CHAR_SPEED);
      return () => clearTimeout(timeout);
    }

    // Line finished typing — pause, then move to next line
    const timeout = setTimeout(() => {
      setVisibleLines((prev) => [...prev, line]);
      setCurrentText("");
      setCharIndex(0);
      setLineIndex((prev) => prev + 1);
    }, LINE_INTERVAL);
    return () => clearTimeout(timeout);
  }, [lineIndex, charIndex]);

  // Blinking cursor
  const cursor = useMemo(
    () => (
      <motion.span
        className="inline-block w-[8px] h-[18px] bg-orange-500 ml-[2px] align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
      />
    ),
    []
  );

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#060a14]"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1, scale: fadeOut ? 1.02 : 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (fadeOut && onComplete) onComplete();
      }}
    >
      {/* Scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(59,130,246,0.03) 0px, rgba(59,130,246,0.03) 1px, transparent 1px, transparent 3px)",
        }}
      />

      {/* Terminal window */}
      <div className="relative w-[90vw] max-w-xl rounded-lg border border-orange-900/60 bg-[#0d1117] shadow-2xl shadow-orange-900/20 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-b border-orange-900/40">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-orange-500/70 font-mono select-none">
            portfolio@dev:~
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-5 font-mono text-sm leading-relaxed min-h-[180px]">
          {/* Completed lines */}
          {visibleLines.map((line, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-orange-700 select-none">❯</span>
              <span className="text-orange-400">{line}</span>
              <span className="text-orange-700/60 text-xs ml-auto select-none">✓</span>
            </div>
          ))}

          {/* Currently typing line */}
          {!done && lineIndex < TERMINAL_LINES.length && (
            <div className="flex items-center gap-2">
              <span className="text-orange-700 select-none">❯</span>
              <span className="text-orange-400">
                {currentText}
                {cursor}
              </span>
            </div>
          )}

          {/* Done — ready */}
          {done && (
            <motion.div
              className="flex items-center gap-2 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              onAnimationComplete={() => {
                // After "Ready." appears, wait a beat then fade out
                setTimeout(() => setFadeOut(true), 100);
              }}
            >
              <span className="text-orange-700 select-none">❯</span>
              <span className="text-violet-400 font-semibold">
                Ready.
              </span>
              {cursor}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
