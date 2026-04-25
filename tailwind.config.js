/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: '#e11d48',    // Rose/Red for appetizing feel
        dred: '#be123c',   // Darker red
        gold: '#f59e0b',   // Appetizing Amber/Gold
        lgold: '#fbbf24',  // Lighter gold
        cream: '#fffdfa',  // Very light warm cream
        warm: '#ffedd5',   // Warm background elements
        card: '#ffffff',   // Clean white for cards
        text: '#291c14',   // Deep brown for text (better than pure black)
        muted: '#78716c',  // Muted gray-brown
        border: '#fed7aa', // Light orange/brown border
      },
      fontFamily: {
        head: ['Playfair Display', 'serif'],
        body: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
