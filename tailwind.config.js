/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.svelte"],
  theme: {
    extend: {
      colors: {
        orange: "#fb923c",
        aboutBg:"#212529",
        servicesBg:"#343a40",
        primaryGreen:"#20c997"
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
