import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { houseIssuesFetchData} from './actions';
import {HouseList} from '../../components/House';

class Dashboard extends Component {
  state = {
    redirect_new_house: false
  };
  componentDidMount = () => {
    this.props.fetchData( '/api/v1/house-issues');
  };
  onNewHouse = () => {
    this.setState( {redirect_new_house:true})
  };
  render = () => {
    if( this.state.redirect_new_house) {
      return (
        <Redirect to={{
            pathname: "/house",
            state: {new_house: true}
          }} />
      );
    }
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
        <button type="button" onClick={this.onNewHouse} >New House</button>
        <HouseList data={houseIssues} />
      </div>
    );
  };
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
