const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../src/app');

describe('App', () => {
  it('GET / responds with 200 containing Hello World!', () => {
    return supertest(app)
      .get('app')
      .expect(200, 'Hello world!');
  });
});