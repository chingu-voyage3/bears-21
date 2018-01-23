import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';
import Star from './Star';

export default class Bar extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    onSelected: PropTypes.func.isRequired,
    onEnter: PropTypes.func.isRequired,
    onLeave: PropTypes.func.isRequired
  };
  defaultStars = [false, false, false, false, false];
  state = {
    stars: this.defaultStars
  };
  onEnter = (value) => {
    const stars = this.state.stars.map( (star, i) => {
      if( i < value) return true;
      return false;
    });
    this.setState( {stars});
  };
  onLeaveBar = () => {
    this.setState( {stars: this.defaultStars});
    this.props.onLeave();
  };
  render = () => {
    const {stars} = this.state;
    const {visible, onEnter, onSelected} = this.props;
    return (
      <div className={css(styles.wrapper)}
        style={{display: visible?'block':'none'}}
        onMouseEnter={onEnter}
        onMouseLeave={this.onLeaveBar}>
        <Star selected={onSelected} lit={stars[0]} ratingValue={1} onEnter={this.onEnter} />
        <Star selected={onSelected} lit={stars[1]} ratingValue={2} onEnter={this.onEnter} />
        <Star selected={onSelected} lit={stars[2]} ratingValue={3} onEnter={this.onEnter} />
        <Star selected={onSelected} lit={stars[3]} ratingValue={4} onEnter={this.onEnter} />
        <Star selected={onSelected} lit={stars[4]} ratingValue={5} onEnter={this.onEnter} />
      </div>
    );
  };
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    zIndex: '100',
    top: '0.2rem',
    right: '1.8rem',
    backgroundColor: 'rgba( 171, 197, 90, 0.85)',
    borderRadius: '10px 0px 0px 10px',
    fontSize: "1.5rem"
  }
});
