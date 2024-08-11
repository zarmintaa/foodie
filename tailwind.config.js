module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
  daisyui: {
    themes: ["cupcake"],
  },
};
