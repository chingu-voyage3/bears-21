import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IssueItem from './IssueItem';
import { StyleSheet, css } from 'aphrodite';

export default class IssueList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired, // list heading
    items: PropTypes.array.isRequired, // array of issues
    onIssueClick: PropTypes.func.isRequired
  };
  render = () => {
    return (
      <div className={css(styles.column_wrapper)}>
        <div className={css(styles.title)}>{this.props.title}</div>
        <ul className={css(styles.list)}>
          {this.props.items.map((item, i) => (
            <IssueItem
              issue={item}
              key={i}
              onIssueClick={this.props.onIssueClick}
            />
          ))}
        </ul>
      </div>
    );
  };
}

const styles = StyleSheet.create({
  column_wrapper: {
    padding: '1em 0px',
    width: '30%',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    border: '1px solid lightgrey'
  },
  list: {
    margin: '0.5rem',
    padding: 0
  },
  title: {
    textAlign: 'center'
  }
});
