import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite';
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
  componentDidMount = () => {
    this.props.fetchData( '/api/v1/house-issues');
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
      return (
        <div className={css(styles.wrapper)} >
          <p>
            Well this is embarrasing ... sorry but something went wrong.
            Please try logging out and in again.
          </p>
        </div>
      );
    }
    if( isLoading) {
      return (
        <div className={css(styles.wrapper)} >
          <p>Loading ...</p>
        </div>
      );
    }
    return (
      <div className={css(styles.centred)}>
        <h1>Dashboard</h1>
        <button type="button" onClick={this.onNewHouse} >New House</button>
        <HouseList data={houseIssues} onDeleteHouse={this.onDeleteHouse} />
      </div>
    );
  };
}

const styles = StyleSheet.create({
  centred: {
    flex: '1'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1',
    margin: '0 10%'
  }
});

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
