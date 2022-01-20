module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "rockSalt": ['Rock Salt', "cursive"]
      },
      keyframes : {
        fadeIn: {
          "0%": {opacity:"0"},
          "100%": {opacity:"1"}
        },
        fadeInLong: {
          "0%, 50%": {opacity:"0"},
          "100%": {opacity:"1"}
        }
      },
      animation:{
        fadeIn: "fadeIn 2s ease-in",
        fadeInLong: "fadeInLong 3s ease-in"
      }
    },
  },
  plugins: ["@tailwindcss/forms"],
};
