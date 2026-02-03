import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee-brown': '#8B4513',
        'cream': '#FFF8DC',
        'warm-beige': '#D2B48C',
        'dark-roast': '#3E2723',
        'espresso': '#4E342E',
        'latte': '#F5F5DC',
        'caramel': '#C4A35A',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
