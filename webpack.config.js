var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: __dirname,
    filename: 'mister-oembed.js',
    libraryTarget: 'umd'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    alias: {
      'zepto': 'zepto/zepto.min.js'
    }
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  devtool: 'source-map',
  plugins: [
    // new webpack.ProvidePlugin({
    //   'MutationObserver': 'imports?this=>global!exports?global.MutationObserver!mutationobserver-shim',
    // }),
    new HtmlWebpackPlugin()
  ]
}
