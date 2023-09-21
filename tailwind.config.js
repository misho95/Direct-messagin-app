/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#E5E5E5",
        purple: "#6E00FF",
        purpleDark: "#5322BC",
      },
      width: {
        w133: "133px",
      },
    },
  },
  plugins: [],
};
