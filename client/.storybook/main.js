const path = require("path");

module.exports = {
  stories: [
    "../src/stories/*.stories.mdx",
    "../src/stories/*.stories.@(ts|tsx)",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-react-router-v6",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.alias["@public"] = path.resolve(__dirname, "../public/");
    config.resolve.alias["@src"] = path.resolve(__dirname, "../src/");
    config.resolve.alias["@utils"] = path.resolve(__dirname, "../src/utils/");
    config.resolve.alias["@constants"] = path.resolve(__dirname, "../src/constants/");
    return config;
  },
};
