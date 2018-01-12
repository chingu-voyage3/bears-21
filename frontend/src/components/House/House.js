import React, {Component} from 'react';
import {css} from 'aphrodite';
import styles from './styles';

export default class House extends Component {
  onNewIssue = () => {
    this.props.onNewIssue(this.props.data);
  };

  render = () => {
    const { data = {} } = this.props;
    const { images = [], title, isLoggedIn } = data;
    return (
      <div style={{ width:"215px", textAlign:"center" }}>
        { images.length > 0 ?
          <img src={images[0]} alt="noimg" /> :
          <img src="http://via.placeholder.com/350x150" alt="noimg" />
        }
        <div className={css(styles.title)}>
          <span>{title}</span>
          { isLoggedIn && 
            <button type="button" onClick={this.onNewIssue} >+</button>
          }
        </div>
      </div>
    );
  };
};
