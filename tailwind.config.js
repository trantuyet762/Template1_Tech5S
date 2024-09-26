/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1820px',
        'xs' :'0px',
      },
      rotate: {
        '30': '30deg',
        '-30': '-30deg',
        '15': '15deg',
        '-15': '-15deg',
      },
    },
  },
  plugins: [],
}

