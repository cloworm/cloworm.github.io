/* eslint-env node */
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-100vh-fix'),
      ],
    },
  },
}
