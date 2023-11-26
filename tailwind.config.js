/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'weather-primary': '#006621',
        'weather-secondary': '#004321'
      }
    },
    fontFamily :{
      Roboto :['Roboto,sans-serif', ]
    },
    container: {
      padding :'2rem',
      center :true,
    }
  },
  plugins: [],
}

