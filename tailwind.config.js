/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./blocks/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#20232c",
        "light-grey": "#7c808c",
      },
      dropShadow: {
        xs: "2px 2px #7c808c",
        s: "-3px 3px #7c808c",
        sw: "-3px 3px white",
        dark: "2px 2px #20232c",
      },
      boxShadow: {
        grey: "6px 6px 6px rgba(0,0,0,0.3)",
        white: "0px 8px 24px rgba(149, 157, 165, 0.2)",
      },
      letterSpacing: {
        xl: "0.3rem",
        xxl: "0.4rem",
      },
      keyframes: {
        "scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 5rem))" },
        },
      },
      animation: {
        "scroll-left": "scroll-left 30s linear infinite",
      },
    },
  },
  plugins: [],
};
