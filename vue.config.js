const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  pluginOptions: {
    sitemap: {
      urls: [
        'https://uangnyataonline.com/',
        'https://uangnyataonline.com/faq',
      ]
    }
  },
  pwa: {
    name: "Games online",
    short_name: "Games",
    themeColor: '#0060aa',
    msTileColor: '#0060aa',
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: '#0060aa',

    // настройки манифеста
    manifestOptions: {
      background_color: '#0060aa'
    },
  },

  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/common/scss/style.scss";`,
      },
    },
  },
});

