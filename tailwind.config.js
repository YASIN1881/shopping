/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#377DFF",
        green: "#38CB89",
        orange: "#FFAB00",
        red: "#FF5630",
        background: "#FFFFFF",
        seconderyBg: "#F3F5F7",
        footerBg: "#141718",
        textColor: "#000000",
        mainText: "#141718",
        primaryText: "#6C7275",
        seconderyText: "#232627",
      },
    },
  },
  plugins: [],
};
