const {appendWebpackPlugin} = require('@rescripts/utilities')
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = config => {
  if (config.mode === 'production') {
    return appendWebpackPlugin(
      new CompressionPlugin({
        filename: "[path][base].gz",
        algorithm: "gzip",
        test: /\.(js|css|html|svg|json|txt|pdf|doc|docx|xls|xlsx|ttf|otf)$/,
        threshold: 0,
        minRatio: 1,
      }),
    )(config);
  }

  return config;
}
