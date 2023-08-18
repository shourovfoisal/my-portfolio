/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      padding: {
        wrapperPaddingBottom: "2.5rem",
        sectionPadding: "8rem"
      },
      colors: {
        // Color names
        // https://colors.artyclick.com/color-name-finder/
        // NightBlack: '#08080D',
        NightBlack: '#29262C',
        ashGray: '#BCBABC',
        // pastelOrange: '#EFA649',
        PastelOrange: '#FFC054',
        rockBlue: '#9DA9CE',
        // BlackTan: '#4F4346',
        BlackTan: '#38353C',
        pumpkinOrange: '#F86D09',
        siennaTan: '#A35623',

        // Shades made with
        // https://maketintsandshades.com/
        // lightPastelOrange: "#fceddb"
        LightPastelOrange: "#FBE9CE"
      }
    },
    container: {
      center: true
    }
  },
  plugins: [],
}
