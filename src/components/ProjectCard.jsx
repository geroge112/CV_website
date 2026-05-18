import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cardReveal } from "../animations/pageTransitions.js";
import ProjectPreview from "./ProjectPreview.jsx";
import TechStack from "./TechStack.jsx";

export default function ProjectCard({ project }) {
  return (
    <motion.article className={`project-card theme-${project.theme}`} variants={cardReveal}>
      <ProjectPreview project={project} compact />
      <div className="project-card-body">
        <p className="eyebrow">{project.type}</p>
        <h2>{project.title}</h2>
        <p>{project.shortDescription}</p>
        <TechStack items={project.techStack.slice(0, 4)} small />
        <Link className="card-link" to={`/project/${project.slug}`}>
          Open project
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </motion.article>
  );
}
