const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  mode: "development",
  entry: './src/index.js', 
  output: { 
    path: path.resolve('dist'), 
    filename: 'index_bundle.js'
  }, 
  module: {
  }, 
  plugins: [HtmlWebpackPluginConfig]
}
