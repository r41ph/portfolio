/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      keyframes: {
        "border-scale": {
          "0%": {
            transform: "scale(1)",
            opacity: 0,
            "border-color": "transparent",
          },
          "100%": {
            transform: "scale(0.9)",
            opacity: 1,
            "border-color": "white",
          },
        },
      },
      animation: {
        "border-scale": "border-scale .2s linear forwards",
      },
    },
    colors: {
      blue: "#0f70b7",
      "blue-light": "#639ec8",
      "blue-dark": "#095187",
      "blue-darker": "#020D1F", // https://www.fortnight.studio/work
      grey: "#8492a6",
      "grey-light": "#d3dce6",
      "grey-dark": "#273444",
      "grey-darker": "#363636",
      white: "#FFFFFF",
      transparent: "transparent",
    },
  },
  plugins: [],
  safelist: ["active"],
  darkMode: "class",
};
