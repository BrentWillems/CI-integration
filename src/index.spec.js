const supertest = require('supertest')
const app = require('./index.js')
const request = supertest(app);


describe('Server', () => {
  it('should start', async done => {
    const res = await request.get('/');
    expect(res.statusCode).toBe(200);
    done();
  })
})