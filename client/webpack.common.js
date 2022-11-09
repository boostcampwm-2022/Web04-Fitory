const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

/* 
webpack-dev-server 관련 코드를 제거하고 CleanWebpackPlugin 설치하여 추가적으로 적용했다. 
CleanWebpackPlugin은 re-build될 때 기존의 결과물을 제거해준다. 
*/
const config = {
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../server", "build", "public"),
    assetModuleFilename: "[name][ext][query]",
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: "all",
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/, // .ts 에 한하여 ts-loader를 이용하여 transpiling
        exclude: /node_module/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]",
        },
      },
    ],
  },
  resolve: {
    // 생략 가능한 확장자로`.ts`, `.tsx` 추가
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
    new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ["public"] }), // re-build될 때 기존의 결과물을 제거해준다
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["**/*.LICENSE.txt"],
      protectWebpackAssets: false,
    }), // re-build될 때 기존의 결과물을 제거해준다
  ],
};

module.exports = config;
