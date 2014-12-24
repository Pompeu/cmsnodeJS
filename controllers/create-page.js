// file: controllers/create-page.js - created at 2014-12-24, 02:19
function createPageHandler(req, res) {
  debug('controller  create page handler');

  res.send(res.locals.out)
}
module.exports = exports = createPageHandler;
