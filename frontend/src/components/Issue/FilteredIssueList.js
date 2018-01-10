import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import IssueList from './IssueList';

export default class FilteredIssueList extends Component {
  state = {
    redirect: null
  };
  onIssueClick = (issue) => {
    console.log( "filtered issue list redirect to issue:", issue);
    this.setState( {redirect: issue});
  };
  render = () => {
    const {data, statusFilter, title} = this.props;
    if( this.state.redirect) {
      console.log( "filtered issue list issue:", this.state.redirect);
      return <Redirect to={{
        pathname: "/Issue",
        state: { issue: this.state.redirect }
      }} />;
    }
    const filtered_list = data.filter( item => item.status === statusFilter);
    return (
      <IssueList
        items={filtered_list}
        title={title}
        onIssueClick={this.onIssueClick} />
    );
  };
};
