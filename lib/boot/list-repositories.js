
/**
 * Dependencies
 */

var debug = require('debug')('list repositories');

/**
 * List repositories
 */

$.getJSON('https://api.github.com/orgs/conveyal/repos', function (result) {
  debug('repositories', result);
});
