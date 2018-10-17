import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Routes } from '../Routes';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { withRouter } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

class Entrypoint extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <Navbar />
        <Routes />
        <Footer />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    minHeight: '100vh',
    overflow: 'hidden',
    flexDirection: 'column',
    backgroundColor: '#f0f0f0'
  }
});

export default withRouter(Entrypoint);
