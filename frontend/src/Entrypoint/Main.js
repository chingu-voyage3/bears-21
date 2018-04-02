import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Routes from '../Routes/Routes';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';

import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { autoLogin } from '../Redux/loginActions';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#52c7b8',
      main: '#009688',
      dark: '#00675b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#80e27e',
      main: '#4caf50',
      dark: '#087f23',
      contrastText: '#000',
    },
  },
});

class app extends Component {
  static propTypes = {
    autoLogin: PropTypes.func.isRequired
  };
  componentWillMount = () => {
    this.props.autoLogin();
  };
  componentWillReceiveProps = newProps => {
    if( newProps.user) {
      localStorage.setItem( 'user', JSON.stringify(newProps.user.user));
    }
  };
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={css(styles.container)}>
          <Navbar />
          <Routes />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    minHeight: '100vh',
    //overflow: 'hidden',
    flexDirection: 'column',
    backgroundColor: '#f0f0f0'
  }
});

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    autoLogin: () => dispatch( autoLogin())
  };
};

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(app));
export default App;
