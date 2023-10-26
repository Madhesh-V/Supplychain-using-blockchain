/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#022648",
          "200": "#1c1d20",
          "300": "#1c1c20",
          "400": "#1c1c1c",
          "500": "#1b1925",
          "600": "#1a1a1c",
          "700": "rgba(255, 255, 255, 0.8)",
          "800": "rgba(37, 35, 46, 0.3)",
          "900": "rgba(255, 255, 255, 0.5)",
          "1000": "rgba(0, 0, 0, 0.25)",
          "1100": "rgba(37, 35, 46, 0.2)",
          "1200": "rgba(255, 255, 255, 0.07)",
          "1300": "rgba(0, 0, 0, 0.6)",
        },
        white: "#f6f6f6",
        "txt-desactive": "#aaabb0",
        "bg-3": "rgba(49, 49, 49, 0.2)",
        darkslategray: {
          "100": "#2f3032",
          "200": "rgba(49, 49, 49, 0.4)",
          "300": "rgba(67, 67, 67, 0)",
          "400": "rgba(47, 48, 50, 0.2)",
          "500": "rgba(49, 49, 49, 0)",
        },
        mediumslateblue: {
          "100": "#9381ff",
          "200": "#6462fc",
          "300": "rgba(100, 98, 252, 0.2)",
          "400": "rgba(100, 98, 252, 0)",
          "500": "rgba(100, 98, 252, 0.4)",
        },
        "txt-active": "#fafafc",
        silver: {
          "100": "#c4c4c4",
          "200": "rgba(196, 196, 196, 0)",
        },
        "text-primary": "#fff",
        "bg-card": "#3a393e",
        deepskyblue: {
          "100": "rgba(8, 167, 243, 0.2)",
          "200": "rgba(8, 167, 243, 0.4)",
        },
        "gray-1": "#929292",
        darkgray: "rgba(170, 171, 176, 0.2)",
        lavender: "#e1dfec",
        midnightblue: {
          "100": "#181b58",
          "200": "#1d1649",
          "300": "#140e49",
          "400": "rgba(25, 9, 70, 0.5)",
        },
        "bg-dark-2": "#313133",
        darkslateblue: "#192054",
        "primary-color": "#08a7f3",
        whitesmoke: "#eaeaea",
      },
      spacing: {},
      fontFamily: {
        subtitulos: "Inter",
        comfortaa: "Comfortaa",
        ubuntu: "Ubuntu",
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        "81xl": "100px",
        "31xl": "50px",
        "6xl": "25px",
        "4xs": "9px",
        "652xl-3": "671.3px",
        "13xl": "32px",
        "3xs": "10px",
        "9xl": "28px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      lg: "18px",
      xl: "20px",
      base: "16px",
      "9xl": "28px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};