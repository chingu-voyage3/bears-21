import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';
import 'url-search-params-polyfill';
import HouseList from './HouseList';
import HouseItem from './HouseItem';
import { fetchHouses } from './actions';
import { getHousesByPostCode, getIsFetching } from './reducers';

class SearchResults extends Component {
  componentWillMount() {
    loadData(this.props)
  }

  render() {
    const { houses=[], isFetching=true, postCode } = this.props;
    if (isFetching) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className={css(styles.container)}>
        <h1 className={css(styles.heading)}>Search results for post code {postCode}</h1>
        <HouseList>
          {houses.map((house, i) =>
            <HouseItem key={i} house={house} />)
          }
        </HouseList>
      </div>
    );
  }
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
  console.log('Loading data');
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

export default connect(mapStateToProps, {
  fetchHouses
})(SearchResults);
