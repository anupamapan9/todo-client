module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        {
          mytheme: {

            "primary": "#c90872",

            "secondary": "#04076b",

            "accent": "#d85f22",

            "neutral": "#1A1924",

            "base-100": "#3F3F40",

            "info": "#9BDAED",

            "success": "#1FC7A5",

            "warning": "#B1740B",

            "error": "#E33154",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}
