import React, {Component} from 'react';
import PropTypes from 'prop-types';
import IssueItem from './IssueItem';
import {css} from 'aphrodite';
import styles from './styles';

export default class IssueList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired, // list heading
    items: PropTypes.array.isRequired, // array of issues
    onIssueClick: PropTypes.func.isRequired
  };
  // TODO: should we need this?
  onIssueClick = (issue) => {
    this.props.onIssueClick( issue);
  };
  render = () => {
    const items = this.props.items.map( (item, i) => (
      <IssueItem issue={item} key={i} onIssueClick={this.onIssueClick} />
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
