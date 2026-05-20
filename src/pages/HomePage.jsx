import { motion } from "framer-motion";
import { pageTransition } from "../animations/pageTransitions.js";
import CVSection from "../components/CVSection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ProjectShowcase from "../components/ProjectShowcase.jsx";
import SystemBlueprint from "../components/SystemBlueprint.jsx";
import { projects } from "../data/projects.js";

export default function HomePage() {
  return (
    <motion.div className="page" {...pageTransition}>
      <HeroSection />
      <SystemBlueprint />
      <ProjectShowcase projects={projects} />
      <CVSection />
    </motion.div>
  );
}
