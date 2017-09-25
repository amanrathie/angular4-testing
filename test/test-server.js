var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Games', function() {
  it('should list ALL games on /game GET', function(done) {
    chai.request(server)
      .get('/api/game')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
});
