/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy:   { DEFAULT: "#0a1628", 800: "#0f2040", 700: "#152b55", 600: "#1e3d7a", 500: "#2756a8", pale: "#e8eef8" },
        gold:   { DEFAULT: "#b8892a", light: "#d4a843", pale: "#fdf6e7", dark: "#8a6520" },
        petrol: { DEFAULT: "#0d2b3e", 800: "#0a2030", 700: "#0f3550", 600: "#164e73", pale: "#e0ecf4" },
        water:  { DEFAULT: "#1a7a9a", light: "#2a94b8", pale: "#e0f4f8", dark: "#0d5a72" },
        sand:   { DEFAULT: "#c4a882", light: "#d8c4a0", pale: "#f7f1e8", dark: "#9e8464" },
        sage:   { DEFAULT: "#2d6a3f", light: "#3d8f54", pale: "#e8f5ec" },
        stone:  { DEFAULT: "#f7f5f2", dark: "#ece8e2" },
        offwhite: "#faf8f4",
        ink:    "#1a1a2e",
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
        "fade-up": "fadeUp 1s ease-out both",
        "fade-up-delay": "fadeUp 1s ease-out 0.3s both",
        "fade-up-delay2": "fadeUp 1s ease-out 0.6s both",
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
