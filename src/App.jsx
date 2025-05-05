import "./App.css";
import CardGrid from "./components/CardGrid";

function App() {
  const handleCardClick = (id) => {
    console.log("Card clicked:", id);
    // Add score logic later
  };

  return (
    <div>
      <h1>Memory Game</h1>
      <CardGrid handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;
