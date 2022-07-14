/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        translucent: {
          DEFAULT: "rgba(0, 0, 0, 0.15)",
        }
      }
    },
  },
  plugins: [
    // plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
    //   // Add your custom styles here
    // }),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ]
}
