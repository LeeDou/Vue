# 开始新建一个项目

vue-cli 新建一个项目虽然功能齐全，但对于刚开始学习vue的同学来说，整个项目体积大，并非所有功能都会使用，这就增加了学习的层本。  
在这里，我希望通过从开始构建小的demo来一步步学习vue的构建开发，后面也将增加webpack的一些介绍。

### 新建项目
```
mkdir demo
cd demo
```

### 初始化项目
`npm init`
生成的package.json 如下：
```js
{
  "name": "demo",
  "version": "1.0.0",
  "description": "'demo'",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
}
```
### 新建index.html页面
index.html内容：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>vue demo</title>
</head>
<body>
  <script src="./dist/index.js"></script>
</body>
</html>
```
### 使用webpack
`npm install webpack --save-dev`

在根目录创建webpack.config.js文件
```js
const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    firename: "index.js"
  }
}
```

### webpack 编译
`webpack` 或 `npm run build`(在package.json中需要配置`"scripts":{"build": "webpack"}`)
编译后项目结构如下：
![bianyihou](/img/list.jpg)

### 引入vue
`npm install vue --save`
index.js中的内容修改如下
```js
import Vue from 'vue'

var vm = new Vue({
  el: '#app',
  data: {
    msg: 'hello word!'
  }
})
```

### 引入babel
`npm install --save-dev babel-core babel-loader`
将babel加到webpack.config.js中
```js
const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  }
}
```
完成后输入webpack，浏览器打开index.HTML显示
> hello word!   
ok,一个基本的vue项目搭建完成。

### 其他配置
在项目中我们还会引入css,less,图片资源等，这些文件的使用需要相应的加载器才能将其加载到项目中使用。  
css 加载器
`install --save-dev css-loader style-loader`
修改webpack.config.js 文件
```js
{
  test: '/\.css$/',
  loader: 'style-loader!css-loader'
}
```
图片资源加载
`npm install --save-dev file-loader url-loader`
修改webpack.config.js 文件
```js
{
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000
  }
}
```
### html-webpack-plugin 的使用
通过HTML插件，可以自动化生成HTML文件
引入插件：
`npm install --save-dev html-webpack-plugin`
webpack.config.js 中配置
`const htmlWebpackPlugin = require('html-webpack-plugin')`
```js
plugins: [
  new htmlWebpackPlugin()
]
```
重新编译，dist文件夹下将新生成index.html文件。   
htmlplugin插件也可以指定生成HTML文件模板，我们可以以根目录下的index.html文件作为模板，并将其修改如下：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>vue demo</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```
可以将webpack.congfig.js 配置文件修改如下：
```js
new htmlWebpackPlugin({
  title: 'vue demo',
  template: 'index.html'
})
```
重新编译在dist下生成index.html 文件如下：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>vue demo</title>
</head>
<body>
  <div id="app"></div>
<script type="text/javascript" src="index.js"></script></body>
</html>
```

### webpack-dev-server 配置
webpack-dev-server是一个简单的web服务器，并且能够实现实时重新加载。
`npm install --save-dev webpack-dev-server`

在webpack.config.js 文件中给服务器指定一个文件夹位置，来加载文件
```js
devServer: {
  contentBase: "./dist"
}
```
在package.json 中增加一个js脚本，运行开发服务器
`"dev":"webpack-dev-server --open"`

然后输入命令：
`npm run dev`

启动完成，浏览器会自动打开http://localhost:8080/页面
![hello](/img/hello.jpg)
