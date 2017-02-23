const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/assets/scripts/main.js',
  output: {
    path: 'dist',
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
        use: ['babel-loader?presets[]=es2015']
      }
    ]
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
    })
  ]
}