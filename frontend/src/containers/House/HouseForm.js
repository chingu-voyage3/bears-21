import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css} from 'aphrodite';
import styles from './styles';

export default class HouseForm extends Component {
  static propTypes = {
    house: PropTypes.object.isRequired,
    onFieldChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };
  state = {
    uploader_visible: false
  };
  toggleUploaderViz = () => {
    this.setState( { uploader_visible: !this.state.uploader_visible});
  };

  render = () => {
    const {
      house,
      onFieldChange,
      onSubmit
    } = this.props;
    return (
      <form action="" className={css(styles.form)} >
        <label className={css(styles.left_grid)}>Title</label>
        <input name="title" type="text" placeholder="Title"
          className={css(styles.right_grid)}
          value={house.title} onChange={onFieldChange} />

        <label className={css(styles.left_grid)}>Street</label>
        <input name="location.street" type="text" placeholder="Street"
          className={css(styles.right_gred)}
          value={house.location.street} onChange={onFieldChange} />

        <label className={css(styles.left_gred)}>postcode</label>
        <input name="location.postCode" type="text" placeholder="Post Code"
          className={css(styles.right_gred)}
          value={house.location.postCode} onChange={onFieldChange} />

        <label className={css(styles.left_grid)}>Description</label>
        <textarea name="description" rows="6" cols="32" placeholder="Description"
          className={css(styles.right_grid)}
          value={house.description} onChange={onFieldChange} />

        <button className={css(styles.right_grid)}
          onClick={onSubmit}
          type="button">
          Save
        </button>
      </form>
    );
  };
}
