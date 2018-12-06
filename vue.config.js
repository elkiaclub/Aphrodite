let path = require('path')
module.exports = {
  // trick I googled to show the app version in the app
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        let v = JSON.stringify(require('./package.json').version)
        args[0]['process.env']['VERSION'] = v
        return args
      })
  },
  // ionicons
  configureWebpack: {
    resolve: {
      alias: {
        'icons': path.resolve(__dirname, 'node_modules/vue-ionicons/dist')
      }
    }
  }
}
