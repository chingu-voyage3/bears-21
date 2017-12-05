import React from 'react';
import {House} from '../../components/House'
import {FilteredIssueList} from '../../components/IssueList';
import {getHouseIssues} from './actions';
import './style.css';

export default class Dashboard extends React.Component {
  state = {
    issue_list: []
  };
  componentWillMount = () => {
    // TODO: pass in user id (as house owner)
    getHouseIssues()
    .then( (response) => {
      console.log( "getHouseIssues data:", response);
      this.setState( {issue_list: response});
    })
    .catch( (err) => {
      console.error( "getHouseIssues failed:", err);
    });
  };
  render = () => {
    const {issue_list} = this.state;
    if( issue_list.length === 0) return null;
    const house_image = issue_list[0].house_image;
    const issues = issue_list[0].issues;
    return (
      <div>
        <h1>Dashboard</h1>
        <div className="wrapper">
          <House src={house_image} />
          <FilteredIssueList data={issues} filter="open" title="Open Issues" />
          <FilteredIssueList data={issues} filter="resolved" title="Resolved Issues" />
        </div>
      </div>
    );
    // <HouseList data={this.state.issue_list} />
    // <FilteredIssueList data={issues} filter="resolved" title="Resolved Issues" />
  };
};
