/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          normal: "#2196f3",
        },
        gray: {
          light: "#e0e0e0",
        },
        color: {
          primary: "#607d8b",
          secondary: "#263238",
          third: "#b0bec5",
        },
      },
    },
  },
  plugins: [],
};
