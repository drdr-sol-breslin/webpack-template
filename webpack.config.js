const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js',
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DrDr Boilerplate',
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};
