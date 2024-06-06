/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'formBg': '#FAFAFA',
      'titleColor': '#000000',
      'subTitColor': '#757575',
      'closeBtnBg': '#EFEFEF',
      'blueTxt': '#0052EA',
      'borderColor': '#E0E0E0'
    },
    extend: {},
  },
  plugins: [],
}

