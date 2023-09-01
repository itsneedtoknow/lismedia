const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  plugins: [
    new HTMLWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
        
    })
],
module: {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
  },
  {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
  },
  {
    test: /\.html$/,
    use: ['html-loader']
},
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ["babel-loader"]
},
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/img/[name][ext]'
  }
},
{
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
  // generator: {
  //   filename: 'assets/font/[name][ext]'
  // }
},
  ]
}
};