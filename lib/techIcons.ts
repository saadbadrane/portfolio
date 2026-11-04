// Source d'icônes UNIFIÉE : Simple Icons via CDN.
//   https://cdn.simpleicons.org/<slug>  -> SVG monochrome à la couleur de marque.
//
// Règle : toute techno qui possède une icône de marque officielle est mappée
// vers son slug Simple Icons ci-dessous (slugs vérifiés). Toute techno absente
// de cette table (RAG, ViT, UNet, Segmentation, OR-Tools, Gemini, NiceGUI,
// LightGBM, XGBoost, DevContainers, Cloud Run, NLP, SQL...) est un concept sans
// logo officiel : getTechIconUrl renvoie null et le composant l'affiche en
// badge texte stylé. Un onError sur chaque <img> masque en plus toute icône qui
// échouerait à charger, pour ne jamais afficher d'image cassée.

const SIMPLE_ICONS = "https://cdn.simpleicons.org";

// Libellé de techno -> slug Simple Icons (tous vérifiés présents dans simple-icons).
const techIconSlugs: Record<string, string> = {
  // Langages
  Python: "python",
  "C++": "cplusplus",
  "C++17": "cplusplus",
  "C/C++": "cplusplus",
  C: "c",
  JavaScript: "javascript",
  TypeScript: "typescript",
  PHP: "php",
  Bash: "gnubash",

  // IA / ML / Data
  PyTorch: "pytorch",
  "Scikit-learn": "scikitlearn",
  Pandas: "pandas",
  LangChain: "langchain",
  Langchain: "langchain",
  "LangChain (RAG)": "langchain",
  "Hugging Face": "huggingface",
  HuggingFace: "huggingface",
  Pydantic: "pydantic",
  Qdrant: "qdrant",
  "Claude Code": "claude",
  MCP: "modelcontextprotocol",

  // Cloud / MLOps
  GCP: "googlecloud",
  "GCP (Cloud Run, Storage, Scheduler)": "googlecloud",
  "GCP (BigQuery)": "googlecloud",
  "Google BigQuery": "googlecloud",
  "Google Cloud": "googlecloud",
  Docker: "docker",
  "GitLab CI/CD": "gitlab",
  GitLab: "gitlab",
  FastAPI: "fastapi",
  Streamlit: "streamlit",

  // Vision / Graphismes
  OpenCV: "opencv",
  OpenGL: "opengl",
  Qt: "qt",

  // Outils / BDD / OS
  Git: "git",
  Linux: "linux",
  Laravel: "laravel",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
};

/**
 * Renvoie l'URL de l'icône Simple Icons pour une techno donnée,
 * ou null si la techno doit s'afficher en badge texte seul.
 */
export function getTechIconUrl(tech: string): string | null {
  const slug = techIconSlugs[tech];
  return slug ? `${SIMPLE_ICONS}/${slug}` : null;
}
