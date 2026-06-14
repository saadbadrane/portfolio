import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { getTechIconUrl } from "../lib/techIcons";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  slug: string;
  viewOnGithubLabel?: string;
  viewDetailsLabel?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  slug,
  viewOnGithubLabel = "View on GitHub",
  viewDetailsLabel = "Details",
}: ProjectCardProps) {
  return (
    <div className="group flex flex-col justify-between rounded-lg border border-orange-600 dark:border-orange-400 bg-card text-card-foreground shadow-[0_4px_20px_rgba(37,99,235,0.15)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.15)] transition-all hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] dark:hover:shadow-[0_8px_30px_rgba(96,165,250,0.25)] hover:border-orange-300 dark:hover:border-orange-700 h-full">
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-semibold leading-none tracking-tight group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2">
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
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">{viewOnGithubLabel}</span>
            </Link>
          </div>
        </div>
        <p className="text-foreground">{description}</p>
      </div>

      <div className="p-6 pt-0 mt-auto">
        <div className="flex flex-wrap gap-2">
              {tech.map((t) => {
                const iconUrl = getTechIconUrl(t);
                return (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-orange-600/10 text-orange-600 hover:bg-orange-600/20 dark:bg-orange-400/10 dark:text-orange-400 dark:hover:bg-orange-400/20"
                  >
                    {iconUrl && (
                      <img
                        src={iconUrl}
                        alt={t + ' logo'}
                        className="w-4 h-4 mr-1 tech-icon-float"
                        style={{ display: 'inline-block' }}
                      />
                    )}
                    {t}
                  </span>
                );
              })}
        </div>
      </div>
    </div>
  );
}
