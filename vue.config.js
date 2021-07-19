module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/data': {
        target: 'https://olympus.elkia.club/data',
        changeOrigin: true
      },
      '/assets/playerheads': {
        target: 'https://olympus.elkia.club/assets/playerheads',
        changeOrigin: true
      },
      '/live': {
        target: 'https://olympus.elkia.club/live',
        changeOrigin: true
      }
    }
  }
}
