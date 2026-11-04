"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content, Project } from "@/lib/data";
import { getTechIconUrl } from "@/lib/techIcons";
import { Github, ExternalLink, Play, ArrowLeft, X, Lock, FileText, CalendarDays } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Get basePath for production (GitHub Pages)
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const getImagePath = (src: string) => {
  if (src.startsWith("http")) return src;
  return `${basePath}${src}`;
};

interface ProjectContentProps {
  slug: string;
}

/* Styles partagés pour les cartes de section */
const CARD =
  "p-6 rounded-lg border border-orange-600 dark:border-orange-400 bg-card shadow-[0_4px_20px_rgba(249,115,22,0.12)] dark:shadow-[0_4px_20px_rgba(251,146,60,0.12)] transition-all hover:shadow-[0_8px_30px_rgba(249,115,22,0.2)] dark:hover:shadow-[0_8px_30px_rgba(251,146,60,0.2)] hover:border-orange-300 dark:hover:border-orange-700";

const H2 =
  "text-2xl font-semibold mb-6 flex items-center gap-3 transition-colors group-hover:text-orange-600 dark:group-hover:text-orange-400";

const BADGE =
  "w-8 h-8 rounded-full bg-orange-600/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400 flex items-center justify-center text-sm font-bold flex-shrink-0";

