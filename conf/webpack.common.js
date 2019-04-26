const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const glob = require('glob')

const htmlPlugins = glob.sync(path.join(process.cwd(), 'src/templates/**/*.html'))
  .map(htmlFileFullPath => {
    const [
      , htmlFilePath
    ] = htmlFileFullPath.split('/src/')

    return new HtmlWebpackPlugin({
      template: htmlFilePath,
      filename: htmlFilePath.split('templates/')[1],
      inject: 'body'
    })
  })

// let scssLoader = [
//   'style-loader',
//   {
//     loader: 'css-loader',
//     options: {
//       sourceMap: true,
//       url: false
//     }
//   },
//   {
//     loader: 'postcss-loader',
//     options: {
//       plugins: () => [autoprefixer({grid: true})]
//     }
//   },
//   {
//     loader: 'sass-loader',
//     options: {
//       sourceMap: true
//     }
//   }
// ]

// if (process.env.NODE_ENV === 'production') {
//   scssLoader = ExtractTextPlugin.extract({
//     fallback: 'style-loader',
//     use: scssLoader
//   })
// }

// const extractSass = new ExtractTextPlugin({
//   filename: '[name].css',
//   // disable: process.env.NODE_ENV === 'development'
// })

module.exports = {

  context: path.join(process.cwd(), 'src'), // the home directory for webpack

  devtool: 'source-map', // enhance debugging by adding meta info for the browser devtools

  entry: {
    app: './index.js'
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },

  resolve: {
    extensions: ['.js'],  // extensions that are used
    modules: [path.join(process.cwd(), 'src'), 'node_modules'] // directories where to look for modules
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {root: process.cwd()}),
    new CopyWebpackPlugin([
      {
        from: '**/*'
      }
    ], {
      ignore: [
        '*.js',
        '*.scss',
        '*.html'
      ],
      debug: 'info'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    ...htmlPlugins,
  ]
}
