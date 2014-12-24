// file: controllers/edit-page.js - created at 2014-12-24, 01:15
function editPageHandler(req, res) {
  debug('edit page handler');
  res.send(res.locals.out);
}
module.exports = exports = editPageHandler;
