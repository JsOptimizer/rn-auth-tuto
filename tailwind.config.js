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
    },
  },
  plugins: [],
};
