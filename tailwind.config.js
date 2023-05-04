/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'teas-bg': "url(./img/bg/teas-bg-image.jpg)",
        'origin-bg': "url(./img/bg/origin-bg-image.jpg)",
        'flavour-bg': "url(./img/bg/flavour-bg-image.jpg)",
        'effect-bg': "url(./img/bg/effects-bg-image.jpg)",
        'coffein-bg': "url(./img/bg/coffein-bg-image.jpg)"
      }
    },
  },

  plugins: [require("daisyui")],
  screens: {
    'sm': '576px',
    'md': '768px',
    'lg': '992px',
    'xl': '1200px',
  },
  colors: {
    'logo-color': '#4B6C58',
  },
}

