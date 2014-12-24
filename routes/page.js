var express = require('express');
var router = express.Router();

/* GET home page. */
router
	.post('/',middlewares.createPage,controllers.createPage);

module.exports = router;
