/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F07167',
        'secondary': '#FED9B7',
        'accent': '#00AFB9'
      },
    },
  },
  plugins: [],
}
