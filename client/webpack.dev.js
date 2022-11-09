const path = require("path");
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");

// 공통으로 설정한 config 모듈을 불러와서 merge 시켰다.
// webpack-dev-server의 빌드 결과물은 사실, 실제 파일로 빌드되진 않고 메모리에 저장된다.
module.exports = merge(commonConfig, {
  // 개발모드
  mode: "development",
  // debug tool을 정해줍니다.
  devtool: "inline-source-map",
  // dist의 빌드한 내용을 서버로 띄우겠다.

  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3002,
    // 빌드 대상 파일이 변경되면 자동으로 브라우저를 새로고침
    hot: true,
  },
});
