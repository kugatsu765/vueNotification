function getProdExternals() {
  return {
    gsap: "gsap",
    vue: "Vue",
    vuetify: "vuetify"
  };
}

module.exports = {
  css: {
    extract: false
  },
  productionSourceMap: false,
  configureWebpack: {
    output: {
      libraryExport: "default"
    },
    externals: process.env.NODE_ENV === 'production' ?
      getProdExternals() : {}
  }
};
