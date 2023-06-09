const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader';

module.exports = {
  entry: {
    index: './src/assets/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Main',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'About',
      template: './src/about.html',
      filename: 'about.html',
      chunks: ['about'],
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './src/assets/img', to: './assets/img' }],
    }),
    isProduction && new MiniCssExtractPlugin(),
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8082,
  },

  mode: isProduction ? 'production' : 'development',
};
