import { expect } from 'chai';
import * as actions from './userActions';
import * as UserTypes from './UserTypes';

const USER = { email: 'e@g.com', name: 'e' };

describe('user actions', () => {
  it('should create an action when working', () => {
    const isWorking = true;
    const expectedAction = {
      type: UserTypes.USER_IS_WORKING,
      isWorking
    };
    expect(actions.isWorking(true)).to.eql(expectedAction);
  });
  it('should create an action on error', () => {
    const error = 'some error';
    const expectedAction = {
      type: UserTypes.USER_ERRORED,
      error
    };
    expect(actions.userErrored('some error')).to.eql(expectedAction);
  });
  it('should create an action when user details retreived successfully', () => {
    const user = { email: 'e@g.com', name: 'e' };
    const expectedAction = {
      type: UserTypes.USER_SUCCESS,
      user
    };
    expect(actions.userSuccess(user)).to.eql(expectedAction);
  });
  it('should create an action when user detail saved', () => {
    const user = { email: 'e@g.com', name: 'e' };
    const expectedAction = {
      type: UserTypes.USER_SUCCESS,
      user
    };
    expect(actions.userSuccess(user)).to.eql(expectedAction);
  });
  it('should create an action when login successful', () => {
    const expectedAction = {
      type: UserTypes.REQUEST_LOGIN_SUCCESS,
      user: USER
    };
    expect(actions.requestLoginSuccess(USER)).to.eql(expectedAction);
  });
  it('should create an action when login fails', () => {
    const error = 'some error';
    const expectedAction = {
      type: UserTypes.REQUEST_LOGIN_FAILED,
      error
    };
    expect(actions.requestLoginFailed(error)).to.eql(expectedAction);
  });
  it('should create an action when error cleared', () => {
    const expectedAction = {
      type: UserTypes.CLEAR_LOGIN_ERROR
    };
    expect(actions.clearLoginError()).to.eql(expectedAction);
  });
  it('should create an action when auto login successful', () => {
    const expectedAction = {
      type: UserTypes.AUTO_LOGIN_SUCCESS,
      user: USER
    };
    expect(actions.autoLoginSuccess(USER)).to.eql(expectedAction);
  });
  it('should create an action when auto login fails', () => {
    const error = 'some error';
    const expectedAction = {
      type: UserTypes.AUTO_LOGIN_FAILED,
      error
    };
    expect(actions.autoLoginFailed(error)).to.eql(expectedAction);
  });
  it('should create an action when logout requested', () => {
    const expectedAction = {
      type: UserTypes.LOGOUT
    };
    expect(actions.requestLogout()).to.eql(expectedAction);
  });
});
