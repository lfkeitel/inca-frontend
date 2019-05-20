module.exports = {
  devServer: {
    proxy: {
      // Development Inca backend
      '^/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      }
    }
  }
}
