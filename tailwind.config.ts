import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: "var(--color-ocean)",
        turquoise: "var(--color-turquoise)",
        sand: "var(--color-sand)",
        coral: "var(--color-coral)",
        "coral-deep": "var(--color-coral-deep)",
        dark: "var(--color-dark)",
        light: "var(--color-light)",
        wood: "var(--color-wood)",
        "wood-deep": "var(--color-wood-deep)",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "pulse-ring": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.45)" },
          "50%": { boxShadow: "0 0 0 12px rgba(37, 211, 102, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
