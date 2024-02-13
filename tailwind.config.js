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
        // Dark Theme Colors
        NightBlack: "#29262C",
        AshGray: "#BCBABC",
        PastelOrange: "#FFC054",
        DarkerPastelOrange: "#FFAD2D",
        BlackTan: "#38353C",
        LightPastelOrange: "#FBE9CE",

        // Light Theme Colors
        bgLightSecondary: "#FCDA69",
        textLightPrimary: "#18171C",

        // Theme Collor
        themeViolet: "#B197FC",
        themeBlue: "#74C0FC",
        themeGreen: "#8EAB12",
        themeYellow: "#FFD43B",
        // Shades made with
        // https://maketintsandshades.com/
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        scale: "scale 2s ease-in-out infinite",
      },
      keyframes: {
        scale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
    },
    container: {
      center: true,
      padding: "3rem",
    },
    screens: {
      xs: "375px",
      sm: "425px",
      md: "640px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1280px",
    },
  },
  darkMode: "class",
  plugins: [],
};
