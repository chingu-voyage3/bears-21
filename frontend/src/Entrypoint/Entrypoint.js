import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Routes } from '../Routes';
import { Navbar } from '../Navbar';
import { connect } from 'react-redux';
import { Footer } from '../Footer';
import { withRouter } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { autoLogin } from '../User/userActions';

class Entrypoint extends Component {
  static propTypes = {
    me: PropTypes.func.isRequired
  };

  constructor(props){
    super(props);
    this.state = {user: null};
  }

  componentWillMount = () => {
    this.props.me();
  };

  componentWillReceiveProps = (newProps) => {
    console.log(newProps);
    if(newProps.user) {
      this.setState({ user: newProps.user });
    }
  };

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

const mapStateToProps = state => {
  return {
    user: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    me: () => dispatch(autoLogin())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Entrypoint));


