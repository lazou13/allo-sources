/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy:  { DEFAULT: "#0a1628", 800: "#0f2040", 700: "#152b55", 600: "#1e3d7a", 500: "#2756a8", pale: "#e8eef8" },
        gold:  { DEFAULT: "#b8892a", light: "#d4a843", pale: "#fdf6e7", dark: "#8a6520" },
        sage:  { DEFAULT: "#2d6a3f", light: "#3d8f54", pale: "#e8f5ec" },
        stone: { DEFAULT: "#f7f5f2", dark: "#ece8e2" },
        ink:   "#1a1a2e",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.08)",
        "card-hover": "0 4px 12px rgba(0,0,0,.08), 0 12px 32px rgba(0,0,0,.12)",
        gold: "0 4px 24px rgba(184,137,42,.25)",
      },
      animation: {
        "ken-burns": "kenBurns 22s ease-out forwards",
        "fade-up": "fadeUp 1s ease-out forwards",
        "fade-up-delay": "fadeUp 1s ease-out 0.3s forwards",
        "fade-up-delay2": "fadeUp 1s ease-out 0.6s forwards",
        "scroll-hint": "scrollHint 2.2s ease-in-out infinite",
      },
      keyframes: {
        kenBurns: {
          "0%":   { transform: "scale(1) translateY(0)" },
          "100%": { transform: "scale(1.10) translateY(-1%)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollHint: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%":      { transform: "translateY(8px)", opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};
