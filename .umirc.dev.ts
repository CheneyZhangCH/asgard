export default {
  define: {
    ENV: 'development',
    // apiHost: '/',
    apiHost: 'localhost:3000',
  },
  // proxy: {
  //   '/mock-api': {
  //     target: 'http://localhost:8001',
  //     pathRewrite: { '^/mock-api': '' },
  //   },
  // },
  chainWebpack(config, { webpack }) {
    config.resolve.alias.set('react-dom', '@hot-loader/react-dom');
    config.devServer.hot(true);
    config.devtool('source-map');
    new webpack.HotModuleReplacementPlugin();
  },
};
