/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      keyframes: ({ theme }) => {
        return {
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
          "dark-bg-spread": {
            "0%": {
              width: 0,
              height: 0,
              "background-color": theme("colors.blue-darker"),
            },
            "100%": {
              width: "max(140vw, 140vh)",
              height: "max(140vw, 140vh)",
              "background-color": theme("colors.blue-darker"),
            },
          },
          "dark-bg-shrink": {
            "0%": {
              width: "max(140vw, 140vh)",
              height: "max(140vw, 140vh)",
              "background-color": theme("colors.blue-darker"),
            },
            "100%": {
              width: 0,
              height: 0,
              "background-color": theme("colors.blue-darker"),
            },
          },
          "dark-fade-in": {
            "0%": {
              "background-color": theme("colors.grey-dark"),
              opacity: 0,
            },
            "1%": {
              opacity: 0,
              color: theme("colors.grey-light"),
              fill: theme("colors.grey-light"),
            },
            "100%": {
              opacity: 1,
              color: theme("colors.grey-light"),
              fill: theme("colors.grey-light"),
            },
          },
        };
      },
      animation: {
        "border-scale": "border-scale .2s linear forwards",
        "dark-bg-spread": "dark-bg-spread 500ms forwards",
        "dark-bg-shrink": "dark-bg-shrink 500ms forwards",
        "dark-fade-in": "dark-fade-in 500ms forwards",
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
      red: "tomato",
    },
  },
  plugins: [],
  safelist: ["active"],
  darkMode: "class",
};
