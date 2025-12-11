/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-light': '#E8F0FA',
        'theme-medium': '#DAE3F5',
        'theme-blue': '#0B497A',
        'theme-red': '#D32F2F',
        'theme-dark': '#212647',
        'heading-dark': '#0B0C21',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
