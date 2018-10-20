import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../API/user';

class Logout extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    try {
      await logout();
      dispatch({
        type: 'LOGOUT'
      });
      //this.props.history.push('/login');
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return null;
  }
}

export default connect(null, (dispatch) => ({
  dispatch,
}))(Logout);
