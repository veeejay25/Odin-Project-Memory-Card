import { useState, useEffect, useCallback } from "react";
import shuffle from "../utils/shuffle";

export default function useShuffle(items = []) {
  const [shuffledItems, setShuffledItems] = useState(() => shuffle(items));

  useEffect(() => {
    setShuffledItems(shuffle(items));
  }, [items]);

  const reshuffle = useCallback(() => {
    setShuffledItems(shuffle(items));
  }, [items]);

  return [shuffledItems, reshuffle];
}
