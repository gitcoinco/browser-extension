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
  var o = is(props.opacity) ? props.opacity : props.opacity || props.o;
  if (!is(o)) return null;

  var bp = breaks(props);
  var val = arr(o);

  return val.map(ox).map(dec('opacity')).map(media(bp)).reduce(merge, {});
};

var ox = function ox(n) {
  return n * 100 + '%';
};