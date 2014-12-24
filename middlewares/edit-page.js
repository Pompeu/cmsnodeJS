// file: middlewares/edit-page.js - created at 2014-12-24, 01:15
function editPageHandler(req, res, next) {
  debug('edit page handler');

  var Page = models.Page;
  var body = req.body;
  var id = req.params.id;

  res.locals.out = {err : null, status: false};

  function failHandler(err) {
  	debug('edit fail handler');
  	res.locals.out.err = err;
  	next(err);
  };

  function successHandler(result) {
  	debug('edit success handler');
  	res.locals.out.status = (result && (true));
  	next();
  };

  function pageUpdateHandler(err, result) {
  	debug('page update handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  };

  Page
  	.update({_id : id}, body , pageUpdateHandler);
}
module.exports = exports = editPageHandler;
