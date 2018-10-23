import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './actions';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const expectedHouseIssues = [
  {
    title: 'Title',
    location: {
      street: 'street',
      postCode: 'post code'
    },
    owner: 'user_mongo_id',
    images: [],
    issues: []
  }
];

describe('async Dashboard actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('should create actions when fetching house issues', () => {
    fetchMock.getOnce('/api/v1/house-issues', {
      body: { houseIssues: expectedHouseIssues },
      headers: { 'content-type': 'application/json' }
    });
    const expectedActions = [
      { type: actions.HOUSE_ISSUES_HAS_ERRORED, hasErrored: false },
      { type: actions.HOUSE_ISSUES_IS_LOADING, isLoading: true },
      { type: actions.HOUSE_ISSUES_IS_LOADING, isLoading: false },
      {
        type: actions.HOUSE_ISSUES_FETCH_DATA_SUCCESS,
        houseIssues: { houseIssues: expectedHouseIssues }
      }
    ];
    const store = mockStore({ houseIssues: [] });
    return store
      .dispatch(actions.houseIssuesFetchData('/api/v1/house-issues'))
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });
  it('should create actions when delete a house', () => {
    const house_id = 'some_mongo_id';
    fetchMock.deleteOnce('/api/v1/house', {
      body: { house_id },
      headers: { 'content-type': 'application/json' }
    });
    const expectedActions = [
      { type: actions.HOUSE_ISSUES_HAS_ERRORED, hasErrored: false },
      { type: actions.HOUSE_ISSUES_IS_LOADING, isLoading: true },
      { type: actions.HOUSE_ISSUES_IS_LOADING, isLoading: false },
      { type: actions.HOUSE_DELETE_SUCCESS, house_id }
    ];
    const store = mockStore({});
    return store.dispatch(actions.houseDelete(house_id)).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions);
    });
  });
});
