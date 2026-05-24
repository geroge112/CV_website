import rusaPart from "../assets/rusa/N219982.png";
import rusaNozzle from "../assets/rusa/forsunka.png";

export const projects = [
  {
    slug: "ai-audio-analyzer-plugin",
    title: "AI Audio Analyzer Plugin",
    eyebrow: "Python + music analysis",
    type: "Plugin Project",
    layout: "default",
    theme: "studio",
    year: "2026",
    shortDescription:
      "Python prototype for a smart mastering assistant: stereo track analysis, loudness metrics, spectral balance, stereo width, reports and ML-ready dataset export.",
    description:
      "A first working backend-style music analysis tool built in Python. It loads stereo tracks, measures peak/RMS/LUFS/crest factor, estimates spectral balance and stereo width by frequency bands, compares with a reference track, prints reports and exports feature datasets for an AI quality model.",
    localPath: "C:\\Users\\Гера\\OneDrive\\Рабочий стол\\проект с плагином\\плагин",
    techStack: ["Python", "NumPy", "SciPy", "SoundFile", "pyloudnorm", "Pandas", "scikit-learn"],
    metrics: ["LUFS / RMS / peak", "5-band spectral balance", "Stereo width analysis", "CSV dataset export"],
    accent: "#8a73ff",
    themeStyle: {
      accent: "#8a73ff",
      gradient: "linear-gradient(135deg, #0b0920 0%, #2a1f68 42%, #071322 100%)",
      cardStyle: "glow",
    },
    preview: {
      kind: "wave",
      label: "Audio features -> Report -> ML dataset",
    },
    blocks: [
      {
        title: "What it does",
        text: "Analyzes stereo audio files and generates a readable mastering-style report with loudness, dynamics, spectrum and stereo information.",
      },
      {
        title: "Project structure",
        text: "The code is split into analyzer.py plus audio_analyzer modules for audio IO, analysis, metrics, spectrum, stereo and report generation.",
      },
      {
        title: "AI workflow",
        text: "Scan mode exports CSV feature datasets, then ml/train_ai.py can train the first tabular quality model using labeled tracks.",
      },
    ],
    workflow: {
      eyebrow: "Project Journey / Workflow Tree",
      title: "From analyzer idea to VST plugin roadmap",
      description:
        "A scroll-driven journey through the project evolution: initial music problem, local analyzer implementation, real comparison tests, practical conclusions and the next step toward a full VST plugin.",
      steps: [
        {
          kicker: "01 / Idea",
          title: "From Music Problem to Plugin Idea",
          text:
            "The project started as an idea for a tool that helps musicians understand why their tracks sound different from professional references.",
          tone: "idea",
        },
        {
          kicker: "02 / Analyzer",
          title: "Local Audio Analyzer",
          text:
            "I built a local analyzer that compares tracks by loudness, spectral balance, presence, air, and stereo width.",
          metrics: ["LUFS", "Spectral balance", "Presence", "Air", "Stereo width"],
          tone: "build",
        },
        {
          kicker: "03 / Test Case",
          title: "Real Track Comparison",
          text:
            "I tested my own tracks against Project_42 and the reference track U WON'T! to understand the real mix differences.",
          metrics: ["Project_42", "U WON'T!", "Matched analysis"],
          tone: "test",
        },
        {
          kicker: "04 / Results",
          title: "Results vs Project_42",
          text: "The first comparison showed that Project_48 is very close in loudness and density.",
          metrics: ["LUFS delta: -0.04 dB", "Air: -2.73 dB", "Presence: -1.03 dB"],
          insight:
            "Project_48 is very close in loudness and density, but slightly darker and less open in the upper range.",
          tone: "test",
        },
        {
          kicker: "05 / Results",
          title: "Results vs U WON'T!",
          text: "The reference comparison showed that loudness alone was not the missing piece.",
          metrics: [
            "My track is +1.62 dB louder",
            "Presence: -3.85 dB",
            "Air: -4.28 dB",
            "Stereo image is narrower in most bands",
          ],
          insight:
            "The track is already loud, but it does not feel as open, wide, and expensive as the reference.",
          tone: "test",
        },
        {
          kicker: "06 / Conclusion",
          title: "Practical Conclusion",
          text:
            "The goal is not to push loudness further. The better approach is to compare at matched loudness, gently open the 8-10 kHz+ air range, check 2-6 kHz for presence and attack, and avoid overprocessing the low end.",
          tone: "result",
        },
        {
          kicker: "07 / Next Step",
          title: "Toward AI Model and VST Plugin",
          text:
            "The next stage is to expand the analysis pipeline, collect more comparison data, train a local AI model, and design the first proper VST plugin interface.",
          metrics: ["Analysis pipeline", "Local AI model", "VST interface"],
          tone: "next",
        },
      ],
    },
  },
  {
    slug: "fve-ai-sales-automation",
    title: "FVE AI Sales Automation",
    eyebrow: "AI + CRM automation",
    type: "Plugin Project",
    layout: "terminal",
    theme: "ai",
    year: "2026",
    shortDescription:
      "Interactive project documentation for an AI sales automation flow connected to FVE business logic and CRM thinking.",
    description:
      "A system concept for automating sales work: collecting leads, preparing structured data, explaining architecture, and showing how AI can support business workflows instead of being only a chat window.",
    liveUrl: "https://geroge112.github.io/-FVE-AI-Sales-Automation/",
    repoUrl: "https://github.com/geroge112/-FVE-AI-Sales-Automation",
    techStack: ["HTML", "CSS", "JavaScript", "AI workflow", "CRM concept"],
    metrics: ["Reusable explanation page", "Business workflow focus", "AI automation demo"],
    accent: "#29d3a6",
    themeStyle: {
      accent: "#29d3a6",
      gradient: "linear-gradient(135deg, #06251f 0%, #0f3d35 44%, #0f172a 100%)",
      cardStyle: "terminal",
    },
    preview: { kind: "diagram", label: "Lead -> AI -> CRM -> Sales action" },
    blocks: [
      {
        title: "Architecture",
        text: "The page presents an automation flow where leads and sales context become structured actions.",
      },
      {
        title: "Why it matters",
        text: "It shows practical frontend presentation skills and the ability to explain backend/API thinking.",
      },
      {
        title: "Next step",
        text: "Connect portfolio project data to an API and reuse this project template for deeper case studies.",
      },
    ],
  },
  {
    slug: "rusa21",
    title: "RUSA21 Industrial Website",
    eyebrow: "Commercial web project",
    type: "Landing Project",
    layout: "landing",
    theme: "industrial",
    year: "2026",
    shortDescription:
      "Production company website for polyurethane and polyamide agricultural machine parts with catalog, contacts, legal pages and backend mail route.",
    description:
      "A practical business website for ООО RUSA: product categories, catalog rendering, contacts, map, cookie/legal pages, and an Express/Nodemailer backend structure for price requests.",
    liveUrl: "https://www.rusa21.ru/",
    localPath: "C:\\Users\\Гера\\OneDrive\\Рабочий стол\\site rusa21\\public_html",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Nodemailer"],
    metrics: ["175-line homepage", "Product catalog", "Mobile optimization", "70 000 EUR business impact"],
    accent: "#d79b31",
    themeStyle: {
      accent: "#d79b31",
      gradient: "linear-gradient(135deg, #2d2414 0%, #6b4a1d 44%, #111827 100%)",
      cardStyle: "industrial",
    },
    preview: {
      kind: "images",
      images: [rusaPart, rusaNozzle],
      label: "Real product assets from the RUSA catalog",
    },
    blocks: [
      {
        title: "Business task",
        text: "Make an industrial product catalog understandable for dealers and agricultural companies.",
      },
      {
        title: "Implementation",
        text: "Static frontend, catalog data, cookies/legal pages, and server-side mail support for requests.",
      },
      {
        title: "Result",
        text: "A working commercial site that supports client acquisition and operational communication.",
      },
    ],
  },
  {
    slug: "booksharing",
    title: "BookSharing App",
    eyebrow: "Java client/server university project",
    type: "University Client/Server Project",
    layout: "default",
    theme: "ai",
    year: "University",
    shortDescription:
      "Java 17 client/server book sharing app with a Spring Boot REST API, MySQL persistence, DTOs and a CLI client.",
    description:
      "BookSharing App is a university portfolio project that demonstrates a Java CLI client communicating with a Spring Boot backend through REST endpoints. The server uses controller, service and repository layers, Spring Data JPA entities, DTO request/response models and a MySQL database connection.",
    repoUrl: "https://github.com/geroge112/booksharing",
    localPath: "C:\\Users\\Гера\\OneDrive\\Документы\\GitHub\\booksharing",
    techStack: ["Java 17", "Spring Boot", "Spring Web", "Spring Data JPA", "MySQL", "Gradle", "REST API", "DTO", "CLI"],
    metrics: ["Client/server modules", "REST API endpoints", "Repository/service layer", "MySQL config template"],
    accent: "#4f8cff",
    themeStyle: {
      accent: "#4f8cff",
      gradient: "linear-gradient(135deg, #07111f 0%, #12335f 44%, #101827 100%)",
      cardStyle: "terminal",
    },
    preview: {
      kind: "diagram",
      label: "Client -> REST API -> Spring Boot -> MySQL",
      nodes: ["Client", "REST API", "Spring Boot", "MySQL"],
    },
    blocks: [
      {
        title: "Project goal",
        text:
          "Build a simple client/server book sharing system where users can register, log in and manage book records through a backend API.",
      },
      {
        title: "Architecture",
        text:
          "The application follows a simple flow: Client / CLI -> REST API -> Spring Boot services -> repository layer -> MySQL database.",
      },
      {
        title: "Backend structure",
        text:
          "The server is built with Spring Boot, Spring Web and Spring Data JPA. It separates controller, service, repository, model and DTO layers.",
      },
      {
        title: "Client communication",
        text:
          "The CLI client sends HTTP requests to the backend, serializes request bodies and reads API responses for user and book flows.",
      },
      {
        title: "Portfolio note",
        text:
          "This is a university/portfolio project, useful for showing backend fundamentals, REST API thinking and Java module structure.",
      },
    ],
    demo: {
      eyebrow: "Portfolio demo block",
      title: "Local Docker Compose demo",
      description:
        "A visual overview of how the BookSharing backend demo runs locally without connecting this portfolio page to a live backend.",
      architecture: ["CLI Client", "REST API", "Spring Boot Services", "Repository Layer", "MySQL"],
      techStack: ["Java 17", "Spring Boot", "Spring Data JPA", "MySQL", "Docker Compose", "Gradle"],
      endpoints: [
        { method: "POST", path: "/users", description: "Register a user with a role." },
        { method: "GET", path: "/users", description: "Read users from the backend API." },
        { method: "POST", path: "/users/credentials", description: "Check login credentials." },
        { method: "POST", path: "/books", description: "Create a book connected to a user." },
        { method: "DELETE", path: "/books/{id}", description: "Delete a book by id." },
      ],
      mockScreens: [
        { title: "Add book", items: ["Title", "Author", "Year", "Genre", "Owner user id"] },
        { title: "List books", items: ["Book id", "Title", "Author", "User id"] },
        { title: "User login", items: ["Username", "Password", "Role response"] },
      ],
      note: "Real local demo runs through Docker Compose: MySQL container plus Spring Boot server. This portfolio block is a visual mock only.",
      githubUrl: "https://github.com/geroge112/booksharing",
    },
  },
  {
    slug: "audio-lab",
    title: "Audio Lab",
    eyebrow: "Future music project",
    type: "Music Project",
    layout: "default",
    theme: "studio",
    year: "Next",
    shortDescription:
      "A planned music-production project page for beats, sound design, waveform previews and FL Studio process notes.",
    description:
      "This placeholder keeps the portfolio scalable: new project types can use the same route and data model while rendering different content blocks.",
    techStack: ["FL Studio", "Audio production", "Web audio", "React"],
    metrics: ["Waveform block planned", "Cover art planned", "Devlog-ready"],
    accent: "#7c5cff",
    themeStyle: {
      accent: "#ff5c93",
      gradient: "linear-gradient(135deg, #28142b 0%, #4c1d35 44%, #111827 100%)",
      cardStyle: "studio",
    },
    preview: { kind: "wave", label: "Audio visualizer placeholder" },
    blocks: [
      {
        title: "Planned blocks",
        text: "Audio preview, waveform visualizer, cover art, DAW screenshots and inspiration notes.",
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
