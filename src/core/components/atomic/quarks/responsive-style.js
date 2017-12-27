'use strict';

var _require = require('./util'),
    is = _require.is,
    idx = _require.idx,
    arr = _require.arr,
    num = _require.num,
    px = _require.px,
    breaks = _require.breaks,
    dec = _require.dec,
    media = _require.media,
    merge = _require.merge;

module.exports = function (key, prop, boolValue) {
  return function (props) {
    prop = prop || key;
    var n = props[prop];
    if (!is(n)) return null;

    var bp = breaks(props);
    var scale = idx(['theme', prop], props) || {};
    var val = arr(n);

    return val.map(bool(boolValue)).map(sx(scale)).map(dec(key)).map(media(bp)).reduce(merge, {});
  };
};

var bool = function bool(val) {
  return function (n) {
    return n === true ? val : n;
  };
};
var sx = function sx(scale) {
  return function (n) {
    return is(n) ? scale[n] || n : n;
  };
};