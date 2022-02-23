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

test('Get Error page', done => {
  supertest(router)
    .get('/potato')
    .expect(404)
    .end((err, res) => {
      if (err) return done(err);
      expect.assertions(2);
      expect(res.statusCode).toBe(404);
      expect(res.text).toBe('<h1>Server Error, Contact the Administrator</h1>');
      done();
    });
});

test('Get results', done => {
  supertest(router)
    .get('/search?search=php&location=london')
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect.assertions(2);
      expect(res.statusCode).toBe(200);
      expect(res.body.results.length).toBe(20);
      done();
    });
});
