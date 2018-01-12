import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';

const Search = (props) => (
  <div className={css(styles.container)}>
    <Switch>
      <Route path="/" exact component={SearchPage} />
      <Route path="/search" component={SearchResults} />
      <Redirect to="/" />
    </Switch>
  </div>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export default Search;
