import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

import Overview from './Overview';
import Bar from './Bar';

export default class Rating extends React.Component {
  static propTypes = {
    currentRating: PropTypes.number.isRequired,
    ratingSelected: PropTypes.func
  };
  state = {
    show_rating_bar: false
  };
  showRatingBar = () => {
    this.setState( {show_rating_bar: true});
  };
  hideRatingBar = () => {
    this.setState( {show_rating_bar: false})
  };
  ratingSelected = value => {
    if( this.props.ratingSelected) {
      this.props.ratingSelected(value);
    }
  };
  render = () => {
    const {show_rating_bar} = this.state;
    const {currentRating} = this.props;
    return (
      <div className={css(styles.wrapper)}>
        <Bar visible={show_rating_bar}
          onSelected={this.ratingSelected}
          onEnter={this.showRatingBar}
          onLeave={this.hideRatingBar} />
        <Overview value={currentRating}
          onEnter={this.showRatingBar}
          onLeave={this.hideRatingBar}/>
      </div>
    );
  };
}

const styles = StyleSheet.create({
  wrapper: {
    cursor: "pointer",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1',
    fontSize: '2rem'
  }
});
