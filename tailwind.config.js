/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Implementation/*/*.html",
    "./Learning/*/*.html",
    "./Learning/*.html",
  ],
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(12deg)" },
        },
      },
    },
    screens: {
      sm: "550px",
      md: "800px",
      lg: "1200px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        primary: "#ff5733",
        secondary: "#fffc33",
      },
      spacing: {
        6: "2.5rem",
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
