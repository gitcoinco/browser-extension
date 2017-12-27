'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _require = require('./util'),
    arr = _require.arr,
    idx = _require.idx,
    px = _require.px,
    neg = _require.neg,
    num = _require.num,
    breaks = _require.breaks,
    dec = _require.dec,
    media = _require.media,
    merge = _require.merge;

var _require2 = require('./constants'),
    scale = _require2.scale;

var REG = /^[mp][trblxy]?$/;

module.exports = function (props) {
  var keys = Object.keys(props).filter(function (key) {
    return REG.test(key);
  }).sort();
  var bp = breaks(props);
  var sc = idx(['theme', 'space'], props) || scale;

  return keys.map(function (key) {
    var val = arr(props[key]);
    var p = getProperties(key);
    return val.map(mx(sc)).map(dec(p)).map(media(bp)).reduce(merge, {});
  }).reduce(merge, {});
};

var mx = function mx(scale) {
  return function (n) {
    return num(n) ? px((scale[Math.abs(n)] || Math.abs(n)) * (neg(n) ? -1 : 1)) : n;
  };
};

var getProperties = function getProperties(key) {
  var _key$split = key.split(''),
      _key$split2 = _slicedToArray(_key$split, 2),
      a = _key$split2[0],
      b = _key$split2[1];

  var prop = properties[a];
  var dirs = directions[b] || [''];
  return dirs.map(function (dir) {
    return prop + dir;
  });
};

var properties = {
  m: 'margin',
  p: 'padding'
};

var directions = {
  t: ['Top'],
  r: ['Right'],
  b: ['Bottom'],
  l: ['Left'],
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};