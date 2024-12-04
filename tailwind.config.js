/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':"#fdf7ef",
        'primaryHover':"#f3e7d6",
        'secondary':"#622b68",
        'secondaryHover':"#7A4880",
      },
    },
  },
  plugins: [],
};
