import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

module.exports = {
  stories: ['../app/lib/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-themes',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
  core: {
    builder: 'webpack5',
  },
};
