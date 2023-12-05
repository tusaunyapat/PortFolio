/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      navy: "#01153e",
      white: "#ffffff",
      test: "#cffafe",
      lightnavy: "#2e5a88",
      lightblue: "#74b8f0",
      whiteBlue: "#bdccee",
    },
    fontSize: {
      xs1: "0.6rem",
      xs2: "0.7rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "5xl": "3rem",
    },
    extend: {},
  },
  plugins: [],
};
