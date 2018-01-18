import fetch from 'cross-fetch';

const API_ROOT = '/api/v1';

const Search = {
  getAll: (query) => fetch(`/search?q=${query}`)
    .then(response => response.json())
};

export default {
  Search
}
