import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // Defined architectural palette tokens
        arch: {
          bg: "#F5F3EF",
          surface: "#ECE8E1",
          dark: "#111111",
          "deep-dark": "#171717",
          text: "#171717",
          "text-light": "#F8F6F2",
          "muted-dark": "#68645D",
          "muted-light": "#C9C5BD",
          accent: "#A58A63",
          border: "rgba(17, 17, 17, 0.12)",
          "border-dark": "rgba(248, 246, 242, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Manrope", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "serif"],
      },
      letterSpacing: {
        tight: "-0.02em",
        tighter: "-0.035em",
        wide: "0.08em",
        wider: "0.15em",
        widest: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
