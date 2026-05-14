/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        god: ['GodOfWar', 'sans-serif'],
      },
    },
  },
  plugins: [],
}