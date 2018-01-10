import React, {Component} from 'react';
import {css} from 'aphrodite';
import styles from './styles';

export default class House extends Component {
  onNewIssue = () => {
    this.props.onNewIssue( this.props.data);
  };
  onEditHouse = () => {
    this.props.onEditHouse( this.props.data);
  };
  render = () => {
    // FIXME: this won't work in prod
    const house_image = "http://localhost:3001"+this.props.data.images[0];
    console.log( "house image src:", house_image);
    const style = {
      cursor: "pointer",
      maxWidth:"215px",
      textAlign:"center"
    };
    return (
      <div style={style}>
        <img src={house_image} style={{maxWidth:"200px"}}
          onClick={this.onEditHouse}
          alt="noimg" />
        <div className={css(styles.title)}>
          {this.props.data.title}
          <button type="button" onClick={this.onNewIssue} title="Add Issue" >+</button>
        </div>
      </div>
    );
  };
};
