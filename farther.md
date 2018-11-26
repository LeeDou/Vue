# vue项目更多配置

### 在配置vue项目中，组建内部scss内容提取出来时报错
![error](/img/error.jpg)    
出现这个报错的原因是webpack4.0摒弃了3.0的ExtractTextPlugin插件，4.0中使用MinCssExtractPlugin插件对css文件进行提取

### webpack会根据环境不同自动打包js文件（development/production）