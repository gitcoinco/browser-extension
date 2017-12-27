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

var _require2 = require('./constants'),
    fontSizes = _require2.fontSizes;

module.exports = function (props) {
  var f = is(props.fontSize) ? props.fontSize : props.fontSize || props.f;
  if (!is(f)) return null;

  var bp = breaks(props);
  var scale = idx(['theme', 'fontSizes'], props) || fontSizes;
  var val = arr(f);

  return val.map(fx(scale)).map(dec('fontSize')).map(media(bp)).reduce(merge, {});
};

var fx = function fx(scale) {
  return function (n) {
    return num(n) ? px(scale[n] || n) : n;
  };
};