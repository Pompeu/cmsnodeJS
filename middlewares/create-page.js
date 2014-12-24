// file: middlewares/create-pag.js - created at 2014-12-24, 02:19
function createPageHandler(req, res, next) {
  debug('create pag handler');

  var Page = models.Page;
  var body = req.body;
  /* interface padrão resposta */
  res.locals.out = {err : null, result:{} , status: false};

  function failHandler(err) {
  	debug('paga fail handler');
  	res.locals.out.err = err;
  	next(err);
  };

  function successHandler(result) {
  	debug('paga success handler');
  	res.locals.out.status = true;
  	res.locals.out.result =result;
  	next();
  };
  
  function pageSaveHandler(err, result) {
  	debug('paga save handler');

  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  };

  Page
  	.create(body,pageSaveHandler);
}
module.exports = exports = createPageHandler;
