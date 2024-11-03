/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      colors: {
        primary: '#1E40AF', // Azul escuro
        secondary: '#1D4ED8', // Azul médio
        accent: '#3B82F6', // Azul claro
        neutral: '#F3F4F6', // Cinza claro
        danger: '#EF4444', // Vermelho
      },
    },
  },
  plugins: [],
}




