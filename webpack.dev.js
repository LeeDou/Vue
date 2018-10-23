const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const webpack = require('webpack')

module.exports = merge(base, {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    inline: true,
    // 指定端口号
    port: 9000,
    open: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})