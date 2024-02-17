// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightblue: "#004aad",
        darkblue: "#15345B",
        myblack: "#212529",
        firstDarkMode: "#0d161c",
        secondDarkMode: "#111b22",
        thirdDarkMode: "#1b2832",
        fourthDarkMode: "#c6cdd2"
      },
      fontFamily:{
        rubik: ["Rubik", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}

