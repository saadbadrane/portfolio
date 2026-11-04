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

  const featured = t.projects.list.filter((p) => p.featured);
  const others = t.projects.list.filter((p) => !p.featured);

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

        {/* ---------- Projets en vedette ---------- */}
        {featured.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={headingControls}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 mb-6 max-w-7xl mx-auto"
            >
              {t.projects.featuredTitle}
            </motion.h3>

            <motion.div
              variants={container}
              initial="hidden"
              animate={containerControls}
              className="grid gap-6 lg:grid-cols-3 max-w-7xl mx-auto mb-16"
            >
              {featured.map((project) => (
                <motion.div
                  key={project.slug}
                  variants={item}
                  className="h-full"
                >
                  <ProjectCard
                    {...project}
                    viewOnGithubLabel={t.projects.viewOnGithub}
                    viewDetailsLabel={t.projects.viewDetails}
                    codeLabels={{
                      proprietary: t.projectPage.codeProprietary,
                      onRequest: t.projectPage.codeOnRequest,
                      inProgress: t.projectPage.codeInProgress,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}

        {/* ---------- Autres projets ---------- */}
        {others.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={headingControls}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6 max-w-7xl mx-auto"
            >
              {t.projects.otherTitle}
            </motion.h3>

            <motion.div
              variants={container}
              initial="hidden"
              animate={containerControls}
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
            >
              {others.map((project) => (
                <motion.div
                  key={project.slug}
                  variants={item}
                  className="h-full"
                >
                  <ProjectCard
                    {...project}
                    viewOnGithubLabel={t.projects.viewOnGithub}
                    viewDetailsLabel={t.projects.viewDetails}
                    codeLabels={{
                      proprietary: t.projectPage.codeProprietary,
                      onRequest: t.projectPage.codeOnRequest,
                      inProgress: t.projectPage.codeInProgress,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
