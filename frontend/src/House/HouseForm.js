import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

export default class HouseForm extends Component {
  static propTypes = {
    house: PropTypes.object.isRequired,
  };

  render = () => {
    const {
      house,
    } = this.props;
    return (
      <form action="" className={css(styles.form)} >
        <label className={css(styles.left_grid)}>Title</label>
        <input name="title" type="text" placeholder="Title"
          disabled="disabled"
          className={css(styles.right_grid)}
          value={house.title}/>

        <label className={css(styles.left_grid)}>Street</label>
        <input name="location.street" type="text" placeholder="Street"
          disabled="disabled"
          className={css(styles.right_grid)}
          value={house.location.street} />

        <label className={css(styles.left_grid)}>Post Code</label>
        <input name="location.postCode" type="text" placeholder="Post Code"
          disabled="disabled"
          className={css(styles.right_grid)}
          value={house.location.postCode} />

        <label className={css(styles.left_grid)}>Description</label>
        <textarea name="description" rows="6" cols="32" placeholder="Description"
          disabled="disabled"
          className={css(styles.right_grid)}
          value={house.description} />
      </form>
    );
  };
}

const styles = StyleSheet.create({
  form: {
    margin: "10px auto",
    maxWidth: "600px",
    display: "grid",
    alignItems: "baseline",
    gridTemplateColumns: "100px 1fr",
    gridGap: "8px"
  },
  left_grid: {
    lineHeight: "1.5em",
    textAlign: "right",
    gridColumn: "1 / 2"
  },
  right_grid: {
    gridColumn: "2/3"
  }
});
