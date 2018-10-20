import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import { Footer } from '../Footer';
import { houseIssuesFetchData, houseDelete } from './actions';
import { HouseList } from '../House';
import DashboardLoader from './Dashboard.Loader';

class Dashboard extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    houseIssues: PropTypes.arrayOf( PropTypes.object),
    isLoading: PropTypes.bool,
    hasErrored: PropTypes.bool,
    fetchData: PropTypes.func.isRequired,
    deleteHouse: PropTypes.func.isRequired
  };

  state = {
    redirect_new_house: false
  }

  componentDidMount = () => {
    this.props.fetchData( '/api/v1/house-issues');
  }

  onNewHouse = () => {
    this.setState( {redirect_new_house:true})
  }

  onDeleteHouse = (house_id) => {
    this.props.deleteHouse( house_id);
  }

  render() {
    const { currentUser } = this.props;
    const isLoggedIn = !isEmpty(currentUser);

    if(!isLoggedIn) {
      console.error('Invalid state, should not be here');
    }

    if(this.state.redirect_new_house) {
      return (
        <Redirect to={{
            pathname: "/house/new",
            state: {new_house: true}
          }} />
      );
    }
    const {hasErrored = false, isLoading = true, houseIssues = []} = this.props;
    if( hasErrored) {
      return <p>Sorry data fetch failed</p>;
    }
    if( isLoading) {
      return <DashboardLoader />;
    }
    return (
      <div style={{flex: '1'}}>
        <h1>Dashboard</h1>
        <button type="button" onClick={this.onNewHouse} >New House</button>
        <HouseList data={houseIssues} onDeleteHouse={this.onDeleteHouse} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.userReducer.user,
  houseIssues: state.houseIssues.houseIssues,
  isLoading: state.houseIssues.houseIssuesIsLoading,
  hasErrored: state.houseIssues.houseIssuesHasErrored
});

const mapDispatchToProps = dispatch => ({
  deleteHouse: (house_id) => dispatch( houseDelete(house_id)),
  fetchData: (url) => dispatch( houseIssuesFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
