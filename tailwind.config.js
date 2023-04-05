/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8D7B68",

          secondary: "#fcd4bd",

          accent: "#ef5b56",

          neutral: "#212B36",

          "base-100": "#F0EFF5",

          info: "#F6F1E9",

          success: "#146640",

          warning: "#FF8400",

          error: "#E0526C",
        },
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
