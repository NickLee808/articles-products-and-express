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

describe('POST /')
