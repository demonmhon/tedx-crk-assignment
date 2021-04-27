const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
      chunkFilename: '[id].[hash:8].css',
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, '../src/sw.js'),
      swDest: 'sw.js',
    }),
  ],
});
