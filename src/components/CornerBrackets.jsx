export default function CornerBrackets({ color = "green", corners = ["tl", "tr", "bl", "br"] }) {
  const colorClass = color === "purple" ? "purple" : "";
  return (
    <>
      {corners.map((corner) => (
        <span key={corner} className={`corner-bracket ${corner} ${colorClass}`} />
      ))}
    </>
  );
}
