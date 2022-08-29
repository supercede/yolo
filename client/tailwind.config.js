/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Anek Telugu", "sans-serif"],
    },
    colors: {
      "bg-blue": "#1e2938",
      white: "#ffff",
    },
    extend: {},
  },
  plugins: [],
};
