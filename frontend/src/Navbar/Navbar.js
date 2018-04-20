import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import { logout } from '../Redux/loginActions';

const navStyles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  links: {
    color: 'white',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
    cursor: 'pointer',
  }
};

class Navbar extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    return this.getBar();
  }

  getBar() {
    const { classes } = this.props;
    const { name } = this.props.user;
    if (name) { // authenticated
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.flex}>
                <Link className={classes.title} to="/">Hissues</Link>
              </Typography>
              <Link to="/dashboard" className={classes.links}>Dashboard</Link>
              <Link to="/profile" className={classes.links}>Profile</Link>
              <Link to='/logout' onClick={() => this.props.logout()} className={classes.links}>Logout</Link>
            </Toolbar>
          </AppBar>
        </div>
      );
    } else { // not authenticated
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.flex}>
                <Link className={classes.title} to='/'>Hissues</Link>
              </Typography>
              <Link to="/register" className={classes.links}>Register</Link>
              <Link to='/login' onClick={() => this.props.logout()} className={classes.links}>Login</Link>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }

}

const styles = StyleSheet.create({
  container: {
    listStyleType: 'none',
    margin: 0,
    fontSize: '1.1rem',
    padding: '0.8rem 1rem',
    overflow: 'hidden',
    backgroundColor: '#333',
    background: 'linear-gradient(to right, rgba(107,183,86,0.95), #008f68)'
  },
  navelement: {
    float: 'right',
  },
  titleelement: {
    float: 'left',
  },
  links: {
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
});


function mapStateToProps(state) {
  return {
    user: state.user.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {dispatch(logout())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(navStyles)(Navbar));
