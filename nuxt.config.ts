export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "th",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    pageTransition: {
      mode: "out-in",
      enterActiveClass: "transition-opacity duration-200 ease-out",
      enterFromClass: "opacity-0",
      enterToClass: "opacity-100",
      leaveActiveClass: "transition-opacity duration-75 ease-in",
      leaveFromClass: "opacity-100",
      leaveToClass: "opacity-0",
    },
    layoutTransition: {
      mode: "out-in",
      enterActiveClass: "transition-opacity duration-200 ease-out",
      enterFromClass: "opacity-0",
      enterToClass: "opacity-100",
      leaveActiveClass: "transition-opacity duration-200 ease-in",
      leaveFromClass: "opacity-100",
      leaveToClass: "opacity-0",
    },
  },
  extends: ["@shuriken-ui/nuxt"],
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@samk-dev/nuxt-vcalendar",
  ],

  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storage: "localStorage", // or 'sessionStorage' or 'cookie'
    storageKey: "nuxt-color-mode",
  },
  googleFonts: {
    families: {
      "IBM Plex Sans Thai": {
        wght: [100, 200, 300, 400, 500, 600, 700],
      },
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
    display: "swap",
  },

  css: ["~/assets/css/main.css", "v-calendar/style.css"],
});
