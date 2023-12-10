import request from 'supertest'
const baseUrl = 'http://localhost:3000/'

describe('Get scenes endpoint', () => {
  it('should return a 200 status code', async () => {
    const response = await request(baseUrl + 'scenes').get(
      'clpsa44zn0000xpgigs2ipm0l'
    )

    expect(response.statusCode).toBe(200)
  })
})
