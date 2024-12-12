/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   
    extend: {
      colors:{
        secondary:'#202020',
        primary:'#01348F'
      },
      fontFamily:{
        'bebas':["Bebas Neue", "sans-serif"],
      },
  
    },
  },
  plugins: [],
}