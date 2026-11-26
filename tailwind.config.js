/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{app,components,src}/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
};
