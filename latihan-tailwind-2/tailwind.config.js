/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: "#F53838",
        "primary-light": "#FFECEC",
        gray: "rgba(0,0,0,0.17)",
        "gray-light": "rgba(33,37,41,0.03)",
        "yellow-star": "#FEA250",
        light: "#F8F9FA",
      },
    },
  },
  plugins: [],
}
