import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Issue from './Issue';
import {StyleSheet, css} from 'aphrodite';

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

const styles = StyleSheet.create({
  column_wrapper: {
    padding: "1em 0px",
    width: "30%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    border: "1px solid lightgrey"
  },
  title: {
    textAlign: "center"
  },
});
