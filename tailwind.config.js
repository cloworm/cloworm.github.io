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
      backgroundImage: {
        pattern: 'url(\'https://user-images.githubusercontent.com/5566310/103178500-54f7aa00-4851-11eb-955c-261b9f276e7c.png\')'
      },
      colors: {
        theme_indigo: '#4d49f3',
        theme_yellow: '#fed230',
        theme_pink: '#febebe',
        theme_lilac: '#afb2f1',
        theme_periwinkle: '#a9cafd',
        theme_oceanBlue: '#5C30C9',
        theme_mediumPurple: '#AC70EA',
        theme_lavenderWeb: '#E9E7FD',
        theme_skyBlueCrayola: '#75DEF6',
        theme_pacificBlue: '#59AAB9',
        theme_aquamarine: '#78EED0',
        theme_frenchPink: '#FF6194',
        theme_carnationPink: '#F9ABCE',
        theme_lavenderBlush: '#F8E5EF',
        theme_ghostWhite: '#F8F8FD'
      },
    },
  },
  variants: {
    extend: {
      backgroundClip: ['hover'],
      backgroundImage: ['hover'],
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
        },
        '.canvas-resize': {
          'canvas[resize]': {
            width: '100%',
            height: '100%'
          }
        },
        '.clip-ellipse': {
          clipPath: 'ellipse(55% 124% at 50% 150%)'
        },
        '.radial-gradient-purple': {
          background: 'radial-gradient(farthest-corner at 30px 30px, #E9E7FD 0%, #AC70EA 100%)'
        },
        '.radial-gradient-pink': {
          background: 'radial-gradient(farthest-corner at 30px 30px, #F9ABCE 0%, #FF6194 100%)'
        },
        '.radial-gradient-green': {
          background: 'radial-gradient(farthest-corner at 30px 30px, #78EED0 0%, #59AAB9 100%)'
        },
        '.neumorphic': {
          boxShadow: '20px 20px 60px #ccc, -20px -20px 60px #ffffff'
        },
        '.neumorphic-hover': {
          boxShadow: '10px 10px 40px #ff9cbc, -10px -10px 40px #ffffff'
        }
      }

      addUtilities(newUtilities, {
        variants: ['hover', 'group-hover']
      })
    })
  ],
}
