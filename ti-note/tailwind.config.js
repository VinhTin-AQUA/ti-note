/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "calc(100vh - 70px)",
      },
      fontWeight: {
        "800": "800",
      },
      width: {
        "react-quill-with-sm": "calc(100% - 200px)",
        "react-quill-with": "calc(100% - 50px)",
      }
    },
    fontFamily: {
      "monotype-corsiva": "Monotype Corsiva",
      "simSun":"SimSun"
    }
  },
  plugins: [],
};
