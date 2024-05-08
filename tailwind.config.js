/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorGray: '#8B8B8B',
        colorPink: '#FF64AE',
        colorPurple: '#414880',
        colorPurple_200: '#ABB4FF'
      },
      fontSize: {
        md: '1rem'
      },
      width: {
        98: '26rem'
      },
      top: {
        150: '55rem'
      }
    },
  },
  plugins: [],
}

