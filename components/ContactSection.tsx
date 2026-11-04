"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ContactIllustration } from "./Illustrations";

/* Icônes SVG inline — aucune dépendance externe qui pourrait échouer au
   chargement (le "@" orphelin venait d'une icône non rendue). */
const IconMail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const IconPhone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconLinkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const IconGithub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const IconCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const HEADING =
  "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-violet-500 dark:from-orange-400 dark:to-violet-300";
const CARD =
  "bg-background p-6 rounded-xl border border-orange-600 dark:border-orange-400 shadow-[0_4px_20px_rgba(249,115,22,0.15)] dark:shadow-[0_4px_20px_rgba(251,146,60,0.15)]";
const INPUT =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

export default function ContactSection() {
  const { t } = useLanguage();
  const info = t.personalInfo;
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formspreeId) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="py-20 bg-secondary/10 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={HEADING}>
            {t.contact.title}
          </motion.h2>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className={`max-w-md mx-auto ${CARD}`}>
            <div className="w-32 h-32 mx-auto mb-6"><ContactIllustration /></div>
            <p className="text-xl text-green-600 font-semibold mb-2">{t.contact.successTitle}</p>
            <p className="text-muted-foreground">{t.contact.successMessage}</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-secondary/10 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }} className={HEADING}>
          {t.contact.title}
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-center text-muted-foreground max-w-xl mx-auto mb-4">
          {t.contact.intro}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.15 }} className="flex justify-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500/10 to-violet-500/10 border border-orange-500/30 dark:border-orange-400/30 text-foreground">
            <IconCheck className="h-4 w-4 text-orange-600 dark:text-orange-400" />
            {t.contact.availability}
          </span>
        </motion.div>

        <div
          className={`grid gap-8 items-start mx-auto ${
            formspreeId ? "md:grid-cols-2 max-w-5xl" : "max-w-md"
          }`}
        >
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }} className="space-y-4">
            <a href={`mailto:${info.email}`} className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-orange-400 dark:hover:border-orange-500 bg-background transition-colors group">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-600/10 dark:bg-orange-400/10 flex items-center justify-center">
                <IconMail className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground uppercase tracking-wider">Email</span>
                <span className="block font-medium group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors break-all">{info.email}</span>
              </span>
            </a>

            <a href={`tel:${info.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-orange-400 dark:hover:border-orange-500 bg-background transition-colors group">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600/10 dark:bg-violet-400/10 flex items-center justify-center">
                <IconPhone className="h-5 w-5 text-violet-600 dark:text-violet-400" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground uppercase tracking-wider">Téléphone</span>
                <span className="block font-medium group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{info.phone}</span>
              </span>
            </a>

            <div className="flex gap-3 pt-2">
              <a href={info.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border hover:border-orange-400 dark:hover:border-orange-500 transition-colors text-sm font-medium">
                <IconLinkedin className="h-4 w-4" />LinkedIn
              </a>
              <a href={info.github} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border hover:border-orange-400 dark:hover:border-orange-500 transition-colors text-sm font-medium">
                <IconGithub className="h-4 w-4" />GitHub
              </a>
            </div>

            <div className="hidden md:block pt-4 opacity-90"><ContactIllustration /></div>
          </motion.div>

          {formspreeId && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.2 }} className="w-full">
            <form className={`space-y-6 ${CARD}`} onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none">{t.contact.nameLabel}</label>
                <input id="name" name="name" className={INPUT} placeholder={t.contact.namePlaceholder} required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none">{t.contact.emailLabel}</label>
                <input id="email" type="email" name="email" className={INPUT} placeholder={t.contact.emailPlaceholder} required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none">{t.contact.messageLabel}</label>
                <textarea id="message" name="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder={t.contact.messagePlaceholder} required />
              </div>
              {status === "error" && (<p className="text-sm text-red-500">{t.contact.errorMessage}</p>)}
              <button type="submit" disabled={status === "sending"} className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-orange-600 to-violet-600 hover:from-orange-500 hover:to-violet-500 text-white h-10 px-4 py-2 w-full">
                {status === "sending" ? t.contact.sendingButton : t.contact.sendButton}
              </button>
            </form>
          </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}