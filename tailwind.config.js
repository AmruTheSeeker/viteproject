/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Epiloque", "sans-serif"],
        display: ["Playfair", "sans-serif"],
      },
    },
  },
  plugins: [],
}

