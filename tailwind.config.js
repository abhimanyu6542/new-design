/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    
    extend: {
      colors: {
        footerbg: "#1D2130",
        gray: "#4B4B4C",
        Teal: "#2F6C6D",
        yellow: "#e4d63b",
        Solitude: "#e9e9ea",
        lightOrange: "#c8815f",
        HummingBird: "#d1f1ee",
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        slide: 'slide 25s linear infinite',
      },
      keyframes: {
        slide: {
          '0%,100%': { transform: 'translateX(5%)' },
          '50%': { transform: 'translateX(-120%)' },
        },
      },
    },
  },
  plugins: [],
};