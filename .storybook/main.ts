import tsconfigPaths from 'vite-tsconfig-paths';

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
  viteFinal: async (config) => {
    config.plugins.push(tsconfigPaths());

    return config;
  },
  core: {
    builder: 'storybook-builder-vite',
  },
};
