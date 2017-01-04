const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

process.env.NODE_ENV = 'development';

module.exports = {
  entry: [
    path.join(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
      inject: 'body',
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/assets'),
    compress: true,
    port: 3000,
  },
};
