export default function TechStack({ items, small = false }) {
  return (
    <div className={`tech-stack ${small ? "small" : ""}`}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
