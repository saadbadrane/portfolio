"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutSection() {
  const { t } = useLanguage();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  const headingControls = useAnimation();
  const containerControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      headingControls.start({ opacity: 1, y: 0 });
      containerControls.start("show");
    } else {
      headingControls.set({ opacity: 0, y: 20 });
      containerControls.set("hidden");
    }
  }, [isInView, headingControls, containerControls]);

  return (
    <section id="about" className="py-20 bg-secondary/10 scroll-mt-20" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headingControls}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-violet-500 dark:from-orange-400 dark:to-violet-300"
        >
          {t.about.title}
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate={containerControls}
          className="max-w-3xl mx-auto space-y-8 text-lg text-muted-foreground"
        >
          <motion.p variants={item}>
            {t.about.description}
            <span className="font-semibold text-foreground"> {t.about.school}</span>
            {t.about.descriptionEnd}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <motion.div
              variants={item}
              className="group bg-card text-card-foreground p-6 rounded-lg border border-orange-600 dark:border-orange-400 shadow-[0_4px_20px_rgba(37,99,235,0.15)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.15)] transition-colors hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] dark:hover:shadow-[0_8px_30px_rgba(96,165,250,0.25)] hover:border-orange-300 dark:hover:border-orange-700"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{t.about.softSkillsTitle}</h3>
              <ul className="list-disc list-inside space-y-2 marker:text-orange-600 dark:marker:text-orange-400">
                {t.about.softSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={item}
              className="group bg-card text-card-foreground p-6 rounded-lg border border-orange-600 dark:border-orange-400 shadow-[0_4px_20px_rgba(37,99,235,0.15)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.15)] transition-colors hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] dark:hover:shadow-[0_8px_30px_rgba(96,165,250,0.25)] hover:border-orange-300 dark:hover:border-orange-700"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{t.about.educationTitle}</h3>
              <ul className="space-y-4">
                {t.about.education.map((edu) => (
                  <li key={edu.school + edu.degree}>
                    <div className="font-medium text-foreground">{edu.school}</div>
                    <div className="text-sm">{edu.degree}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
