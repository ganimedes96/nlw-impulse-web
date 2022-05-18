module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        brand:{
          300: '#8257e6',
          500:'#996dff'
        }
      },
      borderRadius:{
        md:'4px'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('tailwind-scrollbar'),
  ],
}