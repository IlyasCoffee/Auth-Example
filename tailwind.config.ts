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
        'primary': '#ffad00',
        'secondary': '#f9d888',
        'secondary-light': '#f5e1a6',
        'accent': '#38c84b',
        'text': '#101010',
        'background': '#FAFAFA',
      },
    },
  },
  plugins: [],
} satisfies Config;
