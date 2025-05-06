function Scoreboard({ currentScore, bestScore }) {
  return (
    <div
      className="scoreboard"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        padding: "1rem",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        Current Score: {currentScore}
      </div>
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        Best Score: {bestScore}
      </div>
    </div>
  );
}

export default Scoreboard;
