import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#2563eb",
        "primary-200": "#59a5f5",
        "primary-300": "#c8ffff",
        "accent-100": "#00bfff",
        "accent-200": "#1f50bb",
        "text-100": "#333333",
        "text-200": "#5c5c5c",
        "bg-100": "#fafafa",
        "bg-200": "#f5f5f5",
        "bg-300": "#dee5ec",
        "bg-50": "#ffffff"
      }
    }
  },
  plugins: []
} satisfies Config
