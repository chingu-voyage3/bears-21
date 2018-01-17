import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { houseIssuesFetchData, houseDelete} from './actions';
import {HouseList} from '../House';

class Dashboard extends Component {
  static propTypes = {
    houseIssues: PropTypes.arrayOf( PropTypes.object),
    isLoading: PropTypes.bool,
    hasErrored: PropTypes.bool,
    fetchData: PropTypes.func.isRequired,
    deleteHouse: PropTypes.func.isRequired
  };
  state = {
    redirect_new_house: false
  };
  componentWillMount = () => {
    console.log( "dashboard will mount:", this.props);
  };
  componentDidMount = () => {
    this.props.fetchData( '/api/v1/house-issues');
  };
  componentWillReceiveProps = (newProps) => {
    console.log( "dashboard will receive props:", newProps);
    if( this.props.houseIssues.length && newProps.houseIssues.length) {
      if( newProps.houseIssues[0].images[0] === this.props.houseIssues[0].images[0]) {
        console.log( "image zero is the same");
      } else {
        console.log( "image zero has changed");
      }
    } else {
      console.log( `props houseIssues[${this.props.houseIssues.length}] \
        new props houseIssues[${newProps.houseIssues.length}]`);
    }
  };
  onNewHouse = () => {
    this.setState( {redirect_new_house:true})
  };
  onDeleteHouse = (house_id) => {
    this.props.deleteHouse( house_id);
  };
  render = () => {
    if( this.state.redirect_new_house) {
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
      return <p>Loading ...</p>;
    }
    return (
      <div style={{flex: '1'}}>
        <h1>Dashboard</h1>
        <button type="button" onClick={this.onNewHouse} >New House</button>
        <HouseList data={houseIssues} onDeleteHouse={this.onDeleteHouse} />
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    houseIssues: state.houseIssues.houseIssues,
    isLoading: state.houseIssues.houseIssuesIsLoading,
    hasErrored: state.houseIssues.houseIssuesHasErrored
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteHouse: (house_id) => dispatch( houseDelete(house_id)),
    fetchData: (url) => dispatch( houseIssuesFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
