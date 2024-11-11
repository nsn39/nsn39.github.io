/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,jsx}", 
    "./src/pages/*.{html,js,jsx}",
    "./src/components/*.jsx"
  ],
  theme: {
    fontFamily: {
      "oswald": ["Oswald"],
      "playfair": ["Playfair"]
    },
    extend: {},
  },
  plugins: [],
}

