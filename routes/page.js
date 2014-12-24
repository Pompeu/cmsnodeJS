var express = require('express');
var router = express.Router();

/* GET home page. */
router
	.post('/',middlewares.createPage,controllers.createPage);

router
	.get('/:id',middlewares.readPage,controllers.readPage);

module.exports = router;
