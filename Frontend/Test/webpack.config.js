const HtmlWebpackPlugin=require('html-webpack-plugin');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin')

module.exports={
    mode:'development',
    devServer:{
        port:8084
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new ModuleFederationPlugin({
            name:'test',
            filename:'remoteEntry.js',
            exposes:{
                './TestIndex':'./src/bootstrap'
            },
            shared:['faker']
        })
    ]
}