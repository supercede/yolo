/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Anek Telugu", "sans-serif"],
    },
    colors: {
      green: "#07e821",
      "bg-blue": "#1e2938",
      blue: "#0f1926",
      grey: "#918e8e",
      white: "#ffff",
    },
    extend: {},
  },
  plugins: [],
};
