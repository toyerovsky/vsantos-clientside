const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  plugins: [
    new CopyWebpackPlugin([{
      from: './res', to: 'DIRECTORY OF THE SERVER/client_packages'
    }], { force: true }),
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  watch: true,
  resolve: {
    extensions: ['.ts', '.js', 'html', 'css']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'DIRECTORY OF THE SERVER/client_packages')
  },
};
