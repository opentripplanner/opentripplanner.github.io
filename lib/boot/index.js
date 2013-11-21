
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

  router.on('/blog/:year/:month/:date/:title', function (ctx) {
    debug('/blog/%s/%s/%s/%s', ctx.params.year, ctx.params.month, ctx.params.date, ctx.params.title);

    // load maps
    require('./mapbox');
  });

  router.start();
}
