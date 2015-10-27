'use strict';

var path = require('path'),
    through2 = require('through2'),
    File = require('vinyl'),
    jade = require('jade');

module.exports = function splitJade(jsonInput){
  return through2.obj(function(file, enc, next){
    var json = require(jsonInput),
        compiled,
        fileName = { filename: file.path },
        contents = String(file.contents);

    json.forEach(function(entry){
      compiled = jade.compile(contents,fileName)(entry.jadeData);
      this.push(new File({
        base: file.path,
        path: path.join(file.path, entry.outputName),
        contents: new Buffer(compiled)
      }));
    });
    next();
  });
};
