# Memory Card Game (React + Giphy API)

A fun memory game built with React and Vite.  
Players must click on unique cards without repeating — each card click shuffles the grid!

## Features

- 🧠 Memory game mechanics (don't click the same card twice)
- 🎨 Images fetched dynamically from the Giphy API
- 🔀 Cards shuffle every time you click
- 🏆 Scoreboard showing current and best scores
- ⚡ Fast and lightweight (powered by Vite and React)

## Tech Stack

- React
- Vite
- Axios
- Giphy API
- CSS Modules / TailwindCSS (planned for styling)

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set your Giphy API key:

   - Open `src/api/fetchCards.js`
   - Replace `"YOUR_API_KEY_HERE"` with your real Giphy API Key.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view the app.

## Todo

- [x] Set up project and API connection
- [ ] Build Card and Scoreboard components
- [ ] Implement card click logic and shuffle
- [ ] Add win/lose conditions
- [ ] Polish UI/UX
- [ ] Deploy to Vercel or Netlify

## License

This project is licensed under the MIT License.

---

Made with ❤️ and React.
