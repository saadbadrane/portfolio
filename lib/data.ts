export type Language = "en" | "fr";

export interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
}

/** Statut du code source d'un projet. */
export type CodeStatus = "public" | "proprietary" | "on-request" | "in-progress";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  /** public = lien cliquable | proprietary/on-request/in-progress = badge explicatif */
  codeStatus?: CodeStatus;
  /** Projet mis en avant en grand format */
  featured?: boolean;
  /** Vraies métriques affichées au lieu des compteurs génériques */
  metrics?: ProjectMetric[];
  problem?: string;
  approach?: string;
  results?: string;
  limitations?: string;
  /** Crédit de co-réalisation (ex. LaneSight) */
  credits?: string;
  fullDescription?: string;
  liveUrl?: string;
  demoUrl?: string;
  /** Vidéo de démo locale (mp4) affichée dans la section Démo */
  videoUrl?: string;
  /** Version webm optionnelle (meilleure compression) */
  videoWebm?: string;
  /** Image poster de la vidéo */
  videoPoster?: string;
  /** Légende sous la vidéo */
  videoCaption?: string;
  features?: string[];
  gallery?: GalleryImage[];
  /** PDF de l'article / résumé (chemin local, préfixé par le basePath à l'affichage) */
  paperUrl?: string;
  /** Page ou programme officiel de l'événement */
  eventUrl?: string;
}

const commonInfo = {
  email: "badranesaad00@gmail.com",
  phone: "+33 7 44 81 86 43",
  linkedin: "https://www.linkedin.com/in/saadbadrane",
  github: "https://github.com/saadbadrane",
};

const skillsList = {
  languages: ["Python", "C++17", "SQL", "JavaScript", "PHP", "Bash"],
  aiMl: [
    "PyTorch",
    "LightGBM",
    "XGBoost",
    "Scikit-learn",
    "LangChain",
    "RAG",
    "Pydantic",
    "Hugging Face",
    "Qdrant",
    "Gemini",
    "OR-Tools",
    "Claude Code",
    "MCP",
    "Agents IA",
  ],
  computerVision: [
    "OpenCV",
    "Vision Transformers",
    "YOLO",
    "UNet",
    "Segmentation",
    "Distance Transform",
    "Traitement du signal",
    "Reconstruction d'images",
    "DeepInverse",
  ],
  cloudMlops: [
    "GCP (Cloud Run, Storage, Scheduler)",
    "Docker",
    "GitLab CI/CD",
    "FastAPI",
    "Streamlit",
    "DevContainers",
  ],
  tools: ["Git", "Linux", "Qt", "OpenGL", "Laravel", "PostgreSQL"],
};

// Libellés traduits pour la version anglaise (les noms d'outils restent identiques).
const skillsEnLabels: Record<string, string> = {
  "Agents IA": "AI agents",
  "Traitement du signal": "Signal processing",
  "Reconstruction d'images": "Image reconstruction",
};
const translateSkills = (list: string[]) => list.map((s) => skillsEnLabels[s] ?? s);
const skillsListEn = {
  ...skillsList,
  aiMl: translateSkills(skillsList.aiMl),
  computerVision: translateSkills(skillsList.computerVision),
};

