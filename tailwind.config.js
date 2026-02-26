/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-brand': '#f76f38',
        'dark-brand': '#1a1e22',
        'white-brand': '#ffffff',
      },
    },
  },
  plugins: [],
}
