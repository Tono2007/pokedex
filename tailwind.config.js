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
        textSecondary: '#a1a4a7',
        textTertiary: '#C7CACC',
        contrastText: '#F5F5F6',

        red: '#FF0000',
        BURed: '#CC0000',
        CBlue: '#3264AF',
        DBlue: '#1B356E',
        GoldenYellow: '#FFCC01',
        GoldFoil: '#C8A102',

        steel: '#C7CACC',
        shadow: '#C7CABB',
        fire: '#fb8c00',
        grass: '#689f38',
        electric: '#f5d130',
        water: '#039be5',
        ice: '#00bcd4',
        ground: '#795548',
        rock: '#546e7a',
        fairy: '#c2185b',
        poison: '#8e24aa',
        bug: '#afb42b',
        ghost: '#b3b6b8',
        dragon: '#ef5350',
        dark: '#424242',
        psychic: '#324242',
        flying: '#ffc107',
        fighting: '#26a69a',
        unknown: '#1264AF',
        normal: '#3264AF',
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
  safelist: [
    'bg-fire',
    {
      pattern:
        /bg-(steel|unknown|shadow|fire|grass|electric|water|ice|ground|rock|fairy|poison|bug|ghost|dragon|dark|psychic|flying|fighting|normal)/,
    },
    {
      pattern:
        /shadow-(steel|unknown|shadow|fire|grass|electric|water|ice|ground|rock|fairy|poison|bug|ghost|dragon|dark|psychic|flying|fighting|normal)/,
    },
    {
      pattern:
        /border-(steel|unknown|shadow|fire|grass|electric|water|ice|ground|rock|fairy|poison|bug|ghost|dragon|dark|psychic|flying|fighting|normal)/,
    },
    {
      pattern:
        /from-(steel|unknown|shadow|fire|grass|electric|water|ice|ground|rock|fairy|poison|bug|ghost|dragon|dark|psychic|flying|fighting|normal)/,
    },
  ],
  plugins: [],
};
