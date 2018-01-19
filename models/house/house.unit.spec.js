'use strict'

const { expect } = require('chai');
const mongoose = require('mongoose');
const House = require('./house');

describe('House', () => {
  let _id;
  let created;
  let houseToInsert;

  beforeEach(async () => {
    _id = mongoose.Types.ObjectId();
    created = Date.now();

    houseToInsert = {
      _id,
      title: 'Cool House',
      slug: 'Cool-House',
      description: 'This is an awesome house',
      created,
      location: {
        postCode: 'CB21NS',
        street: 'Some street'
      }
    }
  });

  afterEach(async () => {
    await House.remove({ _id });
  });


  describe('.insert', () => {
    it('should insert a new house', async () => {
      const house = new House(houseToInsert);
      await house.save();
      const houseInDB = await House.findById(_id);

      expect(houseInDB._id).to.eql(houseToInsert._id);
      expect(houseInDB.title).to.eql(houseToInsert.title);
      expect(houseInDB.slug).to.eql(houseToInsert.slug);
    })
  });
});
