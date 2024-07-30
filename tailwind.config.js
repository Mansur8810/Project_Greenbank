/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,,jsx,}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2BB32A",
          secondary: "#FFFFFF",
          accent: "#1A1E1C",
          neutral: "#3D544D",
          "base-100": "#1A1E1C",

        },
      },
    ],
  },
  theme: {
    container: {
      padding: "2rem",
      center: true,
    },
    extend: {
      fontFamily : {
        mplus1: ["M PLUS 1", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('/background/bg.svg')",
      }
    },
  },
  plugins: [require("daisyui")],
};
