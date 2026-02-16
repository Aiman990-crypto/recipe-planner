module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
  extend: {
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0, transform: "translateY(30px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  },
  animation: {
    fadeIn: "fadeIn 0.6s ease-out",
  },
},

};
