module.exports = {
  devServer: {
    proxy: {
      '/VaSe': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: { '^/VaSe': '' }
      }
    },
    host: '0.0.0.0',
    port: 4200
  },
  // cssSourceMap: true
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/sass/general_variables.scss";'
      }
    }
  }
}
