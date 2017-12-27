const req = require.context('.', true, /\.\/icons\/[^/]+\.(svg)$/)

req.keys().forEach((key) => {
  const fileName = key.replace(/^.+\/([^/]+)\.(svg)/, '$1')
  module.exports[fileName] = req(key)
})