// src/App.jsx
import { useState } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import CardGrid from "./components/CardGrid";
import GameOverModal from "./components/GameOverModal";
import { getBestScore, setBestScore } from "./utils/storage";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScoreState] = useState(() => getBestScore());
  const [clickedCards, setClickedCards] = useState([]);
  const [gameOverMessage, setGameOverMessage] = useState("");

  function handleCardClick(id) {
    if (clickedCards.includes(id)) {
      setGameOverMessage("Uh oh—you clicked the same card!");
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      setClickedCards([...clickedCards, id]);

      if (newScore > bestScore) {
        setBestScoreState(newScore);
        setBestScore(newScore);
      }
    }
  }

  function handleRestart() {
    setCurrentScore(0);
    setClickedCards([]);
    setGameOverMessage("");
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Memory Game</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <CardGrid handleCardClick={handleCardClick} />

      {gameOverMessage && (
        <GameOverModal message={gameOverMessage} onClose={handleRestart} />
      )}
    </div>
  );
}

export default App;
