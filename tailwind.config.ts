import { withShurikenUI } from "@shuriken-ui/tailwind";
import colors from "tailwindcss/colors";

export default withShurikenUI({
  content: [],
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans Thai', 'sans-serif'],
      heading: ['IBM Plex Sans Thai', 'sans-serif'],
      alt: ['IBM Plex Sans Thai', 'sans-serif'],
      mono: ['IBM Plex Sans Thai', 'mono'],
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
          mode: 'focus-visible',
          width: '1',
          style: 'none',
          color: {
            light: 'primary-500',
            dark: 'primary-400',
          }
        }
      },

    },
  },
});
