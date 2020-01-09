//#  运行代码配置
const webpack =require("webpack");
const path =require("path");

const merge=require("webpack-merge");

const base =require("./webpack.base.js");
//生成创建HTML入口文件
const HtmlWebpackPlugin = require("html-webpack-plugin");




module.exports=merge.smart(base,{
    mode:"development",
    watch: true,
    watchOptions: {
        ignored: /node_modules/, //默认为空，设置不监听的文件或文件夹
        aggregateTimeout: 300, // 默认300ms，监听变化后需要等待的执行时间
        poll:1000   // 默认1000ms，通过轮询的方式询问系统指定文件是否发生变化
    },

    devServer:{
        // hotOnly:true,
        contentBase:"./dist",
        port:"8000",
        // inline:true, 
        //historyApiFallback:true, //在开发单页应用是 它依赖HTML5 hisTory API 如果没有设置所有跳转都会指向index.html
        hot:true, // 运行热加载
        progress:true,//打包进度条
        contentBase:"./public", // contentBase:提供的静态资源目录
        compress:true // 一切服务都启用gzip压缩
    },
    // 启用source-map方便调试
    devtool:"#cheap-module-eval-source-map",
    // devtool:"",
    plugins:[
        new HtmlWebpackPlugin({ //使用插件生成HTML入口文件
            template:"./src/index.html",//模板文件
            filename:"index.html",// 模板文件名
            chunks:["home"],
            // 插入body标签底部
            inject: true,
            hash:true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            DEV:JSON.stringify("dev")
        })
    ]
})

console.log(3);