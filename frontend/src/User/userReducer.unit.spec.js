import { expect } from 'chai';
import userReducer from './reducer';
import * as UserTypes from './UserTypes';

describe('user reducer', () => {
  it('should initialise state', () => {
    const op = userReducer(undefined, {});
    expect(op.user).to.eql({});
    expect(op.isWorking).to.equal(false);
    expect(op.error).to.equal(false);
  });
  it('should flag is working', () => {
    const op = userReducer(undefined, {
      type: UserTypes.USER_IS_WORKING,
      isWorking: true
    });
    expect(op.isWorking).to.equal(true);
  });
  it('should flag errors', () => {
    const op = userReducer(undefined, {
      type: UserTypes.USER_ERRORED,
      error: 'some error'
    });
    expect(op.error).to.equal('some error');
  });
});
