/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildPath: 'server/build/index.js',
  devServerPort: 8002,
  ignoredRouteFiles: ['.*'],
};
