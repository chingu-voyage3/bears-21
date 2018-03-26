import { expect} from 'chai';
import * as actions from '../../Dashboard/actions';

describe( 'house actions', () => {
  it( 'should create an action when successfully deleting house', () => {
    const house_id = "some_mongo_id";
    const expectedAction = {
      type: actions.HOUSE_DELETE_SUCCESS,
      house_id
    };
    expect( actions.houseDeleteSuccess(house_id)).to.eql(expectedAction);
  });
  it( 'should create an action if house fetch failes', () => {
    const hasErrored = true;
    const expectedAction = {
      type: actions.HOUSE_ISSUES_HAS_ERRORED,
      hasErrored
    };
    expect( actions.houseIssuesHasErrored(hasErrored)).to.deep.equal(expectedAction);
  });
  it( 'should create an action when is loading', () => {
    const isLoading = true;
    const expectedAction = {
      type: actions.HOUSE_ISSUES_IS_LOADING,
      isLoading
    };
    expect( actions.houseIssuesIsLoading(true)).to.deep.equal(expectedAction);
  });
  it( 'should create an actions when house issues fetched successfully', () => {
    const expectedHouseIssues = [
      {
        title: "Title",
        location: {
          street: "street",
          postCode: "post code"
        },
        owner: "user_mongo_id",
        images: [],
        issues: []
      }
    ];
    const expectedAction = {
      type: actions.HOUSE_ISSUES_FETCH_DATA_SUCCESS,
      houseIssues: expectedHouseIssues
    };
    expect( actions.houseIssuesFetchDataSuccess(expectedHouseIssues))
    .to.deep.equal(expectedAction);
  });
});
