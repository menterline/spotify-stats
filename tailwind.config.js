/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        spotifyGreen: "#1db954",
        background: "#212121",
        spotifyBlack: "#121212",
        background2: "#535353",
        spotifyText: "#b3b3b3",
      },
      width: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
