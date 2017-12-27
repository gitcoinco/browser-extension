export default (value, previousValue) => {
 if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 2) {
      return '.' + onlyNums.slice(-2)
    }
  if (onlyNums.length >= 3) {
      const integer = onlyNums.slice(0,-2 )
      const float = onlyNums.slice(-2 )
      return integer + '.' + float
  }
  return onlyNums
}