/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],

  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        galaxy: "url('background.png')",
        "nlw-gradient":
          "linear-gradient(90deg, rgba(157,81,185,1) 0%, rgba(115,64,185,1) 35%, rgba(0,255,145,1) 100%);",
        "game-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(108,108,108,0.7517564402810304) 33%, rgba(0,0,0,0.927400468384075) 78%);",
      },
    },
  },
  plugins: [],
};
