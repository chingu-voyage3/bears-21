import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import { theme } from '../shared/theme';
import AuthViewHandler from '../auth/AuthViewHandler';
import Notfound from '../Errors/Notfound';
import { Dummy } from '../Dummy';
import Dashboard from '../Dashboard';
import SearchLayout from "../Search";
import Issue from '../Issue';
import { HouseDetail, HouseDetailEdit} from '../House';
import Profile from '../Profile';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Login, Logout, Register, Forgot } from '../User';

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const Body = styled(FlexCol)`
  display: flex;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background: ${theme.bg.wash};
`;

const Choose = props => {
  const { Component, FallbackComponent, ...rest } = props;
  return (
    <AuthViewHandler>
      {authed => {
        console.log('Authed', authed);
        if (!authed) {
          return <FallbackComponent {...rest} />;
        } else {
          return <Component {...rest} />;
        }
      }}
    </AuthViewHandler>
  );
};

const signedOutFallback = (
  Component,
  FallbackComponent
) => {
  return (props) => (
    <Choose
      {...props}
      FallbackComponent={FallbackComponent}
      Component={Component}
    />
  );
};

const LoginFallback = signedOutFallback(() => <Redirect to="/" />, Login);
const RegisterFallback = signedOutFallback(() => <Redirect to="/" />, Register);

class Routes extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Body>
          <Route component={Navbar} />
          <Switch>
            <Route path="/login" component={LoginFallback} />
            <Route path="/register" component={RegisterFallback}  />
            <Route path="/forgot" component={Forgot} />
            <Route path='/profile/:id?' component={Profile} pathname={"/login"} />
            <Route path="/dashboard" component={Dashboard} pathname={"/login"} />
            <Route path="/admin" component={Dummy} pathname={"/login"} />
            <Route path="/issue/:id" component={Issue} pathname={"/login"} />
            <Route path="/house/:id" component={HouseDetailEdit} pathname={"/login"} />
            <Route path="/newissue" component={Dummy} />
            <Route path="/houseview/:id" component={HouseDetail} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={SearchLayout} />
            <Route path="*" component={Notfound} />
          </Switch>
          <Route component={Footer} />
        </Body>
      </ThemeProvider>
    );
  }
}


export default Routes;