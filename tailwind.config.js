/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: "hsl(259, 100%, 65%)",
          "l-red": "hsl(0, 100%, 67%)",
        },
        neutral: {
          "off-white": "hsl(0, 0%, 94%)",
          "l-grey": "hsl(0, 0%, 86%)",
          "smokey-gray": "hsl(0, 1%, 44%)",
          "off-black": "hsl(0, 0%, 8%)",
        },
      },
      fontFamily: {
        poppins: "'Poppins'",
      },
    },
  },
  plugins: [],
};
