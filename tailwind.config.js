/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      card1: ["Volkhov"],
      card2: ["Cutive"],
    },
    extend: {
      colors: {
        translucent: {
          DEFAULT: "rgba(217, 217, 217, 0.15)",
        },
        lime: {
          DEFAULT: "#38B000",
        },
        fogra: {
          DEFAULT: "#01161E",
          50: "#07ACED",
          100: "#079EDA",
          200: "#0690C6",
          300: "#0681B2",
          400: "#05739E",
          500: "#04648B",
          600: "#045677",
          700: "#034863",
          800: "#02394F",
          900: "#022B3B",
        },
        metal: {
          DEFAULT: "#D9D9D9",
          50: "#D6D6D6",
          100: "#CCCCCC",
          200: "#C2C2C2",
          300: "#B8B8B8",
          400: "#ADADAD",
          500: "#A3A3A3",
          600: "#999999",
          700: "#8F8F8F",
          800: "#858585",
          900: "#7A7A7A",
        },
      },
    },
  },
  plugins: [
    // plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
    //   // Add your custom styles here
    // }),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
};
