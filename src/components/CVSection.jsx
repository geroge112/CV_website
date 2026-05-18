import { resume } from "../data/resume.js";

export default function CVSection() {
  return (
    <section className="content-section cv-section" id="cv">
      <div>
        <p className="eyebrow">Resume</p>
        <h2>{resume.title}</h2>
        <p>{resume.location}</p>
      </div>

      <div className="cv-grid">
        <article className="cv-panel">
          <h3>Highlights</h3>
          <ul>
            {resume.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="cv-panel">
          <h3>Skills</h3>
          <div className="skill-cloud">
            {resume.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
      </div>

      <div className="timeline">
        {resume.experience.map((job) => (
          <article key={`${job.role}-${job.company}`}>
            <span>{job.period}</span>
            <h3>{job.role}</h3>
            <p>{job.company}</p>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
