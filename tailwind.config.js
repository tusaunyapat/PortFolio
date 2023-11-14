/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      navy: "#000435",
      black: "#020617",
      white: "#ffffff",
      lightgray: "#f1f5f9",
      blue: "#172554",
      gray: "#cbd5e1",
      lightblue: "#e0f2fe",
      skyblue: "#7dd3fc",
    },
    backgroundImage: {
      banner: "url('/src/assets/1_yTKO-GPdJwhdaZpCLNOgZA.png')",
    },
    extend: {},
  },
  plugins: [],
};
