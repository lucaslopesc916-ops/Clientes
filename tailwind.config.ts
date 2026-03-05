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
        primary: {
          50: "#FEFAE0",
          100: "#EEF5DC",
          200: "#CCDDB0",
          300: "#A8C484",
          400: "#85B068",
          500: "#647546",
          600: "#4D6130",
          700: "#324914",
          800: "#25370E",
          900: "#192708",
        },
        cream: "#FEFAE0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
