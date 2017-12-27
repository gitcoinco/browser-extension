'use strict';

var _require = require('./util'),
    is = _require.is,
    arr = _require.arr,
    num = _require.num,
    px = _require.px,
    breaks = _require.breaks,
    dec = _require.dec,
    media = _require.media,
    merge = _require.merge;

module.exports = function (props) {
  var w = is(props.width) ? props.width : props.width || props.w;
  if (!is(w)) return null;

  var bp = breaks(props);
  var val = arr(w);

  return val.map(wx).map(dec('width')).map(media(bp)).reduce(merge, {});
};

var wx = function wx(n) {
  return !num(n) || n > 1 ? px(n) : n * 100 + '%';
};