const webpack = require('webpack')
const path = require('path')
const Merge = require('webpack-merge')
const CommonConfig = require('./webpack.common.js')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 8080
const PROXY = 'http://localhost:3100/'

module.exports = Merge(CommonConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin(
      {
        host: HOST,
        port: PORT,
        proxy: PROXY
      }
    )
  ],
  devServer: {
    contentBase: [ path.join(process.cwd(), 'dist'), path.join(process.cwd(), 'src') ], // static file location
    noInfo: false,
    stats: 'minimal',
    hot: true,
    inline: true
  }
})
