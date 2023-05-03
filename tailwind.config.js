/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'teas-bg': "url(./img/teas-bg-image.jpg)",
        'origin-bg': "url(./img/origin-bg-image.jpg)",
        'flavour-bg': "url(./img/flavour-bg-image.jpg)",
        'effect-bg': "url(./img/effects-bg-image.jpg)",
        'coffein-bg': "url(./img/coffein-bg-image.jpg)"
      }
    },
  },

  plugins: [require("daisyui")],
  screens: {
    'sm': '576px',
    'md': '768px',
    'lg': '992px',
    'xl': '1200px',
    'print': { 'raw': 'print' }
  },
  colors: {
    'logo-color': '#4B6C58',
  },
}

