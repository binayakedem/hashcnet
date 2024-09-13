/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        open:["Open Sans", "system-ui"],
        roboto:["Roboto", "sans-serif"],
        play:["Playfair Display", "serif"],
      } 
    },
  },
  plugins: [],
}