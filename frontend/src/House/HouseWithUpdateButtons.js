import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { StyleSheet, css } from 'aphrodite';
import { CrossButton, PlusButton } from '../Common/Buttons';

export default class House extends Component {
  static propTypes = {
    house: PropTypes.object.isRequired,
    onNewIssue: PropTypes.func.isRequired,
    onEditHouse: PropTypes.func.isRequired,
    onDeleteHouse: PropTypes.func.isRequired
  };
  onNewIssue = e => {
    e.stopPropagation();
    this.props.onNewIssue(this.props.house);
  };
  onEditHouse = () => {
    this.props.onEditHouse(this.props.house);
  };
  onDeleteHouse = e => {
    e.stopPropagation();
    this.props.onDeleteHouse(this.props.house);
  };
  render = () => {
    const { house } = this.props;
    return (
      <div className={css(styles.wrapper)} onClick={this.onEditHouse}>
        <Card house={house} />
        <div className={css(styles.add_issue_style)}>
          <PlusButton title="Add Issue" onClick={this.onNewIssue} />
        </div>
        <div className={css(styles.close_button)}>
          <CrossButton title="Delete House" onClick={this.onDeleteHouse} />
        </div>
      </div>
    );
  };
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-around'
  },
  close_button: {
    position: 'absolute',
    top: '0px',
    right: '0px'
  },
  add_issue_style: {
    position: 'absolute',
    top: '30px',
    right: 0
  }
});
