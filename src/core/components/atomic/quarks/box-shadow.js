const { breaks, idx, merge, arr, dec, media } = require('./util')

const REG = /^boxShadow|bs$/

module.exports = props => {
  const keys = Object.keys(props).filter(key => REG.test(key))
  const bp = breaks(props)
  const shadows = idx([ 'theme', 'shadows' ], props) || {}

  return keys.map(key => {
    const val = arr(props[key])
    const prop = properties[key] || key
    return val
      .map(cx(shadows))
      .map(dec(prop))
      .map(media(bp))
      .reduce(merge, {})
  }).reduce(merge, {})
}

const cx = obj => n => idx(getKeys(n), obj) || n
const getKeys = n => typeof n === 'string' ? n.split('.') : [ n ]

const properties = {
  bs: 'boxShadow'
}
