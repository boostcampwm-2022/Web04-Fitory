const commonConfig = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

module.exports = merge(commonConfig, {
  mode: "production",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
});
