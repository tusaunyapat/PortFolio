/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      navy: "#000435",
      white: "#ffffff",
      blue: "#172554",
      gray: "#cbd5e1",
    },
    backgroundImage: {
      banner: "url('/src/assets/1_yTKO-GPdJwhdaZpCLNOgZA.png')",
    },
    extend: {},
  },
  plugins: [],
};
