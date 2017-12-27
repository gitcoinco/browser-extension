/* --------------------------- Require Context ----------------------------- */
const req = require.context('.', true, /\.\/.+\/index\.js$/)

/* ------------------------- Import Dependencies --------------------------- */
req.keys().forEach((key) => {
  const name = key.replace(/\.\/(.+)\/.+$/, '$1')
  module.exports[name] = req(key)
})