import Link from "next/link";
import { Github, ExternalLink, Lock } from "lucide-react";
import { getTechIconUrl } from "../lib/techIcons";
import type { CodeStatus } from "../lib/data";

interface ProjectMetric {
  value: string;
  label: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  slug: string;
  featured?: boolean;
  codeStatus?: CodeStatus;
  metrics?: ProjectMetric[];
  viewOnGithubLabel?: string;
  viewDetailsLabel?: string;
  /** Libellés traduits du statut du code (infobulle du cadenas) */
  codeLabels?: { proprietary: string; onRequest: string; inProgress: string };
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  slug,
  featured = false,
  codeStatus = "public",
  metrics,
  viewOnGithubLabel = "View on GitHub",
  viewDetailsLabel = "Details",
  codeLabels,
}: ProjectCardProps) {
  const isPublic = codeStatus === "public";
  const codeLabel =
    codeStatus === "proprietary"
      ? codeLabels?.proprietary ?? "Proprietary code"
      : codeStatus === "in-progress"
        ? codeLabels?.inProgress ?? "In development"
        : codeLabels?.onRequest ?? "Code available on request";

  return (
    <div
      className={`group flex flex-col justify-between rounded-lg border bg-card text-card-foreground transition-all h-full ${
        featured
          ? "border-orange-500 dark:border-orange-400 shadow-[0_4px_24px_rgba(249,115,22,0.18)] dark:shadow-[0_4px_24px_rgba(251,146,60,0.18)] hover:shadow-[0_8px_36px_rgba(249,115,22,0.28)] dark:hover:shadow-[0_8px_36px_rgba(251,146,60,0.28)] hover:border-orange-400"
          : "border-border hover:border-orange-300 dark:hover:border-orange-700 shadow-sm hover:shadow-[0_4px_20px_rgba(249,115,22,0.12)]"
      }`}
    >
      <div className={featured ? "p-7 space-y-4" : "p-5 space-y-3"}>
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`font-semibold leading-tight tracking-tight group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors ${
              featured ? "text-2xl" : "text-lg"
            }`}
          >
            {title}
          </h3>

          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href={`/projects/${slug}`}
              className="inline-flex items-center gap-1.5 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors text-xs font-medium"
              title={viewDetailsLabel}
            >
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                <ExternalLink className="relative h-4 w-4" />
              </span>
              <span>{viewDetailsLabel}</span>
            </Link>

            {isPublic ? (
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">{viewOnGithubLabel}</span>
              </Link>
            ) : (
              <span
                className="text-muted-foreground/50"
                title={codeLabel}
                aria-label={codeLabel}
              >
                <Lock className="h-4 w-4" />
              </span>
            )}
          </div>
        </div>

        <p
          className={`text-muted-foreground leading-relaxed ${
            featured ? "text-base" : "text-sm line-clamp-3"
          }`}
        >
          {description}
        </p>

        {/* Métriques — uniquement sur les projets en vedette */}
        {featured && metrics && metrics.length > 0 && (
          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="text-2xl font-bold bg-gradient-to-br from-orange-500 to-violet-600 bg-clip-text text-transparent">
                  {m.value}
                </div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={featured ? "p-7 pt-0 mt-auto" : "p-5 pt-0 mt-auto"}>
        <div className="flex flex-wrap gap-2">
          {(featured ? tech : tech.slice(0, 4)).map((techItem) => {
            const iconUrl = getTechIconUrl(techItem);
            return (
              <span
                key={techItem}
                className="inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-orange-600/10 text-orange-600 hover:bg-orange-600/20 dark:bg-orange-400/10 dark:text-orange-400 dark:hover:bg-orange-400/20"
              >
                {iconUrl && (
                  <img
                    src={iconUrl}
                    alt={techItem + " logo"}
                    className="w-4 h-4 mr-1 tech-icon-float"
                    style={{ display: "inline-block" }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
                {techItem}
              </span>
            );
          })}
          {!featured && tech.length > 4 && (
            <span className="inline-flex items-center rounded-md px-2 py-0.5 text-xs text-muted-foreground">
              +{tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
