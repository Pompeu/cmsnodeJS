// file: middlewares/remove-page.js - created at 2014-12-24, 02:37
function removePageHandler(req, res, next) {
  debug('remove page handler');
  var Page = models.Page;
  var id =  req.params.id;
  
  res.locals.out = {err : null ,  status: false};

  function successHandler(result) {
  	debug('remove success handler');
    console.log(result);
  	res.locals.out.status = result ;
  	next();
  };

  function failHandler(err) {
  	debug('remove fail handler');
  	res.locals.out.err = err;
  	next(err);
  };

  function pageRemoveHandler(err,result) {
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  };

  Page
  	.remove({_id :id}, pageRemoveHandler);
}
module.exports = exports = removePageHandler;