export const content = {
  en: {
    personalInfo: {
      ...commonInfo,
      name: "Saad Badrane",
      title: "AI & Computer Vision Engineer",
      profileSummary:
        "I build end-to-end AI systems, from algorithmic R&D through to industrialisation. Télécom Saint-Étienne (IMT) graduate, after a one-year AI & MLOps apprenticeship at Groupe Casino.",
      availability:
        "Available now for full-time roles · Open to relocation across France",
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      contactMe: "Contact Me",
      downloadCv: "Download CV",
    },
    about: {
      title: "About",
      paragraphs: [
        "I work at the intersection of two fields that are often treated as opposites: classical computer vision and generative AI. At Groupe Casino, I designed systems that pair LLMs for interpretation with deterministic components for reliability: validators that enforce the rules and a placement engine that makes the final call — because an LLM on its own does not hold up in production.",
        "My work spans from model to industrialisation: a ViT-UNet architecture trained on CULane, a containerised RAG engine, an ML pipeline over more than 10 million transactions designed for GCP, and research on deep learning image reconstruction. And C++ when latency demands it.",
        "I graduated from Télécom Saint-Étienne (IMT) and I'm looking for a full-time role designing and industrialising AI systems: computer vision, generative AI, or both.",
      ],
      howIWorkTitle: "How I work",
      howIWork: [
        {
          title: "Reliability over demos",
          description:
            "I'd rather ship a system whose limits I understand than a demo that impresses. Hence the deterministic validators around my LLMs.",
        },
        {
          title: "End to end",
          description:
            "I don't stop at the notebook: containerisation, CI/CD and cloud architecture are part of the job.",
        },
        {
          title: "Explaining clearly",
          description:
            "Three years tutoring maths, physics and programming. I can walk a business stakeholder through an architecture as easily as an engineer.",
        },
        {
          title: "Bilingual",
          description: "Native French, professional English (TOEIC 825).",
        },
      ],
      educationTitle: "Education",
      education: [
        {
          school: "Télécom Saint-Étienne (Institut Mines-Télécom)",
          period: "2023–2026",
          degree:
            "Engineering degree (MSc level), Computer Science — Image & Computer Vision. Part of Institut Mines-Télécom, France's largest group of public graduate engineering schools.",
        },
        {
          school: "CPGE Ibn Abdoun, Khouribga, Morocco",
          period: "2021–2023",
          degree:
            "Classes Préparatoires — a two-year intensive programme in advanced mathematics and physics, and the competitive selection route into French engineering schools.",
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      categories: {
        languages: "Languages",
        aiMl: "AI & Machine Learning",
        computerVision: "Vision & Signal Processing",
        cloudMlops: "Cloud & MLOps",
        tools: "Tools & Frameworks",
      },
      list: skillsListEn,
    },
    experience: {
      title: "Experience",
      list: [
        {
          company: "Groupe Casino, Saint-Étienne",
          role: "AI & MLOps Engineer — Apprenticeship",
          dates: "Sept. 2025 – Aug. 2026",
          highlights: [
            {
              name: "Merch Intelligence",
              text: "Designed a modular four-part architecture for automated planogram generation. An LLM classifier (Gemini) interprets business constraints, Pydantic validators enforce compliance, and a deterministic placement engine computes the physical layout (an earlier version relied on an OR-Tools CP-SAT constraint solver). A companion photo-audit pipeline combines OpenCV metrology with LLM agents and anti-hallucination guardrails.",
            },
            {
              name: "Cproboost",
              text: "Designed an ML pipeline forecasting in-store sales (LightGBM/RandomForest) across more than 10 million transactions, specialised by geographic zone. Decoupled architecture designed for GCP (Cloud Run, Cloud Storage, Scheduler), with a FastAPI service and a Streamlit interface for business teams.",
            },
          ],
        },
        {
          company: "Groupe OCP, Morocco",
          role: "Full-Stack Developer — Internship",
          dates: "May 2024 – June 2024",
          highlights: [
            {
              name: "IT incident management",
              text: "Built an IT incident management application end to end: graphical interface, database design and ticketing system. MVC architecture on a PHP/Laravel and MySQL stack.",
            },
          ],
        },
      ],
    },
    projectPage: {
      backToProjects: "Back to Projects",
      viewLive: "View Live",
      aboutProject: "About this Project",
      problem: "The problem",
      approach: "The approach",
      results: "Results",
      keyFeatures: "Key Features",
      limitations: "Limits & next steps",
      gallery: "Gallery",
      viewDetails: "Details",
      overview: "Key Features",
      demo: "Demo",
      tech: "Tech stack",
      details: "Details",
      links: "Links",
      tryLiveDemo: "Try the live demo",
      checkGithub: "Check the GitHub repository",
      clickToExpand: "Click to expand",
      pressEscOrClick: "Press ESC or click anywhere to close",
      codeProprietary: "Proprietary code — demo on request",
      codeOnRequest: "Code available on request",
      codeInProgress: "In development",
      readPaper: "Read the abstract (PDF)",
      eventProgram: "Official JIONC 2026 programme",
    },
    projects: {
      title: "Projects",
      featuredTitle: "Featured",
      otherTitle: "Other projects",
      viewOnGithub: "View on GitHub",
      viewDetails: "Details",
      list: [
        {
          slug: "reconstruction-tdm",
          title: "Deep Learning Image Reconstruction (research)",
          featured: true,
          codeStatus: "on-request" as CodeStatus,
          description:
            "A research project with the Hubert Curien Laboratory (CNRS): unsupervised learning (Equivariant Imaging) to correct “missing cone” artefacts in tomographic diffraction microscopy. Poster at the Journées Imagerie Optique Non Conventionnelle 2026 (JIONC, 12-13 March, Paris; GDR ISIS & GDR ONDES).",
          tech: ["Python", "PyTorch", "DeepInverse", "Signal processing", "Inverse problems"],
          github: "https://github.com/saadbadrane",
          metrics: [
            { value: "23.3 dB", label: "PSNR (EI)" },
            { value: "11.6 dB", label: "PSNR classical inversion" },
            { value: "Co-author", label: "JIONC 2026 poster" },
          ],
          problem:
            "Tomographic diffraction microscopy reconstructs a 3D map of a sample's refractive index. But the physical setup limits the acquisition angles, so part of the spatial frequencies is never observed. This creates artefacts in the reconstruction, known as the “missing cone”. And there is no ground truth to train a network in a supervised way.",
          approach:
            "A two-step reconstructor: a classical inversion based on the linear Born physical model, followed by a neural network that learns to remove the artefacts. Training is unsupervised thanks to Equivariant Imaging: the loss combines a data-fidelity term (the reconstruction, projected back through the physical model, must give the measurements again) and an equivariance term (the reconstruction must stay consistent when the object is rotated). That is what lets the network recover information the acquisition never sees. Implemented with PyTorch and the DeepInverse library.",
          results:
            "In simulation, on a set of ellipsoids with varied sizes and orientations: a PSNR of 23.3 dB versus 11.6 dB for the classical inversion. This work was presented as a poster at the Journées Imagerie Optique Non Conventionnelle 2026.",
          limitations:
            "Preliminary results in simulation, on simple shapes (ellipsoids) and with a single family of transformations (rotations). Next steps: more realistic objects, real experimental data and other transformations.",
          credits:
            "Team of 4 at the Hubert Curien Laboratory. I led the main approach (Equivariant Imaging); the other members developed the comparison approaches.",
          paperUrl: "/publications/Momey-Casella-et-al_JIONC_2026_TDM.pdf",
          eventUrl: "https://www.sfoptique.org/medias/files/programmejionc2026-club-pio-sfo.pdf",
          gallery: [
            {
              src: "/projects/tdm-equivariant-imaging.png",
              alt: "Figure: (a) pipeline building the unsupervised Equivariant Imaging loss; (b) a test ellipse: ground truth, classical inversion (PSNR 11.63 dB) and EI reconstruction (PSNR 23.30 dB)",
              caption:
                "(a) Building the Equivariant Imaging loss — (b) result on a test ellipsoid: ground truth, classical inversion, EI reconstruction",
            },
          ],
        },
        {
          slug: "lanesight",
          title: "LaneSight",
          featured: true,
          codeStatus: "on-request" as CodeStatus,
          description:
            "A hybrid ViT-UNet architecture for road lane perception, unifying semantic segmentation, geometric modelling (UFLD) and contextual filtering (YOLO). 85% IoU at 15-20 FPS on CULane.",
          tech: ["Python", "PyTorch", "Vision Transformer", "YOLO", "OpenCV", "Streamlit"],
          github: "https://github.com/saadbadrane",
          metrics: [
            { value: "85%", label: "IoU" },
            { value: "15-20", label: "FPS" },
            { value: "133K", label: "training images" },
          ],
          problem:
            "Classical lane-detection methods break down in real driving conditions: faded markings, changing light, occlusions by other vehicles. Purely geometric approaches also produce false positives on guardrails.",
          approach:
            "A HybridViTUNet network: a CNN encoder for local precision coupled with a Vision Transformer bottleneck for global scene understanding through self-attention. On top of it, a secure fusion algorithm cross-references the geometric hypotheses of a UFLD model with the ViT confidence maps, accepting a lane only above a 15% semantic threshold. A YOLO pass then filters detections corrupted by vehicle overlap. Extreme class imbalance between background and lane pixels was handled with a custom loss combining weighted cross-entropy and Dice loss.",
          results:
            "Over 85% IoU while holding 15-20 FPS inference, deployed on an interactive Streamlit interface with a 2×2 split comparison view. Trained end to end on CULane (133k images).",
          limitations:
            "Performance degrades at night and in heavy rain: CULane is imbalanced on those scenarios. The semantic/geometric fusion still relies on fixed thresholds, where learning the weighting would be more robust. Next iteration: ViT quantisation to reach 30 FPS on embedded targets.",
          features: [
            "Hybrid ViT-UNet architecture: CNN encoder + Vision Transformer bottleneck",
            "Multi-paradigm pipeline: semantic segmentation, UFLD geometry, YOLO filtering",
            "Custom loss: weighted cross-entropy + Dice for class imbalance",
            "Secure fusion algorithm with a 15% semantic confidence threshold",
            "Interactive Streamlit interface with 2×2 comparison view",
          ],
          credits: "Co-built with Walid Benmaarouf.",
          gallery: [
            {
              src: "/projects/lanesight-ui-03.png",
              alt: "Night driving scene in 4 simultaneous views: lane segmentation in blue, detected vehicles in red, lane lines in green, drivable area filled in green",
              caption: "Night perception — 2×2 view: ViT-Hybrid segmentation, YOLO detection, UFLD lines and drivable area",
            },
            {
              src: "/projects/lanesight-ui-02.png",
              alt: "Daytime highway view: detected lane lines on the left, driving area filled in green on the right",
              caption: "Daytime output — UFLD lane detection and drivable area (polygon)",
            },
            {
              src: "/projects/lanesight-ui-01.png",
              alt: "LaneSight interface: control panel with Hybrid-ViT, UFLD, classical processing and YOLO detection modules",
              caption: "LaneSight interface (Streamlit) — selecting the 4 perception modules",
            },
          ],
          videoUrl: "/projects/lanesight-demo.mp4",
          videoPoster: "/projects/lanesight-ui-03.png",
          videoCaption:
            "Processed output — fusion of segmentation / geometry / obstacle detection, ~15-20 FPS.",
        },
        {
          slug: "merch-intelligence",
          title: "Merch Intelligence",
          featured: true,
          codeStatus: "proprietary" as CodeStatus,
          description:
            "A hybrid architecture for planogram generation where the AI proposes but never decides on its own: an LLM interprets the business context, a deterministic validator guarantees the rules, and a deterministic placement engine computes the physical layout (an earlier version relied on an OR-Tools CP-SAT constraint solver). A companion photo-audit pipeline anchors objective facts with OpenCV metrology before LLM analysis.",
          tech: ["Python", "Gemini", "LangChain", "Pydantic", "OpenCV", "NiceGUI"],
          github: "https://github.com/saadbadrane",
          problem:
            "Generating planograms — the arrangement of products on a shelf — is expert, time-consuming work bound by many physical and business constraints. An LLM on its own can propose a plausible layout, but it offers no guarantee: it can hallucinate a product, violate a constraint, or place an item in the wrong spot. For a business tool, that level of uncertainty is not acceptable.",
          approach:
            "A three-stage hybrid architecture where the AI proposes but never decides alone. An LLM classifier interprets the business context and proposes a product classification. A deterministic validator then applies strict rules that always take precedence over the AI: every model output is filtered, corrected or rejected before going any further. Finally, a deterministic placement engine computes the physical layout while respecting the geometry of the fixtures (an earlier version relied on a constraint programming solver, OR-Tools CP-SAT). The result is rendered in an interactive web interface.\n\nA companion photo-audit pipeline evaluates the compliance of a real shelf. It follows the same principle: OpenCV metrology first measures objective facts (shelf structure, fill level), then specialised LLM agents observe, detect anomalies and assess, and a deterministic Python post-processing step acts as the final safety net.",
          results:
            "The throughline: don't replace engineering with a model — put the model in its rightful place within a reliable end-to-end architecture. The AI proposes, the deterministic layer guarantees.",
          gallery: [
            {
              src: "/projects/merch-generation.png",
              alt: "Architecture diagram: inputs, LLM classifier, deterministic validator, deterministic placement engine, rendering",
              caption:
                "Planogram generation — the AI proposes, a deterministic validator guarantees, a deterministic placement engine builds the layout",
            },
            {
              src: "/projects/merch-audit.png",
              alt: "Architecture diagram: shelf photo, OpenCV metrology, specialised LLM agents, Python post-processing, compliance score",
              caption:
                "Photo audit — OpenCV metrology to anchor the facts, LLM agents for analysis, a Python safety net",
            },
          ],
        },
        {
          slug: "cproboost",
          title: "Cproboost",
          codeStatus: "proprietary" as CodeStatus,
          description:
            "An ML pipeline forecasting in-store sales across more than 10 million transactions, with models specialised by geographic zone. Decoupled architecture designed for GCP, with an API and an interface for business teams.",
          tech: ["Python", "LightGBM", "GCP", "Cloud Run", "FastAPI", "Streamlit", "Docker"],
          github: "https://github.com/saadbadrane",
          metrics: [
            { value: "10M+", label: "transactions" },
            { value: "LightGBM", label: "main model" },
          ],
          problem:
            "Turning millions of raw transaction rows into product recommendations that business teams can actually use, while accounting for regional differences, with limited compute.",
          approach:
            "Rather than one global model, specialised models per geographic zone, comparing LightGBM and RandomForest. Memory was the main constraint: systematic DataFrame cleanup and careful memory management to process large volumes on standard machines. The architecture is decoupled and designed for GCP: heavy computation in scheduled jobs (Cloud Run Jobs, Cloud Scheduler), artefacts in Cloud Storage, and the interface kept separate from training so browsing never slows down the computation.",
          results:
            "A complete architecture ready for industrialisation, from data ingestion to an interface that presents results to business teams.",
          limitations:
            "Specialising by zone multiplies training cost; a shared model with per-zone heads would be cheaper. Products with no sales history are still poorly served.",
          features: [
            "ML pipeline over 10M+ transactions",
            "Models specialised by geographic zone (LightGBM/RandomForest)",
            "Decoupled GCP architecture: Cloud Run Jobs, Cloud Storage, Cloud Scheduler",
            "Memory optimisation for large volumes",
            "Configurable CLI for training and inference",
            "FastAPI service and Streamlit interface",
          ],
        },
        {
          slug: "mimestis",
          title: "Mimestis",
          codeStatus: "on-request" as CodeStatus,
          description:
            "Academic project for Edumotiv — an end-to-end RAG assistant: automated document ingestion, semantic search over a Qdrant vector store, LangChain orchestration and strict anti-hallucination guardrails. Containerised with Docker.",
          tech: ["Python", "LangChain", "Qdrant", "Docker", "RAG", "NLP"],
          github: "https://github.com/saadbadrane",
          metrics: [
            { value: "RAG", label: "Qdrant + LangChain" },
            { value: "Docker", label: "containerised" },
          ],
          problem:
            "Internal knowledge in large organisations is fragmented across documents nobody can find. The blocker for adoption is not capability but trust: an assistant that invents an answer once will not be used twice.",
          approach:
            "A RAG architecture pairing LLM generation with the factual ground truth of company documents. Raw documents are parsed and chunked to preserve semantic context, embedded, and stored in a Qdrant vector database for fast retrieval. The retrieval pipeline was tuned so only genuinely relevant passages enter the generation context. On top, prompt engineering and explicit guardrails forbid the model from inventing information and require it to cite its sources on every answer.",
          results:
            "An assistant designed to give sourced answers from internal documentation, with a fully containerised and modular ingestion pipeline.",
          limitations:
            "Retrieval quality still degrades on questions spanning several documents, where a single chunk never holds the full answer — a re-ranking or multi-hop step is the obvious fix. Tables and scanned PDFs are handled poorly by the current parser. Next iteration: hybrid search combining dense and keyword retrieval.",
          features: [
            "End-to-end RAG architecture over an internal knowledge base",
            "Document ingestion pipeline with context-preserving chunking",
            "Semantic vector search on Qdrant",
            "LangChain pipeline orchestration",
            "Strict guardrails: mandatory source citation, no invention",
            "Docker containerisation for automated, secure ingestion",
          ],
        },
        {
          slug: "slice-defender",
          title: "Slice-Defender",
          codeStatus: "on-request" as CodeStatus,
          description:
            "An end-to-end C++17 pipeline: video stream processing (OpenCV), game logic and native 3D rendering (Qt/OpenGL) at 30 FPS. Robust hand tracking without deep learning, using YCrCb colour space and Distance Transform.",
          tech: ["C++17", "OpenCV", "Qt", "OpenGL"],
          github: "https://github.com/saadbadrane",
          metrics: [
            { value: "30", label: "FPS" },
            { value: "C++17", label: "real time" },
          ],
          problem:
            "Building an augmented-reality game where the player's bare hand controls a 3D sword, with no perceptible latency — on a standard laptop webcam, without a GPU-hungry deep learning model.",
          approach:
            "A single C++17 execution loop merging vision, physics and rendering. Hand tracking uses only classical techniques: YCrCb colour thresholding for skin masking, CLAHE for adaptive contrast, morphological filtering, and a Distance Transform to locate the palm centre precisely. A Haar cascade acts as fallback when lighting shifts abruptly. Camera coordinates are then projected into the 3D world to drive the blade, with collisions computed as ray/cylinder intersections.",
          results:
            "A stable 30 FPS pipeline with no perceptible input lag, rendered natively through QOpenGLWidget with dynamic shadows and physics-based projectile trajectories.",
          limitations:
            "Tracking accuracy still drops under very low light or with skin tones far from the calibrated YCrCb range — a per-user calibration step would fix most of it. Collision detection is approximated by cylinders rather than true mesh intersection. Next iteration: a lightweight learned keypoint model, kept small enough to preserve the 30 FPS budget.",
          features: [
            "End-to-end C++17 pipeline at 30 FPS",
            "Skin mask extraction in YCrCb space with CLAHE contrast enhancement",
            "Distance Transform for precise palm-centre tracking",
            "Haar cascade fallback for sudden lighting changes",
            "2D/3D projection and ray/cylinder collision detection",
            "Tight coupling between the Qt event loop (QTimer) and OpenCV frame acquisition",
          ],
          videoUrl: "/projects/slice-defender-demo.mp4",
          videoPoster: "/projects/slice-defender-poster.jpg",
          videoCaption:
            "Real-time gameplay — hand tracking without deep learning (YCrCb + Distance Transform), Qt/OpenGL rendering at 30 FPS.",
        },
        {
          slug: "agent-veille-emploi",
          title: "Job-search assistant (in progress)",
          codeStatus: "in-progress" as CodeStatus,
          description:
            "Work in progress: an agentic system built with Claude Code and MCP, designed to spot recent job postings each morning, assess how well they match my profile, prepare tailored documents and keep track of every application. Each application will still be reviewed and sent by me.",
          tech: ["Claude Code", "MCP", "Python", "AI agents"],
          github: "https://github.com/saadbadrane",
        },
        {
          slug: "ocp-incidents",
          title: "OCP — IT Incident Management",
          codeStatus: "proprietary" as CodeStatus,
          description:
            "An incident management application built during an internship: graphical interface, database and ticketing system, on an MVC architecture (Laravel/MySQL).",
          tech: ["PHP", "Laravel", "MySQL"],
          github: "https://github.com/saadbadrane",
          metrics: [
            { value: "2", label: "months" },
            { value: "MVC", label: "architecture" },
          ],
          problem:
            "IT incidents were tracked informally, with no central view of what was open, who owned it, or how long it had been waiting.",
          approach:
            "A full-stack application built end to end on a PHP/Laravel and MySQL stack: database modelling, a ticketing system and a graphical interface, organised around an MVC architecture.",
          results:
            "A working incident management application, from ticket creation to resolution, delivered within the two-month internship.",
          limitations:
            "Notifications and SLA tracking were left out for lack of time; they would be the first additions.",
          features: [
            "End-to-end incident tracking application",
            "Laravel backend with MySQL database modelling",
            "Ticketing system",
            "Graphical user interface",
            "MVC architecture",
          ],
        },
      ],
    },
    contact: {
      title: "Let's talk",
      intro:
        "I reply within 24 hours — about a role, a project, or just a technical question.",
      availability:
        "Available now for full-time roles · Open to relocation across France",
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
      errorMessage: "Something went wrong. Please email me directly.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },

  fr: {
    personalInfo: {
      ...commonInfo,
      name: "Saad Badrane",
      title: "Ingénieur IA & Computer Vision",
      profileSummary:
        "Je conçois des systèmes d'IA de bout en bout, de la R&D algorithmique jusqu'à l'industrialisation. Diplômé de Télécom Saint-Étienne (IMT), après un an d'alternance IA & MLOps chez Groupe Casino.",
      availability:
        "Disponible immédiatement en CDI · Mobilité France entière",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      contactMe: "Me contacter",
      downloadCv: "Télécharger le CV",
    },
    about: {
      title: "À propos",
      paragraphs: [
        "Je travaille à l'intersection de deux mondes qu'on oppose souvent : la vision par ordinateur classique et l'IA générative. Chez Groupe Casino, j'ai conçu des systèmes qui combinent des LLM pour l'interprétation et des briques déterministes pour la fiabilité : des validateurs qui garantissent les règles et un moteur de placement qui tranche — parce qu'un LLM seul ne tient pas en production.",
        "Ce que je livre va du modèle jusqu'à l'industrialisation : une architecture ViT-UNet entraînée sur CULane, un moteur RAG conteneurisé, un pipeline ML sur plus de 10 millions de transactions, conçu pour GCP, et des travaux de recherche en reconstruction d'images par deep learning. Et du C++ quand la latence l'impose.",
        "Diplômé de Télécom Saint-Étienne (IMT), je cherche un CDI pour concevoir et industrialiser des systèmes d'IA : vision par ordinateur, IA générative, ou les deux.",
      ],
      howIWorkTitle: "Comment je travaille",
      howIWork: [
        {
          title: "Fiabilité avant démo",
          description:
            "Je préfère un système dont je connais les limites à une démo qui impressionne. D'où les validateurs déterministes autour de mes LLM.",
        },
        {
          title: "Bout en bout",
          description:
            "Je ne m'arrête pas au notebook : conteneurisation, CI/CD et architecture Cloud font partie du travail.",
        },
        {
          title: "Vulgarisation",
          description:
            "Trois ans de cours particuliers en maths, physique et programmation. J'explique une architecture aussi bien à un métier qu'à un ingénieur.",
        },
        {
          title: "Bilingue technique",
          description: "Français natif, anglais professionnel (TOEIC 825).",
        },
      ],
      educationTitle: "Formation",
      education: [
        {
          school: "Télécom Saint-Étienne (Institut Mines-Télécom)",
          period: "2023–2026",
          degree:
            "Diplôme d'ingénieur, Informatique — Image & Vision par ordinateur.",
        },
        {
          school: "CPGE Ibn Abdoun, Khouribga, Maroc",
          period: "2021–2023",
          degree: "Classes préparatoires aux grandes écoles — Maths-Physique.",
        },
      ],
    },
    skills: {
      title: "Compétences techniques",
      categories: {
        languages: "Langages",
        aiMl: "IA & Machine Learning",
        computerVision: "Vision & Signal",
        cloudMlops: "Cloud & MLOps",
        tools: "Outils & Frameworks",
      },
      list: skillsList,
    },
    experience: {
      title: "Expérience",
      list: [
        {
          company: "Groupe Casino, Saint-Étienne",
          role: "Ingénieur IA & MLOps — Alternance",
          dates: "Sept. 2025 – Août 2026",
          highlights: [
            {
              name: "Merch Intelligence",
              text: "Conception d'une architecture métier modulaire (4 modules) pour la génération automatisée de planogrammes. Le système couple un classifieur LLM (Gemini) pour l'interprétation métier, des validateurs déterministes Pydantic pour garantir la conformité, et un moteur de placement déterministe qui calcule l'implantation physique (une première version reposait sur un solveur de programmation par contraintes OR-Tools CP-SAT). En complément, un pipeline d'audit photographique combine métrologie OpenCV et agents LLM, avec des garde-fous anti-hallucination.",
            },
            {
              name: "Cproboost",
              text: "Conception d'un pipeline ML de prédiction des ventes magasins (LightGBM/RandomForest) sur plus de 10 millions de transactions, spécialisé par zone géographique. Architecture découplée conçue pour GCP (Cloud Run, Cloud Storage, Scheduler), avec API FastAPI et interface Streamlit pour les équipes métier.",
            },
          ],
        },
        {
          company: "Groupe OCP, Maroc",
          role: "Développeur Full-Stack — Stage",
          dates: "Mai 2024 – Juin 2024",
          highlights: [
            {
              name: "Gestion des incidents informatiques",
              text: "Développement complet d'une application de gestion des incidents informatiques : interface graphique, modélisation de la base de données et système de tickets. Architecture MVC, stack PHP/Laravel et MySQL.",
            },
          ],
        },
      ],
    },
    projectPage: {
      backToProjects: "Retour aux projets",
      viewLive: "Voir en ligne",
      aboutProject: "À propos de ce projet",
      problem: "Le problème",
      approach: "L'approche",
      results: "Résultats",
      keyFeatures: "Fonctionnalités clés",
      limitations: "Limites & prochaines étapes",
      gallery: "Galerie",
      viewDetails: "Détails",
      overview: "Fonctionnalités clés",
      demo: "Démo",
      tech: "Stack technique",
      details: "Détails",
      links: "Liens",
      tryLiveDemo: "Essayer la démo en ligne",
      checkGithub: "Voir le dépôt GitHub",
      clickToExpand: "Cliquez pour agrandir",
      pressEscOrClick: "Appuyez sur Échap ou cliquez pour fermer",
      codeProprietary: "Code propriétaire — démo sur demande",
      codeOnRequest: "Code disponible sur demande",
      codeInProgress: "En cours de développement",
      readPaper: "Lire le résumé (PDF)",
      eventProgram: "Programme officiel JIONC 2026",
    },
    projects: {
      title: "Projets",
      featuredTitle: "À la une",
      otherTitle: "Autres projets",
      viewOnGithub: "Voir sur GitHub",
      viewDetails: "Détails",
      list: [
        {
          slug: "reconstruction-tdm",
          title: "Reconstruction d'images par Deep Learning (recherche)",
          featured: true,
          codeStatus: "on-request" as CodeStatus,
          description:
            "Projet de recherche avec le Laboratoire Hubert Curien (CNRS) : apprentissage non supervisé (Equivariant Imaging) pour corriger les artefacts du « cône manquant » en microscopie tomographique diffractive. Poster aux Journées Imagerie Optique Non Conventionnelle 2026 (JIONC, 12-13 mars, Paris ; GDR ISIS & GDR ONDES).",
          tech: ["Python", "PyTorch", "DeepInverse", "Traitement du signal", "Problèmes inverses"],
          github: "https://github.com/saadbadrane",
          metrics: [
            { value: "23,3 dB", label: "PSNR (EI)" },
            { value: "11,6 dB", label: "PSNR inversion classique" },
            { value: "Co-auteur", label: "poster JIONC 2026" },
          ],
          problem:
            "La microscopie tomographique diffractive reconstruit une carte 3D de l'indice optique d'un échantillon. Mais les contraintes du montage limitent les angles d'acquisition : une partie des fréquences spatiales n'est jamais observée. Ça crée des artefacts dans la reconstruction, appelés « cône manquant ». Et on n'a pas de vérité terrain pour entraîner un réseau de façon supervisée.",
          approach:
            "Un reconstructeur en deux étapes : une inversion classique basée sur le modèle physique linéaire de Born, suivie d'un réseau de neurones qui apprend à supprimer les artefacts. L'entraînement est non supervisé grâce à l'Equivariant Imaging : la perte combine un terme de fidélité aux données (la reconstruction, reprojetée par le modèle physique, doit redonner les mesures) et un terme d'équivariance (la reconstruction doit rester cohérente quand on fait tourner l'objet). C'est ce qui permet au réseau de retrouver l'information que l'acquisition ne voit pas. Implémenté avec PyTorch et la bibliothèque DeepInverse.",
          results:
            "En simulation, sur un jeu d'ellipsoïdes de tailles et d'orientations variées : PSNR de 23,3 dB contre 11,6 dB pour l'inversion classique. Ce travail a fait l'objet d'un poster aux Journées Imagerie Optique Non Conventionnelle 2026.",
          limitations:
            "Résultats préliminaires en simulation, sur des formes simples (ellipsoïdes) et avec une seule famille de transformations (les rotations). Prochaines étapes : objets plus réalistes, données expérimentales réelles et autres transformations.",
          credits:
            "Travail d'équipe de 4 au Laboratoire Hubert Curien. J'ai porté l'approche principale (Equivariant Imaging) ; les autres membres ont développé les approches de comparaison.",
          paperUrl: "/publications/Momey-Casella-et-al_JIONC_2026_TDM.pdf",
          eventUrl: "https://www.sfoptique.org/medias/files/programmejionc2026-club-pio-sfo.pdf",
          gallery: [
            {
              src: "/projects/tdm-equivariant-imaging.png",
              alt: "Figure : (a) pipeline de construction de la perte non supervisée Equivariant Imaging ; (b) une ellipse de test : vérité terrain, inversion classique (PSNR 11,63 dB) et reconstruction EI (PSNR 23,30 dB)",
              caption:
                "(a) Construction de la perte Equivariant Imaging — (b) résultat sur une ellipsoïde de test : vérité terrain, inversion classique, reconstruction EI",
            },
          ],
        },
        {
          slug: "lanesight",
          title: "LaneSight",
          featured: true,
          codeStatus: "on-request" as CodeStatus,
          description:
            "Architecture hybride ViT-UNet pour la perception de voies routières, unifiant segmentation sémantique, modélisation géométrique (UFLD) et filtrage contextuel (YOLO). 85 % d'IoU à 15-20 FPS sur CULane.",
          tech: ["Python", "PyTorch", "Vision Transformer", "YOLO", "OpenCV", "Streamlit"],
          github: "https://github.com/saadbadrane",
          metrics: [
            { value: "85 %", label: "IoU" },
            { value: "15-20", label: "FPS" },
            { value: "133K", label: "images d'entraînement" },
          ],
          problem:
            "Les méthodes classiques de détection de voies s'effondrent en conditions réelles : marquages effacés, variations de luminosité, occlusions par les autres véhicules. Les approches purement géométriques produisent en plus des faux positifs sur les rails de sécurité.",
          approach:
            "Un réseau HybridViTUNet : encodeur CNN pour la précision locale, couplé à un bottleneck Vision Transformer pour la compréhension globale de la scène via self-attention. Par-dessus, un algorithme de fusion sécurisé croise les hypothèses géométriques d'un modèle UFLD avec les cartes de confiance sémantique du ViT, n'acceptant une voie qu'au-delà d'un seuil de 15 %. Une passe YOLO filtre ensuite les détections corrompues par la superposition de véhicules. Le déséquilibre extrême entre pixels de fond et pixels de voie a été traité par une fonction de coût combinant cross-entropy pondérée et Dice loss.",
          results:
            "Plus de 85 % d'IoU tout en maintenant une inférence à 15-20 FPS, déployé sur une interface Streamlit interactive avec vue comparative en split 2×2. Entraîné de bout en bout sur CULane (133k images).",
          limitations:
            "Les performances se dégradent en conditions nocturnes et sous pluie forte : CULane est déséquilibré sur ces scénarios. La fusion sémantique/géométrique reste réglée par des seuils fixes, là où un apprentissage de la pondération serait plus robuste. Prochaine itération : quantification du ViT pour viser 30 FPS sur cible embarquée.",
          features: [
            "Architecture hybride ViT-UNet : encodeur CNN + bottleneck Vision Transformer",
            "Pipeline multi-paradigme : segmentation sémantique, géométrie UFLD, filtrage YOLO",
            "Fonction de coût sur mesure : cross-entropy pondérée + Dice loss",
            "Algorithme de fusion sécurisé avec seuil de confiance sémantique à 15 %",
            "Interface Streamlit interactive avec vue comparative 2×2",
          ],
          credits: "Co-réalisé avec Walid Benmaarouf.",
          gallery: [
            {
              src: "/projects/lanesight-ui-03.png",
              alt: "Scène de conduite de nuit en 4 vues simultanées : segmentation de voies en bleu, véhicules détectés en rouge, lignes de voie en vert, zone roulable remplie en vert",
              caption: "Perception nocturne — vue 2×2 : segmentation ViT-Hybrid, détection YOLO, lignes UFLD et zone roulable",
            },
            {
              src: "/projects/lanesight-ui-02.png",
              alt: "Vue de jour sur autoroute : lignes de voie détectées à gauche, zone de conduite remplie en vert à droite",
              caption: "Sortie de jour — détection de voies UFLD et zone roulable (polygone)",
            },
            {
              src: "/projects/lanesight-ui-01.png",
              alt: "Interface LaneSight : panneau de contrôle avec les modules Hybrid-ViT, UFLD, traitement classique et détection YOLO",
              caption: "Interface LaneSight (Streamlit) — sélection des 4 modules de perception",
            },
          ],
          videoUrl: "/projects/lanesight-demo.mp4",
          videoPoster: "/projects/lanesight-ui-03.png",
          videoCaption:
            "Sortie traitée — fusion segmentation / géométrie / détection d'obstacles, ~15-20 FPS.",
        },
        {
          slug: "merch-intelligence",
          title: "Merch Intelligence",
          featured: true,
          codeStatus: "proprietary" as CodeStatus,
          description:
            "Architecture hybride pour la génération de planogrammes où l'IA propose mais ne décide jamais seule : un LLM interprète le contexte métier, un validateur déterministe garantit les règles, et un moteur de placement déterministe calcule l'implantation physique (une première version reposait sur un solveur de programmation par contraintes OR-Tools CP-SAT). Un pipeline d'audit photo ancre des faits objectifs par métrologie OpenCV avant l'analyse LLM.",
          tech: ["Python", "Gemini", "LangChain", "Pydantic", "OpenCV", "NiceGUI"],
          github: "https://github.com/saadbadrane",
          problem:
            "Générer des planogrammes (l'agencement des produits en rayon) est un travail expert, long et soumis à de nombreuses contraintes physiques et métier. Un LLM seul peut proposer une organisation plausible, mais il n'offre aucune garantie : il peut halluciner un produit, violer une contrainte, ou placer un article au mauvais endroit. Pour un outil métier, ce niveau d'incertitude n'est pas acceptable.",
          approach:
            "Une architecture hybride en trois temps, où l'IA propose mais ne décide jamais seule. Un classifieur LLM interprète le contexte métier et propose une classification des produits. Un validateur déterministe applique ensuite des règles strictes qui priment toujours sur l'IA : toute sortie du modèle est filtrée, corrigée ou rejetée avant d'aller plus loin. Enfin, un moteur de placement déterministe calcule l'implantation physique, dans le respect de la géométrie des meubles (une première version reposait sur un solveur de programmation par contraintes OR-Tools CP-SAT). Le résultat est rendu dans une interface web interactive.\n\nEn complément, un pipeline d'audit photographique évalue la conformité d'un rayon réel. Il repose sur le même principe : la métrologie OpenCV mesure d'abord des faits objectifs (structure du rayon, remplissage), puis des agents LLM spécialisés observent, détectent les anomalies et évaluent, et un post-traitement Python déterministe sert de filet de sécurité final.",
          results:
            "Le fil conducteur : ne pas remplacer l'ingénierie par un modèle, mais mettre le modèle à sa juste place dans une architecture fiable de bout en bout. L'IA propose, le déterministe garantit.",
          gallery: [
            {
              src: "/projects/merch-generation.png",
              alt: "Schéma d'architecture : entrées, classifieur LLM, validateur déterministe, moteur de placement déterministe, rendu",
              caption:
                "Génération de planogrammes — l'IA propose, un validateur déterministe garantit, un moteur de placement déterministe construit l'implantation",
            },
            {
              src: "/projects/merch-audit.png",
              alt: "Schéma d'architecture : photo de rayon, métrologie OpenCV, agents LLM spécialisés, post-traitement Python, score de conformité",
              caption:
                "Audit photo — métrologie OpenCV pour ancrer les faits, agents LLM pour l'analyse, filet de sécurité Python",
            },
          ],
        },
        {
          slug: "cproboost",
          title: "Cproboost",
          codeStatus: "proprietary" as CodeStatus,
          description:
            "Pipeline ML de prévision des ventes magasins sur plus de 10 millions de transactions, avec des modèles spécialisés par zone géographique. Architecture découplée conçue pour GCP, avec une API et une interface pour les équipes métier.",
          tech: ["Python", "LightGBM", "GCP", "Cloud Run", "FastAPI", "Streamlit", "Docker"],
          github: "https://github.com/saadbadrane",
          metrics: [
            { value: "10M+", label: "transactions" },
            { value: "LightGBM", label: "modèle principal" },
          ],
          problem:
            "Transformer des millions de lignes de transactions brutes en recommandations produit exploitables par les équipes métier, en tenant compte des différences régionales, avec une puissance de calcul limitée.",
          approach:
            "Plutôt qu'un modèle global, des modèles spécialisés par zone géographique, comparés entre LightGBM et RandomForest. La mémoire était la contrainte principale : nettoyage systématique des DataFrames et gestion fine de la mémoire pour traiter de gros volumes sur des machines standards. L'architecture est découplée et conçue pour GCP : les calculs lourds dans des jobs planifiés (Cloud Run Jobs, Cloud Scheduler), les artefacts dans Cloud Storage, et l'interface séparée de l'entraînement pour que la consultation ne ralentisse jamais les calculs.",
          results:
            "Une architecture complète et prête pour l'industrialisation : de l'ingestion des données jusqu'à une interface de restitution pour les équipes métier.",
          limitations:
            "La spécialisation par zone multiplie le coût d'entraînement ; un modèle partagé avec des têtes par zone serait plus économique. Les produits sans historique restent mal servis.",
          features: [
            "Pipeline ML sur 10M+ transactions",
            "Modèles spécialisés par zone géographique (LightGBM/RandomForest)",
            "Architecture GCP découplée : Cloud Run Jobs, Cloud Storage, Cloud Scheduler",
            "Optimisation mémoire pour les gros volumes",
            "CLI paramétrable pour l'entraînement et l'inférence",
            "API FastAPI et interface Streamlit",
          ],
        },
        {
          slug: "mimestis",
          title: "Mimestis",
          codeStatus: "on-request" as CodeStatus,
          description:
            "Projet académique pour Edumotiv — un assistant RAG de bout en bout : ingestion documentaire automatisée, recherche sémantique sur base vectorielle Qdrant, orchestration LangChain et garde-fous stricts anti-hallucination. Architecture conteneurisée sous Docker.",
          tech: ["Python", "LangChain", "Qdrant", "Docker", "RAG", "NLP"],
          github: "https://github.com/saadbadrane",
          metrics: [
            { value: "RAG", label: "Qdrant + LangChain" },
            { value: "Docker", label: "conteneurisé" },
          ],
          problem:
            "Dans les grandes organisations, la connaissance interne est éparpillée dans des documents que personne ne retrouve. Le frein à l'adoption n'est pas la capacité mais la confiance : un assistant qui invente une réponse une fois ne sera pas réutilisé.",
          approach:
            "Une architecture RAG couplant la génération LLM à la vérité factuelle des documents de l'entreprise. Les documents bruts sont parsés et découpés en chunks préservant le contexte sémantique, vectorisés, puis stockés dans une base Qdrant pour une recherche rapide. Le pipeline de retrieval a été optimisé pour que seuls les passages réellement pertinents entrent dans le contexte de génération. Par-dessus, un travail de prompt engineering et des garde-fous explicites interdisent au modèle d'inventer et l'obligent à citer ses sources à chaque réponse.",
          results:
            "Un assistant conçu pour donner des réponses sourcées à partir de la documentation interne, avec un pipeline d'ingestion entièrement conteneurisé et modulaire.",
          limitations:
            "La qualité du retrieval se dégrade encore sur les questions couvrant plusieurs documents, où aucun chunk ne contient la réponse complète — une étape de re-ranking ou de multi-hop est la correction évidente. Les tableaux et PDF scannés sont mal gérés par le parser actuel. Prochaine itération : recherche hybride combinant dense et mots-clés.",
          features: [
            "Architecture RAG de bout en bout sur base de connaissances interne",
            "Pipeline d'ingestion documentaire avec chunking préservant le contexte",
            "Recherche sémantique vectorielle sur Qdrant",
            "Orchestration des pipelines via LangChain",
            "Garde-fous stricts : citation des sources obligatoire, zéro invention",
            "Conteneurisation Docker pour une ingestion automatisée et sécurisée",
          ],
        },
        {
          slug: "slice-defender",
          title: "Slice-Defender",
          codeStatus: "on-request" as CodeStatus,
          description:
            "Pipeline C++17 de bout en bout : traitement du flux vidéo (OpenCV), logique de jeu et rendu 3D natif (Qt/OpenGL) à 30 FPS. Tracking de main robuste sans deep learning, par espace colorimétrique YCrCb et Distance Transform.",
          tech: ["C++17", "OpenCV", "Qt", "OpenGL"],
          github: "https://github.com/saadbadrane",
          metrics: [
            { value: "30", label: "FPS" },
            { value: "C++17", label: "temps réel" },
          ],
          problem:
            "Concevoir un jeu en réalité augmentée où la main nue du joueur pilote une épée 3D, sans latence perceptible — sur une webcam d'ordinateur portable standard, sans modèle de deep learning gourmand en GPU.",
          approach:
            "Une boucle d'exécution C++17 unique fusionnant vision, physique et rendu. Le tracking de main n'utilise que des techniques classiques : seuillage colorimétrique YCrCb pour le masque de peau, CLAHE pour le contraste adaptatif, filtrage morphologique, et une Distance Transform pour localiser précisément le centre de la paume. Une cascade de Haar sert de solution de repli lors des changements brutaux de luminosité. Les coordonnées caméra sont ensuite projetées dans le monde 3D pour piloter la lame, avec des collisions calculées en intersections rayons/cylindres.",
          results:
            "Un pipeline stable à 30 FPS sans lag perceptible, rendu nativement via QOpenGLWidget avec ombres dynamiques et trajectoires physiques des projectiles.",
          limitations:
            "La précision du tracking chute encore en très faible luminosité ou avec des carnations éloignées de la plage YCrCb calibrée — une étape de calibration par utilisateur corrigerait l'essentiel. Les collisions sont approximées par des cylindres plutôt que par intersection de maillage. Prochaine itération : un modèle léger de keypoints appris, assez petit pour préserver le budget de 30 FPS.",
          features: [
            "Pipeline C++17 de bout en bout à 30 FPS",
            "Extraction du masque de peau en espace YCrCb avec rehaussement CLAHE",
            "Distance Transform pour un tracking précis du centre de la paume",
            "Cascade de Haar en repli lors des changements brutaux de luminosité",
            "Projection 2D/3D et détection de collisions rayons/cylindres",
            "Couplage serré entre boucle d'événements Qt (QTimer) et acquisition OpenCV",
          ],
          videoUrl: "/projects/slice-defender-demo.mp4",
          videoPoster: "/projects/slice-defender-poster.jpg",
          videoCaption:
            "Gameplay temps réel — tracking de main sans deep learning (YCrCb + Distance Transform), rendu Qt/OpenGL à 30 FPS.",
        },
        {
          slug: "agent-veille-emploi",
          title: "Assistant de veille emploi (en cours)",
          codeStatus: "in-progress" as CodeStatus,
          description:
            "En cours de construction : un système agentique avec Claude Code et MCP, conçu pour repérer chaque matin les offres récentes, évaluer leur correspondance avec mon profil, préparer des documents adaptés et garder la mémoire du suivi. Chaque candidature restera relue et envoyée par moi.",
          tech: ["Claude Code", "MCP", "Python", "Agents IA"],
          github: "https://github.com/saadbadrane",
        },
        {
          slug: "ocp-incidents",
          title: "OCP — Gestion des incidents informatiques",
          codeStatus: "proprietary" as CodeStatus,
          description:
            "Application de gestion des incidents informatiques développée en stage : interface graphique, base de données et système de tickets, en architecture MVC (Laravel/MySQL).",
          tech: ["PHP", "Laravel", "MySQL"],
          github: "https://github.com/saadbadrane",
          metrics: [
            { value: "2", label: "mois" },
            { value: "MVC", label: "architecture" },
          ],
          problem:
            "Les incidents informatiques étaient suivis de manière informelle, sans vue centralisée de ce qui était ouvert, de qui en avait la charge, ni depuis combien de temps.",
          approach:
            "Une application full-stack développée de bout en bout sur une stack PHP/Laravel et MySQL : modélisation de la base de données, système de tickets et interface graphique, le tout organisé selon une architecture MVC.",
          results:
            "Une application de gestion des incidents fonctionnelle, de la création du ticket à sa résolution, livrée dans les deux mois du stage.",
          limitations:
            "Les notifications et le suivi de SLA ont été laissés de côté faute de temps ; ce seraient les premiers ajouts.",
          features: [
            "Application de suivi d'incidents de bout en bout",
            "Backend Laravel avec modélisation de base MySQL",
            "Système de tickets",
            "Interface graphique utilisateur",
            "Architecture MVC",
          ],
        },
      ],
    },
    contact: {
      title: "Parlons-en",
      intro:
        "Je réponds sous 24 h. Pour un poste, un projet ou juste une question technique.",
      availability:
        "Disponible immédiatement en CDI · Mobilité France entière",
      successTitle: "Message envoyé !",
      successMessage:
        "Merci de m'avoir contacté. Je vous réponds dès que possible.",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "Email",
      emailPlaceholder: "votre.email@exemple.com",
      messageLabel: "Message",
      messagePlaceholder: "Comment puis-je vous aider ?",
      sendButton: "Envoyer le message",
      sendingButton: "Envoi...",
      errorMessage: "Une erreur est survenue. Écrivez-moi directement par email.",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
  },
};

// Rétro-compatibilité
export const personalInfo = content.en.personalInfo;
export const skills = content.en.skills.list;
export const experience = content.en.experience.list;
export const projects = content.en.projects.list;

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