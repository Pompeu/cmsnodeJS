// file: controllers/remove-page.js - created at 2014-12-24, 02:37
function removePageHandler(req, res) {
  debug('controller page remove handler ');
  res.send(res.locals.out);
}
module.exports = exports = removePageHandler;
