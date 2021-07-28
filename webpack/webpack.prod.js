const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map', // recomended by cra for production,
  // define env variables so that we can set and use in tsx file main usage for having differant end points
  devServer: {
    port: 8000
  },
  plugins: [
    new webpack.DefinePlugin({
      'processe.env.port': JSON.stringify('8080')
    })
  ]
}
