import { useEffect, useRef, useState } from "react";

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
  const timersRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const steps = workflow?.steps ?? [];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || !steps.length) {
      return undefined;
    }

    const clearTimers = () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
      timersRef.current = [];
    };

    const startSequence = () => {
      clearTimers();
      setHasStarted(true);
      setActiveIndex(0);

      steps.slice(1).forEach((_, index) => {
        const timer = window.setTimeout(() => {
          setActiveIndex(index + 1);
        }, 1450 + index * 1750);

        timersRef.current.push(timer);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startSequence();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      clearTimers();
    };
  }, [steps.length]);

  if (!steps.length) {
    return null;
  }

  const maxIndex = Math.max(steps.length - 1, 1);
  const progress = activeIndex / maxIndex;

  return (
    <section
      className="workflow-scroll journey-section"
      ref={sectionRef}
      style={{
        "--journey-count": steps.length,
        "--journey-active-index": activeIndex,
        "--journey-progress": progress,
        "--connector-presence": hasStarted ? 1 : 0,
      }}
    >
      <div className={`workflow-sticky journey-sticky ${hasStarted ? "is-running" : ""} ${activeIndex > 0 ? "is-intro-hidden" : ""}`}>
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

        <span className="journey-connector" aria-hidden="true">
          <span className="journey-connector-segment from-card" />
          <span className="journey-connector-node" />
        </span>

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
