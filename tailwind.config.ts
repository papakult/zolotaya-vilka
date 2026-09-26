import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Тёмная палитра макетов
        coal: {
          950: "#0f0b08",
          900: "#15100b",
          800: "#1c150f",
          700: "#241b13",
          600: "#2e2318",
        },
        gold: {
          50: "#f7ecd9",
          100: "#efdcb6",
          200: "#e6c68e",
          300: "#d9b273",
          400: "#c99a5b",
          500: "#b0823f",
          600: "#8f6630",
        },
        cream: {
          50: "#fbf7f1",
          100: "#f6efe4",
          200: "#efe5d6",
          300: "#e6d7c2",
        },
        ink: {
          DEFAULT: "#efe6d8",
          muted: "#c7b9a4",
          soft: "#9d8f7c",
        },
        cocoa: {
          DEFAULT: "#2a1f16",
          muted: "#5c4d3f",
        },
        caramel: {
          DEFAULT: "#9a6a2f",
          dark: "#83591f",
          light: "#f1dfc2",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      letterSpacing: {
        eyebrow: "0.32em",
      },
      backgroundImage: {
        "gold-btn": "linear-gradient(180deg, #ecd3a0 0%, #d4ad6d 45%, #b88a48 100%)",
        "gold-line": "linear-gradient(90deg, rgba(201,154,91,0) 0%, rgba(201,154,91,.9) 50%, rgba(201,154,91,0) 100%)",
      },
      boxShadow: {
        gold: "0 10px 30px -10px rgba(212,173,109,.45)",
        card: "0 30px 60px -30px rgba(0,0,0,.8)",
      },
    },
  },
  plugins: [],
};
export default config;
