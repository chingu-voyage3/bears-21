'use strict';

const { expect } = require('chai');
const mongoose = require('mongoose');
const promisify = require('es6-promisify');
const User = require('./user');

describe('User model', () => {
  let _id;
  let test_user;
  let error;
  const test_password = 'test';

  beforeEach(async () => {
    _id = mongoose.Types.ObjectId();
    error = 'none';
    test_user = {
      _id,
      email: 'test@email.com',
      name: 'test'
    };
  });
  afterEach(async () => {
    await User.remove({ _id });
  });
  describe('insert', () => {
    it('should insert a new user', async () => {
      const user = new User(test_user);
      await user.save();
      const userInDb = await User.findById(_id);
      expect(userInDb._id).to.eql(test_user._id);
      expect(userInDb.email).to.eql(test_user.email);
    });
    it('should register a new user', async () => {
      const user = new User(test_user);
      const register = promisify(User.register, User);
      try {
        await register(user, test_password);
      } catch (e) {
        error = e.name;
      }
      const userInDb = await User.findById(_id);
      expect(userInDb._id).to.eql(test_user._id);
      expect(userInDb.email).to.eql(test_user.email);
      expect(error).to.equal('none');
    });
    it('should reject duplicate email on registration', async () => {
      const user1 = new User(test_user);
      const user2 = new User(test_user);
      const register = promisify(User.register, User);
      try {
        await register(user1, test_password);
        await register(user2, test_password);
      } catch (e) {
        error = e.name;
      }
      const user1InDb = await User.findById(_id);
      expect(user1InDb._id).to.eql(test_user._id);
      expect(error).to.equal('UserExistsError');
    });
  });
});
