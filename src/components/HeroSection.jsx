import { ArrowRight, Code2, FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { resume } from "../data/resume.js";

const heroTech = ["React", "Vite", "JavaScript", "Python", "Node.js", "MySQL", "AI workflows"];

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Technical portfolio / CV system</p>
        <h1>{resume.name}</h1>
        <h2>{resume.title}</h2>
        <p className="lead">
          I build practical web systems, automation prototypes and tools that connect frontend,
          backend thinking and real business workflows.
        </p>
        <div className="hero-badges" aria-label="Tech stack">
          {heroTech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="hero-actions">
          <Link className="button-primary" to="/projects">
            View projects
            <ArrowRight size={18} />
          </Link>
          <Link className="button-secondary" to="/about">
            <FileText size={18} />
            Read CV
          </Link>
          <a className="button-secondary" href={`mailto:${resume.email}`}>
            <Mail size={18} />
            Contact
          </a>
        </div>
      </div>
      <div className="hero-panel">
        <div className="hero-panel-top">
          <span>Current focus</span>
          <strong>Junior IT / Web / Data</strong>
        </div>
        <div className="hero-terminal">
          <p>$ portfolio --mode technical</p>
          <p>routes: /projects /project/:slug /admin</p>
          <p>content: src/data/projects.js</p>
          <p>next: api + database when MVP is clear</p>
        </div>
        <a className="hero-github" href="https://github.com/geroge112" target="_blank" rel="noreferrer">
          <Code2 size={18} />
          GitHub profile
        </a>
      </div>
    </section>
  );
}
