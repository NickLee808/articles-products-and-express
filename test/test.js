// jshint esversion:6

const app = require('../server');

let assert = require('chai').assert;
let request = require('supertest');

describe('GET /', () => {
  it('should have a response', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('POST /products', () => {
  it('should create new product', (done) => {
    request(app)
      .post('/products')
      .end(function(err, res) {
        if (err) throw err;
      })
      .expect(302, done);
  });
});
