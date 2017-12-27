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
  var br = is(props.borderRadius) ? props.borderRadius : props.borderRadius || props.br;
  if (!is(br)) return null;

  var bp = breaks(props);
  var val = arr(br);

  return val.map(bx).map(dec('border-radius')).map(media(bp)).reduce(merge, {});
};

var bx = function bx(n) {
  return !num(n) || n > 1 ? px(n) : n * 100 + '%';
};