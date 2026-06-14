"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const basePath = process.env.NODE_ENV === 'production' ? '/github-portfolio' : '';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { name: t.nav.home, href: "#hero" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.experience.title, href: "#experience" },
    { name: t.nav.projects, href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    // If element exists on current page, scroll to it
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
      });
      window.history.pushState(null, "", href);
    } else {
      // If not on home page, navigate to home with the hash
      router.push("/" + href);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={`${basePath}/logo-light.png`}
            alt={t.personalInfo.name}
            width={120}
            height={40}
            className="h-10 w-auto dark:hidden"
            priority
          />
          <Image
            src={`${basePath}/logo-dark.png`}
            alt={t.personalInfo.name}
            width={120}
            height={40}
            className="h-10 w-auto hidden dark:block"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href={t.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={t.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t bg-background overflow-hidden"
          >
            <nav className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 mt-2">
              <Link
                href={t.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href={t.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
