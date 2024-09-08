/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        red: "#FF0000",
        green: "#2BFF00",
        purple: "#8000FF",
        pink: "#F700FF",
        yellow: "#E6FF00",
        blue: "#00BCFF",
        brown: "#331900",
        orange: "#FF6600",
        darkblue: "#001AFF",
      },

      myBlack: {
        100: "#000000",
        200: "#303030",
        300: "#5F5F5F",
        400: "#8D8D8D",
        500: "#AEAEAE",
      },

      myRed: {
        100: "#FF0000",
        200: "#AF0000",
        300: "#7D0000",
        400: "#580000",
        500: "#390000",
      },

      myGreen: {
        100: "#00FF00",
        200: "#00B300",
        300: "#008000",
        400: "#008000",
        500: "#002F00",
      },

      myYellow: {
        100: "#FFFF00",
        200: "#B9B900",
        300: "#909001",
        400: "#626205",
        500: "#333300",
      },

      myPink: {
        100: "#E600FF",
        200: "#A600B9",
        300: "#7B0089",
        400: "#4D0455",
        500: "#2D0232",
      },
    },
  },
  plugins: [],
};
