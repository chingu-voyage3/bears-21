import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'url-search-params-polyfill';
import HouseList from './HouseList';
import HouseItem from './HouseItem';
import { fetchHouses } from './actions';
import { getHouses } from './reducers';

class SearchResults extends Component {
  componentWillMount() {
    loadData(this.props)
  }

  render() {
    const { houses, isFetching } = this.props;
    if (isFetching) {
      return <h3>Loading...</h3>
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3>Search Results</h3>
        <HouseList>
          {houses.map(house => <HouseItem key={house.id} house={house} />)}
        </HouseList>
      </div>
    );
  }
}

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
    houses: getHouses(state, postCode)
  };
}

export default connect(mapStateToProps, {
  fetchHouses
})(SearchResults);
