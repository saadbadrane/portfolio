"use client";

import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "./ProjectCard";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsSection() {
  const { t } = useLanguage();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.05 });

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
    <section id="projects" className="py-20 scroll-mt-20" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headingControls}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-violet-500 dark:from-orange-400 dark:to-violet-300"
        >
          {t.projects.title}
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate={containerControls}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        >
          {t.projects.list.map((project, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <ProjectCard
                {...project}
                viewOnGithubLabel={t.projects.viewOnGithub}
                viewDetailsLabel={t.projects.viewDetails}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
