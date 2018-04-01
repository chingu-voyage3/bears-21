import {expect} from 'chai';
import * as actions from './userActions';
import * as UserTypes from './UserTypes';

describe( "user actions", () => {
  it( "should create an action when working", () => {
    const isWorking = true;
    const expectedAction = {
      type: UserTypes.USER_IS_WORKING,
      isWorking
    };
    expect( actions.isWorking(true)).to.eql( expectedAction);
  });
  it( "should create an action on error", () => {
    const error = "some error";
    const expectedAction = {
      type: UserTypes.USER_ERRORED,
      error
    };
    expect( actions.userErrored("some error")).to.eql(expectedAction);
  });
  it( "should create an action when user details retreived successfully", () => {
    const user = {email:"e@g.com", name:"e"};
    const expectedAction = {
      type: UserTypes.USER_SUCCESS,
      user
    };
    expect(actions.userSuccess(user)).to.eql(expectedAction);
  });
  it( "should create an action when user detail saved", () => {
    const user = {email:"e@g.com", name:"e"};
    const expectedAction = {
      type: UserTypes.USER_SUCCESS, user
    };
    expect(actions.userSuccess(user)).to.eql(expectedAction);
  });
});
