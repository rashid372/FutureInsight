const HtmlWebpackPlugin=require('html-webpack-plugin');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');

module.exports={
    mode:'development',
    devServer:{
        port:8080
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                dashboard:'dashboard@http://localhost:8081/remoteEntry.js',
                question:'question@http://localhost:8082/remoteEntry.js',
                resource:'resource@http://localhost:8083/remoteEntry.js',
                test:'test@http://localhost:8084/remoteEntry.js'

            }
        })
    ]
}