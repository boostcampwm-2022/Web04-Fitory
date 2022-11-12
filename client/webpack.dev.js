const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: "development",

  devtool: "inline-source-map",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: false,
    }),
  ],

  // 빌드 결과물은 실제 파일로 빌드되진 않고 메모리에 저장된다.
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3002,
    open: true,
    hot: true, // 빌드 대상 파일이 변경되면 자동으로 브라우저를 새로고침
    historyApiFallback: true, // history api route에 대한 fallback
  },
});
