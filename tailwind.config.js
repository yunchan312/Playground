/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "950px",
    },
    extend: {
      fontFamily: {
        G: "G",
        GB: "GB",
        GL: "GL",
      },
    },
  },
  plugins: [],
};
