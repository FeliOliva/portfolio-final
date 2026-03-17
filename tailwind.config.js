// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gotham: [
          "Gotham",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "windows-classic":
          "linear-gradient(to bottom, #87CEEB 0%, #87CEEB 25%, #98FB98 25%, #90EE90 100%)",
      },
    },
  },
  plugins: [],
};
