import React, {Component} from 'react';
import Issue from './Issue';
import {css} from 'aphrodite';
import styles from './styles';

export default class IssueList extends Component {
  // TODO: should we need this?
  onIssueClick = (issue) => {
    this.props.onIssueClick( issue);
  };
  render = () => {
    console.log( "IssueList props:", this.props);
    const items = this.props.items.map( (item, i) => (
      <Issue issue={item} key={i} onIssueClick={this.onIssueClick} />
    ));
    return (
      <div className={css(styles.column_wrapper)}>
        <div className={css(styles.title)}>
          {this.props.title}
        </div>
        <ul>
          {items}
        </ul>
      </div>
    );
  };
}
