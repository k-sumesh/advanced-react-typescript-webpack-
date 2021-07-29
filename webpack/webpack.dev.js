const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map', //recomended by cra for source map
  // define env variable using webpack define plugin
  devServer: {
    port: 3000,
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.port': JSON.stringify('3000')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({})
  ]
}
