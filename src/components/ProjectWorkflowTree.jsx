import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getCardState(index, activeIndex) {
  const distance = index - activeIndex;

  if (distance === 0) {
    return "active";
  }

  if (distance === -1) {
    return "previous";
  }

  if (distance === 1) {
    return "next";
  }

  return distance < 0 ? "previous-far" : "next-far";
}

function getPointState(index, activeIndex) {
  if (index === activeIndex) {
    return "active";
  }

  if (index < activeIndex) {
    return "passed";
  }

  if (index === activeIndex + 1) {
    return "next";
  }

  return "upcoming";
}

function WorkflowCard({ step, state }) {
  return (
    <article className={`journey-card state-${state} journey-tone-${step.tone ?? "default"}`}>
      <div className="journey-card-surface">
        <span className="journey-kicker">{step.kicker}</span>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
        {step.metrics && (
          <div className="journey-metrics">
            {step.metrics.map((metric) => (
              <span key={metric}>{metric}</span>
            ))}
          </div>
        )}
        {step.insight && <p className="journey-insight">{step.insight}</p>}
      </div>
    </article>
  );
}

export default function ProjectWorkflowTree({ workflow }) {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const steps = workflow?.steps ?? [];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const normalized = clamp(latest, 0, 1);
    const maxIndex = Math.max(steps.length - 1, 0);
    const stepProgress = normalized * maxIndex;
    const nextIndex = clamp(Math.round(stepProgress), 0, maxIndex);

    sectionRef.current?.style.setProperty("--journey-progress", normalized.toString());
    sectionRef.current?.style.setProperty("--journey-active-progress", stepProgress.toString());
    setActiveIndex((currentIndex) => {
      return currentIndex === nextIndex ? currentIndex : nextIndex;
    });
  });

  if (!steps.length) {
    return null;
  }

  return (
    <section
      className="workflow-scroll journey-section"
      ref={sectionRef}
      style={{
        "--journey-count": steps.length,
        "--journey-active-index": activeIndex,
        "--journey-active-progress": activeIndex,
      }}
    >
      <div className={`workflow-sticky journey-sticky ${activeIndex > 0 ? "is-intro-hidden" : ""}`}>
        <div className="journey-bg" aria-hidden="true" />

        <div className="journey-copy">
          <p className="eyebrow">{workflow.eyebrow}</p>
          <h2>{workflow.title}</h2>
          <p>{workflow.description}</p>
        </div>

        <div className="journey-axis" aria-label="Workflow progress">
          <span className="journey-axis-line" aria-hidden="true" />
          <span className="journey-axis-fill" aria-hidden="true" />
          <div className="journey-points">
            {steps.map((step, index) => (
              <span
                className={`journey-point state-${getPointState(index, activeIndex)}`}
                key={step.kicker}
                style={{ "--point-index": index }}
                title={step.title}
              />
            ))}
          </div>
        </div>

        <div className="journey-stage" aria-live="polite">
          {steps.map((step, index) => (
            <WorkflowCard key={`${step.kicker}-${step.title}`} state={getCardState(index, activeIndex)} step={step} />
          ))}
        </div>

        <div className="journey-progress" aria-label="Project journey progress">
          {steps.map((step, index) => (
            <span className={`state-${getPointState(index, activeIndex)}`} key={step.kicker} />
          ))}
        </div>
      </div>
    </section>
  );
}
