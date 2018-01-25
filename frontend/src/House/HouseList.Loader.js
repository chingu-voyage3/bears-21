import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import CardLoader from './Card.Loader';
import IssueListLoader from '../Issue/IssueList.Loader';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around'
  }
});
const dummy = [0,0,0];
const items = dummy.map( (d, i) => {
  const style = {opacity: `${1-i*0.4}`};
  return (
    <div className={css(styles.container)} style={style} key={i} >
      <CardLoader />
      <IssueListLoader />
      <IssueListLoader />
    </div>
  );
});

const HouseListLoader = () => (
  <div>
    {items}
  </div>
);

export default HouseListLoader;
