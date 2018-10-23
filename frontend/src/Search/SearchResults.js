import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import 'url-search-params-polyfill';
import HouseList from './HouseList';
import HouseItemSelectable from './HouseItemSelectable';
import { fetchHouses } from './actions';
import { getHousesByPostCode, getIsFetching } from './reducers';
import SearchResultsLoader from './SearchResults.Loader';

class SearchResults extends Component {
  static propTypes = {
    houses: PropTypes.array,
    isFetching: PropTypes.bool,
    postCode: PropTypes.string
  };
  state = {
    houseSelected: false
  };
  componentWillMount() {
    loadData(this.props);
  }
  houseSelected = house => {
    this.setState({ houseSelected: house });
  };
  render = () => {
    const { houseSelected = false } = this.state;
    const { houses = [], isFetching = true, postCode } = this.props;
    if (houseSelected) {
      return (
        <Redirect
          to={{
            pathname: `/houseview/${houseSelected._id}`,
            state: { house: houseSelected }
          }}
        />
      );
    }
    if (isFetching) {
      return <SearchResultsLoader />;
    }
    return (
      <div className={css(styles.container)}>
        <h1 className={css(styles.heading)}>
          Search results for post code {postCode}
        </h1>
        <HouseList>
          {houses.map((house, i) => (
            <HouseItemSelectable
              key={i}
              house={house}
              onClick={this.houseSelected}
            />
          ))}
        </HouseList>
      </div>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    alignItems: 'center'
  },
  heading: {
    fontWeight: '500',
    fontSize: '22px',
    color: '#262637'
  }
});

function loadData(props) {
  props.fetchHouses(parse(getSearchParams(props)).postCode);
}

function parse(queryString) {
  const query = new URLSearchParams(queryString);
  return {
    postCode: query.get('postCode')
  };
}

function getSearchParams({ location }) {
  return location.search;
}

function mapStateToProps(state, ownProps) {
  const { postCode } = parse(getSearchParams(ownProps));
  return {
    houses: getHousesByPostCode(state, postCode),
    isFetching: getIsFetching(state, postCode),
    postCode: postCode.toUpperCase()
  };
}

export default connect(
  mapStateToProps,
  {
    fetchHouses
  }
)(SearchResults);
