const webpack = require('webpack')
const path = require('path')
const Merge = require('webpack-merge')
const CommonConfig = require('./webpack.common.js')
const autoprefixer = require('autoprefixer')

module.exports = Merge(CommonConfig, {
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            url: false
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer({grid: true})]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: [
      path.join(process.cwd(), 'dist'),
      path.join(process.cwd(), 'src/templates/')
    ], // static file location
    noInfo: false,
    stats: 'minimal',
    inline: true,
    hot: true,
    watchContentBase: true,
  }
})
