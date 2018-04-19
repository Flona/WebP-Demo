const path = require("path");
const projectRoot = path.resolve(__dirname);
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.plugins.delete("prefetch");
    config.resolve.alias.set("@assets", path.join(projectRoot, "src/assets"));
    // config.externals({
    //   "element-ui": "Element"
    // })
    // config.resolve.alias.set("@assets", "http://www.baidu.com")
    // config.module.rules.delete("images")

    // add the new one
    // config.module
    //   .rule("images")
    //   .test(/\.(png|jpe?g|gif)(\?.*)?$/)
    //   .use("file")
    //   .loader("file-loader")
    //   .options({
    //     name: "img/[name].[hash:8].[ext]"
    //   })
  }
};
