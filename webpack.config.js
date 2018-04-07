const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  plugins: [
    new CopyWebpackPlugin([{
      from: './res',
      to: 'C:/RAGEMP/server-files/client_packages'
    }], {
      force: true
    }),
    // plugins.push(
    //   new webpack.IgnorePlugin(/res/)
    // )
  ],
  module: {
    rules: [{
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  watch: true,
  resolve: {
    extensions: ['.ts', '.js', 'html', 'css']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'C:/RAGEMP/server-files/client_packages')
  },
};