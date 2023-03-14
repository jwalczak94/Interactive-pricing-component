module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        md: "768px",
      },
      colors: {
        slideBarEmpty: "hsl(224, 65%, 95%)",
        slideBarActive: "hsl(174, 65%, 41%)",
        slideBarFull: "hsl(174, 77%, 80%)",
        slideBarBg: "hsl(174, 86%, 45%)",

        accent: "hsl(14, 92%, 95%)",
        accentDark: "hsl(15, 100%, 70%)",
        fontCard: "hsl(226, 100%, 87%)",

        cardBg: "hsl(0, 0%, 100%)",
        bodyBg: "hsl(230, 100%, 99%)",
        toogleBg: "hsl(223, 50%, 87%)",
        text100: "hsl(225, 20%, 60%)",
        blue100: "hsl(227, 35%, 25%)",
      },
      fontFamily: {
        bodyFont: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        shadowCard: "0px 20px 30px -5px rgba(127, 137, 185, 0.15)",
        iconShadow: "0px 15px 30px rgba(0, 255, 231, 0.6)",
      },
    },
  },
  plugins: [],
};
