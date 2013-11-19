
/**
 * Dependencies
 */

var debug = require('debug')('mapbox');

/**
 * Load mapbox
 */

var els = [].slice.call(document.querySelectorAll('.mapbox'));
debug('elements found', els);

for (var i in els) {
  var el = els[i];
  L.mapbox.map(el, 'trevorgerhardt.g9acc8b8', {
      touchZoom: false,
      scrollWheelZoom: false,
    })
    .setView([ el.dataset.lat, el.dataset.lon ], el.dataset.zoom);
}
