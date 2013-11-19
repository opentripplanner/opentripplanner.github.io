
/**
 * Dependencies
 */

var debug = require('debug')('boot');
var ghbuttons = require('github-buttons');
var mapify = require('mapify');
var Router = require('router');

/**
 * Wait until the document has loaded
 */

require('on-load')(boot);

/**
 * Boot function
 */

function boot() {
  debug('dom loaded');

  // load gravatars
  require('./load-gravatars');

  // init router
  var router = new Router();

  // about page
  router.on('/about', function (ctx) {
    debug('/about');

    var currentLocation = 0;
    var locations = [
      [ 38.905928908455046, -77.05111026763916 ], // D.C.
      [ 48.87, 2.32 - 0.025 ], // Paris
      [ 33.76, -84.38 - 0.025 ] // Atlanta
    ];

    var $mapbox = document.querySelector('.mapbox');
    var map = mapify($mapbox, {
      touchZoom: false,
      scrollWheelZoom: false,
    });

    setInterval(function() {
      currentLocation = currentLocation === 2
        ? 0
        : currentLocation + 1;
      $($mapbox).animate({
        opacity: 0
      }, 600, function () {
        map.panTo(locations[currentLocation]);
        $($mapbox).animate({
          opacity: 1
        }, 600);
      });
    }, 6000);
  });

  router.on('/blog/:year/:month/:date/:title', function (ctx) {
    debug('/blog/%s/%s/%s/%s', ctx.params.year, ctx.params.month, ctx.params.date, ctx.params.title);

    // load maps
    require('./mapbox');
  });

  router.start();
}
