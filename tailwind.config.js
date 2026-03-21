/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal-blue': {
          DEFAULT: '#0038A8',
          50: '#E6ECFA',
          100: '#CCD9F5',
          200: '#99B3EB',
          300: '#668DE1',
          400: '#3367D7',
          500: '#0038A8',
          600: '#002D86',
          700: '#002264',
          800: '#001742',
          900: '#000C21',
        },
      },
    },
  },
  plugins: [],
};
