/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976",
      xl: "1440px",
    },
    extend: {
      colors: {
        // Linear gradient (active input border): hsl(249, 99%, 64%) to hsl(278, 94%, 30%)
        Red: "hsl(0, 100%, 66%)",

        White: " hsl(0, 0%, 100%)",
        LightGrayishViolet: "hsl(270, 3%, 87%)",
        DarkGrayishViolet: " hsl(279, 6%, 55%)",
        VeryDarkViolet: "hsl(278, 68%, 11%)",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
