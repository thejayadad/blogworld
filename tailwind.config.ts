import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#A5B4FC", // Soft pastel blue for light mode
          dark: "#7C3AED", // Deep but soft purple for dark mode
        },
        secondary: {
          light: "#FBCFE8", // Soft pink for light mode
          dark: "#E879F9", // Softer magenta for dark mode
        },
        background: {
          light: "#F8FAFC", // Soft warm white for light mode
          dark: "#2D2E32", // Softer dark gray instead of pure black
        },
        text: {
          light: "#374151", // Soft charcoal for better readability
          dark: "#E5E7EB", // Gentle light gray for dark mode
        },
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
