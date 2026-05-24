import { motion } from "framer-motion";
import TechStack from "./TechStack.jsx";

const sectionMotion = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.26,
      ease: "easeOut",
      staggerChildren: 0.05,
    },
  },
};

const itemMotion = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectDemoBlock({ demo }) {
  if (!demo) {
    return null;
  }

  const architecture = demo.architecture ?? [];
  const endpoints = demo.endpoints ?? [];
  const mockScreens = demo.mockScreens ?? [];
  const techStack = demo.techStack ?? [];

  return (
    <motion.section
      className="content-section project-demo-block"
      variants={sectionMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <motion.div className="project-demo-head" variants={itemMotion}>
        <p className="eyebrow">{demo.eyebrow}</p>
        <h2>{demo.title}</h2>
        <p>{demo.description}</p>
      </motion.div>

      <motion.div className="demo-architecture" variants={itemMotion} aria-label="BookSharing demo architecture">
        {architecture.map((node, index) => (
          <div className="demo-architecture-step" key={node}>
            <motion.div className="demo-node" whileHover={{ y: -4 }}>
              {node}
            </motion.div>
            {index < architecture.length - 1 && <span className="demo-arrow" aria-hidden="true" />}
          </div>
        ))}
      </motion.div>

      <div className="project-demo-grid">
        <motion.article className="demo-panel demo-tech-panel" variants={itemMotion} whileHover={{ y: -4 }}>
          <span className="demo-panel-label">Tech Stack</span>
          <h3>Server demo stack</h3>
          <TechStack items={techStack} small />
        </motion.article>

        <motion.article className="demo-panel demo-endpoints-panel" variants={itemMotion} whileHover={{ y: -4 }}>
          <span className="demo-panel-label">Example API endpoints</span>
          <div className="endpoint-list">
            {endpoints.map((endpoint) => (
              <div className="endpoint-row" key={`${endpoint.method}-${endpoint.path}`}>
                <span className="endpoint-method">{endpoint.method}</span>
                <code>{endpoint.path}</code>
                <p>{endpoint.description}</p>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article className="demo-panel demo-mock-panel" variants={itemMotion} whileHover={{ y: -4 }}>
          <span className="demo-panel-label">Mock UI preview</span>
          <div className="mock-screen-grid">
            {mockScreens.map((screen) => (
              <div className="mock-screen" key={screen.title}>
                <div className="mock-screen-head">
                  <span />
                  <strong>{screen.title}</strong>
                </div>
                <ul>
                  {screen.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.article>
      </div>

      <motion.div className="demo-note-row" variants={itemMotion}>
        <p>{demo.note}</p>
        {demo.githubUrl && (
          <a href={demo.githubUrl} target="_blank" rel="noreferrer">
            GitHub repository
          </a>
        )}
      </motion.div>
    </motion.section>
  );
}
