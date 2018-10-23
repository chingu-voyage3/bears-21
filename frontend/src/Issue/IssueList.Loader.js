import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const IssueListLoader = () => (
  <div className={css(styles.column_wrapper)}>
    <div className={css(styles.title)} />
    <ul className={css(styles.list)}>
      <li className={css(styles.li)} />
      <li className={css(styles.li)} style={{opacity:"0.6"}} />
      <li className={css(styles.li)} style={{opacity:"0.2"}} />
    </ul>
  </div>
);

const styles = StyleSheet.create({
  column_wrapper: {
    margin: '10px',
    padding: "1em 0px",
    width: "30%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.19)',
    background: 'lightgrey'
  },
  list: {
    width: '90%',
    margin: '0.5rem',
    padding: 0
  },
  li: {
    margin: '5px',
    padding: 0,
    listStyle: 'none',
    height: '1.5rem',
    background: 'grey',
    borderRadius: '5px'
  },
  title: {
    width: '40%',
    height: '1.5rem',
    background: 'grey',
    borderRadius: '5px'
  },
});

export default IssueListLoader;
