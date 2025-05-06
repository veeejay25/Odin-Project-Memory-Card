import { useEffect, useState } from "react";
import { fetchGifs } from "../api/fetchCards";
import Card from "./Card";
import useShuffle from "../hooks/useShuffle";

function CardGrid({ handleCardClick }) {
  const [initialCards, setInitialCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCards() {
      const gifs = await fetchGifs("cats");
      setInitialCards(gifs);
      setLoading(false);
    }
    loadCards();
  }, []);

  const [cards, reshuffle] = useShuffle(initialCards);

  if (loading) return <p>Loading...</p>;

  return (
    <div
      className="grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
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
          onClick={(id) => {
            handleCardClick(id);
            reshuffle();
          }}
        />
      ))}
    </div>
  );
}

export default CardGrid;
