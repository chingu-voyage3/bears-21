import React from 'react';
import {connect} from 'react-redux';
import { houseIssuesFetchData} from './actions';

import {HouseList} from '../../components/House';

class Dashboard extends React.Component {
  componentDidMount = () => {
    this.props.fetchData( '/api/v1/houses');
  };
  render = () => {
    const {hasErrored, isLoading, houseIssues} = this.props;
    if( hasErrored) {
      return <p>Sorry data fetch failed</p>;
    }
    if( isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <h1>Dashboard</h1>
        <HouseList data={houseIssues} />
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    houseIssues: state.houseIssues,
    isLoading: state.houseIssuesIsLoading,
    hasErrored: state.houseIssuesHasErrored
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch( houseIssuesFetchData(url))
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(Dashboard);