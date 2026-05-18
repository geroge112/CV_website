import { motion } from "framer-motion";
import { pageTransition, staggerList } from "../animations/pageTransitions.js";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function ProjectsPage() {
  return (
    <motion.div className="page compact-page" {...pageTransition}>
      <section className="content-section">
        <div className="section-head">
          <p className="eyebrow">Projects</p>
          <h1>Reusable cards, reusable routes</h1>
          <p>Every project is rendered from src/data/projects.js and can later come from an API.</p>
        </div>
        <motion.div className="project-grid" variants={staggerList} initial="initial" animate="animate">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
