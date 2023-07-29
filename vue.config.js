const { defineConfig } = require("@vue/cli-service");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = defineConfig({

  pluginOptions: {
    sitemap: {
      urls: [
        'https://uangnyataonline.com/',
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

  chainWebpack: config => {
    if (!process.env.SSR) {
      // This is required for repl.it to play nicely with the Dev Server
      config.devServer.disableHostCheck(true);
      return;
    }

    config
      .entry("app")
      .clear()
      .add("./src/main.server.js");

    config.target("node");
    config.output.libraryTarget("commonjs2");

    config
      .plugin("manifest")
      .use(new WebpackManifestPlugin({ fileName: "ssr-manifest.json" }));

    config.externals(nodeExternals({ allowlist: /\.(css|vue)$/ }));

    config.optimization.splitChunks(false).minimize(false);

    config.plugins.delete("hmr");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.plugins.delete("progress");
    config.plugins.delete("friendly-errors");
  },
});


