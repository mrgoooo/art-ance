/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-red-black":
          "radial-gradient(450px 300px at center, #b96154 0%, black 100%)",
        "gradient-red-black-small":
          "radial-gradient(300px 180px at center, #b96154 0%, black 100%)",
      },
    },
  },
  plugins: [],
};
