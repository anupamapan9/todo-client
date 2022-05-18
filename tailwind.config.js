module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#D6D83E",

          "secondary": "#0526c6",

          "accent": "#ffccf8",

          "neutral": "#1F1825",

          "base-100": "#322F56",

          "info": "#8CCAED",

          "success": "#33CC7A",

          "warning": "#EFB75D",

          "error": "#F2316E",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
