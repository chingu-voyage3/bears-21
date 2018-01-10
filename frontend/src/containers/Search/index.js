import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import SearchPage from './SearchPage';
import SearchResults from './SearchResults';

const styles = StyleSheet.create({
  container: {
    height: '80vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const Search = (props) => (
  <div className={css(styles.container)}>
    <Switch>
      <Route path="/" exact component={SearchPage} />
      <Route path="/search" component={SearchResults} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default Search;