export default function ProjectContent({ slug }: ProjectContentProps) {
  const { language } = useLanguage();
  const t = content[language];
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const project = t.projects.list.find((p) => p.slug === slug) as
    | Project
    | undefined;

  if (!project) {
    notFound();
  }

  const hasGallery = !!project.gallery && project.gallery.length > 0;
  const hasDemo = !!project.videoUrl || !!project.demoUrl || !!project.liveUrl;
  const isPublicCode = project.codeStatus === "public";

  // Numérotation dynamique des sections (on ne numérote que ce qui existe)
  let step = 0;
  const next = () => String(++step);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* ---------- Titre + actions ---------- */}
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>

          {project.credits && (
            <p className="text-sm text-muted-foreground mb-5">
              {project.credits}
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-3">
            {isPublicCode ? (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-orange-600 dark:border-orange-400 bg-card hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 dark:hover:bg-orange-900/30 dark:hover:text-orange-400 dark:hover:border-orange-700 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>{t.projects.viewOnGithub}</span>
              </Link>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-muted-foreground/30 text-muted-foreground text-sm">
                <Lock className="h-4 w-4" />
                <span>
                  {project.codeStatus === "proprietary"
                    ? t.projectPage.codeProprietary
                    : project.codeStatus === "in-progress"
                      ? t.projectPage.codeInProgress
                      : t.projectPage.codeOnRequest}
                </span>
              </span>
            )}

            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>{t.projectPage.viewLive}</span>
              </Link>
            )}

            {project.paperUrl && (
              <a
                href={getImagePath(project.paperUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-orange-600 dark:border-orange-400 bg-card hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 dark:hover:bg-orange-900/30 dark:hover:text-orange-400 dark:hover:border-orange-700 transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span>{t.projectPage.readPaper}</span>
              </a>
            )}

            {project.eventUrl && (
              <a
                href={project.eventUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-orange-600 dark:border-orange-400 bg-card hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 dark:hover:bg-orange-900/30 dark:hover:text-orange-400 dark:hover:border-orange-700 transition-colors"
              >
                <CalendarDays className="h-4 w-4" />
                <span>{t.projectPage.eventProgram}</span>
              </a>
            )}
          </div>
        </div>

        {/* ---------- Métriques réelles ---------- */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-center">
              {project.metrics.map((m, i) => (
                <div
                  key={m.label}
                  className="overview-stat-item"
                  style={{ animationDelay: `${0.15 + i * 0.15}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-orange-500 to-violet-600 bg-clip-text text-transparent">
                    {m.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-2">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---------- 1. Le problème ---------- */}
        {project.problem && (
          <section className="group max-w-4xl mx-auto mb-16 scroll-mt-24">
            <h2 className={H2}>
              <span className={BADGE}>{next()}</span>
              {t.projectPage.problem}
            </h2>
            <div className={CARD}>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.problem}
              </p>
            </div>
          </section>
        )}

        {/* ---------- 2. L'approche ---------- */}
        {project.approach && (
          <section className="group max-w-4xl mx-auto mb-16 scroll-mt-24">
            <h2 className={H2}>
              <span className={BADGE}>{next()}</span>
              {t.projectPage.approach}
            </h2>
            <div className={CARD}>
              <p className="text-muted-foreground leading-relaxed">
                {project.approach}
              </p>
            </div>
          </section>
        )}

        {/* ---------- 3. Résultats ---------- */}
        {project.results && (
          <section className="group max-w-4xl mx-auto mb-16 scroll-mt-24">
            <h2 className={H2}>
              <span className={BADGE}>{next()}</span>
              {t.projectPage.results}
            </h2>
            <div className={CARD}>
              <p className="text-muted-foreground leading-relaxed">
                {project.results}
              </p>
            </div>
          </section>
        )}

        {/* ---------- Galerie (masquée si vide) ---------- */}
        {hasGallery && (
          <section
            id="gallery"
            className="group max-w-4xl mx-auto mb-16 scroll-mt-24"
          >
            <h2 className={H2}>
              <span className={BADGE}>{next()}</span>
              {t.projectPage.gallery}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery!.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-lg overflow-hidden border bg-muted group/card cursor-pointer"
                  onClick={() =>
                    setSelectedImage({
                      src: getImagePath(image.src),
                      alt:
                        image.alt || `${project.title} screenshot ${index + 1}`,
                    })
                  }
                >
                  <Image
                    src={getImagePath(image.src)}
                    alt={image.alt || `${project.title} screenshot ${index + 1}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/card:opacity-100 transition-opacity text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                      {t.projectPage.clickToExpand}
                    </span>
                  </div>
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-white text-sm">{image.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------- Fonctionnalités clés ---------- */}
        {project.features && project.features.length > 0 && (
          <section
            id="overview"
            className="group max-w-4xl mx-auto mb-16 scroll-mt-24"
          >
            <h2 className={H2}>
              <span className={BADGE}>{next()}</span>
              {t.projectPage.keyFeatures}
            </h2>

            <div className="relative rounded-2xl border border-orange-600 dark:border-orange-400 bg-card overflow-hidden shadow-[0_4px_20px_rgba(249,115,22,0.12)] dark:shadow-[0_4px_20px_rgba(251,146,60,0.12)] transition-all hover:shadow-[0_8px_30px_rgba(249,115,22,0.2)] dark:hover:shadow-[0_8px_30px_rgba(251,146,60,0.2)] hover:border-orange-300 dark:hover:border-orange-700">
              {/* Fond animé */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-orange-500/5 dark:bg-orange-400/5 animate-[spin_20s_linear_infinite]" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-violet-500/5 dark:bg-violet-400/5 animate-[spin_25s_linear_infinite_reverse]" />
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-orange-400/10 dark:bg-orange-300/10 animate-[pulse_4s_ease-in-out_infinite]" />
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-violet-400/10 dark:bg-violet-300/10 animate-[pulse_5s_ease-in-out_infinite_1s]" />
              </div>

              <div className="relative z-10 p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="overview-feature-card group/feature relative p-4 rounded-xl bg-background/60 dark:bg-background/40 backdrop-blur-sm border border-orange-600/10 dark:border-orange-400/10 hover:border-orange-600/40 dark:hover:border-orange-400/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                      style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-600/10 dark:bg-orange-400/10 flex items-center justify-center overview-pulse-ring">
                          <span className="text-orange-600 dark:text-orange-400 text-sm font-bold">
                            {i + 1}
                          </span>
                        </span>
                        <div
                          className="h-px flex-1 bg-gradient-to-r from-orange-600/20 to-transparent dark:from-orange-400/20 overview-line-grow"
                          style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                        />
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed group-hover/feature:text-foreground transition-colors">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ---------- Stack technique ---------- */}
        <section
          id="tech"
          className="group max-w-4xl mx-auto mb-16 scroll-mt-24"
        >
          <h2 className={H2}>
            <span className={BADGE}>{next()}</span>
            {t.projectPage.tech}
          </h2>
          <div className={CARD}>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((techItem) => {
                const iconUrl = getTechIconUrl(techItem);
                return (
                  <span
                    key={techItem}
                    className="tech-icon-float inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold bg-orange-600/10 text-orange-600 hover:bg-orange-600/20 dark:bg-orange-400/10 dark:text-orange-400 dark:hover:bg-orange-400/20 transition-colors"
                  >
                    {iconUrl && (
                      <img
                        src={iconUrl}
                        alt={`${techItem} logo`}
                        className="w-5 h-5 object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                    {techItem}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- Limites & prochaines étapes ---------- */}
        {project.limitations && (
          <section className="group max-w-4xl mx-auto mb-16 scroll-mt-24">
            <h2 className={H2}>
              <span className={BADGE}>{next()}</span>
              {t.projectPage.limitations}
            </h2>
            <div className="p-6 rounded-lg border-l-4 border-violet-500 dark:border-violet-400 bg-violet-500/5 dark:bg-violet-400/5">
              <p className="text-muted-foreground leading-relaxed">
                {project.limitations}
              </p>
            </div>
          </section>
        )}

        {/* ---------- Démo (masquée si absente) ---------- */}
        {hasDemo && (
          <section
            id="demo"
            className="group max-w-4xl mx-auto mb-16 scroll-mt-24"
          >
            <h2 className={H2}>
              <span className={BADGE}>{next()}</span>
              {t.projectPage.demo}
            </h2>
            <div className={CARD}>
              {project.videoUrl ? (
                <figure className="m-0">
                  <div className="aspect-video rounded-lg overflow-hidden bg-black">
                    <video
                      className="w-full h-full object-contain"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                      poster={
                        project.videoPoster
                          ? getImagePath(project.videoPoster)
                          : undefined
                      }
                    >
                      {project.videoWebm && (
                        <source
                          src={getImagePath(project.videoWebm)}
                          type="video/webm"
                        />
                      )}
                      <source
                        src={getImagePath(project.videoUrl)}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  {project.videoCaption && (
                    <figcaption className="text-sm text-muted-foreground mt-3 text-center">
                      {project.videoCaption}
                    </figcaption>
                  )}
                </figure>
              ) : project.demoUrl ? (
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <iframe
                    src={project.demoUrl}
                    className="w-full h-full"
                    allowFullScreen
                    title={`${project.title} demo`}
                  />
                </div>
              ) : (
                <div className="text-center py-12">
                  <Play className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">
                    {t.projectPage.tryLiveDemo}
                  </p>
                  <Link
                    href={project.liveUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>{t.projectPage.viewLive}</span>
                  </Link>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ---------- Retour ---------- */}
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-orange-600 dark:border-orange-400 bg-card hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 dark:hover:bg-orange-900/30 dark:hover:text-orange-400 dark:hover:border-orange-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t.projectPage.backToProjects}</span>
          </Link>
        </div>
      </div>

      {/* ---------- Lightbox ---------- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {t.projectPage.pressEscOrClick}
          </p>
        </div>
      )}
    </div>
  );
}
