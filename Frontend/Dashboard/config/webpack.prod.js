const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  output:{
    filename:'[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
        name:'dashboard',
        filename:'remoteEntry.js',
        exposes:{
          './DashbardApp':'./src/bootstrap'
        }
      }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
