/* eslint-env node */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        theme_indigo: '#4d49f3',
        theme_yellow: '#fed230',
        theme_pink: '#febebe',
        theme_lilac: '#afb2f1',
        theme_periwinkle: '#a9cafd'
      },
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover']
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.filter-grayscale': {
          filter: 'grayscale(1)'
        },
        '.filter-color': {
          filter: 'grayscale(0)'
        }
      }

      addUtilities(newUtilities, {
        variants: ['hover', 'group-hover']
      })
    })
  ],
}
