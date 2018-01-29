import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import HouseList from './HouseList';
import CardLoader from '../House/Card.Loader';

const SearchResultsLoader = () => {
  const dummy = [0,0,0,0,0,0];
  const house_list = dummy.map( (d,i) => {
    const style = {opacity: `${1-parseInt(i/2,10)*0.4}`};
    return (
      <div style={style} key={i} >
        <CardLoader />
      </div>
    );
  });

  return (
    <div className={css(styles.container)}>
    <h1 className={css(styles.heading)}>Search results for post code XXX</h1>
    <HouseList>
    {house_list}
    </HouseList>
    </div>
  );
};

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

export default SearchResultsLoader;
