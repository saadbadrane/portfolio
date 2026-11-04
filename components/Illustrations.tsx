"use client";

import { motion } from "framer-motion";

export const HeroIllustration = () => {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[500px] mx-auto opacity-90"
    >
      <motion.rect
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        x="50"
        y="80"
        width="300"
        height="240"
        rx="12"
        className="fill-card stroke-border"
        strokeWidth="2"
      />
      {/* Header Bar */}
      <motion.rect
        initial={{ width: 0 }}
        animate={{ width: 300 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        x="50"
        y="80"
        width="300"
        height="32"
        rx="12"
        className="fill-muted/20"
      />
      {/* Window Buttons */}
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        cx="70"
        cy="96"
        r="4"
        fill="#FF5F56"
      />
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6 }}
        cx="86"
        cy="96"
        r="4"
        fill="#FFBD2E"
      />
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7 }}
        cx="102"
        cy="96"
        r="4"
        fill="#27C93F"
      />
      
      {/* Code Lines */}
      <motion.rect
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ delay: 1, duration: 0.5 }}
        x="80"
        y="140"
        width="120"
        height="8"
        rx="4"
        className="fill-primary/60"
      />
      <motion.rect
        initial={{ width: 0 }}
        animate={{ width: 180 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        x="80"
        y="164"
        width="180"
        height="8"
        rx="4"
        className="fill-muted-foreground/40"
      />
      <motion.rect
        initial={{ width: 0 }}
        animate={{ width: 140 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        x="80"
        y="188"
        width="140"
        height="8"
        rx="4"
        className="fill-muted-foreground/40"
      />
      <motion.rect
        initial={{ width: 0 }}
        animate={{ width: 100 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        x="80"
        y="212"
        width="100"
        height="8"
        rx="4"
        className="fill-primary/40"
      />
      
      {/* Floating Elements */}
      <motion.g
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <circle cx="320" cy="160" r="25" className="fill-orange-500/20" />
        <path d="M310 160 L320 170 L335 150" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500" fill="none"/>
      </motion.g>

      <motion.g
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
      >
        <rect x="280" y="240" width="50" height="50" rx="8" className="fill-purple-500/20" />
        <path d="M295 265 L315 265 M305 255 L305 275" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-purple-500" />
      </motion.g>
    </svg>
  );
};

export const ContactIllustration = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[300px] mx-auto"
    >
      {/* Paper plane */}
      <motion.g
        initial={{ x: -40, y: 40, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.path
          d="M30 170 L175 70 L90 120 Z"
          className="fill-orange-500/20 stroke-orange-500"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <motion.path
          d="M90 120 L110 165 L175 70"
          className="fill-orange-400/10 stroke-orange-500"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <motion.path
          d="M90 120 L110 165"
          className="stroke-orange-500"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </motion.g>

      {/* Trail lines */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        d="M20 140 Q50 130 70 135"
        className="stroke-orange-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
        fill="none"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        d="M10 160 Q40 155 55 158"
        className="stroke-orange-300"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
        fill="none"
      />

      {/* Floating dots */}
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        cx="165"
        cy="50"
        r="6"
        className="fill-violet-400/60"
      />
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4, type: "spring" }}
        cx="145"
        cy="38"
        r="4"
        className="fill-orange-400/50"
      />
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.6, type: "spring" }}
        cx="180"
        cy="60"
        r="3"
        className="fill-orange-300/40"
      />

      {/* @ symbol */}
      <motion.text
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 1.3, type: "spring" }}
        x="150"
        y="100"
        className="fill-orange-500"
        fontSize="20"
        fontWeight="bold"
      >
        @
      </motion.text>
    </svg>
  );
};

export const PageBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden opacity-20 pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="page-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" className="fill-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#page-pattern)" />
      </svg>
    </div>
  );
};
