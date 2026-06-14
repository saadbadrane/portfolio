"use client";

import { useEffect, useState } from "react";
import { useIsMobile } from "./useIsMobile";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const { isLoaded } = useLoading();
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

  const controlsH1 = useAnimation();
  const controlsP = useAnimation();
  const controlsButtons = useAnimation();
  const controlsImage = useAnimation();
  const [hasPlayedInitial, setHasPlayedInitial] = useState(false);

  // Play initial animation after loading screen finishes
  useEffect(() => {
    if (isLoaded && !hasPlayedInitial) {
      setHasPlayedInitial(true);
      controlsH1.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      controlsP.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } });
      controlsButtons.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } });
      controlsImage.start({ opacity: 1, scale: 1, transition: { duration: 0.8 } });
    }
  }, [isLoaded, hasPlayedInitial, controlsH1, controlsP, controlsButtons, controlsImage]);

  const isMobile = useIsMobile();
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex flex-col md:flex-row justify-center items-center px-4 py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/20 scroll-mt-20 gap-8 md:gap-12"
    >
      {isMobile ? (
        <div className="max-w-2xl w-full flex flex-col items-center space-y-8 text-center flex-1 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={controlsH1}
            whileInView={hasPlayedInitial ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl xs:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-violet-500 dark:from-orange-400 dark:to-violet-300 pb-2"
          >
            {t.personalInfo.name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controlsImage}
            whileInView={hasPlayedInitial ? { opacity: 1, scale: 1 } : undefined}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center items-center"
          >
            <div className="relative w-[200px] h-[200px] xs:w-[280px] xs:h-[280px]">
              <Image
                src={`${basePath}/profile.png`}
                alt="Aymane Asserrar"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controlsP}
            whileInView={hasPlayedInitial ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base xs:text-lg text-muted-foreground max-w-[700px] mx-auto"
          >
            {t.personalInfo.profileSummary}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controlsButtons}
            whileInView={hasPlayedInitial ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto"
              tabIndex={0}
            >
              {t.hero.contactMe}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href={`${basePath}/CV_AYMANE_ASSERRAR.pdf`}
              download
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium shadow-sm transition-colors hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 dark:hover:bg-orange-900/30 dark:hover:text-orange-400 dark:hover:border-orange-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto"
              tabIndex={0}
            >
              {t.hero.downloadCv}
              <Download className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      ) : (
        <>
          <div className="max-w-2xl space-y-8 text-center md:text-left flex-1 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={controlsH1}
              whileInView={hasPlayedInitial ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl xs:text-4xl md:text-6xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-violet-500 dark:from-orange-400 dark:to-violet-300 pb-2"
            >
              {t.personalInfo.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={controlsP}
              whileInView={hasPlayedInitial ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base xs:text-lg md:text-xl text-muted-foreground max-w-[700px] mx-auto md:mx-0"
            >
              {t.personalInfo.profileSummary}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controlsButtons}
              whileInView={hasPlayedInitial ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto"
                tabIndex={0}
              >
                {t.hero.contactMe}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href={`${basePath}/CV_SAAD_BADRANE.pdf`}
                download
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium shadow-sm transition-colors hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 dark:hover:bg-orange-900/30 dark:hover:text-orange-400 dark:hover:border-orange-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto"
                tabIndex={0}
              >
                {t.hero.downloadCv}
                <Download className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controlsImage}
            whileInView={hasPlayedInitial ? { opacity: 1, scale: 1 } : undefined}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-[400px] xs:max-w-[500px] relative z-0 flex justify-center items-center"
          >
            <div className="relative w-[200px] h-[200px] xs:w-[280px] xs:h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]">
              <Image
                src={`${basePath}/profile.png`}
                alt="Aymane Asserrar"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
}
