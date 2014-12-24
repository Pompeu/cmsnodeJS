// file: tests/pages.test.js - created at 2014-12-24, 01:52
var should = require('should');
var superagent = require('superagent');
var ch = require('charlatan');
var url = require('url');
var baseURL = 'http://localhost:3000/api/page';

describe('page', function () {
  var id = null;
  var body = null;
  it('should be create page', function (done) {
  	body = {
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

  

  it('should be list pages',function() {
    function  endHandler(err, res) {
      should.not.exist(err);
      should.not.exist(res.body.err);
      should.body.status.should.be.ok;
      res.body.result.length.should.be.above(0);
      res.body.result[0]._id.should.have.lengthOf(24);
      done();
    }

    superagent
      .get(url.resolve(baseURL,'page'))
      .end(endHandler);
  });

  it('should be edit page',function() {
    
    body = {
      title : ch.Name.title(),
      body: ch.Lorem.text(),
      tag: ch.Lorem.words()
    };


    function endHandler(err,res) {

      should.not.exist(err);
      should.not.exist(res.body.err);
      should.body.status.should.be.ok;
      res.body.result.should.be.ok;
      done();
    }

    superagent
      .put(url.resolve(baseURL,'page/'+id))
      .send(body)
      .end(endHandler);
  });

  it('should be read page',function() {
    function  endHandler(err, res) {
      should.not.exist(err);
      should.not.exist(res.body.err);
      should.body.status.should.be.ok;
      res.body.result._id.should.have.lengthOf(24);
      res.body.result.should.have.property('title',body.title);
      res.body.result.should.have.property('body',body.body);
      res.body.result.should.have.property('tag',body.tag);
      done();
    }

    superagent
      .get(url.resolve(baseURL,'page/'+id))
      .end(endHandler);
  });

  it('should be remove page', function() {
    function  endHandler(err, res) {
      should.not.exist(err);
      should.not.exist(res.body.err);
      should.body.status.should.be.ok;
     
      done();
    }
    superagent
      .del(url.resolve(baseURL,'page/'+id))
      .end(endHandler);
  });
});
