import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Enhance neon colors
        neon: {
          purple: '#8B5CF6',
          pink: '#D946EF',
          orange: '#F97316',
          blue: '#0EA5E9',
        }
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(90deg, #8B5CF6, #D946EF, #F97316)',
      },
      boxShadow: {
        'neon-glow': '0 0 15px rgba(139, 92, 246, 0.5)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
