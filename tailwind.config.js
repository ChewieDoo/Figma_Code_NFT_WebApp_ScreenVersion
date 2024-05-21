/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightblue: "#000235",
        slateblue: "rgba(99, 88, 189, 0.2)",
        cornflowerblue: {
          "100": "#8e8edb",
          "200": "#7575c2",
        },
        white: "#fff",
        gray: "rgba(255, 255, 255, 0.8)",
        black: "#000",
        darkslategray: "#333",
        powderblue: "#aad9d9",
        lightblue: "#a4cfd7",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        "sub-heading": "Roboto",
        h2: "Outfit",
      },
      borderRadius: {
        "11xl": "30px",
        "51xl": "70px",
        "64xl": "83px",
        xl: "20px",
        "6xs": "7px",
      },
    },
    fontSize: {
      base: "16px",
      "3xl": "22px",
      lg: "18px",
      xl: "20px",
      "38xl": "57px",
      "15xl": "34px",
      "27xl": "46px",
      "68xl": "87px",
      "7xl": "26px",
      "24xl": "43px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
