const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");

// 이것은 production 환경.
module.exports = merge(commonConfig, {
  mode: "production",
});
