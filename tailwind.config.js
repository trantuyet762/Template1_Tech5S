/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1820px',
      },
      rotate: {
        '30': '30deg',
        '-30': '-30deg',
      },
    },
  },
  plugins: [],
}

