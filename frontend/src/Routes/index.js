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
import Navbar from '../Navbar';
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
const DashboardFallback = signedOutFallback(Dashboard, SearchLayout);

class Routes extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Body>
          <Route component={Navbar} />
          <Switch>
            <Route exact={true} path="/logout" component={Logout} />
            <Route exact={true} path="/register" component={RegisterFallback}  />
            <Route exact={true} path="/login" component={LoginFallback} />
            <Route exact={true} path="/forgot" component={Forgot} />
            <Route exact={true} path='/profile/:id?' component={Profile} pathname={"/login"} />
            <Route exact={true} path="/dashboard" component={Dashboard} pathname={"/login"} />
            <Route exact={true} path="/admin" component={Dummy} pathname={"/login"} />
            <Route exact={true} path="/issue/:id" component={Issue} pathname={"/login"} />
            <Route exact={true} path="/house/:id" component={HouseDetailEdit} pathname={"/login"} />
            <Route exact={true} path="/newissue" component={Dummy} />
            <Route exact={true} path="/houseview/:id" component={HouseDetail} />
            <Route path="/" component={DashboardFallback} />
            <Route path="*" component={Notfound} />
          </Switch>
        </Body>
      </ThemeProvider>
    );
  }
}


export default Routes;