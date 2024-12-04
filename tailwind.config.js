tailwind.config = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        ModerateCyan: "hsl(176, 50%, 47%)",
        DarkCyan: "hsl(176, 72%, 28%)",
        Black: "hsl(0, 0%, 0%)",
        DarkGray: "hsl(0, 0%, 48%)",
      },
      fontFamily: {
        Commissioner: ["Commissioner", "sans-serif"],
      },
      screens: {
        esm: "425px",
        eesm: "375px",
      },
    },
  },
  plugins: [],
};
