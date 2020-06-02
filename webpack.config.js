const webpack = require("webpack");
const ejs = require("ejs");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  mode: process.env.NODE_ENV,
  context: __dirname + "/src",
  entry: {
    index: "./index.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: `[name].js`,
    chunkFilename: `[name].js`
  },
  resolve: {
    extensions: [".js"],
  },
  devServer: {
    contentBase: __dirname + "/dist",
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      global: "window",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "index.html", to: "index.html", transform: transformHtml },
      ],
    }),
  ],
};

if (config.mode === "production") {
  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"',
      },
    }),
  ]);
}

function transformHtml(content) {
  return ejs.render(content.toString(), {
    ...process.env,
  });
}

module.exports = config;
