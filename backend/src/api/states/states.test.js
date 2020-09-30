// Super test simulates the app running, the library thats running the app
// Jest is used for scanning directory with files thats have test in it
const supertest = require('supertest');

const app = require('../../app');

// describe and it are globals that come from jest
describe('GET /api/v1/states', () => {
  it('should respond with an array', async () => {
    const response = await supertest(app)
      .get('/api/v1/states')
      .expect('Content-Type', /json/)
      .expect(200);
      // expect and toEqual are also globals from jest
    expect(response.body).toEqual([]);
  });
});
