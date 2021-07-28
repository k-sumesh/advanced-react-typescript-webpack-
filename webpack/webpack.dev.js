const webpack = require('webpack')
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map', //recomended by cra for source map
  // define env variable using webpack define plugin
  devServer: {
    port: 3000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.port': JSON.stringify('3000')
    })
  ]
}
