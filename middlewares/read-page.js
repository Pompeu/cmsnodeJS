// file: middlewares/read-page.js - created at 2014-12-24, 03:21
function readPageHandler(req, res, next) {
  debug('read page hendler');
  var Page = models.Page;
  var body = req.body;

  res.locals.out = {err:null , result :{} , status :false};

  function successHandler(result) {
  	debug('sucess handler');
  	res.locals.out.status = true;
  	res.locals.out.result = result;
  	next();
  };

  function failHandler(err) {
  	debug('fail handler');
  	res.locals.out.err = err;
  	next(err);
  };

  function pageFindOneHandler(err, result) {
  	debug('pag find one handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}

  };

  Page
  	.findOne({_id : id }, pageFindOneHandler);

}
module.exports = exports = readPageHandler;
