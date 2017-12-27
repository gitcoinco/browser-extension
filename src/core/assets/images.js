const req = require.context('.', true, /\.\/images\/[^/]+\.(jpg|jpeg|png)$/)
req.keys().forEach((key) => {
  const fileName = key.replace(/^.+\/([^/]+)\.(jpg|jpeg|png)/, '$1')
  module.exports[fileName] = req(key)
})