import { Absolute, Flex, Box, Grid } from 'particles'

const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/)
req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  module.exports[componentName] = req(key)
})

module.exports['Absolute'] = Absolute
module.exports['Flex'] = Flex
module.exports['Box'] = Box
module.exports['Grid'] = Grid