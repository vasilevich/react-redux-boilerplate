module.exports = config => {
  if (config.mode === 'production') {
    config.module.rules.unshift({
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      enforce: 'pre',
      exclude: /(node_modules|bower_components|\.spec\.js)/,
      use: [
        {
          loader: 'webpack-strip-block',
          options: {
            replacementText: '',
            start: 'DEV-START',
            end: 'DEV-END',
          }
        }
      ]
    });
  }
  return config;
}
