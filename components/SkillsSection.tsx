"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getTechIconUrl } from "@/lib/techIcons";
import { motion } from "framer-motion";
import { skillsContainerVariants, skillCardVariants, skillBadgeVariants } from "./skillsMotionVariants";

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-violet-500 dark:from-orange-400 dark:to-violet-300"
        >
          {t.skills.title}
        </h2>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
          variants={skillsContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
        >
          {Object.entries(t.skills.list).map(([category, items]) => (
            <motion.div
              key={`skill-cat-${category}`}
              className="group bg-card text-card-foreground rounded-lg border border-orange-600 dark:border-orange-400 shadow-[0_4px_20px_rgba(37,99,235,0.15)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.15)] p-6 transition-colors hover:border-orange-300 dark:hover:border-orange-700"
              variants={skillCardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(37,99,235,0.18)" }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {t.skills.categories[category as keyof typeof t.skills.categories]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => {
                  const iconUrl = getTechIconUrl(skill);
                  return (
                    <motion.span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1 text-sm font-medium transition-colors border-transparent bg-secondary text-secondary-foreground hover:bg-orange-600 hover:text-white dark:hover:bg-orange-400 dark:hover:text-gray-900 cursor-default"
                      variants={skillBadgeVariants}
                      whileHover={{ scale: 1.08, boxShadow: "0 4px 16px rgba(37,99,235,0.18)" }}
                    >
                      {iconUrl && (
                        <img
                          src={iconUrl}
                          alt={`${skill} logo`}
                          className="w-4 h-4 object-contain"
                          loading="lazy"
                        />
                      )}
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 
