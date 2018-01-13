import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import {css} from 'aphrodite';
import styles from './styles';

export default class House extends Component {
  static propTypes = {
    house: PropTypes.object.isRequired,
    onNewIssue: PropTypes.func.isRequired,
    onEditHouse: PropTypes.func.isRequired,
    onDeleteHouse: PropTypes.func.isRequired
  };
  onNewIssue = e => {
    console.log( "new issue");
    e.stopPropagation();
    this.props.onNewIssue(this.props.house);
  };
  onEditHouse = e => {
    console.log( "edit house");
    this.props.onEditHouse(this.props.house);
  };
  onDeleteHouse = (e) => {
    e.stopPropagation();
    this.props.onDeleteHouse( this.props.house);
  }
  render = () => {
    const {house} = this.props;
    const relative = { position: "relative"};
    const cross_symbol = String.fromCharCode( 10799);
    return (
      <div className={css(styles.wrapper)} style={relative} onClick={this.onEditHouse} >
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
};
