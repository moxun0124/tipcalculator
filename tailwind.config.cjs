/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tight: '-0.5rem',
      normal: '0',
      wide: '0.5rem',
    },
    colors: {
      primary: "#20A291",
      white: "#FFFFFF",
      dark: "#00494D",
      grayish: {
        DEFAULT: "#7F9C9F",
        dark: "#5E7A7D",
        light: "#C5E4E7",
        veryLight: "#F4FAFA"
      },
    },
    extend: {},
  },
  plugins: [],
}
