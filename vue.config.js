module.exports = {
  css: {
    extract: false
  },
  productionSourceMap: false,
  configureWebpack: {
    output: {
      libraryExport: "default"
    }
  }
};
