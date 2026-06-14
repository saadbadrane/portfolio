import { content } from "@/lib/data";
import ProjectContent from "@/components/ProjectContent";

// Generate static paths for all projects at build time
export function generateStaticParams() {
  // Get all unique slugs from both languages
  const enSlugs = content.en.projects.list.map((p) => p.slug);
  const frSlugs = content.fr.projects.list.map((p) => p.slug);
  const allSlugs = [...new Set([...enSlugs, ...frSlugs])];

  return allSlugs.map((slug) => ({
    slug,
  }));
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  return <ProjectContent slug={slug} />;
}
