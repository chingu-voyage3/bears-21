import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import {StyleSheet, css} from 'aphrodite';

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
  onDeleteHouse = (e) => {
    e.stopPropagation();
    this.props.onDeleteHouse( this.props.house);
  }
  render = () => {
    const {house} = this.props;
    const cross_symbol = String.fromCharCode( 10799);
    return (
      <div className={css(styles.wrapper)} onClick={this.onEditHouse} >
        <Card house={house} />
        <div className={css(styles.add_issue_style)} >
          <button type="button" title="Add Issue"
            className={css(styles.add_button)}
            onClick={this.onNewIssue} >
            +
          </button>
        </div>
        <div className={css(styles.close_button)} >
          <button type="button" title="Delete House"
            className={css(styles.cross_box_colour)}
            onClick={this.onDeleteHouse} >
            {cross_symbol}
          </button>
        </div>
      </div>
    );
  };
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-around"
  },
  cross_box_colour: {
    background: "tomato" // "linear-gradient( to top, #49CF87, #40C080)"
  },
  close_button: {
    position: "absolute",
    top: "0px",
    right: "0px"
  },
  add_issue_style: {
    position: "absolute",
    top: "30px",
    right: 0
  },
  add_button: {
    fontSize: "1.1em",
    lineHeight: "1em"
  },
});
