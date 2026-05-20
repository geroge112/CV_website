import { Code2, Database, LayoutDashboard, Server, Sparkles } from "lucide-react";

const roadmap = [
  { version: "v0", title: "Foundation", status: "Ready", items: ["Homepage", "CV", "Project cards"] },
  { version: "v1", title: "Dynamic Pages", status: "Ready", items: ["/project/:slug", "JSON data", "Themes"] },
  { version: "v2", title: "Motion UI", status: "Ready", items: ["Transitions", "Hover states", "Animated background"] },
  { version: "v3", title: "Backend API", status: "Next", items: ["Express routes", "Contact form", "Project API"] },
  { version: "v4", title: "Database", status: "Later", items: ["Projects table", "Messages table", "Users"] },
  { version: "v5", title: "Admin Panel", status: "Later", items: ["Login", "Create/edit", "Uploads"] },
];

const architecture = [
  { icon: LayoutDashboard, label: "Frontend", detail: "React pages + reusable components" },
  { icon: Code2, label: "API requests", detail: "src/api layer prepared" },
  { icon: Server, label: "Backend", detail: "Express structure planned" },
  { icon: Database, label: "Database", detail: "PostgreSQL / Supabase later" },
];

const folders = ["components", "pages", "layouts", "styles", "data", "animations", "api", "hooks"];

export default function SystemBlueprint() {
  return (
    <section className="content-section blueprint-section">
      <div className="section-head">
        <p className="eyebrow">Living system</p>
        <h2>Portfolio architecture visible on the page</h2>
        <p>
          This is the same roadmap from the project plan, rendered as UI. Later these blocks can come
          from the backend instead of static frontend data.
        </p>
      </div>

      <div className="architecture-flow">
        {architecture.map((item) => {
          const Icon = item.icon;

          return (
            <article className="architecture-node" key={item.label}>
              <Icon size={24} />
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          );
        })}
      </div>

      <div className="blueprint-grid">
        <div className="roadmap-board">
          {roadmap.map((step) => (
            <article className={`roadmap-card status-${step.status.toLowerCase()}`} key={step.version}>
              <div>
                <span>{step.version}</span>
                <strong>{step.status}</strong>
              </div>
              <h3>{step.title}</h3>
              <ul>
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside className="folder-panel">
          <Sparkles size={28} />
          <h3>Modular structure</h3>
          <p>Each folder has one job, so new projects, layouts and backend integration can grow cleanly.</p>
          <div className="folder-list">
            {folders.map((folder) => (
              <span key={folder}>src/{folder}</span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
