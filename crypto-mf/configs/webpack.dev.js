const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require("webpack");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    publicPath: "http://localhost:8083/",
  },
  devServer: {
    port: 8083,
    hot: true,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "crypto",
      library: { type: "var", name: "crypto" },
      filename: "remoteEntry.js",
      exposes: {
        "./CryptoMf": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = merge(commonConfig, devConfig);
