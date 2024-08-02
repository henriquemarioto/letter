/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "heartsBackground": "url('./images/hearts.gif')"
      }
    },
  },
  plugins: [],
}

