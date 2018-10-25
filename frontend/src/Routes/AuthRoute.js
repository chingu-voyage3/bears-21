import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import * as userApi from '../API/user';

class AuthRoute extends React.PureComponent {
  state = {
    loading: true,
    isLoggedIn: false
  };

  async componentDidMount() {
    this.setState({
      loading: true
    });
    try {
      const { data } = await userApi.getMe();
      this.setState({
        loading: false,
        isLoggedIn: !!data.id
      });
    } catch (error) {
      this.setState({
        isLoggedIn: false
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  renderRoute = routeProps => {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (this.state.isLoggedIn) {
      const { component: Component } = this.props;
      return <Component {...routeProps} />;
    } else {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { next: routeProps.location.pathname }
          }}
        />
      );
    }
  };

  render() {
    const { component: Component, pathname: path, ...rest } = this.props;
    return <Route {...rest} render={this.renderRoute} />;
  }
}

AuthRoute.propTypes = {
  component: PropTypes.func,
  pathname: PropTypes.string
};

export default AuthRoute;
