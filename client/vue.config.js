const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          data: `@import "@/styles/_variables.scss";`
        }
      }
    }
  },
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://visit-server:3000',
        },
      },
    },
  },
})