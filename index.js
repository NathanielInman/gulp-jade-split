'use strict';

var path = require('path'),
    through2 = require('through2'),
    File = require('vinyl'),
    jade = require('jade');

module.exports = function splitJade(jsonInput){
  return through2.obj(function(file, enc, next){
    var json = require(path.join(process.cwd(),jsonInput)),
        compiled,
        fileName = { filename: file.path },
        contents = String(file.contents),
        that = this;

    // depending on amd or es6 importing it may present as an object
    // with a property name instead of just an array of data
    if(!(json instanceof Array)&&testObjectContainsArray(json)){
      json = json[Object.keys(json)[0]];
    } //end if

    // If the sent array with content, then operate upon that
    if(json instanceof Array&&json.length){
      json.forEach(function(entry){
        compiled = jade.compile(contents,fileName)(entry.jadeData);
        that.push(new File({
          base: file.path,
          path: path.join(file.path, entry.outputName),
          contents: new Buffer(compiled)
        }));
      });
    }else{
      console.log('Gulp jade split not sent an array as expected or array empty.');
    } //end if
    next();
  });
};

function testObjectContainsArray(obj){
  var result = true;

  if(typeof obj !== 'object'){
    result = false;
  }else if(!Object.keys(obj).length){
    result = false;
  }else if(!(obj[Object.keys(obj)[0]] instanceof Array)){
    result = false;
  } //end if
  return result;
}

