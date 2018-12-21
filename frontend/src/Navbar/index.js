import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';

class Navbar extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired
  };

  render() {
    const { currentUser } = this.props;
    const loggedIn = !isEmpty(currentUser);

    if (loggedIn) {
      // authenticated
      // const { name } = currentUser;
      return (
        <div>
          <Container>
            <Titleelement>
              <Links to="/">Hissues</Links>
            </Titleelement>
            <Titleelement>
              <Links to="/dashboard">Dashboard</Links>
            </Titleelement>
            <Titleelement>
              <Links to="/profile">Profile</Links>
            </Titleelement>
            <Navelement>
              <Links to="/logout">Logout</Links>
            </Navelement>
          </Container>
        </div>
      );
      // <Navelement> // I don't like this here.....?
      //   <span className={css(styles.links)}>Hi {name}</span>
      // </Navelement>
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
    } else {
      // not authenticated
      return (
        <div>
          <Container>
            <Titleelement>
              <Links to="/">Hissues</Links>
            </Titleelement>
            <Navelement>
              <Links to="/login">Login</Links>
            </Navelement>
            <Navelement>
              <Links to="/register">Register</Links>
            </Navelement>
          </Container>
        </div>
      );
    }
  }
}

const Container = styled.ul`
  list-style-type: none;
  margin: 0;
  font-size: 1.1rem;
  padding: 0.8rem 1rem;
  overflow: hidden;
  background-color: #333;
  background: linear-gradient(to right, rgba(107, 183, 96, 0.95), #008f68);
`;

const Navelement = styled.li`
  float: right;
`;

const Titleelement = styled.li`
  float: left;
`;

const Links = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
`;

const mapStateToProps = state => ({
  currentUser: state.userReducer.user
});

export default connect(mapStateToProps)(Navbar);
