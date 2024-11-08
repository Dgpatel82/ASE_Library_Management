// backend/tests/index.test.js
const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('responds with a message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Hello World');
  });
});
