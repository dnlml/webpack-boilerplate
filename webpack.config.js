const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: './src/assets/scripts/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/scripts/main.min.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    stats: 'errors-only',
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.php',
      template: './src/index.php',
      hash: true
    }),
    new ExtractTextPlugin({
      filename: 'assets/styles/main.min.css',
      allChunks: true
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/fonts', to: 'assets/fonts'},
      { from: 'src/assets/svg', to: 'assets/svg'},
      { from: 'src/assets/images', to: 'assets/images'}
    ]),
    new WriteFilePlugin()
  ]
}