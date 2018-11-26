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

### 提高webpack打包速度
- happypack  多线程打包   
  HappyPack能够让webpack把任务分解成多个子进程去并发执行，子进程处理完后把结果发给主进程。
  ```js
  const HappyPack = require('happypack')
  const os = require('os')
  const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

  {
    test: /\.js$/,
    // loader: 'babel-loader',
    loader: 'happypack/loader?id=babel', // 增加新的HappyPack构建loader
    include: [resolve('src')],
    exclude: /node_modules/,
  }


  new HappyPack({
    id : "babel", // 和rules里的配置相同
    threadPool: happyThreadPool,
    cache : true,
    loaders : [
      {
        loader : "babel-loader" ,
        query: {
          cacheDirectory: path.resolve(__dirname, "./.cache")
        },
        presets: [
          "env", "stage-0"
        ]
      }
    ]
  })

 
  
  ```
- dll  分离第三方依赖   
  ```js
   entry: {
      vendor: [
        'vue', 'vuex', 'vue-router', 'vuex-router-sync', 'babel-polyfill', '...'
      ]
    },
    output: {
      path: path.join(__dirname, './public/', 'dist'),
      filename: '[name].dll.js',
      library: '[name]_library' // 全局变量名，其它模块会从此此变量上获取里面的模块
    },
    plugins: [
      new webpack.DllPlugin({
        path: path.join(__dirname, './public/', 'dist', '[name]-manifest.json'),
        name: '[name]_library'
      })
    ]
  ```
- 其他  提取公共代码
```js
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0, // This is example is too small to create commons chunks
          name: 'common'
        },
        vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
      }
    }
  },
```