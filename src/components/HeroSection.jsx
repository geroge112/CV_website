import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { resume } from "../data/resume.js";

export default function HeroSection() {
  return (
    <section className="hero-section section-grid">
      <div className="space-y-6">
        <p className="eyebrow">Interactive portfolio / CV</p>
        <h1>{resume.name}</h1>
        <p className="lead">{resume.summary}</p>
        <div className="hero-actions">
          <Link className="button-primary" to="/projects">
            View projects
            <ArrowRight size={18} />
          </Link>
          <Link className="button-secondary" to="/about">
            <FileText size={18} />
            Read CV
          </Link>
        </div>
      </div>
      <div className="system-card">
        <div className="system-row">
          <span>Frontend</span>
          <strong>React + Vite</strong>
        </div>
        <div className="system-row">
          <span>Content</span>
          <strong>Data-driven projects</strong>
        </div>
        <div className="system-row">
          <span>Next</span>
          <strong>Express API + DB + Admin</strong>
        </div>
      </div>
    </section>
  );
}
