/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean:  { DEFAULT: "#0d2b4e", light: "#1e4a7c", pale: "#e8f0f8" },
        earth:  { DEFAULT: "#5c3d1e", light: "#8a6040", pale: "#f5f0e8" },
        sage:   { DEFAULT: "#3a7d44", light: "#5aad68", pale: "#e8f5eb" },
        sand:   "#f5f0e8",
        slate:  "#2d3748",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
