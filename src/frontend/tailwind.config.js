/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#46c768', 
        secondary: '#ff7849',
      },
      fontFamily:{
        sans: ["Bitcount Grid Single", "sans-serif"]
      },
    },
  },
  plugins: [],
}

