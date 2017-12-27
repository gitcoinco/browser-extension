export default (value, previousValue) => 
!previousValue || value.length > previousValue.length
  ? value.replace(/[^a-z0-9_\-]/g, '')
  : value