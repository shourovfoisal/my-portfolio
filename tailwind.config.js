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
      }
    },
    container: {
      center: true
    },
    padding: {
      wrapperTop: "2.5rem",
      containerTop: "2.5rem"
    },
    colors: {
      // Color names
      // https://colors.artyclick.com/color-name-finder/
      bgNightBlack: '#08080D',
      ashGray: '#BCBABC',
      pastelOrange: '#EFA649',
      rockBlue: '#9DA9CE',
      bgBlackTan: '#4F4346',
      pumpkinOrange: '#F86D09',
      siennaTan: '#A35623'
    }
  },
  plugins: [],
}
