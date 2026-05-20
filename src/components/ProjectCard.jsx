import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cardReveal } from "../animations/pageTransitions.js";
import ProjectPreview from "./ProjectPreview.jsx";
import TechStack from "./TechStack.jsx";

export default function ProjectCard({ project }) {
  const themeStyle = project.themeStyle ?? {};
  const style = {
    "--project-accent": themeStyle.accent ?? project.accent,
    "--project-gradient": themeStyle.gradient,
  };

  return (
    <motion.article className="project-card-frame" variants={cardReveal}>
      <Link
        className={`project-card theme-${project.theme} card-style-${themeStyle.cardStyle ?? "default"}`}
        style={style}
        to={`/project/${project.slug}`}
      >
        <ProjectPreview project={project} compact />
        <div className="project-card-body">
          <p className="eyebrow">{project.type}</p>
          <h2>{project.title}</h2>
          <p>{project.shortDescription}</p>
          <TechStack items={project.techStack.slice(0, 4)} small />
          <span className="card-link">
          Open project
          <ArrowUpRight size={18} />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
