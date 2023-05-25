/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      PuroleCustomColor: '#A44CEE',
      customColor: '#7367F0',
      LightBGColor: '#F8F7FA',
      DarkBGColor: '#25293C',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
})
