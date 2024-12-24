/** @type {import('tailwindcss').Config} */
export const content = [
  'index.html', // Path to your HTML files
  '*.{html,js}', // Path to your JS or other template files (if using React, Vue, etc.)
];
export const theme = {
  extend: {},
};
export const plugins = [
  require('tailwindcss'),
  require('autoprefixer'),
];

