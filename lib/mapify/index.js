
/**
 * Dependencies
 */

var debug = require('debug')('mapify');

/**
 * Return a map based on the element passed in
 */

module.exports = function mapify(el, opts) {
  opts = opts || {};
  return L.mapbox.map(el, opts.id || 'trevorgerhardt.g9acc8b8', opts)
    .setView([ el.dataset.lat, el.dataset.lon ], el.dataset.zoom);
};
