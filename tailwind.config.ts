import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#D3BDE4",
        black: "#202022",
        white: "#FCFBE9",
        gray: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
export default config;
