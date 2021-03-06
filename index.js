'use strict';

var MarkdownIt = require('markdown-it');

exports.name = 'markdown-it';
exports.outputFormat = 'html';
exports.render = function (str, options) {
  var md = MarkdownIt(options);
  return md.render(str);
};
