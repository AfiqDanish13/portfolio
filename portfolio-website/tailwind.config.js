/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        accent: '#007AFF',
        background: '##FFFFFF ',
        secondary: '#666666',
        dark: '#4F4F4F',
      },
      fontFamily: {
        heading: 'Roboto',
        body: 'Inter',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}