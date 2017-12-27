"use strict";

var REG = /^([mpfw][trblxy]?|width|fontSize|color|bg|z|height|is)$/;

module.exports = function (props) {
  var next = {};

  for (var key in props) {
    if (REG.test(key)) {
      continue;
    }
    next[key] = props[key];
  }

  return next;
};