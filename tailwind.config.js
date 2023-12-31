/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#E5E5E5",
        purple: "#6E00FF",
        purpleHover: "#612DD1",
        purpleDark: "#5322BC",
        yellow: "#F3B559",
        lightBlue: "#EFF6FC",
      },
      width: {
        w952: "952px",

        w537: "537px",
        w133: "133px",
        w78: "78px",
        w50: "50px",
        w30: "30px",
        w7: "7px",
      },
      height: {
        h730: "730px",
        h700: "700px",
        h640: "640px",
        h98: "98px",
        h79: "79px",
        h78: "78px",
        h50: "50px",
        h30: "30px",
        h7: "7px",
      },
      borderWidth: {
        px1: "1px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
