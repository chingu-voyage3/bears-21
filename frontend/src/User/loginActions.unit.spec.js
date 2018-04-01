import {expect} from 'chai';
import * as actions from './userActions';
import * as UserTypes from './UserTypes';

describe( 'login actions', () => {
  const user = {email:"e@g.com", name:"e"};
  it( 'should create an action when login successful', () => {
    const expectedAction = {
      type: UserTypes.REQUEST_LOGIN_SUCCESS,
      user
    };
    expect(actions.requestLoginSuccess(user)).to.eql(expectedAction);
  });
  it( 'should create an action when login fails', () => {
    const error = "some error";
    const expectedAction = {
      type: UserTypes.REQUEST_LOGIN_FAILED,
      error
    };
    expect(actions.requestLoginFailed(error)).to.eql(expectedAction);
  });
  it( 'should create an action when error cleared', () => {
    const expectedAction = {
      type: UserTypes.CLEAR_LOGIN_ERROR
    };
    expect(actions.clearLoginError()).to.eql(expectedAction);
  });
  it( 'should create an action when auto login successful', () => {
    const expectedAction = {
      type: UserTypes.AUTO_LOGIN_SUCCESS,
      user
    };
    expect(actions.autoLoginSuccess(user)).to.eql(expectedAction);
  });
  it( 'should create an action when auto login fails', () => {
    const error = "some error";
    const expectedAction = {
      type: UserTypes.AUTO_LOGIN_FAILED,
      error
    };
    expect(actions.autoLoginFailed(error)).to.eql(expectedAction);
  });
  it( 'should create an action when logout requested', () => {
    const expectedAction = {
      type: UserTypes.LOGOUT
    };
    expect(actions.requestLogout()).to.eql(expectedAction);
  });
});
