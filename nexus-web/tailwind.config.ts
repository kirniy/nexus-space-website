import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neutral: {
          950: "#050505",
          900: "#0f0f0f",
          800: "#1c1c1c",
          700: "#2a2a2a",
          600: "#3a3a3a",
          500: "#505050",
          400: "#707070",
          300: "#8d8d8d",
          200: "#b5b5b5",
          100: "#d9d9d9",
          50: "#f5f5f5"
        },
        nexus: {
          background: "#050505",
          foreground: "#f4f4f4",
          accent: "#ffffff",
          muted: "#141414",
          border: "#2a2a2a"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
        body: ["var(--font-body)", ...defaultTheme.fontFamily.sans]
      },
      letterSpacing: {
        wider: ".35em"
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem"
      },
      borderRadius: {
        lg: "16px",
        xl: "20px"
      },
      boxShadow: {
        glow: "0 0 120px rgba(255,255,255,0.08)",
        inset: "inset 0 0 0 1px rgba(255,255,255,0.08)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseGrid: {
          "0%": { opacity: 0.3 },
          "50%": { opacity: 0.8 },
          "100%": { opacity: 0.3 }
        }
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        pulseGrid: "pulseGrid 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
