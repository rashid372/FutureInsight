const HtmlWebpackPlugin=require('html-webpack-plugin');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');

module.exports={
    mode:'development',
    devServer:{
        port:8082
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new ModuleFederationPlugin({
            name:'question',
            filename:'remoteEntry.js',
            exposes:{
                './QuestionIndex':'./src/index'
            },
            shared:['faker']
        })
    ]
}