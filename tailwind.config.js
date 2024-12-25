import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'gcod-',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['Bauer Bodoni BT', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        orange: {
          500: '#f2601a',
        },
      },
      container: {
        center: true,
        padding: '20px',
      },
    },
  },
  plugins: [],
};
