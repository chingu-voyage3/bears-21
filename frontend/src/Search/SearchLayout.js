import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import styled from 'styled-components';

import SearchPage from './SearchPage';
import SearchResults from './SearchResults';

const Page = styled.main`
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: 'content';
  overflow: auto;
  overflow-x: hidden;
`;

const Search = () => (
  <Page>
    <Switch>
      <Route path="/" exact component={SearchPage} />
      <Route path="/search" component={SearchResults} />
      <Redirect to="/" />
    </Switch>
  </Page>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export default Search;
