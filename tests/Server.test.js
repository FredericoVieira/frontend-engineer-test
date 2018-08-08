const request = require('supertest')
const app = require('../app')

describe('Test express routes', () => {
  it ('It should response the GET method', () => request(app).get('/').expect(200))
})
