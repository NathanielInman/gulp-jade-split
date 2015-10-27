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

Basic gulpfile.js
```javascript
var splitJade = require('gulp-split-jade');

// Files prefaced with underscare are ignored as they denote
// partials
gulp.task('jade-split-demo-es5',function(){
  gulp.src(['src/views/!(_)*.jade'])
    .pipe(splitJade('src/assets/structure.json'))
    .pipe(gulp.dest('dist/'))
}); //end 'jade-split-demo-es5
```

Basic JSON file
```json
[
  {
    "outputName": "demo/test.html",
    "jadeData": {
      "pageTitle": "test page 1"
    }
  },
  {
    "outputName": "demo/test2.html",
    "jadeData": {
      "pageTitle": "test page 2"
    }
  }
]
```

Basic Jade file
```jade
doctype html
html(lang="en")
  head
    title= pageTitle
    include ../partials/_head.jade
  body
    p The title of this page is a variable passed in
    | by the gulp-jade-split plugin.
    include ../partials/_footer.jade
    include ../partials/_scripts.jade
```

Demo output
```
project
├─dist
│ └─demo
│   ├─ test.html
│   └─ test2.html
│
├─src
│ └─views
│   ├─partials
│   │ ├─ _footer.jade
│   │ ├─ _head.jade
│   │ └─ _scripts.jade
│   └─ index.jade
└─ gulpfile.js
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
