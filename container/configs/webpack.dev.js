const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const mode = process.env.NODE_ENV || "production";

const PORT = 8080;
const publicPath = `http://localhost:${PORT}/`;
const devConfig = {
  mode,
  entry: "./src/index.ts",
  output: {
    publicPath,
  },
  devServer: {
    port: PORT,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "container",
      library: { type: 'var', name: 'container' },
      remotes: {
        sidebar: "sidebar",
        analytics: "analytics",
        cryptos: "cryptos",
        projects: "projects",
      },
      shared: packageJson.dependencies,
    }),
  ],
};
module.exports = merge(commonConfig, devConfig);
