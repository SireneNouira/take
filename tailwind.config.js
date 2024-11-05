/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        primary: {
          rose: 'rgba(245,152,157,255)',
          violet: 'rgba(97,95,125,255)',
          vert: 'rgba(130,202,156,255)',
        }
      }
    },
  },
  plugins: [],
}

