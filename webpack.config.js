const path = require('path')
const  VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// const env = process.env.NODE_ENV
// const config = {
//   mode: env || 'development'
// }

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.js"
  },
  // config: {
  //   mode: 'production'
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: {
        //   loaders: {
        //     scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
        //     sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // <style lang ="sass">
        //   }
        // }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.scss$/,
        loaders: ["vue-style-loader", "css-loader", "sass-loader"]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      title: 'vue demo',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    // 生产环境
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // }),
    // new webpack.config.optimization.minimize({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ],
  devServer: {
    contentBase: "./dist"
  }
}