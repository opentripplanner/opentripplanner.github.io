
/**
 * Dependencies
 */

var debug = require('debug')('load-gravatars');
var gravatar = require('gravatar');

/**
 * Load
 */

debug('loading');

/**
 * Find all gravatar els and get their img
 */

var els = [].slice.call(document.querySelectorAll('.gravatar'));
for (var i in els) {
  var el = els[i];
  el.src = gravatar.url(el.dataset.email, {
    s: el.dataset.size || 400
  });
}
