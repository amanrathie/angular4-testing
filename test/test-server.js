var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Games', function() {
  it('should list ALL games on /games GET', (done) => {
    chai.request(server)
        .get('/api/games')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          done();
        });
  });

  it('should add a SINGLE game on /games POST', function(done) {
    chai.request(server)
        .post('/api/games')
        .send({'location':'Brasilia', 'amountSpended':'1000', 'amountEarned':'2000'})
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.json;
          res.body.should.have.property('_id');
          done();
        })
  });
});
