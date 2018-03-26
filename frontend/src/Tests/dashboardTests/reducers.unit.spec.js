import { expect} from 'chai';
import reducer from '../../Dashboard/reducers';
import * as actions from '../../Dashboard/actions';

describe( 'dashbaord reducer', () => {
  it( 'should initialise state', () => {
    const op = reducer( undefined, {});
    expect( op.houseIssues).to.deep.equal([]);
    expect( op.houseIssuesIsLoading).to.equal(true);
    expect( op.houseIssuesHasErrored).to.equal(false);
  });
  it( 'should flag loading', () => {
    const op = reducer( undefined, {
      type: actions.HOUSE_ISSUES_IS_LOADING,
      isLoading: true
    });
    expect( op.houseIssuesIsLoading).to.equal(true);
  });
  it( 'should flag errors', () => {
    const op = reducer( undefined, {
      type: actions.HOUSE_ISSUES_HAS_ERRORED,
      hasErrored: true
    });
    expect( op.houseIssuesHasErrored).to.equal(true);
  });
});
