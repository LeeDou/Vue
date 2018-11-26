# vue项目更多配置

### 在配置vue项目中，组建内部scss内容提取出来时报错
![error](/img/error.jpg)    
出现这个报错的原因是webpack4.0摒弃了3.0的ExtractTextPlugin插件，4.0中使用MinCssExtractPlugin插件对css文件进行提取   
同时在webpack4中需要新建postcss.config.js 文件，文件内容为
```js
module.exports = {}
```

### webpack会根据环境不同自动打包js文件（development/production）
一般来说我们可以配置三个webpack文件，项目的基本处理，开发环境处理以及生产环境处理（webpack.base.js、webpack.dev.js、webpack.prod.js）

在package.json 我们进行如下设置，来自动选择不同打包文件
```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --config webpack.dev.js --hot-only", // 指定webpack-werver 以及热更新
    "prod": "webpack -p --config webpack.prod.js"
  }
```