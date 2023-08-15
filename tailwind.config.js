/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue-800': '#021E35',
        'blue-600': '#1A89EC',
        'blue-500': 'rgba(26, 137, 236, 0.07)',
        'blue-400': '#F2F4F7',
        'dark': '#344054',
        'mid': '#98A2B3',
        'light': '#FCFCFD',
        'nav': '#667085',
        'circle-gradient': 'rgba(26, 137, 236, 0.75)',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}

