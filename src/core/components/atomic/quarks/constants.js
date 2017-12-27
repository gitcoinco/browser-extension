"use strict";

var breakpoints = [40, 52, 64];

var scale = [0, 8, 16, 32, 64];

var fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];
var fontFamily = {
   body: "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
    heading: "Akrobat,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
    button: "Roboto,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif"
};

module.exports = {
  breakpoints: breakpoints,
  scale: scale,
  fontSizes: fontSizes
};