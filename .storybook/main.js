module.exports = {
  staticDirs: ["../public"],
  stories: ["../src/components/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
  ],
};
