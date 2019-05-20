module.exports = {
  devServer: {
    proxy: {
      // Development Inca backend
      '^/api': {
        target: 'http://127.0.0.1:8081',
        changeOrigin: true,
      }
    }
  }
}
