/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.svelte"],
  theme: {
    extend: {
      colors: {
        orange: "#fb923c",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
