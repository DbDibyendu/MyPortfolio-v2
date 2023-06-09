import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #E1C16E',
      },
    },
    colors: {
      primary: {
        400: '#E1C16E',
        500: '#E1C16E',
        600: '#E1C16E',
        100: '#E1C16E',
      },
      grayscale: {
        50: '#ffffff',
        100: '#efefef',
        200: '#FDFDFF',
        950: '#16161b',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
