"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-secondary/50 rounded-full p-1">
      {/* Globe icon */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-1 text-muted-foreground"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 2C12 2 8 7 8 12C8 17 12 22 12 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 2C12 2 16 7 16 12C16 17 12 22 12 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M2 12H22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M3.5 7H20.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M3.5 17H20.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          language === "fr"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
        }`}
      >
        EN
      </button>
    </div>
  );
}
