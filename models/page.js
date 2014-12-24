// file: models/page.js - created at 2014-12-24, 02:19
function pageHandler() {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var schema = null;
  var timestemp = require('../plugins/timestemp');
  schema = new Schema({
    title : {type : String, required :true},
    body : 	{type : String},
    tag: 	[{type : String}]
  });

  schema.plugin(timestemp);
  return mongoose.model('Page', schema);
}
module.exports = exports = pageHandler();
