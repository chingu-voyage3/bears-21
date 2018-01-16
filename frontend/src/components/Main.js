import React, { Component } from 'react';
import Routes from '../routes/Routes';
import NavBar from './NavBar';
import Footer from './Footer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

class app extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <NavBar />
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
    //minHeight: '100vh',
    //overflow: 'hidden',
    flexDirection: 'column',
    backgroundColor: '#f0f0f0'
  }
});

const App = withRouter(connect()(app));
export default App;
