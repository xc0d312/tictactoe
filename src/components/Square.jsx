export default function Square({ children, updateBoard, isSelected, value }) {
  const className = [
    "square",
    isSelected ? "selected" : "",
    value === "x" ? "square--x" : "",
    value === "o" ? "square--o" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={className} onClick={updateBoard}>
      {children}
    </div>
  );
}
