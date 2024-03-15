/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "logo": "#0e88c9"
      },
      backgroundImage: {
        "background": "url('./assets/bg.jpg')"
      },
      backgroundColor: {
        "overlay": "rgba(0,0,0,0.3)"
      }
    },
  },
  plugins: [],
};
