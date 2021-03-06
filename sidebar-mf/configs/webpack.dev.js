const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    publicPath: "http://localhost:8081/",
  },
  devServer: {
    port: 8081,
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
      name: "sidebar",
      library: { type: 'var', name: 'sidebar' },
      filename: "remoteEntry.js",
      exposes: {
        "./SidebarMf": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = merge(commonConfig, devConfig);
