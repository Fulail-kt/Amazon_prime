/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg1': "url('/images/herobg.jpg')",
        'hero-bg2': "url('/images/hero2bg.jpg')",
        'hero-bg3': "url('/images/hero3bg.jpg')",
        'black-gradient': 'linear-gradient(to right, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0) 100%)',
        'black-gradientleft': 'linear-gradient(to left, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)',
      },
    },
  },
  plugins: [],
};
