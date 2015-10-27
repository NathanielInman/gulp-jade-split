'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('jshint', function(){
  gulp.src(['**/*.js', '~node_moduels/**'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter());
});
