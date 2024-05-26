const Dotenv = require('dotenv-webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const baseManifest = require("./chrome/manifest.json");
const WebpackExtensionManifestPlugin = require("webpack-extension-manifest-plugin");

const config = {
  mode: "development",
  devtool: "source-map",
  entry: {
    app: "./app/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".*", ".js"]
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      manifest: "manifest.json",
      filename: "index.html",
      template: "./static/index.html",
      hash: true
    }),
    new CopyPlugin({
      patterns: [
        { from: "chrome/icons", to: "icons" },
      ],
    }),
    new WebpackExtensionManifestPlugin({
      config: {
        base: baseManifest
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{ loader: "file-loader" }]
      }
    ]
  }
};

module.exports = config;
