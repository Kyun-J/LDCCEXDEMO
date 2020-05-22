const webpack = require("webpack");
const ejs = require("ejs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
  mode: process.env.NODE_ENV,
  context: __dirname + "/src",
  entry: {
    index: "./index.js",
    "component/dialog": "./component/dialog.js",
    "component/home": "./component/home.js",
    "store/actions": "./store/actions",
    "store/reducers": "./store/reducers"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js"],
  },
  devServer: {
    contentBase: __dirname + '/dist',
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?emitFile=false",
        },
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          "css-loader",
          {
            loader: "sass-loader",
            // Requires sass-loader@^7.0.0
            options: {
              implementation: require("sass"),
              fiber: require("fibers"),
              indentedSyntax: true, // optional
            },
            // Requires sass-loader@^8.0.0
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
                indentedSyntax: true, // optional
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      global: "window",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
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
