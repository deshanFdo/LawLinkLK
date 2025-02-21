
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2563eb",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#1c2634",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "#f8fafc",
          foreground: "#64748b",
        },
        accent: {
          DEFAULT: "#f1f5f9",
          foreground: "#334155",
        },
      },
      backgroundImage: {
        'page-background': "url('/lovable-uploads/69c728c0-7ffc-4142-94d2-11603d5680ca.png')",
        'hero-pattern': "linear-gradient(rgba(28, 38, 52, 0.9), rgba(28, 38, 52, 0.9))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
