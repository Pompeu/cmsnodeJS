// file: controllers/read-page.js - created at 2014-12-24, 03:21
function readPageHandler(req, res) {
	debug('controller read page handler');
  	res.send(res.locals.out);
}
module.exports = exports = readPageHandler;
