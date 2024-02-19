/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "4rem",
          lg: "8rem",
          xl: "10rem",
          "2xl": "13rem",
        },
        screen: {
          xs: "480px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      fontFamily: {
        Poppins: "Poppins" /* 500 */,
        InterRegular: "Inter Regular" /* 400 */,
        InterSemiBold: "Inter SemiBold" /* 600 */,
        InterBold: "Inter Bold" /* 700 */,
        SpaceGroteskMedium: "SpaceGrotesk Medium" /* 500 */,
      },
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
