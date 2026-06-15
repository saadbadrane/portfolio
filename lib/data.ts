export type Language = "en" | "fr";

export interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  fullDescription?: string;
  liveUrl?: string;
  demoUrl?: string;
  features?: string[];
  gallery?: GalleryImage[];
}

const commonInfo = {
  email: "badranesaad00@gmail.com",
  linkedin: "https://www.linkedin.com/in/saad-badrane-333733191/",
  github: "https://github.com/saadbadrane",
};

const skillsList = {
  languages: ["Python", "SQL", "JavaScript", "Bash", "C++", "Java"],
  mlAi: [
    "LLM",
    "RAG",
    "NLP",
    "Computer Vision",
    "XGBoost",
    "SVM",
    "Scikit-learn",
    "LightGBM",
    "PyTorch",
  ],
  toolsFrameworks: [
    "LangChain",
    "Hugging Face",
    "FastAPI",
    "Streamlit",
    "OpenCV",
    "Docker",
    "Git",
    "CI/CD",
  ],
  cloudMlops: [
    "GCP (Cloud Run, Storage, Scheduler)",
    "Docker",
    "GitLab CI/CD",
    "DevContainers",
    "Qdrant",
    "PostgreSQL",
    "MLOps",
  ],
  softwareEng: [
    "REST APIs",
    "Microservices",
    "Pydantic",
    "Qt",
    "OpenGL",
    "Laravel",
  ],
  maths: ["Optimization", "Statistics", "Linear Algebra", "Graph Theory"],
};

