import React, { Component } from 'react';
import 'url-search-params-polyfill';
import HouseList from '../../components/House/HouseList';

export default class SearchResults extends Component {
  componentWillMount() {
    this.fetchHouses(this.props.location.search);
  }

  fetchHouses = (search) => {
    const { postCode = '' } = parse(search);
    /*
    HouseAPI.get(postCode).then(data => {
      console.log(data);
    });*/
    fetch( 'api/v1/houses', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then( response => {
      if( !response.ok) {
        throw Error( response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((err) => console.log(err));
  }

  render() {
    const houses = [{issues: []}, {issues: []}];
    return (
      <div>
        <h1>Search Results</h1>
        <HouseList data={houses}/>
      </div>
    );
  }
}

function parse(queryString) {
  const query = new URLSearchParams(queryString);
  return {
    postCode: query.get('postCode')
  };
}
