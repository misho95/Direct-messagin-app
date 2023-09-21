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
      },
      width: {
        w537: "537px",
        w133: "133px",
        w7: "7px",
      },
      height: {
        h98: "98px",
        h79: "79px",
      },
    },
  },
  plugins: [],
};
