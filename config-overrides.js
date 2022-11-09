const path = require('path')

module.exports = {
  paths (paths) {
    paths.appIndexJs = path.resolve(__dirname, 'src/demo/index.js')
    paths.appSrc = path.resolve(__dirname, 'src')
    return paths
  }
}
