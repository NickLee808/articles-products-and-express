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
      .type('form')
      .send({
        name: 'nameTest',
        price: 'priceTest',
        inventory: 'inventoryTest'
      })
      .expect({}, done);
  });
});

/*describe('POST /testRoute', () => {
  it('.post should work with data', (done) => {
    request(app)
    .post('/testRoute')
    .type('form')
    .send({ name: 'testName' })
    .expect('testName', done);
  });
});*/