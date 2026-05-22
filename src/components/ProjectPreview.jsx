export default function ProjectPreview({ project, compact = false }) {
  const preview = project?.preview;

  if (!preview) {
    return null;
  }

  if (preview.kind === "images") {
    const images = preview.images ?? [];

    return (
      <div className={`project-preview image-preview ${compact ? "compact" : ""}`}>
        {images.map((image, index) => (
          <img src={image} alt={`${project.title} preview ${index + 1}`} key={image} />
        ))}
      </div>
    );
  }

  if (preview.kind === "wave") {
    return (
      <div className={`project-preview wave-preview ${compact ? "compact" : ""}`}>
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} style={{ height: `${28 + ((index * 17) % 54)}%` }} />
        ))}
      </div>
    );
  }

  return (
    <div className={`project-preview diagram-preview ${compact ? "compact" : ""}`}>
      <div>Lead</div>
      <span />
      <div>AI</div>
      <span />
      <div>CRM</div>
      <span />
      <div>Sales</div>
    </div>
  );
}
