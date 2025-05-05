import { useEffect, useState } from "react";
import { fetchGifs } from "../api/fetchCards";
import Card from "./Card";
import shuffle from "../utils/shuffle";

function CardGrid({ handleCardClick }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCards() {
      const gifs = await fetchGifs("cats");
      setCards(shuffle(gifs));
      setLoading(false);
    }

    loadCards();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div
      className="grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "16px",
        padding: "1rem",
      }}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          imageUrl={card.imageUrl}
          title={card.title}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
}

export default CardGrid;
