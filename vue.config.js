const path = require("path");
const projectRoot = path.resolve(__dirname);
module.exports = {
  // lintOnSave: false,
  devServer: {
    // proxy: "http://localhost:1234"
  },
  chainWebpack: config => {
    config.resolve.alias.set("@assets", path.join(projectRoot, "src/assets"));
  }
};
