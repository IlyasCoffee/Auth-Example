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
        'text': '#161410',
        'background': '#f9f7f3',
        'primary': '#ffa500',
        'secondary': '#ffd892',
        'accent': '#fdbe48',
      },
    },
  },
  plugins: [],
} satisfies Config;
