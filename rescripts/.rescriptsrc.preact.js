module.exports = config => {
  /*
  preact is not compatible,
  pages like hotels don't work well,
  creating hotel ads, doesn't show hotels.

  last tested version: 10.5.14

  config.resolve.alias = {
    ...config.resolve.alias,
    "react": "preact/compat",
    "react-dom/test-utils": "preact/test-utils",
    "react-dom": "preact/compat",
  };
*/
  return config
}
