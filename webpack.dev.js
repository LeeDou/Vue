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
    port: 8000,
    open: true,
    hot: true
  },
  // 添加Sourcemap支持
 

  plugins: [
    // 添加Sourcemap支持
    // new webpack.SourceMapDevToolPlugin({
    //   filename: '[file].map',
    //   exclude: ['vendor.js'] //vendor 通常不需要sourcemap
    // }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
// base.plugins.push(

// )