[![Build Status](https://travis-ci.org/NathanielInman/gulp-jade-split.png?branch=master)](https://travis-ci.org/NathanielInman/gulp-jade-split)

## Information

<table>
<tr>
<td>Package</td><td>gulp-jade-split</td>
</tr>
<tr>
<td>Description</td>
<td>Compile Jade templates given JSON structure</td>
</tr>
<tr>
<td>Node Version</td>
<td>≥ 0.10</td>
</tr>
</table>

## Usage

Basic gulpfile.babel.js (ES2015)
note: Files prefaced with underscore are ignored as they denote partials
```javascript
import splitJade from 'gulp-split-jade';

gulp.task('jade-split-demo-es2015',()=>
  gulp.src(['src/views/!(_)*.jade'])
    .pipe(splitJade('./src/assets/structure.json'))
    .pipe(gulp.dest('dist/'))
); //end 'jade-feature' task
```

Basic gulpfile.js
```javascript
var splitJade = require('gulp-split-jade');

gulp.task('jade-split-demo-es5',function(){
  gulp.src(['src/views/!(_)*.jade'])
    .pipe(splitJade('./src/assets/structure.json'))
    .pipe(gulp.dest('dist/'))
}); //end 'jade-split-demo-es5
```

## LICENSE

(MIT License)

Copyright (c) 2015 Nathaniel Inman

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
