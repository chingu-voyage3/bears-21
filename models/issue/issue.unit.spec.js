'use strict';

const { expect } = require('chai');
const mongoose = require('mongoose');
const Issue = require('./issue');

describe('Issue', () => {
  let _id;
  let created;
  let issueToInsert;

  beforeEach(async () => {
    _id = mongoose.Types.ObjectId();
    created = Date.now();

    issueToInsert = {
      _id,
      //             {_id: 1,
      status: 'open',
      type: 'type a',
      title: 'test issue',
      slug: 'test-issue',
      description: 'This is a test issue',
      created,
      house: mongoose.Types.ObjectId()
    };
  });

  afterEach(async () => {
    await Issue.remove({ _id });
  });

  describe('.insert', () => {
    it('should insert a new issue', async () => {
      const issue = new Issue(issueToInsert);
      await issue.save();
      const issueInDB = await Issue.findById(_id);

      expect(issueInDB._id).to.eql(issueToInsert._id);
      expect(issueInDB.title).to.eql(issueToInsert.title);
      expect(issueInDB.slug).to.eql(issueToInsert.slug);
    });
  });
});
