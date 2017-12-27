'use strict';

var _require = require('./util'),
    breaks = _require.breaks,
    idx = _require.idx,
    merge = _require.merge,
    arr = _require.arr,
    dec = _require.dec,
    media = _require.media;

var REG = /^borderColor|bc$/;

module.exports = function (props) {
  var keys = Object.keys(props).filter(function (key) {
    return REG.test(key);
  });
  var bp = breaks(props);
  var palette = idx(['theme', 'colors'], props) || {};

  return keys.map(function (key) {
    var val = arr(props[key]);
    var prop = properties[key] || key;
    return val.map(cx(palette)).map(dec(prop)).map(media(bp)).reduce(merge, {});
  }).reduce(merge, {});
};

var cx = function cx(obj) {
  return function (n) {
    return idx(getKeys(n), obj) || n;
  };
};
var getKeys = function getKeys(n) {
  return typeof n === 'string' ? n.split('.') : [n];
};

var properties = {
  bc: 'borderColor'
};