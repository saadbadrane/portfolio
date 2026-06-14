// Map technology names to their Devicon CDN SVG URLs
// Uses https://devicon.dev/ for well-known technologies

const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const techIconMap: Record<string, string> = {
  // Languages
  Python: `${DEVICON_BASE}/python/python-original.svg`,
  Java: `${DEVICON_BASE}/java/java-original.svg`,
  "Java 17": `${DEVICON_BASE}/java/java-original.svg`,
  Maven: `${DEVICON_BASE}/maven/maven-original.svg`,
  Swagger: `${DEVICON_BASE}/swagger/swagger-original.svg`,
  "C++": `${DEVICON_BASE}/cplusplus/cplusplus-original.svg`,
  C: `${DEVICON_BASE}/c/c-original.svg`,
  "C/C++": `${DEVICON_BASE}/cplusplus/cplusplus-original.svg`,
  JavaScript: `${DEVICON_BASE}/javascript/javascript-original.svg`,
  TypeScript: `${DEVICON_BASE}/typescript/typescript-original.svg`,
  PHP: `${DEVICON_BASE}/php/php-original.svg`,
  Bash: `${DEVICON_BASE}/bash/bash-original.svg`,

  // Frontend
  React: `${DEVICON_BASE}/react/react-original.svg`,
  "Next.js": `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
  "Vue.js": `${DEVICON_BASE}/vuejs/vuejs-original.svg`,
  Angular: `${DEVICON_BASE}/angular/angular-original.svg`,
  "Tailwind CSS": `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
  HTML5: `${DEVICON_BASE}/html5/html5-original.svg`,
  CSS3: `${DEVICON_BASE}/css3/css3-original.svg`,
  Swing: `${DEVICON_BASE}/java/java-original.svg`,
  RxJS: `${DEVICON_BASE}/rxjs/rxjs-original.svg`,
  JSON: `${DEVICON_BASE}/json/json-original.svg`,

  // Backend
  Laravel: `${DEVICON_BASE}/laravel/laravel-original.svg`,
  Symfony: `${DEVICON_BASE}/symfony/symfony-original.svg`,
  Flask: `${DEVICON_BASE}/flask/flask-original.svg`,
  "Spring Boot": `${DEVICON_BASE}/spring/spring-original.svg`,
  "Spring Data JPA": `${DEVICON_BASE}/spring/spring-original.svg`,
  "Node.js": `${DEVICON_BASE}/nodejs/nodejs-original.svg`,
  "Express.js": `${DEVICON_BASE}/express/express-original.svg`,
  "Socket.IO": `${DEVICON_BASE}/socketio/socketio-original.svg`,
  "better-sqlite3": `${DEVICON_BASE}/sqlite/sqlite-original.svg`,

  // Databases
  MySQL: `${DEVICON_BASE}/mysql/mysql-original.svg`,
  PostgreSQL: `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
  MongoDB: `${DEVICON_BASE}/mongodb/mongodb-original.svg`,
  SQLite: `${DEVICON_BASE}/sqlite/sqlite-original.svg`,
  Redis: `${DEVICON_BASE}/redis/redis-original.svg`,
  SQL: `${DEVICON_BASE}/azuresqldatabase/azuresqldatabase-original.svg`,
  H2: `${DEVICON_BASE}/azuresqldatabase/azuresqldatabase-original.svg`,

  // DevOps & Tools
  Docker: `${DEVICON_BASE}/docker/docker-original.svg`,
  Git: `${DEVICON_BASE}/git/git-original.svg`,
  "Git/GitHub": `${DEVICON_BASE}/github/github-original.svg`,
  GitHub: `${DEVICON_BASE}/github/github-original.svg`,
  "GitLab CI/CD": `${DEVICON_BASE}/gitlab/gitlab-original.svg`,
  Linux: `${DEVICON_BASE}/linux/linux-original.svg`,
  Jira: `${DEVICON_BASE}/jira/jira-original.svg`,

  // Graphics
  OpenGL: `${DEVICON_BASE}/opengl/opengl-original.svg`,
  Qt: `${DEVICON_BASE}/qt/qt-original.svg`,
  OpenCV: `${DEVICON_BASE}/opencv/opencv-original.svg`,

  // Cloud
  "GCP (BigQuery)": `${DEVICON_BASE}/googlecloud/googlecloud-original.svg`,
  "Google BigQuery": `${DEVICON_BASE}/googlecloud/googlecloud-original.svg`,
  "Azure (IoT Hub)": `${DEVICON_BASE}/azure/azure-original.svg`,

  // AI / ML / Misc
  LLM: `${DEVICON_BASE}/tensorflow/tensorflow-original.svg`,
  RAG: `${DEVICON_BASE}/azuresqldatabase/azuresqldatabase-original.svg`,
  Langchain: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/LangChain_Logo.svg/1280px-LangChain_Logo.svg.png?_=20250612121153`,
  Dash: `${DEVICON_BASE}/plotly/plotly-original.svg`,

  // Other
  "REST API": `${DEVICON_BASE}/fastapi/fastapi-original.svg`,
  JDBC: `${DEVICON_BASE}/java/java-original.svg`,
  WebSockets: `${DEVICON_BASE}/socketio/socketio-original.svg`,
  Batfish: "https://avatars.githubusercontent.com/u/24584846?s=280&v=4",
  Agile: "https://cdn-icons-png.flaticon.com/128/5271/5271425.png",
  "Agile/Scrum": "https://cdn-icons-png.flaticon.com/128/5271/5271425.png",
  Blade: `${DEVICON_BASE}/laravel/laravel-original.svg`,
  Livewire: `${DEVICON_BASE}/laravel/laravel-original.svg`,
  PhpSpreadsheet: `${DEVICON_BASE}/php/php-original.svg`,
  PHPUnit: `${DEVICON_BASE}/php/php-original.svg`,
  Postman: `${DEVICON_BASE}/postman/postman-original.svg`,
  "REST APIs": `${DEVICON_BASE}/fastapi/fastapi-original.svg`,
  Microservices: "",
  "Machine Learning (LSTM)": `${DEVICON_BASE}/tensorflow/tensorflow-original.svg`,
  "Unit Testing": `${DEVICON_BASE}/junit/junit-original.svg`,
  "System Design": "",
  "Project Management": "",
  Multer: "https://miro.medium.com/v2/1*xN_65YL4_n5pp1k6lozs_A.png",
  // Computer Vision / ML (Saad)
  "Image Processing": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  Segmentation: `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "Mathematical Morphology": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "Object Detection": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "3D Vision": `${DEVICON_BASE}/opengl/opengl-original.svg`,
  "Viola-Jones": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "Computer Vision": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  SVM: `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  LBP: `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "Gabor Filters": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  Gabor: `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "Feature Extraction": `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  "Cross-Validation": `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  Classification: `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  "Machine Learning": `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  "LangChain (RAG)": `https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/LangChain_Logo.svg/1280px-LangChain_Logo.svg.png?_=20250612121153`,
  LangChain: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/LangChain_Logo.svg/1280px-LangChain_Logo.svg.png?_=20250612121153`,
  NLP: `${DEVICON_BASE}/python/python-original.svg`,
  Vision: `${DEVICON_BASE}/opencv/opencv-original.svg`,
  UI: `${DEVICON_BASE}/qt/qt-original.svg`,
  "Vision par Ordinateur": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "Logique de Jeu": `${DEVICON_BASE}/cplusplus/cplusplus-original.svg`,
  "Game Logic": `${DEVICON_BASE}/cplusplus/cplusplus-original.svg`,

  // Graphical Interfaces (Saad)
  JavaFX: `${DEVICON_BASE}/java/java-original.svg`,
  "Event Handling": `${DEVICON_BASE}/qt/qt-original.svg`,
  "Dynamic Visualization": `${DEVICON_BASE}/qt/qt-original.svg`,

  // Tools (Saad)
  GitFlow: `${DEVICON_BASE}/git/git-original.svg`,
  "VS Code": `${DEVICON_BASE}/vscode/vscode-original.svg`,

  // Soft Skills (Saad)
  "Problem Solving": "",
  Teamwork: "",
  Autonomy: "",
  "Technical Curiosity": "",
};

/**
 * Get the icon URL for a given technology name.
 * Returns the URL string or null if no icon is available.
 */
export function getTechIconUrl(tech: string): string | null {
  const url = techIconMap[tech];
  if (url === undefined || url === "") return null;
  return url;
}
