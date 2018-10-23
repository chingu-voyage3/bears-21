import React from 'react';
import HouseListLoader from '../House/HouseList.Loader';
import { StyleSheet, css } from 'aphrodite';

const DashboardLoader = () => (
  <div style={{ flex: '1' }}>
    <h1>Dashboard</h1>
    <button type="button" disabled={true} className={css(styles.button)} />
    <HouseListLoader />
  </div>
);

const styles = StyleSheet.create({
  button: {
    width: '80px',
    height: '1.5rem',
    background: 'lightgrey',
    borderRadius: '10px',
    ':hover': {
      boxShadow: 'none'
    }
  }
});

export default DashboardLoader;
