const path = require("path");
const webpack = require("webpack");

const config = {
  target: ["web", "webworker", "es5"],
  mode: "development",
  entry: "./index.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jpe?g|png$/,
        exclude: /node_modules/,
        use: ["url-loader", "file-loader"],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
};

module.exports = (env, argv) => {
  return {
    mode: env.WEBPACK_SERVE ? "development" : "production",
    config,
  };
};
/*
babel-loader @babel/core @babel/node @babel/preset-env html-loader @babel/plugin-transform-runtime @babel/runtime @babel/parser @babel/preset-react @babel/preset-typescript import "core-js/stable"; babel-loader file-loader url-loader sass-loader css-loader style-loader
*/
