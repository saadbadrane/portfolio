"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content, Project } from "@/lib/data";
import { getTechIconUrl } from "@/lib/techIcons";
import { Github, ExternalLink, Play, ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Get basePath for production (GitHub Pages)
const basePath =
  process.env.NODE_ENV === "production" ? "/github-portfolio" : "";

const getImagePath = (src: string) => {
  if (src.startsWith("http")) return src;
  return `${basePath}${src}`;
};

interface ProjectContentProps {
  slug: string;
}

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
      document.body.style.overflow = "hidden"; // Prevent background scroll
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

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Project Title */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <div className="flex justify-center gap-3">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-orange-600 dark:border-orange-400 bg-card hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 dark:hover:bg-orange-900/30 dark:hover:text-orange-400 dark:hover:border-orange-700 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>{t.projectPage?.viewLive || "View Live"}</span>
              </Link>
            )}
          </div>
        </div>

        {/* Gallery Section */}
        <section id="gallery" className="group/section max-w-4xl mx-auto mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 transition-colors group-hover/section:text-orange-600 dark:group-hover/section:text-orange-400">
            <span className="w-8 h-8 rounded-full bg-orange-600/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400 flex items-center justify-center text-sm font-bold">
              3
            </span>
            {t.projectPage?.gallery || "Gallery"}
          </h2>
          {project.gallery && project.gallery.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
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
                    alt={
                      image.alt || `${project.title} screenshot ${index + 1}`
                    }
                    fill
                    className="object-cover transition-transform group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/card:opacity-100 transition-opacity text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                      {t.projectPage?.clickToExpand || "Click to expand"}
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
          ) : (
            <div className="p-12 rounded-lg border border-orange-600 dark:border-orange-400 bg-card shadow-[0_4px_20px_rgba(37,99,235,0.15)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.15)] transition-all hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] dark:hover:shadow-[0_8px_30px_rgba(96,165,250,0.25)] hover:border-orange-300 dark:hover:border-orange-700 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-muted flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-muted-foreground/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-muted-foreground">
                {t.projectPage?.noGallery || "No screenshots available yet"}
              </p>
            </div>
          )}
        </section>

        {/* Tech Section */}
        <section id="tech" className="group max-w-4xl mx-auto mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 transition-colors group-hover:text-orange-600 dark:group-hover:text-orange-400">
            <span className="w-8 h-8 rounded-full bg-orange-600/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400 flex items-center justify-center text-sm font-bold">
              2
            </span>
            {t.projectPage?.tech || "Tech"}
          </h2>
          <div className="p-6 rounded-lg border border-orange-600 dark:border-orange-400 bg-card shadow-[0_4px_20px_rgba(37,99,235,0.15)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.15)] transition-all hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] dark:hover:shadow-[0_8px_30px_rgba(96,165,250,0.25)] hover:border-orange-300 dark:hover:border-orange-700">
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
                      />
                    )}
                    {techItem}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        {/* Overview Section - Visual & Animated */}
        <section id="overview" className="group max-w-4xl mx-auto mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 transition-colors group-hover:text-orange-600 dark:group-hover:text-orange-400">
            <span className="w-8 h-8 rounded-full bg-orange-600/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400 flex items-center justify-center text-sm font-bold">
              1
            </span>
            {t.projectPage?.overview || "Overview"}
          </h2>

          {/* Animated Visual Card */}
          <div className="relative rounded-2xl border border-orange-600 dark:border-orange-400 bg-card overflow-hidden shadow-[0_4px_20px_rgba(37,99,235,0.15)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.15)] transition-all hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] dark:hover:shadow-[0_8px_30px_rgba(96,165,250,0.25)] hover:border-orange-300 dark:hover:border-orange-700">

            {/* Animated Gradient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-orange-500/5 dark:bg-orange-400/5 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-violet-500/5 dark:bg-violet-400/5 animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-orange-400/10 dark:bg-orange-300/10 animate-[pulse_4s_ease-in-out_infinite]" />
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-violet-400/10 dark:bg-violet-300/10 animate-[pulse_5s_ease-in-out_infinite_1s]" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8">
              {/* Animated Feature Highlights */}
              {project.features && project.features.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="overview-feature-card group/feature relative p-4 rounded-xl bg-background/60 dark:bg-background/40 backdrop-blur-sm border border-orange-600/10 dark:border-orange-400/10 hover:border-orange-600/40 dark:hover:border-orange-400/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                      style={{
                        animationDelay: `${0.3 + i * 0.1}s`,
                      }}
                    >
                      {/* Animated number indicator */}
                      <div className="flex items-center gap-3 mb-2">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-600/10 dark:bg-orange-400/10 flex items-center justify-center overview-pulse-ring">
                          <span className="text-orange-600 dark:text-orange-400 text-sm font-bold">
                            {i + 1}
                          </span>
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-orange-600/20 to-transparent dark:from-orange-400/20 overview-line-grow" style={{ animationDelay: `${0.5 + i * 0.1}s` }} />
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3 group-hover/feature:text-foreground transition-colors">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Visual Separator with animated dots */}
              <div className="flex items-center justify-center gap-2 py-4">
                <span className="w-2 h-2 rounded-full bg-orange-600/40 dark:bg-orange-400/40 animate-[pulse_2s_ease-in-out_infinite]" />
                <span className="w-2 h-2 rounded-full bg-orange-600/40 dark:bg-orange-400/40 animate-[pulse_2s_ease-in-out_infinite_0.3s]" />
                <span className="w-2 h-2 rounded-full bg-orange-600/40 dark:bg-orange-400/40 animate-[pulse_2s_ease-in-out_infinite_0.6s]" />
              </div>

              {/* Quick Stats Row */}
              <div className="flex flex-wrap justify-center gap-6 text-center">
                <div className="overview-stat-item" style={{ animationDelay: '0.2s' }}>
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 overview-count-up">
                    {project.tech.length}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {language === 'fr' ? 'Technologies' : 'Technologies'}
                  </div>
                </div>
                {project.features && (
                  <div className="overview-stat-item" style={{ animationDelay: '0.4s' }}>
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 overview-count-up">
                      {project.features.length}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      {language === 'fr' ? 'Fonctionnalités' : 'Features'}
                    </div>
                  </div>
                )}
                {project.gallery && (
                  <div className="overview-stat-item" style={{ animationDelay: '0.6s' }}>
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 overview-count-up">
                      {project.gallery.length}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      {language === 'fr' ? 'Captures' : 'Screenshots'}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="group max-w-4xl mx-auto mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 transition-colors group-hover:text-orange-600 dark:group-hover:text-orange-400">
            <span className="w-8 h-8 rounded-full bg-orange-600/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400 flex items-center justify-center text-sm font-bold">
              4
            </span>
            {t.projectPage?.demo || "Demo"}
          </h2>
          <div className="p-6 rounded-lg border border-orange-600 dark:border-orange-400 bg-card shadow-[0_4px_20px_rgba(37,99,235,0.15)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.15)] transition-all hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] dark:hover:shadow-[0_8px_30px_rgba(96,165,250,0.25)] hover:border-orange-300 dark:hover:border-orange-700">
            {project.demoUrl ? (
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <iframe
                  src={project.demoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title={`${project.title} demo`}
                />
              </div>
            ) : project.liveUrl ? (
              <div className="text-center py-12">
                <Play className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">
                  {t.projectPage?.tryLiveDemo || "Try the live demo"}
                </p>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>{t.projectPage?.viewLive || "View Live"}</span>
                </Link>
              </div>
            ) : (
              <div className="text-center py-12">
                <Play className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground">
                  {t.projectPage?.noDemo || "No demo available yet"}
                </p>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 hover:underline"
                >
                  <Github className="h-4 w-4" />
                  <span>
                    {t.projectPage?.checkGithub ||
                      "Check the GitHub repository"}
                  </span>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Back to Projects */}
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-orange-600 dark:border-orange-400 bg-card hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 dark:hover:bg-orange-900/30 dark:hover:text-orange-400 dark:hover:border-orange-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t.projectPage?.backToProjects || "Back to Projects"}</span>
          </Link>
        </div>
      </div>

      {/* Image Lightbox Modal */}
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
            {t.projectPage?.pressEscOrClick ||
              "Press ESC or click anywhere to close"}
          </p>
        </div>
      )}
    </div>
  );
}
