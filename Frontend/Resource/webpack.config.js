const HtmlWebpackPlugin=require('html-webpack-plugin');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');

module.exports={
    mode:'development',
    devServer:{
        port:8083
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new ModuleFederationPlugin({
            name:'resource',
            filename:'remoteEntry.js',
            exposes:{
                './ResourceIndex':'./src/index'
            },
            shared:['faker']
        })
    ]
}