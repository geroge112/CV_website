import { motion } from "framer-motion";
import { pageTransition } from "../animations/pageTransitions.js";
import ContactForm from "../components/ContactForm.jsx";
import { resume } from "../data/resume.js";

export default function ContactPage() {
  return (
    <motion.div className="page compact-page" {...pageTransition}>
      <section className="contact-page section-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Let’s connect the portfolio to real backend logic next.</h1>
          <p>{resume.email}</p>
          <p>{resume.phone}</p>
        </div>
        <ContactForm />
      </section>
    </motion.div>
  );
}
