// 打包代码配置
const path = require("path");

const base = require("./webpack.base.js");

const merge = require("webpack-merge");

const webpack = require("webpack");

const OptimizeCss = require("optimize-css-assets-webpack-plugin");
// 压缩js 
const UglifyJsplugin=require("uglifyjs-webpack-plugin")
// 清除build/dist 文件夹
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//生成创建HTML入口文件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 复制公共文件
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge.smart(base, {
  
    mode: "production",

    performance: {
        hints: "warning", // 枚举
        maxAssetSize: 30000000, // 整数类型（以字节为单位）
        maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
        assetFilter: function(assetFilename) {
        // 提供资源文件名的断言函数
        return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        
        }
    },

  devtool: "#@source-map",
  optimization: {
    minimizer: [
      // 压缩css文件
      new OptimizeCss({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require("cssnano"),
        // cssProcessorOptions: cssnanoOptions,
        cssProcessorPluginOptions: {
          preset: [
            "default",
            {
              discardComments: {
                removeAll: true
              },
              normalizeUnicode: false
            }
          ]
        },
        canPrint: true
      }),
      
      new UglifyJsplugin(// // 压缩js文件
        {
            test: /\.js(\?.*)?$/i,
            cache:true, //缓存
            parallel:true,
            sourceMap:true,
        }
        ),
    ]
  },
  plugins: [
        // uglifyPlugin,
    new HtmlWebpackPlugin({
      //使用插件生成HTML入口文件
      template: "./src/index.html", //模板文件
      filename: "../index.html", // 模板文件名
      minify: {
        removeAttributeQuotes: true, //删除双引号
        collapseWhitespace: true //压缩成一行
      },
      chunks: ["home"],
      // 插入body标签底部
      inject: true,
      hash: true
    }),
    new CleanWebpackPlugin(),
    // 使用插件定义全局变量DEV
    new webpack.DefinePlugin({
      STATE: JSON.stringify("production")
    }),
    new CopyPlugin([
        {
            from:"src/public/",
            to:"../public/",
            toType:"dir"
        }
    ])
  ]
});

console.log("1");
