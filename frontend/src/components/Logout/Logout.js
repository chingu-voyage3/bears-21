import React, { Component } from 'react';

export default class Logout extends Component {
  
  
  render() {

    localStorage.removeItem("user");



    return <div>Logged you nugget out!</div>;

  }






}

