import { ExternalLink, FolderGit2, MapPinned } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectDemoBlock from "../components/ProjectDemoBlock.jsx";
import ProjectPreview from "../components/ProjectPreview.jsx";
import ProjectWorkflowTree from "../components/ProjectWorkflowTree.jsx";
import TechStack from "../components/TechStack.jsx";

export default function ProjectLayout({ project, nextProject }) {
  const themeStyle = project.themeStyle ?? {};
  const metrics = project.metrics ?? [];
  const blocks = project.blocks ?? [];
  const techStack = project.techStack ?? [];
  const style = {
    "--project-accent": themeStyle.accent ?? project.accent,
    "--project-gradient": themeStyle.gradient,
  };

  return (
    <article className={`project-shell theme-${project.theme}`} style={style}>
      <section className="project-hero section-grid">
        <div className="space-y-6">
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p className="lead">{project.description}</p>
          <TechStack items={techStack} />
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a className="button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink size={18} />
                Open live
              </a>
            )}
            {project.repoUrl && (
              <a className="button-secondary" href={project.repoUrl} target="_blank" rel="noreferrer">
                <FolderGit2 size={18} />
                Repository
              </a>
            )}
            {project.localPath && (
              <span className="button-secondary">
                <MapPinned size={18} />
                Local project
              </span>
            )}
          </div>
        </div>
        <ProjectPreview project={project} />
      </section>

      <section className="content-section">
        <div className="project-metrics">
          {metrics.map((metric) => (
            <div key={metric}>
              <span>{metric}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section case-grid">
        {blocks.map((block) => (
          <article className="case-block" key={block.title}>
            <h2>{block.title}</h2>
            <p>{block.text}</p>
          </article>
        ))}
      </section>

      <ProjectDemoBlock demo={project.demo} />

      <ProjectWorkflowTree workflow={project.workflow} />

      {nextProject && (
        <section className="content-section next-project">
          <p className="eyebrow">Next project</p>
          <Link to={`/project/${nextProject.slug}`}>
            <span>{nextProject.title}</span>
            <strong>{nextProject.shortDescription}</strong>
          </Link>
        </section>
      )}
    </article>
  );
}
