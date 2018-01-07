import React from 'react';
import {getHouseIssues} from './actions';
import {HouseList} from '../../components/House';

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      issue_list: []
    };
  }

  componentWillMount() {
    // TODO: pass in user id (as house owner)
    getHouseIssues()
    .then( (response) => {
      console.log( "getHouseIssues data:", response);
      this.setState( {issue_list: response});
    })
    .catch( (err) => {
      console.error( "getHouseIssues failed:", err);
    });
  }

  render() {
    const {issue_list} = this.state;
    return (
      <div>
        <h1>Dashboard</h1>
        <HouseList data={issue_list} />
      </div>
    );
  }
}
