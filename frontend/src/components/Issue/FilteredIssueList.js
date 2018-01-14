import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom';
import IssueList from './IssueList';

export default class FilteredIssueList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired, // array of issues
    statusFilter: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };
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
}
