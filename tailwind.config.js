/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2ecc71', // Medium green with shine
        'primary-light': '#4cd137',
        'primary-dark': '#27ae60',
        'dark': '#1e1e1e',
        'darker': '#121212',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

