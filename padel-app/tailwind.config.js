/** @type {import('tailwindcss').Config} */

export default {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  prefix: 'tw-',
  theme: {
    extend: {}
  },
  corePlugins: {
    preflight: false
  },
  plugins: []
};
