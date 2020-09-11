const path=require('path')
const {VueLoaderPlugin}=require('vue-loader')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
  //输入
  entry:{
    path:path.join(__dirname,'../src/index.js'),
  },
  //输出
  output:{
    path:path.join(__dirname,'../dist'),
    filename:'bundle.js'
  },
  resolve: {
    alias:{
      'vue$':'vue/dist/vue.esm.js'//配置别名 确保webpack可以找到.vue文件
    },
    extensions: ['.js', '.jsx','.json']
  },
  mode:process.env.NODE_ENV,
  module:{
    rules:[
      {
        test:/\.vue$/,
        use:'vue-loader'
      },
      {
        test:/\.(png|jpg|jepg|svg)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:1024,  //这里的单位是b
              name:'images/[name][hash].[ext]' //打包后输出路径
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template:'./index.html',
      inject: 'body',
      minify: {
        removeComments: true
      }
    })
  ]
}