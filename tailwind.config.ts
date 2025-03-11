import { withShurikenUI } from "@shuriken-ui/tailwind";
import colors from "tailwindcss/colors";

export default withShurikenUI({
  content: [],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans Thai", "sans-serif"],
      heading: ["IBM Plex Sans Thai", "sans-serif"],
      alt: ["IBM Plex Sans Thai", "sans-serif"],
      mono: ["IBM Plex Sans Thai", "mono"],
    },
    extend: {
      colors: {
        primary: {
          100: "#E0D0FF",
          200: "#C5A3FF",
          300: "#A577FF",
          400: "#8A4BFF",
          500: "#B038FF",
          600: "#9A2CC7",
          700: "#7A229F",
          800: "#5A1777",
          900: "#3A0E4F",
        },
      },
      nui: {
        focus: {
          mode: "focus-visible",
          width: "1",
          style: "none",
          color: {
            light: "violet-500",
            dark: "violet-400",
          },
        },
        card: {
          shadow: {
            light: "purple-600/30",
            dark: "purple-800/30",
            size: "2xl",
          },
        },
        button: {
          variant: {
            solid: {
              default: {
                background: {
                  light: {
                    base: "white",
                    hover: "muted-50",
                    active: "white",
                    focus: "muted-50",
                  },
                  dark: {
                    base: "red-500",
                    hover: "muted-600",
                    active: "muted-700",
                    focus: "muted-600",
                  },
                },
              },
            },
          },
        },
        tooltip: {
          font: {
            family: "sans",
            color: {
              light: "white",
              dark: "white",
            },
          },
          background: {
            light: "[#1e293b]",
            dark: "[#ec4899]",
          },
          size: {
            width: {
              min: "3rem",
              max: "21rem",
            },
          },
        },
      },
    },
  },
});
