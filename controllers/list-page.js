// file: controllers/list-page.js - created at 2014-12-24, 03:40
function listPageHandler(req, res) {
  	debug('controller list page handler');

  	res.send(res.locals.out);
}
module.exports = exports = listPageHandler;
