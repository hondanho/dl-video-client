import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#195fd7",
        secondary: "#00be63",
      },
      animation: {
        rgb: "rgb 4s ease infinite",
      },

      keyframes: {
        rgb: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1024px",
          "2xl": "1024px",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), nextui()],
};

export default config;
