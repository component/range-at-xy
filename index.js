/**
 * Returns whether a point lies within a ClientRect
 * 
 * @param {ClientRect} rect
 * @param {Number} x
 * @param {Number} y
 * @api private 
 */

function withinRect(rect, x, y) {
  return (x >= rect.left) &&
         (x < rect.right) &&
         (y >= rect.top) &&
         (y < rect.bottom);
}

/**
 * Test the client rects of all characters in a text node, and returns
 * a range if one of them encompasses the given X and Y coordinates.
 *
 * @param {Node} node
 * @param {Number} x
 * @param {Number} y
 */

function testRects(node, x, y) {
  var l = node.textContent.length;
  for (var i = 0; i < l; i++) {
    var range = document.createRange();
    range.setStart(node, i);
    range.setEnd(node, i+1);
    var clientRect = range.getBoundingClientRect();
    if (withinRect(clientRect, x, y)) {
      return range;
    }
  }
}

/**
 * Returns a range selecting a text character given an HTML element,
 * and X and Y coordinates
 * 
 * @param {HTMLElement} el
 * @param {Number} x
 * @param {Number} y
 * @api public
 */

function rangeAtXY(el, x, y) {
  var it = document.createNodeIterator(el, NodeFilter.SHOW_TEXT, null);    
  var node;
  var range;
  while (node = it.nextNode()) {
    if (range = testRects(node, x, y)) {
      return range;
    }
  }
  return null;
}

/**
 * Module Exports
 */

module.exports = rangeAtXY;

