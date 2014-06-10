# range-at-xy

Given an `HTMLElement` and a pair of coordinates `x` and `y`, returns a `Range` object, containing the text character visible at position `(x, y)`.

If no character is visible at position `(x, y)`, `null` is returned.

<em>Important:</em> Coordinates must be provided on the viewport coordinate system. (i.e. `e.clientX` and `e.clientY`)

## example

```javascript
var atxy = require('range-at-xy');

document.body.addEventListener('mousemove', function() {
  var range = atxy(document.body, e.clientX, e.clientY);
  if (range) {
    // print character under cursor
    console.log(range.cloneContents().textContent);
  }
})
```

## License

    The MIT License (MIT)

    Copyright (c) 2014 Automattic, Inc.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
