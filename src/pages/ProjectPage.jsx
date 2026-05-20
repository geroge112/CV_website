import { motion } from "framer-motion";
import { Navigate, useParams } from "react-router-dom";
import { pageTransition } from "../animations/pageTransitions.js";
import { getProjectBySlug, projects } from "../data/projects.js";
import { useProjectTheme } from "../hooks/useProjectTheme.js";
import ProjectLayout from "../layouts/ProjectLayout.jsx";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const index = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(index + 1) % projects.length];

  useProjectTheme(project);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <motion.div className="page compact-page project-page" {...pageTransition}>
      <ProjectLayout project={project} nextProject={nextProject} />
    </motion.div>
  );
}
