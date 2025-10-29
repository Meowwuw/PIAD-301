/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Bitcount Grid Single", "sans-serif"]
      }
    },
  },
  plugins: [],
}

