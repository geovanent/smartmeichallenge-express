const request = require('supertest')
const app = require('../src/app')

const template = { url: "https://www.smartmei.com.br" }
const feature = '/crawler'

describe('Crawler', () => {
  test('retrive data from crawler', async () => {
    const { text, statusCode } = await request(app).post(feature).send(template)
    const responseJSON = JSON.parse(text)

    expect(statusCode).toBe(200)
    expect(responseJSON.plano).toBe('PROFISSIONAL')
  })
})