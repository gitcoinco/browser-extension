const req = require.context('.', true, /\.\/background\/[^/]+\.(jpg|jepg|png)$/)
req.keys().forEach((key) => {
  const fileName = key.replace(/^.+\/([^/]+)\.(jpg|jepg|png)/, '$1')
  module.exports[fileName] = req(key)
})