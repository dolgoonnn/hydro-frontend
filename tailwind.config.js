module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cwhite: "#FEFCFB",
        ccblue: "#0B9CDB",
        coblue: "#0A1128",
        crblue: "#001F54",
        cindigo: "#034078",
        chblue: "#086F9B"
      }

    },
    container: {
      center: true,
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
