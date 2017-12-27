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
  var h = is(props.height) ? props.height : props.height || props.h;
  if (!is(h)) return null;

  var bp = breaks(props);
  var val = arr(h);

  return val.map(hx).map(dec('height')).map(media(bp)).reduce(merge, {});
};

var hx = function hx(n) {
  return !num(n) || n > 1 ? px(n) : n * 100 + '%';
};