import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        paper: "#F8FAFC",
        primary: "#4F46E5",
        secondary: "#22C55E",
        accent: "#F59E0B",
        night: "#0F0F23",
        parent: "#0F172A",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(79, 70, 229, 0.28)",
        soft: "0 18px 60px rgba(15, 23, 42, 0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        display: ["var(--font-lexend)", "system-ui", "sans-serif"],
        body: ["var(--font-atkinson)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.82)", opacity: "0.72" },
          "100%": { transform: "scale(1.38)", opacity: "0" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseRing: "pulseRing 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
