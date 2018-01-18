import fetch from 'cross-fetch';

const API_ROOT = '/api/v1';

const endPoint = 'https://raw.githubusercontent.com/Gibbs/uk-postcodes/master/data/postcodes.json';

export const SearchMock = {
  getAll: (query) => fetch(endPoint)
    .then(response => response.json())
    .then(data => data.map(d => ({ link: d.postcode, text: d.postcode })))
    .then(data => console.log(data))
};

export const Search = {
  getAll: (query) => fetch(`/search?q=${query}`)
    .then(response => response.json())
};

export default {
  Search,
  SearchMock
}
