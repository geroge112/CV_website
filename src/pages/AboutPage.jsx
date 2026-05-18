import { motion } from "framer-motion";
import { pageTransition } from "../animations/pageTransitions.js";
import CVSection from "../components/CVSection.jsx";
import { resume } from "../data/resume.js";

export default function AboutPage() {
  return (
    <motion.div className="page compact-page" {...pageTransition}>
      <section className="content-section about-intro">
        <p className="eyebrow">About</p>
        <h1>{resume.name}</h1>
        <p>{resume.summary}</p>
      </section>
      <CVSection />
    </motion.div>
  );
}
