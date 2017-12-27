// @flow
import camelCase from 'lodash/camelCase'
const reducers = {}
const req = require.context('.', true, /\.\/.+\/reducer\.js$/)
req.keys().forEach((key) => {
  const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, '$1'))
  reducers[storeName] = req(key)
})

export default reducers;


