/* ------------------------- External Dependencies -------------------------- */
import upperFirst from 'lodash/upperFirst'
import forIn from 'lodash/forIn'

/* --------------------------- Require Context ----------------------------- */
const req = require.context('.', true, /\.\/.+\/index\.js$/)

/* ------------------------- Import Dependencies --------------------------- */
req.keys().forEach((key) => {
  const zoneName = key.replace(/\.\/(.+)\/(.+)\/.+$/, '$1')
  const fromName = `from${upperFirst(zoneName)}`
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  module.exports[fromName] = module.exports[fromName] || {}
  module.exports[fromName][componentName] = req(key)
})

