/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      primary: ["Anton", "sans-serif"],
      secondary: ["Poppins", "sans-serif"],
      third: ["Urbanist", "sans-serif"]
    },
    extend: {
      colors: {
        primary: "#EDFF71",
        secondary: "#27363D",
        third: "#D0EFEF",
        forth: "#0F2028"
      }
    },
  },
  plugins: [],
}