export const content = {
  en: {
    personalInfo: {
      ...commonInfo,
      name: "Saad Badrane",
      profileSummary:
        "Computer Engineer (IMT Saint-Étienne), specialized in Computer Vision & AI — available September 2026. I master R&D algorithmic design in Artificial Intelligence and Computer Vision, along with their industrialization through automated MLOps pipelines on the Cloud. Seeking a permanent role (CDI) as an AI Engineer, Data Scientist, or Software Engineer to bring my technical and analytical skills to ambitious projects.",
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: { contactMe: "Contact Me", downloadCv: "Download CV" },
    about: {
      title: "About Me",
      description:
        "I am a passionate AI & Data engineer with a strong foundation in machine learning, computer vision, and modern software architectures. Currently completing my engineering degree at",
      school: "IMT Saint-Étienne",
      descriptionEnd:
        ", I built strong experience through my apprenticeship at Groupe Casino (AI & MLOps) and ambitious R&D projects. Available September 2026, I am looking for a permanent position where I can deliver end-to-end AI and software solutions.",
      softSkillsTitle: "Soft Skills",
      softSkills: ["Rigor", "Curiosity", "Team Spirit", "Adaptability"],
      educationTitle: "Education",
      education: [
        {
          school: "IMT Saint-Étienne",
          degree: "Engineering Degree — Computer Science & Image (2023-2026)",
        },
        {
          school: "CPGE Ibn Abdoun, Khouribga",
          degree: "Preparatory Classes — Maths & Physics (2021-2023)",
        },
      ],
    },
    skills: {
      title: "My Technical Skills",
      categories: {
        languages: "Programming Languages",
        mlAi: "Machine Learning & AI",
        toolsFrameworks: "Tools & Frameworks",
        cloudMlops: "Cloud & MLOps",
        softwareEng: "Software Engineering",
        maths: "Applied Maths",
      },
      list: skillsList,
    },
    experience: {
      title: "Experience",
      list: [
        {
          company: "Groupe Casino, Saint-Étienne",
          role: "AI & MLOps Engineer — Apprenticeship",
          dates: "Sept. 2025 - Aug. 2026",
          description:
            "Cproboost (MLOps): designed an ML pipeline (LightGBM/RandomForest) processing 10M+ transactions, deployed as a decoupled architecture on GCP (Cloud Run, Cloud Storage, Scheduler) with a Streamlit UI. Merch Intelligence (modular AI & Vision system): built a complete 4-module business architecture combining hybrid planogram generation (Gemini LLM classifier, Python validator, OR-Tools CP-SAT solver) and a photo-audit pipeline (OpenCV metrology coupled with LLM agents).",
        },
        {
          company: "Groupe OCP, Morocco",
          role: "Full-Stack & Data Developer — Internship",
          dates: "May 2024 - June 2024",
          description:
            "End-to-end development of a business application with a graphical interface, database, and ticketing system. Applied solid software practices (MVC architecture, modularization, testing). Web stack: Laravel, PHP, JavaScript with Docker integration.",
        },
      ],
    },
    projectPage: {
      backToProjects: "Back to Projects",
      viewLive: "View Live",
      aboutProject: "About this Project",
      keyFeatures: "Key Features",
      gallery: "Gallery",
      viewDetails: "Details",
      overview: "Key Features",
      demo: "Demo",
      tech: "Tech",
      details: "Details",
      links: "Links",
      tryLiveDemo: "Try the live demo",
      noDemo: "No demo available yet",
      checkGithub: "Check the GitHub repository",
      noGallery: "No screenshots available yet",
      noDetails: "More details coming soon",
      clickToExpand: "Click to expand",
      pressEscOrClick: "Press ESC or click anywhere to close",
    },
    projects: {
      title: "My Projects",
      viewOnGithub: "View on GitHub",
      viewDetails: "Details",
      list: [
        {
          slug: "cproboost",
          title: "Cproboost — AI Recommendation Engine & MLOps",
          description:
            "MLOps recommendation engine processing 10M+ transactions on GCP, with geographic specialization (9 climate zones) and a Streamlit interface for retail strategy.",
          tech: ["Python", "LightGBM", "GCP", "PostgreSQL", "Streamlit", "MLOps"],
          github: "https://github.com/saadbadrane",
          fullDescription: `Cproboost — AI Recommendation Engine & MLOps\n\nA production-grade recommendation system built for retail decision-making, turning 10M+ raw transactions into weekly actionable Top-10 product recommendations adapted to climate and regional specifics.\n\nBusiness Context\nThe system was designed to support store directors in large-scale retail. Each Monday morning, it generates a predictive view that replaces complex manual analysis with an interactive dashboard and confidence scores based on volume, penetration, and sales stability.\n\nTechnical Challenges & Solutions\n- RAM Optimization: intensive use of Python's garbage collector and systematic DataFrame cleanup in memory to avoid OOM crashes on standard compute nodes processing 10M+ rows.\n- Geographic Specialization: instead of a single model, the system trains 9 distinct models (8 climate zones + national). I implemented an --zones argument logic to control training and inference granularly via the terminal.\n- Cloud Decoupling (GCP): the architecture separates the ML compute "factory" (backend) from the user-facing "showcase" (frontend). This isolation ensures that user consultations never impact heavy nighttime computations.\n\nArchitecture\n- Data & ML: training pipeline on 10M+ transactions in PostgreSQL. Modeling via LightGBM / RandomForest with dynamic overfitting management across 9 geographic meshes.\n- MLOps (GCP): decoupled infrastructure — async compute pipelines (Cloud Run Jobs via Cloud Scheduler) and artifact transfer via Cloud Storage.\n- Software Engineering: developed under DevContainers, strict RAM optimization for massive processing, parametrizable CLI (argparse).\n- Data Viz & Business: Streamlit front-end (Cloud Run Service) using a Boost Score algorithm to guide weekly (S+1) commercial strategy.\n\nImpact\nThe tool now provides an automated predictive view every Monday morning, replacing complex manual analyses with an interactive dashboard and confidence scores.`,
          features: [
            "Training pipeline on 10M+ transactions (PostgreSQL)",
            "LightGBM/RandomForest modeling with dynamic overfitting control",
            "9 specialized models (8 climate zones + national)",
            "Decoupled MLOps architecture on GCP (Cloud Run Jobs, Cloud Scheduler, Cloud Storage)",
            "Strict RAM optimization for large-scale processing",
            "Parametrizable CLI (argparse) for granular training/inference control",
            "Streamlit dashboard for weekly retail strategy (S+1)",
            "Boost Score algorithm guiding commercial decisions",
          ],
        },
        {
          slug: "casino-merch-intelligence",
          title: "Casino Merch Intelligence — Hybrid Retail Optimization",
          description:
            "Hybrid AI system orchestrating an LLM classifier (Gemini 2.5 Pro), business-rule validators, and a CP-SAT solver (OR-Tools) for planogram generation, with an OpenCV+LLM anti-hallucination photo audit module.",
          tech: ["Python", "Gemini 2.5", "OR-Tools", "OpenCV", "LangChain", "Pydantic"],
          github: "https://github.com/saadbadrane",
          fullDescription: `Casino Merch Intelligence — Hybrid Retail Optimization System\n\nA large-scale project automating two time-consuming retail category management tasks: planogram design (optimal product placement on shelves) and visual compliance audit in stores. Core principle: reliability — generative AI is not used blindly but framed by deterministic, mathematical guardrails to guarantee decision auditability.\n\nArchitecture & Technical Challenges\nThe system relies on strict decoupling of responsibilities to combine cognitive flexibility with mathematical rigor.\n\n3-Stage Hybrid Generator\n1. An LLM (Gemini 2.5 Pro) classifies catalog products with structured JSON output via Pydantic.\n2. A Python validator corrects the LLM and applies non-negotiable merchandising rules (e.g., heavy products at the bottom).\n3. The OR-Tools CP-SAT solver resolves the spatial placement problem (NoOverlap constraints) by testing a 6-strategy cascade, from ideal "Professional" mode to "Best Effort".\n\nObjective Photo Audit (OpenCV + LLM)\nTo eliminate hallucinations, classical computer vision (OpenCV) runs before the AI. Shelf gaps are measured via edge density and saturation variance, serving as ground truth for 4 specialized LLM agents (Controller, Intruder, Judge, Designer) evaluating compliance.\n\n"Sandwich" Intruder Detector\nTo identify visual discrepancies, an iterative architecture is used: OpenCV detects shelves → Gemini Vision places bounding boxes on products → OpenCV refines these boxes by "snapping" them onto real spatial gradient peaks, correcting the precision gap inherent to multimodal vision models.\n\nImpact\nThe tool transforms complex tasks into a few-second process. It provides teams with total transparency (comparison between optimal calculated strategy and the relaxed strategy retained) and demonstrates that the value of operational AI lies in the architecture that frames and constrains it.`,
          features: [
            "Hybrid generator orchestrating LLM + Python validator + CP-SAT solver",
            "6-strategy adaptive cascade for placement optimization",
            "OpenCV metrology (Sobel, HSV) for objective shelf-gap measurement",
            "4 specialized LLM agents (Controller, Intruder, Judge, Designer)",
            '"Sandwich" architecture (OpenCV → Gemini Vision → OpenCV) for spatial precision',
            "Strict data validation with Pydantic and LangChain orchestration",
            "Interactive NiceGUI interface with transparent strategy reports",
            "Automatic shelf-photo rectification",
          ],
        },
        {
          slug: "lanesight",
          title: "LaneSight — AI-Powered Lane Perception",
          description:
            "Hybrid ViT-UNet model for road lane perception, unifying semantic segmentation, geometric modeling (UFLD), and contextual filtering (YOLO). Reaches 85%+ IoU at 15-20 FPS on CULane.",
          tech: ["Python", "PyTorch", "Vision Transformer", "OpenCV", "YOLO", "Streamlit"],
          github: "https://github.com/saadbadrane",
          fullDescription: `LaneSight — AI-Powered Lane Perception for Real-World Driving\n\nLaneSight was designed to overcome the limitations of classical vision methods under real driving conditions (worn markings, lighting variations, occlusions). This project, co-developed with Walid Benmaarouf, demonstrates a full mastery of the computer vision stack — from architectural design to a web UI.\n\nArchitecture & Technical Innovations\n\nHybridViTUNet Network\nThe architecture uses a CNN encoder coupled with a Vision Transformer (ViT) bottleneck. This approach preserves the local precision of convolutions while gaining global scene understanding through the ViT's self-attention mechanisms.\n\nSecure Fusion Algorithm\nTo prevent false positives (such as misidentifying safety rails as lanes), the system crosses geometric hypotheses from the UFLD model with semantic confidence maps from the ViT (acceptance threshold > 15%). Additional YOLO-based object detection filters and rejects erroneous detections caused by overlapping vehicles.\n\nTraining & Optimization\nTrained on the CULane dataset (133K images). The extreme class imbalance between background and lane lines was resolved via a hybrid custom loss function combining weighted Cross-Entropy and Dice loss.\n\nDeployment & Performance\nStreamlit interface validating real-time video streams (15-20 FPS) with IoU accuracy above 85%, perfectly suited for driver assistance systems.\n\nImpact\nThe model was trained end-to-end successfully despite extreme class imbalance. Deployed on an interactive Streamlit interface (with 2x2 Split comparative visualizations), the unified system reaches 85%+ IoU while maintaining inference fluidity suitable for ADAS systems.`,
          features: [
            "Hybrid ViT-UNet architecture (CNN encoder + ViT bottleneck)",
            "Multi-paradigm inference: semantic segmentation + UFLD + YOLO",
            "Trained on CULane (133K images)",
            "Hybrid loss (weighted Cross-Entropy + Dice) for extreme class imbalance",
            "Real-time Streamlit interface (15-20 FPS)",
            "85%+ IoU accuracy",
            "Secure fusion algorithm preventing false positives",
            "Co-developed with Walid Benmaarouf at IMT Saint-Étienne",
          ],
        },
        {
          slug: "mimestis",
          title: "Mimestis — Enterprise RAG Assistant",
          description:
            "End-to-end RAG enterprise chatbot (academic project for Edumotiv) with documentary ingestion pipeline, semantic vector search, strict guardrails against hallucinations, and a fluid conversational UI.",
          tech: ["Python", "LangChain", "RAG", "Qdrant", "GPT", "Docker"],
          github: "https://github.com/saadbadrane",
          fullDescription: `Mimestis — Enterprise Conversational RAG Assistant\n\nIn large organizations, internal information is often fragmented and hard to access, significantly slowing down employee productivity. Mimestis was designed to solve this by offering a single, intelligent, conversational access point to the enterprise knowledge base. The main challenge wasn't just technological — it was about trust: the system had to provide accurate and secure answers to be adopted daily.\n\nArchitecture & Technical Challenges\n\nIngestion and Vectorization\nRaw internal documents are digested, segmented (intelligent chunking to preserve semantic context), and transformed into vectors (embeddings) stored in a vector database (Qdrant) for ultra-fast search.\n\nRetrieval Precision\nThe main challenge of a RAG system is the relevance of retrieved documents. The search pipeline was optimized to ensure only the most relevant information sources are injected into the generative model's context.\n\nResponse Security\nDeep prompt engineering and security rule implementation were performed. The model is constrained by strict instructions forbidding it from inventing information and requiring it to cite sources, guaranteeing the integrity of answers provided to employees.\n\nTech Stack\n- Python + LangChain pipeline\n- Qdrant vector database\n- Docker containerization\n- Modular orchestration with automated document ingestion\n\nImpact\nMimestis transforms enterprise document search. With a fluid, reactive UI, employees can now get immediate, sourced answers to their operational or HR questions. This project illustrates my ability to deliver an end-to-end AI product, from underlying data engineering to the final user experience.`,
          features: [
            "End-to-end RAG architecture",
            "Documentary ingestion pipeline (parsing, chunking)",
            "Embedding generation and Qdrant vector store",
            "Optimized retrieval for high precision",
            "Strict guardrails against hallucinations",
            "Mandatory source citation in responses",
            "Docker containerization and modular orchestration",
            "Fluid conversational UI focused on productivity",
          ],
        },
        {
          slug: "fraud-detection",
          title: "Bank Fraud Detection — XGBoost & MLOps",
          description:
            "Personal ML project for bank fraud detection with a complete pipeline: preprocessing, training, hyperparameter tuning, and monitoring.",
          tech: ["Python", "XGBoost", "Scikit-learn", "MLOps", "Pandas"],
          github: "https://github.com/saadbadrane",
          fullDescription: `Bank Fraud Detection — XGBoost & MLOps\n\nA personal ML project demonstrating the complete cycle from raw data to a monitored fraud-detection model.\n\nPipeline\n1. Data preprocessing: feature engineering, handling class imbalance (SMOTE / class weights), categorical encoding.\n2. Model training: gradient boosting via XGBoost with cross-validated hyperparameter tuning.\n3. Evaluation: precision/recall on the minority (fraud) class, ROC-AUC, confusion matrix analysis.\n4. Monitoring: tracking metric drift over time to detect concept drift.\n\nGoal\nBuild a complete MLOps cycle on a real-world unbalanced classification problem and master gradient-boosting tuning for high-stakes detection tasks.`,
          features: [
            "Complete ML pipeline (preprocessing → training → monitoring)",
            "Class imbalance handling on a real-world dataset",
            "XGBoost with hyperparameter tuning",
            "Standard fraud-detection metrics (precision/recall/ROC-AUC)",
            "Concept-drift monitoring",
          ],
        },
        {
          slug: "slice-defender",
          title: "Slice Defender — Real-Time AR Game in C++",
          description:
            "End-to-end C++17 pipeline coupling video stream processing (OpenCV), game logic, and native 3D rendering (Qt/OpenGL) at ~30 FPS. Hand tracking without deep learning.",
          tech: ["C++", "Qt", "OpenGL", "OpenCV"],
          github: "https://github.com/saadbadrane",
          fullDescription: `Slice Defender — Real-Time AR Action Game in C++\n\nAn augmented-reality action game where the player uses their own hand as a physical controller to wield a virtual 3D sword and destroy projectiles. The main challenge was designing a high-performance real-time engine "from scratch" in C++17, fusing computer vision, game physics, and graphics rendering into a single execution loop.\n\nArchitecture & Technical Challenges\nThis project required low-level software optimization to guarantee latency-free fluidity (30 FPS).\n\nHand Tracking Without Deep Learning\nTo minimize compute time, the algorithm uses classical vision techniques: YCrCb colorimetric thresholding, morphological filtering, and Distance Transform. A Haar Cascade detector is integrated as a fallback to maintain tracking during sudden lighting changes.\n\nThread Synchronization\nTight, optimized coupling between the Qt event loop (via QTimer) and the OpenCV frame acquisition loop.\n\nPhysics Engine & OpenGL\nNative 3D space via QOpenGLWidget. Implementation of physics logic with projectiles following mathematical trajectories, and a collision-detection system computing Euclidean distance between the sword blade and target hit volumes.\n\nImpact\nThe result is an extremely reactive and stable application. This project demonstrates my ability to develop complex C++ software architectures, manage real-time resource allocation, and bridge the physical environment with virtual space.`,
          features: [
            "Real-time pipeline at ~30 FPS in C++17",
            "Skin-mask extraction (YCrCb), CLAHE, Distance Transform",
            "Haar Cascade fallback for robust tracking",
            "2D-to-3D mathematical projection for sword piloting",
            "Native OpenGL physics engine with cylindrical collision detection",
            "Modular software design: vision / game logic / Qt UI",
            "Qt HUD with score and timer",
          ],
        },
        {
          slug: "hockey-ar",
          title: "HockeyAR — 1v1 Augmented Reality Game",
          description:
            "1v1 multiplayer air-hockey AR game using classical computer vision algorithms for real-time tracking, with optimized control latency.",
          tech: ["Java", "OpenCV", "AR"],
          github: "https://github.com/saadbadrane",
          fullDescription: `HockeyAR — Multiplayer Augmented Reality Game\n\nAn academic project exploring human-machine interaction through augmented reality. Unlike approaches based on heavy Deep Learning models, the goal was to use classical vision algorithms to build an extremely lightweight, fast-to-learn, and above all reactive multiplayer (1v1) game.\n\nArchitecture\n- Real-time object tracking via classical CV techniques.\n- Virtual puck physics modeling (bounces, velocity, collisions) overlaid on the video stream.\n- Strict optimization to suppress any control latency.\n\nUX & Gameplay\nUser-centric design aimed at providing an instantly responsive, easy-to-handle "plug-and-play" experience.\n\nImpact\nThe project validates the use of pragmatic visual engineering for high-frequency use cases (such as tracking a fast-moving puck), proving that a well-thought-out algorithmic architecture can often outperform heavy AI models in real-time user experience.`,
          features: [
            "Real-time object tracking with classical CV",
            "Virtual puck physics modeling overlaid on video stream",
            "Latency optimization for responsive control",
            '"Plug-and-play" user-centric design',
            "1v1 multiplayer gameplay",
          ],
        },
        {
          slug: "age-estimation",
          title: "Age Estimation — Biometric Pipeline",
          description:
            "Facial feature extraction pipeline for age estimation, without deep learning. Robust to lighting variations using LBP, Gabor filters, and SVM.",
          tech: ["Python", "OpenCV", "LBP", "Gabor", "SVM", "Scikit-learn"],
          github: "https://github.com/saadbadrane",
          fullDescription: `Age Estimation — Biometric Estimation Pipeline\n\nIn a context where Computer Vision is dominated by Deep Learning, this project aimed to go back to the fundamentals of 2D signal processing to solve a complex problem: estimating a person's age. The main challenge was building a robust mathematical pipeline able to isolate aging features (geometry, skin textures, wrinkles) from mere shooting perturbations.\n\nPipeline\n1. Face Extraction — via Viola-Jones for fast, reliable detection.\n2. Normalization — LAB color space conversion to reduce illumination dependency.\n3. Feature Extraction — combination of LBP (Local Binary Patterns) and Gabor filters for texture and frequency information.\n4. Classification — SVM trained on extracted descriptors.\n5. Validation — cross-validation to ensure generalization across subjects and lighting conditions.\n\nImpact\nDeveloping this solution required a deep understanding of classical filters, gradients, and feature extractors. It demonstrates my ability to geometrically analyze an image and design reliable algorithms for environments where Deep Learning is not viable (embedded systems with severe hardware constraints).`,
          features: [
            "Viola-Jones face detection",
            "LAB color space normalization for lighting robustness",
            "Texture analysis with Local Binary Patterns (LBP)",
            "Frequency analysis with Gabor filters",
            "SVM classification on combined descriptors",
            "Cross-validation for model evaluation",
            "Approach suited for embedded/constrained environments",
          ],
        },
        {
          slug: "ocp-incidents",
          title: "OCP — Fraud Detection & Incident Management",
          description:
            "Two-month internship at Groupe OCP: bank fraud detection modeling (XGBoost) and full-stack incident management application (Laravel/MySQL).",
          tech: ["Python", "XGBoost", "Laravel", "MySQL"],
          github: "https://github.com/saadbadrane",
          fullDescription: `OCP — Fraud Detection & Incident Management Application\n\nDuring this two-month professional internship (May-June 2024), I led both Data Science and Software Engineering missions. The goal was to secure business processes through anomaly detection and to streamline internal problem resolution with a dedicated business tool.\n\nWork performed\n- Machine Learning & MLOps: experimentation and modeling for bank fraud detection using gradient boosting (XGBoost).\n- Full-Stack Development: end-to-end design of an incident tracking application (Laravel/MySQL backend, HTML/CSS/JS frontend).\n- Software Architecture: complete and secure CRUD system with granular role and permission management.\n- UI/UX Design: centralized admin interface and dynamic, responsive, intuitive user pages.\n\nImpact\nThis experience strengthened my software architecture skills (MVC pattern with Laravel) while addressing model deployment challenges (MLOps). I delivered a functional application with ergonomic interfaces, facilitating daily work for teams and administrators.`,
          features: [
            "Bank fraud detection modeling with XGBoost",
            "Full-stack incident management application",
            "Laravel/MySQL backend with MVC pattern",
            "Secure CRUD system with role/permission management",
            "Centralized admin interface",
            "Dynamic, responsive, intuitive user pages",
            "Two-month internship (May-June 2024)",
          ],
        },
        {
          slug: "sentiment-analysis-airlines",
          title: "Airline Sentiment Analysis & Web Scraping",
          description:
            "Dynamic scraping pipeline collecting reviews from 50+ airlines, NLP sentiment classification engine, and Streamlit interface for dynamic analysis.",
          tech: ["Python", "NLP", "Streamlit", "Pandas"],
          github: "https://github.com/saadbadrane",
          fullDescription: `Airline Sentiment Analysis & Web Scraping\n\nUnstructured textual data is a goldmine for companies. I built a complete data pipeline: from automated web collection (pagination handling, block circumvention) to NLP classification. The Streamlit interface allows a non-technical user to upload their own data and instantly obtain insights on customer satisfaction.\n\nPipeline\n- Data Collection: dynamic scraping scripts extracting, structuring, and exporting (CSV) customer reviews from 50+ airlines.\n- NLP: sentiment analysis engine automatically classifying customer feedback (positive, neutral, negative).\n- UI Deployment: Streamlit app allowing text-file uploads and dynamic analysis of results.`,
          features: [
            "Dynamic scraping with pagination and anti-block handling",
            "Coverage of 50+ airlines",
            "Structured CSV export",
            "NLP sentiment classification (positive/neutral/negative)",
            "Streamlit interface for non-technical users",
            "Custom file uploads for ad-hoc analysis",
          ],
        },
        {
          slug: "movie-recommender",
          title: "Movie Recommender — NLP / KNN",
          description:
            "Recommendation system based on KNN and cosine similarity, with TF-IDF vectorization of movie synopses. Streamlit UI with dynamic recommendations.",
          tech: ["Python", "Scikit-learn", "TF-IDF", "KNN", "Streamlit"],
          github: "https://github.com/saadbadrane",
          fullDescription: `Movie Recommendation Engine — NLP / KNN\n\nThis project illustrates my ability to create personalization engines. By converting free-form text (movie synopses) into mathematical matrices via TF-IDF, I was able to compute vector distances between works. The result is an interactive web application where the user selects a movie and is immediately offered semantically close works, simulating the algorithms used by major streaming platforms.\n\nPipeline\n- Text vectorization of movie synopses with TF-IDF.\n- KNN with cosine similarity to find semantically close movies.\n- Streamlit interface with dynamic display of personalized recommendations.`,
          features: [
            "TF-IDF vectorization of movie synopses",
            "K-Nearest Neighbors with cosine similarity",
            "Dynamic personalized recommendations",
            "Streamlit interface for a fluid UX",
            "Simulates the principle of major streaming platforms",
          ],
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      successTitle: "Message Sent!",
      successMessage:
        "Thanks for reaching out. I'll get back to you as soon as possible.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your.email@example.com",
      messageLabel: "Message",
      messagePlaceholder: "How can I help you?",
      sendButton: "Send Message",
      sendingButton: "Sending...",
    },
    footer: { rights: "All rights reserved." },
  },
  fr: {
    personalInfo: {
      ...commonInfo,
      name: "Saad Badrane",
      profileSummary:
        "Ingénieur Informatique (IMT Saint-Étienne), spécialité Computer Vision & IA — disponible septembre 2026. Je maîtrise la conception R&D algorithmique en Intelligence Artificielle et Computer Vision, ainsi que leur industrialisation via des pipelines MLOps automatisés sur Cloud. À la recherche d'un poste en CDI comme Ingénieur IA, Data Scientist ou Software Engineer pour mettre mes compétences techniques et analytiques au service de projets ambitieux.",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    hero: { contactMe: "Me Contacter", downloadCv: "Télécharger CV" },
    about: {
      title: "À propos de moi",
      description:
        "Je suis un ingénieur IA & Data passionné, avec une solide base en machine learning, vision par ordinateur et architectures logicielles modernes. Actuellement en fin de cursus d'ingénieur à",
      school: "IMT Saint-Étienne",
      descriptionEnd:
        ", j'ai construit une solide expérience via mon alternance chez Groupe Casino (IA & MLOps) et des projets R&D ambitieux. Disponible en septembre 2026, je recherche un poste en CDI où livrer des solutions IA et logicielles de bout en bout.",
      softSkillsTitle: "Soft Skills",
      softSkills: ["Rigueur", "Curiosité", "Esprit d'équipe", "Adaptabilité"],
      educationTitle: "Formation",
      education: [
        {
          school: "IMT Saint-Étienne",
          degree: "Diplôme d'Ingénieur — Informatique & Image (2023-2026)",
        },
        {
          school: "CPGE Ibn Abdoun, Khouribga",
          degree: "Classes Préparatoires — Maths & Physique (2021-2023)",
        },
      ],
    },
    skills: {
      title: "Mes Compétences Techniques",
      categories: {
        languages: "Langages de Programmation",
        mlAi: "Machine Learning & IA",
        toolsFrameworks: "Outils & Frameworks",
        cloudMlops: "Cloud & MLOps",
        softwareEng: "Génie Logiciel",
        maths: "Maths Appliquées",
      },
      list: skillsList,
    },
    experience: {
      title: "Expérience",
      list: [
        {
          company: "Groupe Casino, Saint-Étienne",
          role: "Ingénieur IA & MLOps — Alternance",
          dates: "Sept. 2025 - Août 2026",
          description:
            "Cproboost (MLOps) : conception d'un pipeline ML (LightGBM/RandomForest) traitant +10M de transactions, déployé en architecture découplée sur GCP (Cloud Run, Cloud Storage, Scheduler) avec UI sous Streamlit. Merch Intelligence (système modulaire IA & Vision) : conception d'une architecture métier complète (4 modules) combinant la génération de planogrammes hybride (classifieur LLM Gemini, validateur Python, solveur OR-Tools CP-SAT) et un pipeline d'audit photographique (métrologie OpenCV couplée à des agents LLM).",
        },
        {
          company: "Groupe OCP, Maroc",
          role: "Développeur Full-Stack & Data — Stage",
          dates: "Mai 2024 - Juin 2024",
          description:
            "Développement complet d'une application métier avec interface graphique, base de données et système de tickets. Utilisation de bonnes pratiques logicielles (architecture MVC, modularisation, tests). Stack web : Laravel, PHP, JavaScript avec intégration Docker.",
        },
      ],
    },
    projectPage: {
      backToProjects: "Retour aux Projets",
      viewLive: "Voir en Ligne",
      aboutProject: "À propos de ce Projet",
      keyFeatures: "Fonctionnalités Clés",
      gallery: "Galerie",
      viewDetails: "Détails",
      overview: "Fonctionnalités Clés",
      demo: "Démo",
      tech: "Technologies",
      details: "Détails",
      links: "Liens",
      tryLiveDemo: "Essayer la démo en ligne",
      noDemo: "Pas de démo disponible pour le moment",
      checkGithub: "Voir le dépôt GitHub",
      noGallery: "Pas de captures d'écran disponibles",
      noDetails: "Plus de détails à venir",
      clickToExpand: "Cliquez pour agrandir",
      pressEscOrClick: "Appuyez sur Échap ou cliquez n'importe où pour fermer",
    },
    projects: {
      title: "Mes Projets",
      viewOnGithub: "Voir sur GitHub",
      viewDetails: "Détails",
      list: [
        {
          slug: "cproboost",
          title: "Cproboost — Moteur de Recommandation IA & MLOps",
          description:
            "Moteur de recommandation MLOps traitant +10M de transactions sur GCP, avec spécialisation géographique (9 zones climatiques) et interface Streamlit pour la stratégie retail.",
          tech: ["Python", "LightGBM", "GCP", "PostgreSQL", "Streamlit", "MLOps"],
          github: "https://github.com/saadbadrane",
          fullDescription: `Cproboost — Moteur de Recommandation IA & MLOps\n\nSystème de recommandation industrialisé pour la grande distribution, transformant +10M de transactions brutes en recommandations actionnables hebdomadaires (Top 10 produits à pousser), adaptées aux spécificités climatiques et régionales.\n\nContexte Métier\nConçu pour répondre à un besoin critique d'aide à la décision pour les directeurs de magasins. Chaque lundi matin, l'outil fournit une vision prédictive automatisée remplaçant des analyses manuelles complexes par un tableau de bord interactif et des scores de confiance basés sur le volume, la pénétration et la stabilité des ventes.\n\nDéfis Techniques & Solutions\n- Optimisation de la RAM : utilisation intensive du garbage collector Python et nettoyage systématique des DataFrames pour éviter les crashs (OOM) sur des nœuds de calcul standards traitant +10M de lignes.\n- Spécialisation géographique : au lieu d'un modèle unique, le système entraîne 9 modèles distincts (8 zones climatiques + national). J'ai implémenté une logique d'arguments (--zones) permettant de piloter l'entraînement et l'inférence de manière granulaire via le terminal.\n- Découplage Cloud (GCP) : l'architecture sépare l'usine de calcul (Backend ML) de la vitrine utilisateur (Frontend). Cette isolation garantit que la consultation de l'interface n'impacte jamais les performances des calculs lourds de la nuit.\n\nArchitecture\n- Data & ML : pipeline d'entraînement sur +10M de transactions (PostgreSQL). Modélisation via LightGBM / RandomForest avec gestion dynamique de l'overfitting selon 9 mailles géographiques.\n- MLOps (GCP) : infrastructure découplée — pipelines de calcul en asynchrone (Cloud Run Jobs via Cloud Scheduler) et transfert d'artefacts via Cloud Storage.\n- Software Engineering : développement sous DevContainers, optimisation stricte de la RAM pour les traitements massifs, CLI paramétrable (argparse).\n- Data Viz & Business : interface front-end Streamlit (Cloud Run Service) exploitant un algorithme de Boost Score pour orienter la stratégie commerciale hebdomadaire (S+1).`,
          features: [
            "Pipeline d'entraînement sur +10M de transactions (PostgreSQL)",
            "Modélisation LightGBM/RandomForest avec gestion dynamique de l'overfitting",
            "9 modèles spécialisés (8 zones climatiques + national)",
            "Architecture MLOps découplée sur GCP",
            "Optimisation stricte de la RAM pour traitements à grande échelle",
            "CLI paramétrable (argparse) pour entraînement/inférence granulaires",
            "Tableau de bord Streamlit pour la stratégie retail hebdomadaire (S+1)",
            "Algorithme de Boost Score orientant les décisions commerciales",
          ],
        },
        {
          slug: "casino-merch-intelligence",
          title: "Casino Merch Intelligence — Optimisation Retail Hybride",
          description:
            "Système IA hybride orchestrant un LLM classifieur (Gemini 2.5 Pro), des validateurs de règles métier, et un solveur CP-SAT (OR-Tools) pour la génération de planogrammes, avec audit photo anti-hallucination OpenCV+LLM.",
          tech: ["Python", "Gemini 2.5", "OR-Tools", "OpenCV", "LangChain", "Pydantic"],
          github: "https://github.com/saadbadrane",
          fullDescription: `Casino Merch Intelligence — Système Hybride d'Optimisation Retail\n\nProjet d'envergure visant à automatiser deux tâches chronophages du category management retail : la conception de planogrammes (placement optimal des produits sur les meubles) et l'audit de conformité visuelle en magasin. Principe directeur : la fiabilité — l'IA générative n'est pas utilisée aveuglément, mais encadrée par des garde-fous déterministes et mathématiques pour garantir l'auditabilité des décisions.\n\nArchitecture & Défis Techniques\n\nGénérateur hybride à 3 étages\n1. Un LLM (Gemini 2.5 Pro) classifie les produits du catalogue avec sortie JSON structurée via Pydantic.\n2. Un validateur Python corrige le LLM et applique les règles merchandising non négociables (ex : produits lourds en bas).\n3. Le solveur OR-Tools CP-SAT résout le problème de placement spatial (contraintes NoOverlap) en testant une cascade de 6 stratégies, du mode "Professionnel" idéal au mode "Best Effort".\n\nAudit Photo objectif (OpenCV + LLM)\nPour éliminer les hallucinations, la vision par ordinateur classique (OpenCV) est exécutée avant l'IA. Les trous en rayon sont mesurés via densité de bords et variance de saturation, servant de vérité terrain aux 4 agents LLM (Contrôleur, Intrus, Juge, Designer) qui évaluent la conformité.\n\nDétecteur d'intrus "Sandwich"\nArchitecture itérative : OpenCV détecte les étagères → Gemini Vision place des bounding boxes sur les produits → OpenCV raffine ces boîtes en les "snappant" sur les vrais pics de gradient spatial, corrigeant ainsi le manque de précision inhérent aux modèles de vision multimodaux.\n\nImpact\nL'outil transforme des tâches complexes en processus de quelques secondes. Il fournit une transparence totale et démontre que la valeur d'une IA opérationnelle réside dans l'architecture qui l'encadre et la contraint.`,
          features: [
            "Générateur hybride orchestrant LLM + validateur Python + solveur CP-SAT",
            "Cascade adaptative de 6 stratégies pour l'optimisation de placement",
            "Métrologie OpenCV (Sobel, HSV) pour mesure objective des trous en rayon",
            "4 agents LLM spécialisés (Contrôleur, Intrus, Juge, Designer)",
            'Architecture "sandwich" (OpenCV → Gemini Vision → OpenCV) pour la précision spatiale',
            "Validation stricte des données avec Pydantic et orchestration LangChain",
            "Interface NiceGUI interactive avec rapports de stratégie transparents",
            "Redressement automatique des photos de linéaires",
          ],
        },
        {
          slug: "lanesight",
          title: "LaneSight — Perception de Voies par IA",
          description:
            "Modèle Hybrid ViT-UNet pour la perception de voies routières, unifiant segmentation sémantique, modélisation géométrique (UFLD) et filtrage contextuel (YOLO). Atteint +85% d'IoU à 15-20 FPS sur CULane.",
          tech: ["Python", "PyTorch", "Vision Transformer", "OpenCV", "YOLO", "Streamlit"],
          github: "https://github.com/saadbadrane",
          fullDescription: `LaneSight — Système de Perception de Voies par IA\n\nLaneSight a été conçu pour surmonter les limitations des méthodes de vision classiques face aux conditions réelles de conduite (marquages effacés, variations d'éclairage, occlusions). Ce projet, co-réalisé avec Walid Benmaarouf, démontre une maîtrise complète de la stack de vision par ordinateur, de la conception architecturale jusqu'à l'interface utilisateur web.\n\nArchitecture & Innovations Techniques\n\nRéseau HybridViTUNet\nL'architecture utilise un encodeur CNN couplé à un bottleneck Vision Transformer (ViT). Cette approche permet de conserver la précision locale des convolutions tout en acquérant la compréhension globale de la scène grâce aux mécanismes de Self-Attention du ViT.\n\nAlgorithme de Fusion Sécurisé\nPour éviter les faux positifs (comme l'identification erronée de rails de sécurité), le système croise les hypothèses géométriques du modèle UFLD avec les cartes de confiance sémantique du ViT (seuil d'acceptation > 15%). Une validation supplémentaire par détection d'objets (YOLO) permet de filtrer et rejeter les détections erronées causées par la superposition de véhicules.\n\nEntraînement & Optimisation\nApprentissage sur le dataset CULane (133K images). Résolution du déséquilibre extrême de classes via une fonction de perte combinant Cross-Entropy pondérée et Dice loss.\n\nDéploiement & Performance\nInterface Streamlit validant les flux vidéo en temps réel (15-20 FPS) avec une précision IoU supérieure à 85%, parfaitement adaptée aux systèmes d'assistance à la conduite.\n\nImpact\nLe modèle a été entraîné de bout en bout avec succès malgré le déséquilibre extrême entre l'arrière-plan et les lignes de voies. Déployé sur une interface Streamlit (avec visualisations comparatives en vue Split 2x2), le système unifié atteint une précision de plus de 85% d'IoU tout en maintenant une fluidité d'inférence adaptée aux systèmes ADAS.`,
          features: [
            "Architecture Hybrid ViT-UNet (encodeur CNN + bottleneck ViT)",
            "Inférence multi-paradigme : segmentation sémantique + UFLD + YOLO",
            "Entraînement sur CULane (133K images)",
            "Fonction de perte hybride (Cross-Entropy pondérée + Dice)",
            "Interface Streamlit temps réel (15-20 FPS)",
            "Précision IoU > 85%",
            "Algorithme de fusion sécurisé évitant les faux positifs",
            "Co-développé avec Walid Benmaarouf à l'IMT Saint-Étienne",
          ],
        },
        {
          slug: "mimestis",
          title: "Mimestis — Assistant RAG d'Entreprise",
          description:
            "Chatbot RAG d'entreprise de bout en bout (projet académique pour Edumotiv) avec pipeline d'ingestion documentaire, recherche sémantique vectorielle, garde-fous stricts anti-hallucinations et UI conversationnelle fluide.",
          tech: ["Python", "LangChain", "RAG", "Qdrant", "GPT", "Docker"],
          github: "https://github.com/saadbadrane",
          fullDescription: `Mimestis — Assistant Conversationnel RAG d'Entreprise\n\nDans les grandes organisations, l'information interne est souvent fragmentée et difficile d'accès, ce qui ralentit considérablement la productivité des employés. Mimestis a été conçu pour résoudre ce problème en offrant un point d'accès unique, intelligent et conversationnel à la base de connaissances de l'entreprise. L'enjeu principal n'était pas seulement technologique, mais reposait sur la confiance : le système devait fournir des réponses exactes et sécurisées pour être adopté au quotidien.\n\nArchitecture & Défis Techniques\n\nIngestion et Vectorisation\nLes documents internes bruts sont digérés, segmentés (chunking intelligent pour préserver le contexte sémantique) et transformés en vecteurs (embeddings) stockés dans une base de données vectorielle (Qdrant) pour une recherche ultrarapide.\n\nPrécision du Retrieval\nLe défi majeur d'un système RAG est la pertinence des documents remontés. Le pipeline de recherche a été optimisé pour s'assurer que seules les sources d'information les plus pertinentes sont injectées dans le contexte du modèle génératif.\n\nSécurisation des Réponses\nUn travail approfondi de prompt engineering et d'implémentation de règles de sécurité a été réalisé. Le modèle est contraint par des instructions strictes lui interdisant d'inventer des informations et l'obligeant à citer ses sources.\n\nImpact\nMimestis transforme l'expérience de recherche documentaire en entreprise. Grâce à une interface fluide et réactive, les employés peuvent désormais obtenir des réponses immédiates et sourcées à leurs questions opérationnelles ou RH.`,
          features: [
            "Architecture RAG de bout en bout",
            "Pipeline d'ingestion documentaire (parsing, chunking)",
            "Génération d'embeddings et vector store Qdrant",
            "Retrieval optimisé pour une haute précision",
            "Garde-fous stricts anti-hallucinations",
            "Citation obligatoire des sources dans les réponses",
            "Conteneurisation Docker et orchestration modulaire",
            "UI conversationnelle fluide centrée sur la productivité",
          ],
        },
        {
          slug: "fraud-detection",
          title: "Détection de fraude bancaire — XGBoost & MLOps",
          description:
            "Projet personnel de ML pour la détection de fraude bancaire avec pipeline complet : prétraitement, entraînement, tuning des hyperparamètres et monitoring.",
          tech: ["Python", "XGBoost", "Scikit-learn", "MLOps", "Pandas"],
          github: "https://github.com/saadbadrane",
          fullDescription: `Détection de fraude bancaire — XGBoost & MLOps\n\nProjet personnel de ML démontrant le cycle complet de la donnée brute au modèle de détection de fraude monitoré.\n\nPipeline\n1. Prétraitement des données : feature engineering, gestion du déséquilibre de classes (SMOTE / class weights), encodage des catégorielles.\n2. Entraînement : gradient boosting via XGBoost avec tuning des hyperparamètres par validation croisée.\n3. Évaluation : précision/rappel sur la classe minoritaire (fraude), ROC-AUC, analyse de la matrice de confusion.\n4. Monitoring : suivi de la dérive des métriques dans le temps pour détecter le concept drift.\n\nObjectif\nConstruire un cycle MLOps complet sur un problème réel de classification déséquilibrée et maîtriser le tuning de gradient boosting pour des tâches à enjeux.`,
          features: [
            "Pipeline ML complet (prétraitement → entraînement → monitoring)",
            "Gestion du déséquilibre de classes sur dataset réel",
            "XGBoost avec tuning des hyperparamètres",
            "Métriques standards de détection de fraude (precision/recall/ROC-AUC)",
            "Monitoring du concept drift",
          ],
        },
        {
          slug: "slice-defender",
          title: "Slice Defender — Jeu AR Temps Réel en C++",
          description:
            "Pipeline C++17 de bout en bout couplant traitement de flux vidéo (OpenCV), logique de jeu et rendu 3D natif (Qt/OpenGL) à ~30 FPS. Tracking de main sans deep learning.",
          tech: ["C++", "Qt", "OpenGL", "OpenCV"],
          github: "https://github.com/saadbadrane",
          fullDescription: `Slice Defender — Jeu d'Action AR Temps Réel en C++\n\nJeu d'action en réalité augmentée où le joueur utilise sa propre main comme contrôleur physique pour manier une épée virtuelle en 3D et détruire des projectiles. Le défi principal consistait à concevoir un moteur temps réel performant "from scratch" en C++17, en fusionnant la vision par ordinateur, la physique de jeu et le rendu graphique au sein d'une même boucle d'exécution logicielle.\n\nArchitecture & Défis Techniques\nCe projet a exigé une optimisation logicielle de bas niveau pour garantir une fluidité sans latence (30 FPS).\n\nTracking de main sans Deep Learning\nPour minimiser le temps de calcul, l'algorithme utilise des techniques de vision classiques : seuillage colorimétrique YCrCb, filtrage morphologique, et Distance Transform. Une détection Haar Cascade est intégrée en solution de secours (fallback) pour maintenir le tracking face aux changements brutaux de luminosité.\n\nSynchronisation des Threads\nImplémentation d'un couplage serré et optimisé entre la boucle d'événements de l'interface Qt (via QTimer) et la boucle d'acquisition des frames OpenCV.\n\nMoteur Physique & OpenGL\nCréation d'un espace 3D natif via QOpenGLWidget. Implémentation de la logique physique avec des projectiles suivant des trajectoires mathématiques, et un système de détection de collisions calculant la distance euclidienne entre la lame de l'épée et le volume de frappe des cibles.\n\nImpact\nLe résultat est une application extrêmement réactive et stable. Ce projet démontre ma capacité à développer des architectures logicielles complexes en C++, à gérer l'allocation des ressources en temps réel, et à lier l'environnement physique à l'espace virtuel.`,
          features: [
            "Pipeline temps réel à ~30 FPS en C++17",
            "Extraction de masque de peau (YCrCb), CLAHE, Distance Transform",
            "Haar Cascade en fallback pour la robustesse",
            "Projection mathématique 2D vers 3D pour le pilotage du sabre",
            "Moteur physique OpenGL natif avec détection de collisions cylindriques",
            "Architecture logicielle modulaire : vision / logique de jeu / UI Qt",
            "HUD Qt avec score et minuterie",
          ],
        },
        {
          slug: "hockey-ar",
          title: "HockeyAR — Jeu en Réalité Augmentée 1v1",
          description:
            "Jeu d'Air Hockey en réalité augmentée 1v1 exploitant des algorithmes de vision classiques pour le suivi en temps réel, avec optimisation stricte de la latence de contrôle.",
          tech: ["Java", "OpenCV", "AR"],
          github: "https://github.com/saadbadrane",
          fullDescription: `HockeyAR — Jeu Multijoueur en Réalité Augmentée\n\nProjet académique visant à explorer les capacités d'interaction humain-machine à travers la réalité augmentée. Contrairement aux approches basées sur de lourds modèles de Deep Learning, l'objectif ici était d'utiliser des algorithmes de vision classiques pour construire un jeu multijoueur (1v1) extrêmement léger, rapide à apprendre et surtout réactif en jeu.\n\nArchitecture\n- Suivi d'objets en temps réel via techniques de vision classiques.\n- Modélisation de la physique du palet virtuel (rebonds, vélocité, collisions) en superposition sur le flux vidéo.\n- Optimisation stricte pour supprimer toute latence de contrôle.\n\nUX & Gameplay\nConception orientée utilisateur visant à fournir une expérience "plug-and-play" instantanément réactive et facile à prendre en main.\n\nImpact\nLe projet valide l'utilisation de l'ingénierie visuelle pragmatique pour des cas d'usage nécessitant de la haute fréquence (comme le suivi d'un palet à grande vitesse).`,
          features: [
            "Suivi d'objets en temps réel via vision classique",
            "Modélisation physique du palet virtuel en superposition vidéo",
            "Optimisation de la latence pour un contrôle réactif",
            'Design orienté UX "plug-and-play"',
            "Gameplay multijoueur 1v1",
          ],
        },
        {
          slug: "age-estimation",
          title: "Estimation d'âge — Pipeline Biométrique",
          description:
            "Pipeline d'extraction de caractéristiques faciales pour l'estimation de l'âge, sans deep learning. Robuste aux variations d'éclairage via LBP, Gabor et SVM.",
          tech: ["Python", "OpenCV", "LBP", "Gabor", "SVM", "Scikit-learn"],
          github: "https://github.com/saadbadrane",
          fullDescription: `Estimation d'âge — Pipeline Biométrique\n\nDans un contexte où la Computer Vision est dominée par le Deep Learning, ce projet visait à revenir aux fondamentaux du traitement du signal 2D pour résoudre un problème complexe : estimer l'âge d'un individu. Le défi principal consistait à construire un pipeline mathématique robuste capable d'isoler les caractéristiques du vieillissement (géométrie, textures cutanées, rides) des simples perturbations de la prise de vue.\n\nPipeline\n1. Extraction du visage — via Viola-Jones pour une détection rapide et fiable.\n2. Normalisation — conversion en espace colorimétrique LAB pour réduire la dépendance à l'éclairage.\n3. Extraction de descripteurs — combinaison de LBP (Local Binary Patterns) et de filtres de Gabor pour capturer texture et fréquence.\n4. Classification — SVM entraîné sur les descripteurs extraits.\n5. Validation — validation croisée pour assurer la généralisation entre sujets et conditions d'éclairage.\n\nImpact\nLe développement de cette solution a nécessité une profonde compréhension des filtres, des gradients et des extracteurs de caractéristiques classiques. Il démontre ma capacité à analyser géométriquement une image et à concevoir des algorithmes fiables pour des environnements où l'utilisation du Deep Learning n'est pas viable (systèmes embarqués sous contraintes matérielles sévères).`,
          features: [
            "Détection de visage via Viola-Jones",
            "Normalisation dans l'espace colorimétrique LAB",
            "Analyse de texture avec Local Binary Patterns (LBP)",
            "Analyse fréquentielle avec filtres de Gabor",
            "Classification SVM sur descripteurs combinés",
            "Validation croisée pour l'évaluation du modèle",
            "Approche adaptée aux environnements embarqués/contraints",
          ],
        },
        {
          slug: "ocp-incidents",
          title: "OCP — Détection de Fraude & Gestion d'Incidents",
          description:
            "Stage de deux mois au Groupe OCP : modélisation de détection de fraude bancaire (XGBoost) et application full-stack de gestion d'incidents (Laravel/MySQL).",
          tech: ["Python", "XGBoost", "Laravel", "MySQL"],
          github: "https://github.com/saadbadrane",
          fullDescription: `OCP — Détection de Fraude & Application de Gestion d'Incidents\n\nLors de ce stage professionnel de deux mois (Mai-Juin 2024), j'ai mené de front des missions de Data Science et d'Ingénierie Logicielle. L'objectif était d'une part de sécuriser les processus métier via la détection d'anomalies, et d'autre part de fluidifier la résolution des problèmes internes grâce à un outil métier dédié.\n\nTravail réalisé\n- Machine Learning & MLOps : expérimentation et modélisation pour la détection de fraude bancaire à l'aide de gradient boosting (XGBoost).\n- Développement Full Stack : conception de A à Z d'une application de suivi d'incidents (Back-end Laravel / MySQL, Front-end HTML/CSS/JS).\n- Architecture Logicielle : système CRUD complet et sécurisé avec gestion granulaire des rôles et permissions.\n- UI/UX Design : interface d'administration centralisée et pages utilisateurs dynamiques, responsives et intuitives.\n\nImpact\nCette expérience m'a permis de consolider mes compétences en architecture logicielle (pattern MVC avec Laravel) tout en abordant les problématiques de mise en production de modèles (MLOps). J'ai livré une application fonctionnelle dotée d'interfaces ergonomiques, facilitant le travail quotidien des équipes et des administrateurs.`,
          features: [
            "Modélisation de détection de fraude bancaire avec XGBoost",
            "Application full-stack de gestion d'incidents",
            "Backend Laravel/MySQL avec pattern MVC",
            "Système CRUD sécurisé avec gestion des rôles/permissions",
            "Interface d'administration centralisée",
            "Pages utilisateurs dynamiques, responsives et intuitives",
            "Stage de deux mois (Mai-Juin 2024)",
          ],
        },
        {
          slug: "sentiment-analysis-airlines",
          title: "Analyse de Sentiments — Avis Aériens",
          description:
            "Pipeline de scraping dynamique récupérant les avis de +50 compagnies aériennes, moteur NLP de classification de sentiments, interface Streamlit pour l'analyse dynamique.",
          tech: ["Python", "NLP", "Streamlit", "Pandas"],
          github: "https://github.com/saadbadrane",
          fullDescription: `Analyse de Sentiments et Scraping (Avis Aériens)\n\nLa donnée textuelle non structurée est une mine d'or pour les entreprises. J'ai construit un pipeline de données complet : de la collecte automatisée sur le web (gestion de la pagination, contournement des blocages) jusqu'à la classification NLP. L'interface Streamlit permet à un utilisateur non-technique d'uploader ses propres données pour obtenir instantanément des insights sur la satisfaction client.\n\nPipeline\n- Data Collection : scripts de scraping dynamiques extrayant, structurant et exportant (CSV) les avis clients de +50 compagnies aériennes.\n- NLP : moteur d'analyse de sentiments classifiant automatiquement les retours clients (positif, neutre, négatif).\n- Déploiement UI : application Streamlit permettant le chargement de fichiers textuels et l'analyse dynamique des résultats.`,
          features: [
            "Scraping dynamique avec gestion de pagination et anti-blocage",
            "Couverture de +50 compagnies aériennes",
            "Export structuré en CSV",
            "Classification NLP des sentiments (positif/neutre/négatif)",
            "Interface Streamlit pour utilisateurs non-techniques",
            "Upload de fichiers personnalisés pour analyse à la demande",
          ],
        },
        {
          slug: "movie-recommender",
          title: "Recommandation de Films — NLP / KNN",
          description:
            "Système de recommandation basé sur l'algorithme KNN et la similarité cosinus, avec vectorisation TF-IDF des synopsis de films. UI Streamlit avec recommandations dynamiques.",
          tech: ["Python", "Scikit-learn", "TF-IDF", "KNN", "Streamlit"],
          github: "https://github.com/saadbadrane",
          fullDescription: `Moteur de Recommandation de Films — NLP / KNN\n\nCe projet illustre ma capacité à créer des moteurs de personnalisation. En convertissant du texte libre (les synopsis de films) en matrices mathématiques via TF-IDF, j'ai pu calculer les distances vectorielles entre les œuvres. Le résultat est une application Web interactive où l'utilisateur sélectionne un film et se voit immédiatement proposer des œuvres sémantiquement proches, simulant les algorithmes utilisés par les grandes plateformes de streaming.\n\nPipeline\n- Vectorisation des synopsis de films avec TF-IDF.\n- KNN avec similarité cosinus pour trouver les films sémantiquement proches.\n- Interface Streamlit avec affichage dynamique des recommandations personnalisées.`,
          features: [
            "Vectorisation TF-IDF des synopsis de films",
            "K-plus-proches-voisins avec similarité cosinus",
            "Recommandations personnalisées dynamiques",
            "Interface Streamlit pour une UX fluide",
            "Simule le principe des grandes plateformes de streaming",
          ],
        },
      ],
    },
    contact: {
      title: "Me Contacter",
      successTitle: "Message Envoyé !",
      successMessage:
        "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "Email",
      emailPlaceholder: "votre.email@exemple.com",
      messageLabel: "Message",
      messagePlaceholder: "Comment puis-je vous aider ?",
      sendButton: "Envoyer le Message",
      sendingButton: "Envoi...",
    },
    footer: { rights: "Tous droits réservés." },
  },
};

// Backward-compat exports
export const personalInfo = content.en.personalInfo;
export const skills = content.en.skills.list;
export const experience = content.en.experience.list;
export const projects = content.en.projects.list;

// Certifications data for CertificationsSection
export interface CertificationData {
  title: string;
  organization: string;
  logo: string;
  credentialUrl?: string;
  issued?: string;
  expires?: string;
  credentialId?: string;
  skills?: string[];
}

export const certifications: CertificationData[] = [];