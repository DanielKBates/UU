module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "rockSalt": ['Rock Salt', "cursive"]
      },
      colors:{
        "cfc": {
          100 : "#0082cb"
        }
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
      },
      transitionDuration: {
        '800': "800ms",
        '1400': "1400ms",
        '2000':"2000ms"
      }
    },
  },
  plugins: ["@tailwindcss/forms"],
};
