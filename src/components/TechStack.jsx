export default function TechStack({ items = [], small = false }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className={`tech-stack ${small ? "small" : ""}`}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
