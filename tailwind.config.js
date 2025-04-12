/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
    "./shared/**/*.{ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["helvetica"],
        ["helvetica-bold"]: ["helvetica-bold"],
      },
      colors: {
        primary: {
          50: "#e6e6ff",
          100: "#b1b1fe",
          200: "#8c8cfe",
          300: "#5757fd",
          400: "#3636fd",
          500: "#0404fc",
          600: "#0404e5",
          700: "#0303b3",
          800: "#02028b",
          900: "#02026a",
          950: "#050533",
        },
      },
    },
  },
  plugins: [],
};
