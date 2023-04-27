/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'loginBg' : 'url(./Images/fighter.jpg)'
      },
      screens:{
        sm:'300px',
        md:'768px',
        lg:'1080px'
      }
    },
  },
  plugins: [],
}