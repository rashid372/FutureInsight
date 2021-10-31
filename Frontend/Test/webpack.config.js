const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    mode:'development',
    devServer:{
        port:8084
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}