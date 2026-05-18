import { motion } from "framer-motion";
import { pageTransition, staggerList } from "../animations/pageTransitions.js";
import CVSection from "../components/CVSection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function HomePage() {
  return (
    <motion.div className="page" {...pageTransition}>
      <HeroSection />
      <section className="content-section">
        <div className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2>Project cards with dynamic routes</h2>
        </div>
        <motion.div className="project-grid" variants={staggerList} initial="initial" animate="animate">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </section>
      <CVSection />
    </motion.div>
  );
}
