export default {
  tairo: {
    sidebar: {
      circularMenu: {
        enabled: false,
        tools: [],
      },
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: true,
        tools: [
          {
            component: 'TairoAccountMenu',
          },
        ],
      },
      navigation: {
        enabled: true,
        startOpen: true,
        logo: {
          component: 'TairoLogo',
          props: { class: 'text-primary-600 h-10' },
        },
        items: [],
      },
    },
  },
}
