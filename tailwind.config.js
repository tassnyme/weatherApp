/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
           purplee: 'rgb(21, 130, 225)'

      }
    },
  },
  plugins: [],
}