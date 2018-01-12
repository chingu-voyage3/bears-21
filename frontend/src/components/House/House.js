import React, {Component} from 'react';
import {ImageDefault} from '../Image';
import {css} from 'aphrodite';
import styles from './styles';

export default class House extends Component {
  onNewIssue = (e) => {
    console.log( "new issue");
    e.stopPropagation();
    this.props.onNewIssue( this.props.data);
  };
  onEditHouse = (e) => {
    console.log( "edit house");
    this.props.onEditHouse( this.props.data);
  };
  render = () => {
    const house_image = this.props.data.images[0];
    const style = {
      cursor: "pointer",
      maxWidth:"215px",
      textAlign:"center"
    };
    return (
      <div style={style} onClick={this.onEditHouse} >
        <ImageDefault src={house_image} missing_url="//via.placeholder.com/200x200?No Image"/>
        <div className={css(styles.title)}>
          {this.props.data.title}
          <button type="button" onClick={this.onNewIssue} title="Add Issue" >+</button>
        </div>
      </div>
    );
  };
};
