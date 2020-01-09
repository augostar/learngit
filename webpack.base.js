// 公共配置
const path=require('path')
//将css提取成单独的文件
const MiniCssExtract= require("mini-css-extract-plugin");
//处理中文乱码
const EncodingPlugin= require("webpack-encoding-plugin");

console.log("2");
console.log("生成文件路径"+path.resolve(__dirname,"./dist"))
const NODE_ENV=process.env.NODE_ENV;
console.log("运行模式"+NODE_ENV)

// css输出路径
let developmentcss="";
// 出口
let fileoutput="";
if(NODE_ENV=="development"){
    fileoutput="dist"
    developmentcss="[name].css"
}
if(NODE_ENV=="production"){
    fileoutput="dist/js"
    developmentcss="../css/[name].css"
}

module.exports={
    // 入口
    entry:{
        home:"./src/index.js"
    },
    // 出口
    output:{
        path:path.resolve(__dirname,fileoutput),
        filename:"[name][hash:8].js"
    },
    // 配置插件
    plugins:[
        
        new MiniCssExtract({
            filename:developmentcss,//最终输出的文件名
            chunkFilename:'[id].css'
        }),


        new EncodingPlugin({
            encoding:"UTF-8"
        })
    ]
    ,
    // loader加载器模块配置
    module:{
        rules:[
            {
                test:/\.css$/,
                include:path.resolve(__dirname,"src"),
                use:[ 
                    NODE_ENV=="development" ? 'style-loader' : MiniCssExtract.loader,
                    // MiniCssExtract.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [// 自动添加css前缀
                                require("autoprefixer") /*在这里添加*/
                            ]
                        }
                    }
                ]
            },{
                test:/\.(jpg|png|svg|gif)$/,
                use:{
                    // loader:"file-loader",
                    loader:"url-loader",
                    options:{
                        name:"[name].[ext]",
                        outputPath:'./images', //负责输出目录，即打包后的位置
                        publicPath:"../images",
                        Limit:1024 , // 小于2kb的图片打包成base65
                    }
                }
            }
            ,{
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader",
            }
        ]
    },

}

