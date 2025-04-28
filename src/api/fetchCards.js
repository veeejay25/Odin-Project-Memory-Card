import axios from "axios";

const API_KEY = "acBWPL9hiInMR3kZ4RhKQ2iFBuNCCQ6U";
const LIMIT = 12;

export async function fetchGifs(query = "funny") {
  try {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
      params: {
        api_key: API_KEY,
        q: query,
        limit: LIMIT,
        rating: "g",
      },
    });

    const gifs = response.data.data.map((gif) => ({
      id: gif.id,
      imageUrl: gif.images.downsized.url,
      title: gif.title,
    }));

    return gifs;
  } catch (error) {
    console.error("Error fetching gifs:", error);
    return [];
  }
}
