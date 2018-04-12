import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './userActions';
import * as UserTypes from './UserTypes';
import fetchMock from 'fetch-mock';
import {expect} from 'chai';

const middleware = [thunk];
const mockStore = configureMockStore( middleware);

const expected_user = {
  email: "e@g.com",
  name: "e"
};
const save_user_response = {
  success: true,
  user: {email: "e@g.com", name: "e"}
}

describe( 'async User actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it( "should create actions when fetching user detail", () => {
    fetchMock.getOnce("/api/v1/user", {
      body: {user: expected_user},
      headers: {"content-type": "application/json"}
    });
    const expectedActions = [
      { type: UserTypes.USER_IS_WORKING, isWorking: true},
      { type: UserTypes.USER_IS_WORKING, isWorking: false},
      { type: UserTypes.USER_SUCCESS, user: {user: expected_user}}
    ];
    const store = mockStore( {user: {}});
    return store.dispatch( actions.getDetail())
    .then( () => {
      expect(store.getActions()).to.eql(expectedActions)
    });
  });
  it( "should create actions when saving user", () => {
    fetchMock.postOnce("/api/v1/user", {
      body: save_user_response,
      headers: {"content-type": "application/json"}
    });
    const expectedActions = [
      { type: UserTypes.USER_IS_WORKING, isWorking: true},
      { type: UserTypes.USER_IS_WORKING, isWorking: false},
      { type: UserTypes.USER_SUCCESS, user: expected_user }
    ];
    const store = mockStore( {});
    return store.dispatch( actions.profileSave( expected_user))
    .then( () => {
      expect(store.getActions()).to.eql(expectedActions);
    });
  });
});
