/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./assets/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Questrial", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": `radial-gradient(var(--tw-gradient-stops))`,
      },
    },
  },
  plugins: [],
};
