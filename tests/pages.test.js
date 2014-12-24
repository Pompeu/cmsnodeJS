// file: tests/pages.test.js - created at 2014-12-24, 01:52
var should = require('should');
var superagent = require('superagent');
var ch = require('charlatan');
var url = require('url');
var baseURL = 'http://localhost:3000/api/page';

describe('page', function () {
  var id = null;

  it('should be create page', function (done) {
  	var body = {
  		title : ch.Name.title(),
  		body: ch.Lorem.text(),
  		tag: ch.Lorem.words()

  	};

  	function endHandler(err, res) {
  		should.not.exist(err);
      should.not.exist(res.body.err);
  		res.body.status.should.be.ok;
  		res.body.result._id.should.have.lengthOf(24);
      id = res.body.result._id;
  		done();
  	};	

  	superagent
  		.post(url.resolve(baseURL,'page'))
  		.send(body)
  		.end(endHandler);
  });

  it('shout be read pages',function() {
    function  endHandler(err, res) {
      shoult.not.exist(err);
      shoult.not.exist(res.body.err);
      shoult.body,status.should.be.ok;
      res.body.result._id.shoult.have.lengthOf(24);
      done();
    }

    superagent
      .get(url.resolve(baseURL,'page/'+id))
      .end(endHandler);
  })
});
