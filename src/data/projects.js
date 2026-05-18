import rusaPart from "../assets/rusa/N219982.png";
import rusaNozzle from "../assets/rusa/forsunka.png";

export const projects = [
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
