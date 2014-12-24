// file: middlewares/list-page.js - created at 2014-12-24, 03:40
function listPageHandler(req, res, next) {
	debug("list page handler");

	var Page = models.Page;
	
	res.locals.out = {err : null , result : [] , status :false};
	
	function successHandler(result) {
		debug("sucess handler");
		res.locals.out.status =  true;
		res.locals.out.result = result;
		next();
	};

	function failHandler(err) {
		debug("fail handler");
		res.locals.out.err = err;
		next(err);

	};

	
	function pageFindHandler(err, result) {
		debug('page find handler');

		if(!err){
			successHandler(result);
		}else{
			failHandler(err);
		}
	};

  	Page
  		.find({}, pageFindHandler);
}
module.exports = exports = listPageHandler;
