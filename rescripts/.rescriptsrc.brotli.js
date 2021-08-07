const {appendWebpackPlugin} = require('@rescripts/utilities')
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");
module.exports = config => {
  if (config.mode === 'production') {
    return appendWebpackPlugin(
      new CompressionPlugin({
        filename: "[path][base].br",
        algorithm: "brotliCompress",
        test: /\.(js|css|html|svg|json|txt|pdf|doc|docx|xls|xlsx|ttf|otf)$/,
        compressionOptions: {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          },
        },
        threshold: 0,
        minRatio: 1,
      }),
    )(config);
  }
  return config;
}
