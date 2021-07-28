const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')
module.exports = (envVars) => {
  const { env } = envVars
  const envConfig = env === 'prod' ? prodConfig : devConfig
  return merge(commonConfig, envConfig)
}
