export default function Square({
  row,
  indexRow,
  updateBoard,
  value,
  isSelected,
}) {
  return (
    <>
      {row.map((cell, cellIndex) => {
        const className = [
          "square",
          cell === "✕" ? "square--x" : "",
          cell === "◯" ? "square--o" : "",
        ]
          .filter(Boolean)//convierte es una funcion que convierte cualquier valor a true o false
          .join(" ");

        return (
          <div
            key={cellIndex}
            className={className}
            onClick={() => updateBoard(indexRow, cellIndex)}
          >
            {cell}
          </div>
        );
      })}
    </>
  );
}

export function Turn({ children, isSelected, value }) {
  const className = [
    "square",
    isSelected ? "selected" : "",
    value === "✕" ? "square--x" : "",
    value === "◯" ? "square--o" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={className}>{children}</div>;
}
