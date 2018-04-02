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
};

class navbar extends Component {
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
              <Typography variant="title" color="inherit">
                <Link className={css(styles.links)} to="/">Hissues</Link>
              </Typography>
              <Typography color="inherit" className={classes.flex}>
                <Link to="/dashboard" className={classes.links}>Dashboard</Link>
                <Link to="/profile" className={classes.links}>Profile</Link>
              </Typography>
              <Button color="inherit">Hi {name}</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
      // can't get these to work with redux. problem is inital state on new page
      // <li className={css(styles.navelement)}><Link className={css(styles.links)} to="/newissue">New Issue</Link></li>
      // <li className={css(styles.navelement)}>
      //  <Link className={css(styles.links)} to={{
      //      pathname: "/house",
      //      state: { new_house: true}
      //    }}>
      //    New House
      //  </Link>
      // </li>
    } else { // not authenticated
      return (
        <div>
          <ul className={css(styles.container)}>
            <li className={css(styles.titleelement)}><Link className={css(styles.links)} to="/">Hissues</Link></li>
            <li className={css(styles.navelement)}><Link className={css(styles.links)} to="/login">Login</Link></li>
            <li className={css(styles.navelement)}><Link className={css(styles.links)} to="/register">Register</Link></li>
          </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(navStyles)(navbar));
