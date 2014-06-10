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
