export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        asa: {
          orange: "#ff8a00",
          amber: "#ffb000",
          bg: "#05080c",
          card: "#0d1117",
          text: "#ffffff",
          muted: "#a1a1aa",
        },
      },
      boxShadow: {
        glow: "0 0 45px rgba(255, 138, 0, 0.28)",
        "glow-strong": "0 0 90px rgba(255, 138, 0, 0.34)",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        arabic: ["IBM Plex Sans Arabic", "Arial", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
