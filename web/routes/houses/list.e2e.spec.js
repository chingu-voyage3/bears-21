'use strict'

const { expect } = require('chai');
const request = require('super-request');
const app = require('../../app');

describe('GET /api/v1/houses', () => {
  it('should get the houses', async () => {
    const res = await request(app)
      .get('/api/v1/houses')
      .json(true)
      .expect(200)
      .end();

    expect(res.body.houses).to.be.instanceof(Array);
  });
});
