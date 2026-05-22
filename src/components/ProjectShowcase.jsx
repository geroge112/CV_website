import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProjectPreview from "./ProjectPreview.jsx";
import TechStack from "./TechStack.jsx";

function getCircularOffset(index, activeIndex, length) {
  let offset = index - activeIndex;

  if (offset > length / 2) {
    offset -= length;
  }

  if (offset < -length / 2) {
    offset += length;
  }

  return offset;
}

export default function ProjectShowcase({ projects, enableAutoSnap = true }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
  });
  const sectionRef = useRef(null);
  const snappedRef = useRef(false);
  const activeProject = projects[activeIndex];

  const showcaseStyle = useMemo(
    () => ({
      "--showcase-accent": activeProject.themeStyle?.accent ?? activeProject.accent,
      "--showcase-gradient": activeProject.themeStyle?.gradient,
    }),
    [activeProject]
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);

    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
    } else {
      media.addListener(update);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", update);
      } else {
        media.removeListener(update);
      }
    };
  }, []);

  useEffect(() => {
    if (!enableAutoSnap) {
      return undefined;
    }

    const section = sectionRef.current;

    if (window.matchMedia("(max-width: 768px)").matches) {
      return undefined;
    }

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.18 && !snappedRef.current && window.scrollY > 220) {
          snappedRef.current = true;
          window.setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 80);
        }
      },
      { threshold: [0.12, 0.18, 0.32] }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [enableAutoSnap]);

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + projects.length) % projects.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % projects.length);
  };

  return (
    <section className="content-section selected-work-section" ref={sectionRef} style={showcaseStyle}>
      <div className="project-showcase" aria-label="Selected projects carousel">
        <div className="showcase-copy">
          <p className="eyebrow">Selected work</p>
          <h2>Projects carousel</h2>
        </div>
        <div className="showcase-background" aria-hidden="true" />
        <button className="showcase-arrow left" type="button" onClick={showPrevious} aria-label="Previous project">
          <ChevronLeft size={24} />
        </button>

        <div className="showcase-stage">
          {projects.map((project, index) => {
            const techStack = project.techStack ?? [];
            const offset = getCircularOffset(index, activeIndex, projects.length);
            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 1;
            const accent = project.themeStyle?.accent ?? project.accent;
            const gradient = project.themeStyle?.gradient;
            const cylinderAngle = offset * 58;
            const cylinderRadius = 620;
            const angleRadians = (cylinderAngle * Math.PI) / 180;
            const cylinderX = Math.sin(angleRadians) * cylinderRadius;
            const cylinderZ = Math.cos(angleRadians) * cylinderRadius - cylinderRadius;

            if (isMobile && !isActive) {
              return null;
            }

            return (
              <motion.article
                className={`showcase-card ${isActive ? "active" : "side"} card-style-${
                  project.themeStyle?.cardStyle ?? "default"
                }`}
                key={project.slug}
                style={{
                  "--project-accent": accent,
                  "--project-gradient": gradient,
                  pointerEvents: isMobile || isVisible ? "auto" : "none",
                }}
                animate={
                  isMobile
                    ? {
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        z: 0,
                        rotateY: 0,
                        filter: "none",
                        zIndex: 5,
                      }
                    : {
                        x: cylinderX,
                        z: cylinderZ,
                        scale: isActive ? 1 : 0.84,
                        rotateY: -cylinderAngle,
                        rotateZ: 0,
                        opacity: isVisible ? (isActive ? 1 : 0.58) : 0,
                        filter: isActive ? "blur(0px)" : "blur(3px)",
                        zIndex: isActive ? 5 : 2 - Math.abs(offset),
                      }
                }
                transition={isMobile ? { duration: 0.12, ease: "easeOut" } : { type: "spring", stiffness: 170, damping: 24 }}
                aria-hidden={!isMobile && !isVisible}
              >
                <Link className="showcase-card-link" to={`/project/${project.slug}`} tabIndex={isMobile || isVisible ? 0 : -1}>
                  <div className="showcase-preview">
                    <ProjectPreview project={project} compact />
                  </div>
                  <div className="showcase-card-body">
                    <div className="showcase-meta">
                      <span>{project.type}</span>
                      <strong>{project.year}</strong>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.shortDescription}</p>
                    <TechStack items={techStack.slice(0, 4)} small />
                    {isActive && (
                      <span className="showcase-link">
                      Open project
                      <ArrowUpRight size={18} />
                      </span>
                    )}
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        <button className="showcase-arrow right" type="button" onClick={showNext} aria-label="Next project">
          <ChevronRight size={24} />
        </button>

        <div className="showcase-dots" aria-label="Project position">
          {projects.map((project, index) => (
            <button
              className={index === activeIndex ? "active" : ""}
              key={project.slug}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${project.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
