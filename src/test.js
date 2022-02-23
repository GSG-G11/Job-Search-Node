const router = require('./router');
const supertest = require('supertest');

test('Get home page', done => {
  supertest(router)
    .get('/')
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      done();
    });
});
