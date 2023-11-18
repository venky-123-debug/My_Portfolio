/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.svelte"],
  theme: {
    extend: {
      colors: {
        orange: "#fb923c",
        aboutBg:"#212529"
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
