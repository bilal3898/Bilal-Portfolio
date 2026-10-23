/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        card: "#171717",
        "card-foreground": "#ededed",
        border: "#27272a",
        accent: "#22c55e",
        muted: "#71717a",
      },
    },
  },
  plugins: [],
}

