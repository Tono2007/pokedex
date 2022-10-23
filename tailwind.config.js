/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: false,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#FFFFFF',
        bgSecondary: '#DEE3EC',
        bgTertiary: '#F5F5F6',
        textPrimary: '#24303A',
        textSecondary: '#C7CACC',
        contrastText: '#FFFFFF',
        red: '#FF0000',
        BURed: '#CC0000',
        CBlue: '#3264AF',
        DBlue: '#1B356E',
        GoldenYellow: '#FFCC01',
        GoldFoil: '#C8A102',
        variable: ({ opacityValue }) =>
          opacityValue
            ? `rgba(var(--white-color), ${opacityValue})`
            : `rgb(var(--white-color))`,
        tahiti: {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      fontFamily: {
        montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
