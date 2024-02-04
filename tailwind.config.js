/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        wrapperPaddingBottom: "2.5rem",
        sectionPadding: "8rem",
      },
      colors: {
        // Color names
        // https://colors.artyclick.com/color-name-finder/
        NightBlack: "#29262C",
        AshGray: "#BCBABC",
        PastelOrange: "#FFC054",
        DarkerPastelOrange: "#FFAD2D",
        BlackTan: "#38353C",

        // Shades made with
        // https://maketintsandshades.com/
        LightPastelOrange: "#FBE9CE",
      },
    },
    container: {
      center: true,
      padding: "3rem",
    },
    screens: {
      sm: "",
      md: "640px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1280px",
    },
  },
  plugins: [],
};
