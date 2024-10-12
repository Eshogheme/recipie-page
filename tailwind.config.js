/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "stone-100":"hsl(30, 54%, 90%)",
        "stone-150":"hsl(30, 18%, 87%)",
        "stone-600": "hsl(30, 10%, 34%)",
        "stone-900":"hsl(24, 5%, 18%)",
        "rose-50":"hsl(330, 100%, 98%)",
        "rose-800":"hsl(332, 51%, 32%)",
        "brown-800":"hsl(14, 45%, 36%)"
      },
      fontFamily:{
       "my-font": ["myFont,sans-serif"],
        "new-font": ["newFont,sans-serif"],
        "dope-font":["dopeFont,sans-serif"],
        "cool-font":["coolFont,sans-serif"],
      }
    },
  },
  plugins: [],
}

