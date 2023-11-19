/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.js'],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};

