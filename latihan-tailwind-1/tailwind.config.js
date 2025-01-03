/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        "biru-toska": {
          100: "#108489",
          200: "#108482",
          300: "#10f489",
        },
      },
    },
  },
  plugins: [],
}
