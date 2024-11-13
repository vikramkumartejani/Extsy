// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(301deg, #F0C2DB 24.08%, #F1C8D9 38.36%, #EDE3E1 58.34%, #FFFFFF 81.18%)',
      },
      colors:{
        primary: '#0B0A0A',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
