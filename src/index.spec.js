const request = require('supertest')
const app = require('./index.js')
describe('Post Endpoints', () => {
  it('should start', async () => {
    const res = await request(app).get('/');
     
    expect(res.statusCode).toEqual(200)
  })
})