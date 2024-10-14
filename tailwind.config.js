/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pri: "#DB3A4D",
        bg: "#27232F",
        bg_sec: "#201D26",
      },
    },
  },
  plugins: [],
};
