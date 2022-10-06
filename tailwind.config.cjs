/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(180, 66%, 49%)',
        secondary: 'hsl(257, 27%, 26%)',
        redCustom: 'hsl(0, 87%, 67%)',
        grayCustom: 'hsl(0, 0%, 75%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
      },
    },
  },
  plugins: [],
}
