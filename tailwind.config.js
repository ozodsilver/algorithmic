/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#1EBBD7',
        'primary-bold': '#0B7A9C',
        'secondary' : '#F5F5F5',
      },
      fontFamily: {
        raleway : ['Raleway', 'sans-serif'],
      },

      boxShadow:{
        'custom-light' : '0 0 80px rgba(189, 189, 189, 0.2)',
      }
    },
  },
  plugins: [],
}