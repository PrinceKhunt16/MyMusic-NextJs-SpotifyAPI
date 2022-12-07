/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans Limbu', 'sans-serif'],
        sans: ['Roboto'],
        caveatbrush: 'Caveat Brush',
        caveat: 'Caveat'
      }
    },
  },
  plugins: [],
}
