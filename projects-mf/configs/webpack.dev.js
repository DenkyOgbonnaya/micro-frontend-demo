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
    publicPath: "http://localhost:8084/",
  },
  devServer: {
    port: 8084,
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
      name: "projects",
      library: { type: "var", name: "projects" },
      filename: "remoteEntry.js",
      exposes: {
        "./ProjectsMf": "./src/bootstrap",
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
