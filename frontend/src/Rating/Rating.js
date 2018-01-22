import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';
import {postRating} from './actions';

import Overview from './Overview';
import Bar from './Bar';

export default class Rating extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    parent_id: PropTypes.string.isRequired,
    currentRating: PropTypes.number.isRequired,
  };
  state = {
    show_rating_bar: false,
    currentRating: 0
  };
  componentWillMount = () => {
    this.setState( {currentRating: this.props.currentRating});
  };
  showRatingBar = () => {
    this.setState( {show_rating_bar: true});
  };
  hideRatingBar = () => {
    this.setState( {show_rating_bar: false})
  };
  ratingSelected = value => {
    const {type, parent_id} = this.props;
    postRating( type, parent_id, value)
    .then( response => {
      this.setState( {currentRating: response.rating});
    });
  };
  render = () => {
    const {show_rating_bar, currentRating} = this.state;
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: '1',
    fontSize: '2rem'
  }
});
