import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import 'url-search-params-polyfill';
import HouseList from './HouseList';
import HouseItemSelectable from './HouseItemSelectable';
import { fetchHouses } from './actions';
import { getHousesByPostCode, getIsFetching } from './reducers';
import SearchResultsLoader from './SearchResults.Loader';
import styled from 'styled-components';

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
      <Container>
        <Heading>Search results for post code {postCode}</Heading>
        <HouseList>
          {houses.map((house, i) => (
            <HouseItemSelectable
              key={i}
              house={house}
              onClick={this.houseSelected}
            />
          ))}
        </HouseList>
      </Container>
    );
  };
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-weight: 500;
  font-size: 22px;
  color: #262637;
`;

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
