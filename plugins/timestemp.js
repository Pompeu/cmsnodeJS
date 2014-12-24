// file: plugins/timestamp.js - created at 2014-12-24, 02:21
function timestampHandler(schema, options) {
  options = options || {};
  schema.add({ created_at:{ type : Date,  default: Date.now() } });
  schema.add({ updated_at:{ type : Date,  default: Date.now() } });

  function preSaveHandler(next) {
  	this.updated_at = Date.now();
  	next();
  };

  schema.pre('save', preSaveHandler);
}
module.exports = exports = timestampHandler;
