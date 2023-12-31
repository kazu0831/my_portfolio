/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        'screen-minus-60': 'calc(100vh - 60px)'
      },
    },
  },
  plugins: [],
} 