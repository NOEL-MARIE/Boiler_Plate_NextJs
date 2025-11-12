/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        Djingo: ["Djingo", "sans-serif"],
        Ultravision: ["Ultravision", "sans-serif"],
        Horix: ["Horix", "sans-serif"],
        Work: ["Work Sans", "sans-serif"],
      },
      colors: {
        HoverEffect: "#8C8C8C",
        Navcol: "#14151d",
      },
    },
  },
  plugins: [],
}

