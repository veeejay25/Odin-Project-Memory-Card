import { useEffect, useState } from "react";
import { fetchGifs } from "../api/fetchCards";

function CardGrid() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCards() {
      const gifs = await fetchGifs("cats");
      setCards(gifs);
      setLoading(false);
    }

    loadCards();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid">
      {cards.map((card) => (
        <img key={card.id} src={card.imageUrl} alt={card.title} />
      ))}
    </div>
  );
}

export default CardGrid;
