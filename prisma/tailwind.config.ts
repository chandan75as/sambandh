import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0f172a", // Dark modern slate
          foreground: "#f8fafc",
        },
        brand: {
          DEFAULT: "#2563eb", // Deep blue for SAMBANDH accents
          hover: "#1d4ed8",
        },
        premium: {
          DEFAULT: "#eab308", // Gold for premium users/badges
        }
      },
    },
  },
  plugins: [],
};
export default config;
