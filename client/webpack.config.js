const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const Dotenv = require("dotenv-webpack");

const loadPlugin = () => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: "/public/index.html",
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
    new Dotenv(),
  ];

  if (process.env.BUNDLE) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
};

module.exports = {
  mode: "development",

  entry: {
    index: path.resolve(__dirname, "./src/index"),
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // CleanWebpackPlugin 대체
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()], // output으로 나오는 파일의 사이즈를 줄여줌
    splitChunks: {
      chunks: "all",
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/, // .ts 에 한하여 ts-loader를 이용하여 transpiling
        exclude: /node_module/,
        loader: "babel-loader", // 'babel-loader' 만으로 'ts-loader' 대체 가능
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [
      // tsconfig.json 파일의 paths를 참조하여 alias 자동 설정
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "./tsconfig.json"),
      }),
    ],
  },

  plugins: loadPlugin(),

  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
