const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.cyan[600],
        darkbg: "#05061B",
        darkCard: "#070E27",
      },
    },
  },
  plugins: [],
};
